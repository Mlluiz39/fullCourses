<template>
  <h1>
    <buttonStyled></buttonStyled>
    <buttonStyled />
    <!-- podemos utilizar assim caso não tenha conteudo entre as tags -->
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled }
})
</script>
