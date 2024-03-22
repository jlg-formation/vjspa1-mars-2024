<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="/logo.svg" alt="Logo" />
      <span>{{ props.label }}</span>
    </RouterLink>
  </header>
</template>

<style scoped>
header {
  background: #eee;
  height: 3em;
  padding: 0 0.5em;

  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-weight: bold;
      font-size: 1.3em;
    }
  }
}

img {
  height: 2.5em;
}
</style>
