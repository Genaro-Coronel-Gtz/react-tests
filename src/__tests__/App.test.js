/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import ListPokemons from "../pages/PokemonList";
import { UpAxiosMock, DownAxiosMock } from "../utils/axiosFakeWrapper";

// beforeAll(() => {
//   // Este metodo se puede utilizar cuando solo se requiere testear que funcionen
//   // las llamadas a la api correctamente
//   UpAxiosMock({ answerType: 200 });
// });

afterEach(() => {
  DownAxiosMock();
});

test("Verify page and componentes load correctly", async () => {
  UpAxiosMock({ answerType: 200 });

  await act(async () => render(<App />));

  const title = screen.getByText(/React Test App/i);
  let pokemonList = screen.getByTestId("pokemon-list");
  let catFact = screen.getByTestId("cat-fact");

  expect(title).toBeInTheDocument();
  expect(pokemonList).toBeInTheDocument();
  expect(catFact).toBeInTheDocument();
});

test("Fail fetch pokemons", async () => {
  UpAxiosMock({ answerType: 400 });

  await act(async () => render(<ListPokemons />));

  let pokemonList = screen.getByTestId("pokemon-loading");

  expect(pokemonList).toBeInTheDocument();
});
