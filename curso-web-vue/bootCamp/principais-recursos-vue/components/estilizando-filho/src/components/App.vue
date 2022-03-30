<template>
  <h1>
    <ButtonStyled />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled }
})
</script>

<style scoped>
.button-styled {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

::v-deep.button-styled {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}
</style>
