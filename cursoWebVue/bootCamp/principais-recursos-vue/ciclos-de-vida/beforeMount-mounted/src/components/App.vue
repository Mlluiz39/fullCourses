<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Marcelo Luiz'
    }
  },
  beforeMount() {
    console.log(this.message)
    console.log('Aqui não tem acesso ao elemento h1', this.$el)
  },
  mounted() {
    console.log(this.message)
    console.log('Aqui tem acesso ao elemento h1', this.$el)
    this.$el.style.background = 'blue'
    this.$el.style.color = 'white'
    this.$el.style.padding = '15px'
  }
})
</script>
