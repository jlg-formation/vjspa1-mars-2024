<script setup lang="ts">
import { faRotateRight, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir">
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
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">2.56 €</td>
            <td class="qty">123</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">2.56 €</td>
            <td class="qty">123</td>
          </tr>
          <tr>
            <td class="name">Pioche</td>
            <td class="price">2.56 €</td>
            <td class="qty">123</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">2.56 €</td>
            <td class="qty">123</td>
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
