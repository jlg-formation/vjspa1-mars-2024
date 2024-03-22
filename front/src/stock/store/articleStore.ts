import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'

export const useArticleStore = defineStore('articleStore', () => {
  const articles = ref<Article[] | undefined>(undefined)

  const articleTotal = computed(() => {
    if (articles.value === undefined) {
      return 0
    }
    return articles.value.length
  })

  const refresh = () => {
    articles.value = [
      { id: 'a1', name: 'Tournevis', price: 2.99, qty: 45 },
      { id: 'a2', name: 'Pelle', price: 12.99, qty: 445 }
    ]
  }

  const add = (newArticle: NewArticle) => {
    console.log('adding article')
    if (articles.value === undefined) {
      throw new Error('cannot add articles if not refreshed first')
    }
    articles.value.push({ ...newArticle, id: 'xxx' })
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
