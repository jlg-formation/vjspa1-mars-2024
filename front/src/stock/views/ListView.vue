<script setup lang="ts">
import { faPlus, faRotateRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import AsyncBtn from '../../components/AsyncBtn.vue'
import { type Article } from '../interfaces/Article'
import { useArticleStore } from '../store/articleStore'

const errorMsg = ref('')

const articleStore = useArticleStore()

const selectedArticles = ref<Set<Article['id']>>(new Set())

const handleRefresh = async () => {
  console.log('handleRefresh')
  await articleStore.refresh()
  console.log('handleRefresh finished')
}

const handleSelect = (a: Article) => {
  console.log('a: ', a)
  if (selectedArticles.value.has(a.id)) {
    selectedArticles.value.delete(a.id)
    return
  }
  selectedArticles.value.add(a.id)
}

const handleRemove = () => {
  articleStore.remove([...selectedArticles.value])
}

const resetErrorMsg = () => {
  console.log('reset error')
  errorMsg.value = ''
}

const setErrorMsg = (msg: string) => {
  console.log('set error')
  errorMsg.value = msg
}

onMounted(async () => {
  try {
    console.log('onMounted')
    if (articleStore.articles === undefined) {
      await articleStore.refresh()
    }
  } catch (err) {
    errorMsg.value = 'Oups... Erreur technique.'
  }
})
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <AsyncBtn
          label="Rafraîchir"
          :action="handleRefresh"
          :icon="faRotateRight"
          @onstart="resetErrorMsg"
          @onerror="setErrorMsg"
        />
        <RouterLink to="/stock/add" class="button" title="Ajouter">
          <FontAwesomeIcon :icon="faPlus" />
        </RouterLink>
        <button title="Supprimer" :hidden="selectedArticles.size === 0" @click="handleRemove">
          <FontAwesomeIcon :icon="faTrashAlt" />
        </button>
      </nav>
      <div class="error">
        {{ errorMsg }}
      </div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articleStore.articles"
            :key="a.id"
            @click="handleSelect(a)"
            :class="{ selected: selectedArticles.has(a.id) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.25em;
}

div.error {
  height: 2em;
  font-weight: bold;
}

table {
  border: 0.1em solid #aaa;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;
  overflow: hidden;

  thead {
    background: #aaa;
  }

  th,
  td {
    padding: 0.5em 1em;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }
  }
}
</style>
