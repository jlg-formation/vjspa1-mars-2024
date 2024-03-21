<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <RouterLink to="/stock/add" class="button">Ajouter</RouterLink>
        <button>Supprimer</button>
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
