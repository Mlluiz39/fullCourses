<template>
  <h1>
    <ButtonStyled></ButtonStyled>
    <ButtonStyled />
    <!-- podemos utilizar assim caso não tenha conteudo entre as tags -->
    <button>Login</button>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled }
})
</script>
