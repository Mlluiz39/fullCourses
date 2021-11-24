<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Incrementar</button>
  <button @click="destroyComponent">Desmontar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUnmount() {
    console.log('Antes de desmontar Salvar os dados no DB')
  },
  unmounted() {
    alert('Obrigado por utilizar a aplicação!!!')
    console.log('Depois de desmontar destroi o componente')
  },
  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount()
    }
  }
})
</script>
