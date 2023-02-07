import striptags from 'striptags'
import { decode } from 'html-entities'

export const decodeHTML = (solution: string): string => {
  return decode(striptags(solution))
}

export const extractBase64Image = (solution: string): string[] => {
  if (solution === undefined) return []

  const regex = /src\s*=\s*"(.+?)"/g
  const images = solution.match(regex) || []

  return images.map((image) => {
    const startIndex = image.indexOf(',') + 1
    const endIndex = image.length - 1
    return image.substring(startIndex, endIndex)
  })
}
