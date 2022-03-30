<template>
 <h1 v-show="sex === 'Masculino'">Masculino</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
   return {
     sex: 'Masculin'
   }
  }
})
</script>
