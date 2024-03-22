import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'
import { api } from '../api'

export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref<Article[] | undefined>(undefined)

  const articleTotal = computed(() => {
    if (articles.value === undefined) {
      return 0
    }
    return articles.value.length
  })

  const refresh = async () => {
    articles.value = await api.getArticles()
  }

  const add = async (newArticle: NewArticle) => {
    await api.add(newArticle)
    articles.value = await api.getArticles()
  }

  const remove = async (ids: Article['id'][]) => {
    await api.remove(ids)
    articles.value = await api.getArticles()
  }

  return { articles, articleTotal, refresh, remove, add }
})
