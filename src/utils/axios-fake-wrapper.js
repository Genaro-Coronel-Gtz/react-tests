import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MakeFakeRequest from "./FakeServices";

let mock = new MockAdapter(axios);

function UpAxiosMock({ answerType = 200 }) {
  // Podrian pasarse parametros para ver si fallara o no el test
  // por ejemplo pasarle, fallar y que se llame el resposne con error (status 400)
  // o no autenticado (401)
  mock.onAny().reply((config) => {
    const request = MakeFakeRequest(config.url, config.method, answerType);
    const response = [request.response.status, request.response.data];
    return response;
  });
}

function DownAxiosMock() {
  mock.reset();
}

export { UpAxiosMock, DownAxiosMock };
