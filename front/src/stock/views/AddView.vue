<script setup lang="ts">
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { NewArticle } from '../interfaces/Article'
import { ref } from 'vue'
import { useArticleStore } from '../store/articleStore'
import { useRouter } from 'vue-router'

const newArticle = ref<NewArticle>({ name: 'xxx', price: 0, qty: 0 })

const articleStore = useArticleStore()

const router = useRouter()

const handleSubmit = () => {
  console.log('submit form')
  articleStore.add(newArticle.value)
  router.push('/stock')
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button class="primary">
        <FontAwesomeIcon :icon="faPlus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #aaa;
      border-radius: 0.3em;
    }

    span.error {
      height: 1em;
    }
  }

  div.error {
    height: 3em;
  }
}
</style>
