<template>
  <a href="#link interno" @click.once.prevent="something">Link Interno:</a>
  <br /><br />
  <input type="text" @keyup.ctrl.c="something" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    something() {
      console.log('Hello Marcelo')
    }
  }
})
</script>
