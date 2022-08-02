<template>
  <button class="button-styled">
    Botão novo
    <span>Marcelo</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.button-styled {
  background: #4369b6;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
}

.button-styled:hover {
  background: #2d6cea;
}
</style>
