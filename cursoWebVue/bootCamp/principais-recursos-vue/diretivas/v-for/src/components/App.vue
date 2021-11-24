<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      products: [
        { id: 1, name: 'Camisa', stock: true },
        { id: 2, name: 'Calça', stock: false },
        { id: 3, name: 'Chapeu', stock: false },
        { id: 4, name: 'Cinto', stock: true },
        { id: 5, name: 'Bota', stock: true }
      ]
    }
  }
})
</script>
