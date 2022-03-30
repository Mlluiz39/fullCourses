<template>
  <form>
    <input type="text" placeholder="Nome" v-model.lazy="name" />

    <input type="text" placeholder="Idade" v-model.number="age" />

    <textarea
      rows="2"
      placeholder="Descrição"
      v-model.lazy.trim="message"
    ></textarea>
    <br />

    <input type="checkbox" v-model="newsletter" /> Newsletter <br />

    <input type="radio" name="color" value="vermelho" v-model="color" />
    Vermelho
    <input type="radio" name="color" value="verde" v-model="color" /> Verde
    <input type="radio" name="color" value="azul" v-model="color" /> Azul

    <select v-model="fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="maça">Maça</option>
    </select>
  </form>

  <p>Nome: {{ name }}</p>
  <p>Idade: {{ age }}</p>
  <p>Mensagem: {{ message }}</p>
  <p>Newsletter: {{ newsletter }}</p>
  <p>Cor: {{ color }}</p>
  <p>Fruta: {{ fruit }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: '',
      age: 0,
      message: '',
      newsletter: false,
      color: '',
      fruit: ''
    }
  }
})
</script>

<style scoped>
input[type='number'],
input[type='text'],
select,
textarea {
  display: block;
}
form {
  padding-bottom: 1rem;
  border-bottom: 2px solid rgb(54, 54, 54);
}
</style>
