<template>
  <footer>
    <RouterLink to="/legal">Mentions Légales</RouterLink>
  </footer>
</template>

<style scoped>
footer {
  background: #eee;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
