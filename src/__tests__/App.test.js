/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { UpAxiosMock, DownAxiosMock } from "utils/axios-fake-wrapper";
import visit from "utils/test-helper";

// beforeAll(() => {
//   // Este metodo se puede utilizar cuando solo se requiere testear que funcionen
//   // las llamadas a la api correctamente
//   UpAxiosMock({ answerType: 200 });
// });

afterEach(() => {
  DownAxiosMock();
  cleanup();
});

test("Verify main page loads correctly", async () => {
  UpAxiosMock({ answerType: 200 });

  await act(async () => {
    visit("/", {});
  });

  const title = screen.getByText(/Heroes App/i);
  let movieList = screen.getByTestId("movie-list");

  expect(title).toBeInTheDocument();
  expect(movieList).toBeInTheDocument();
});

test("Verify detail page loads correctly", async () => {
  UpAxiosMock({ answerType: 200 });

  await act(async () => {
    visit("/detail/tt2465238", {});
  });

  let movieDetail = screen.getByTestId("movie-detail");

  expect(movieDetail).toBeInTheDocument();
});

test("Transition to detail page", async () => {
  UpAxiosMock({ answerType: 200 });

  await act(async () => {
    visit("/", {});
  });

  let detailButton = screen.getByTestId("navigate-to-detail-btn-tt2465238");

  expect(detailButton).toBeInTheDocument();

  fireEvent.click(detailButton);

  await waitFor(() => {
    const detail = screen.getByTestId("movie-detail");
    expect(detail).toBeInTheDocument();
  });
});

test("Fail fetch detail movie", async () => {
  UpAxiosMock({ answerType: 400 });

  await act(async () => {
    visit("/detail/tt2465238", {});
  });

  let movieDetail = screen.getByTestId("movie-loading");

  expect(movieDetail).toBeInTheDocument();
});
