<template>
  <Calculadora></Calculadora>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calculadora from './components/Calculadora.vue';

export default defineComponent({
  name: 'App',
  components: {
    Calculadora
  }
});
</script>

<style>
</style>
