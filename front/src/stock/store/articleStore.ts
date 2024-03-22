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

  const add = (newArticle: NewArticle) => {
    console.log('adding article')
    if (articles.value === undefined) {
      throw new Error('cannot add articles if not refreshed first')
    }
    articles.value.push({ ...newArticle, id: window.crypto.randomUUID() })
  }

  const remove = (ids: Article['id'][]) => {
    console.log('remove article')
    if (articles.value === undefined) {
      throw new Error('cannot remove  articles if not refreshed first')
    }
    articles.value = articles.value.filter((a) => !ids.includes(a.id))
  }

  return { articles, articleTotal, refresh, remove, add }
})
