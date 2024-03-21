<template>
  <main>
    <h1>Ajouter un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" />
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button>Ajouter</button>
    </form>
  </main>
</template>
