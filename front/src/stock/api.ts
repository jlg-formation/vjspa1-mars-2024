import type { Article, NewArticle } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async add(newArticle: NewArticle) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    if (response.status >= 400) {
      throw new Error('oups')
    }
  }

  async getArticles(): Promise<Article[]> {
    const response = await fetch(url)
    if (response.status >= 400) {
      throw new Error('oups')
    }
    const articles: Article[] = await response.json()
    return articles
  }

  async remove(ids: string[]) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
    if (response.status >= 400) {
      throw new Error('oups')
    }
  }
}

export const api = new API()
