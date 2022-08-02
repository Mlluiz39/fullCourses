<template>
  <h1 :class="['static', { 'text-danger': hasError }, className]">
    Marcelo Luiz
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: false,
      hasError: true,
      className: 'Marcelo'
    }
  }
})
</script>
