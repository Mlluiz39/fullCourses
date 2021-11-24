<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Marcelo Luiz',
      posts: []
    }
  },
  beforeCreate() {
    console.log('Antes da criação não temos acesso ex =>', this.message)
    this.posts = [] //aqui não vai ter acesso aos posts
  },
  created() {
    console.log('Depois da criação temos acesso ex =>', this.message)
    this.posts = [] //aqui já temos acesso aos posts
  }
})
</script>
