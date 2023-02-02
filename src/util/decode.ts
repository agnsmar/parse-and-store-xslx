import striptags from 'striptags'
import { decode } from 'html-entities'

export const decodeHTML = (solution: any): string => {
  return decode(striptags(solution, '<img>'))
}
