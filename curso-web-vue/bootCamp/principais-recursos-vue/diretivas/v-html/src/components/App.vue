<template>
  <p>Acesse: <span v-html="link" /></p>
  <!-- aqui no v-html ele tem que ficar em uma tag sozinho como no v-text para não dar erro-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      link: '<a href="https://marcelo-luiz.com">Marcelo Luiz</a>'
    }
  }
})
</script>
