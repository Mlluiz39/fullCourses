<template>
  <h1>{{ fullName }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Marcelo',
      lastName: 'Luiz'
    }
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastName}`
    }
  }
})
</script>
