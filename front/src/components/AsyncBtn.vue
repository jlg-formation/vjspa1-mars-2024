<script setup lang="ts">
import { type IconDefinition, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { sleep } from '../utils'

import { defineProps, ref } from 'vue'
const props = defineProps<{
  label: string
  icon: IconDefinition
  action: () => Promise<void>
}>()

const emit = defineEmits<{
  (e: 'onstart'): void
  (e: 'onerror', value: string): void
}>()

const isDoing = ref(false)

const handleAction = async () => {
  try {
    isDoing.value = true
    emit('onstart')
    await sleep(300)
    await props.action()
  } catch (err) {
    console.log('err: ', err)
    console.log('about to emit onerror')
    emit('onerror', 'oups... probleme technique')
  } finally {
    isDoing.value = false
  }
}
</script>

<template>
  <button :title="props.label" @click="handleAction" :disabled="isDoing">
    <FontAwesomeIcon :spin="isDoing" :icon="isDoing ? faCircleNotch : props.icon" />
  </button>
</template>

<style scoped></style>
