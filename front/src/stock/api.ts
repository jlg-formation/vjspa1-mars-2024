import type { Article } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async getArticles(): Promise<Article[]> {
    const response = await fetch(url)
    if (response.status >= 400) {
      throw new Error('oups')
    }
    const articles: Article[] = await response.json()
    return articles
  }
}

export const api = new API()
