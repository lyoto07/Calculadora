<template>
    <div class="item num" id="num0" @click="numero(0)">0</div> 
    <div class="item num" id="num1" @click="numero(1)">1</div>
    <div class="item num" id="num2" @click="numero(2)">2</div>
    <div class="item num" id="num3" @click="numero(3)">3</div>
    <div class="item num" id="num4" @click="numero(4)">4</div>
    <div class="item num" id="num5" @click="numero(5)">5</div>
    <div class="item num" id="num6" @click="numero(6)">6</div>
    <div class="item num" id="num7" @click="numero(7)">7</div>
    <div class="item num" id="num8" @click="numero(8)">8</div>
    <div class="item num" id="num9" @click="numero(9)">9</div>
    
    <div class="item operacao" id="soma" @click="operador('+')">+</div>
    <div class="item operacao" id="subtracao" @click="operador('-')">-</div>
    <div class="item operacao" id="multiplicacao" @click="operador('*')">x</div>
    <div class="item operacao" id="divisao" @click="operador('/')">/</div>
    <div class="item operacao" id="virgula" @click="operador('.')">,</div>
    <div class="item operacao" id="porcentagem" @click="operador('%')">%</div>
    <div class="item operacao" id="igual" @click="operador('=')">=</div>
    <div class="item operacao" id="resetar" @click="operador('limpar')">C</div>
    <div class="item operacao" id="apagar" @click="operador('delete')"><img src="../assets/img/icon-delete.svg" alt=""></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default  defineComponent({
    name: 'botoesCalculadora',
    methods: {
        numero(numero: number) :void{
            console.log(numero);
        },
        operador(operador: string) :void{
            console.log(operador);
        }
    }
})
</script>

<style>

</style>