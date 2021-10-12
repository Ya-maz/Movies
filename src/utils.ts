import { URL, API_KEY } from "./constant";

const plusInsteadOfSpace = (text: string) => {
  return text.split(" ").join("+");
};
export const createSearchUrl = (text: string) => {
  return `${URL}?s=${plusInsteadOfSpace(text)}${API_KEY}`;
};

export const createTitleUrl = (text: string) => {
  return `${URL}?i=${text}${API_KEY}`;
};

