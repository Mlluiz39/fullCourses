<template>
  <div>
    <button>Botão estilizado</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
button {
  background: #4369b6;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #2d6cea;
 
}
</style>
