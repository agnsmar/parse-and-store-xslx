import { parseXLSX } from "./util/parse"
import { store } from "./util/store"

const main = async ()  => {
  const articles = parseXLSX('artiklar') as any[]

  for (const article of articles) {
    store(article)
  }
}

main()
