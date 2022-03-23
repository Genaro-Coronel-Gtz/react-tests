import { statusTypes } from "helpers/store";

export const initialState = {
  status: statusTypes.initial,
  movies: [],
  detail: null,
};
