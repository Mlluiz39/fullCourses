<template>
  <h1>Ola {{ person.name }} sua idade é {{ person.age }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      person: {
        name: 'Marcelo',
        age: 42
      }
    }
  }
})
</script>
