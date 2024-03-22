<script setup lang="ts">
import { faRotateRight, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { type Article } from '../interfaces/Article'
import { ref, type Ref } from 'vue'
import { useArticleStore } from '../store/articleStore'

const articleStore = useArticleStore()

const selectedArticles = ref<Set<Article['id']>>(new Set())

const handleSelect = (a: Article) => {
  console.log('a: ', a)
  if (selectedArticles.value.has(a.id)) {
    selectedArticles.value.delete(a.id)
    return
  }
  selectedArticles.value.add(a.id)
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir" @click="articleStore.refresh">
          <FontAwesomeIcon :icon="faRotateRight" />
        </button>
        <RouterLink to="/stock/add" class="button" title="Ajouter">
          <FontAwesomeIcon :icon="faPlus" />
        </RouterLink>
        <button title="Supprimer">
          <FontAwesomeIcon :icon="faTrashAlt" />
        </button>
      </nav>
      <div class="error"></div>
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
