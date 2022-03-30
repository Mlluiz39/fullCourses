<template>
<p>{{ company }} è uma otima empresa</p>  <!-- aqui aceita devido a ser uma interpolaçao -->
 
 <p v-text="company"></p>  <!-- aqui não aceita devido a ser um diretiva -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
     company: 'mlluizDevTech'
    }
  }
})
</script>

