<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Incrementar</button>
  <button @click="count--">Decrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUpdate() {
    //console.log('Antes da atualização')
  },
  updated() {
    // console.log('Depois da atualização')
    if (this.count === -1) this.count = 0
  }
})
</script>
