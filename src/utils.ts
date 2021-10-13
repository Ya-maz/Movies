import { URL, API_KEY } from "./constant";

const plusInsteadOfSpace = (text: string) => text.split(" ").join("+");
export const createSearchUrl = (text: string) => `${URL}?s=${plusInsteadOfSpace(text)}${API_KEY}`;

export const createTitleUrl = (text: string) => `${URL}?i=${text}${API_KEY}`;
