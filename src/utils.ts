import { URL, API_KEY } from "./constant"

const plusInsteadOfSpace = (text:string) => {
  return text.split(' ').join('+')
}
export const createRightUrl = (text:string) => {
  return `${URL}?t=${plusInsteadOfSpace(text)}${API_KEY}`
}