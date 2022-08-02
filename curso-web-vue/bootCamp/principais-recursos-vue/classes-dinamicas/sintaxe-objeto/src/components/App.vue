<template>
  <h1 class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Marcelo Luiz
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: false,
      hasError: true
    }
  }
})
</script>
