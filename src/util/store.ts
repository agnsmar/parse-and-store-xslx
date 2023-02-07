import { prisma } from '../config/prisma'
import { decodeHTML, extractBase64Image } from './decode'

export const store = async (article: any): Promise<void> => {
  try {
    const stored = await prisma.article.upsert({
      where: {
        // ... check to see if article already exists
        title: article.Rubrik
      },
      create: {
        // ... in case it doesn't already exist, create
        title: article.Rubrik,
        categories: article.Kategori,
        description: article.Beskrivning,
        keywords: article.Nyckelord,
        image: extractBase64Image(article['Lösning för handläggare']),
        solution: decodeHTML(article['Lösning för handläggare'])
      },
      update: {
        // ... in case it already exists, update
        title: article.Rubrik,
        categories: article.categories,
        keywords: article.Beskrivning,
        description: article.Nyckelord,
        image: extractBase64Image(article['Lösning för handläggare']),
        solution: decodeHTML(article['Lösning för handläggare'])
      }
    })
  } catch (error) {
    console.log('whoopsydoodle')
    return
  }
}
