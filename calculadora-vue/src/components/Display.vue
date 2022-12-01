<template>
    <div class="display">{{resultadoAtual}}</div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'displayCalculadora',
    props: {
        resultado:{
            type: Number,
            default: 0
        },
    },
  computed: {
    resultadoAtual(): number{
        return this.resultado;
    }
  },
})
</script>
<style>

    .display { 
        grid-area: 1 / 1 / 1 / span 4;
        height: 70px !important;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
</style>