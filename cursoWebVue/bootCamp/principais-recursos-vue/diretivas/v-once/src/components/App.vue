<template>
<p v-once>Estoque inicial: {{ stock }}</p>  <!-- aqui ele vai congelar a reatividade vai ficar sempre no numero do inicial do stock-->
<p>Estoque atualizado: {{ stock }}</p>
  
  <button @clcick="stock++">Aumentar estoque</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 data() {
   return {
     stock: 1
   }
 }
})
</script>
