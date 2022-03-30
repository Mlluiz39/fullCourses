<template>
  <a :href="product.url" :class="productClass">
    {{ product.name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true
      }
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'sucess' : 'danger'
    }
  }
})
</script>

<style scoped>
.danger {
  margin: 10px auto;
  padding: 10px;
  background-color: danger;
  color: white;
}

.sucess {
  margin: 10px auto;
  padding: 10px;
  background-color: blue;
  color: white;
}
</style>
