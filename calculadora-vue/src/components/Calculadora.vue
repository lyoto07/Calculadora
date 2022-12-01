<template>
<div class="container-flex">
        <div class="grid-container">
            <display></display>
            <botoes></botoes>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import display from './Display.vue'
import botoes from './Botoes.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    display,
    botoes
  },
  
});
</script>

<style>
  :root{
      --background-botoes: #f8f8f8c7;
      --background-grey:#9EACC6;
      --btn-black:#040404;
      --btn-orange:#FFA500;
      --btn-lite-blue:#2A58ED;
      --btn-dark-blue:#0326F9;
      --btn-lite-red: #FF6961;
      --btn-lite-green: #90EE90;

  }

  body{
      margin: 15px;
  }

  .container-flex{
      display: flex;
      justify-content: center;
  }

  .grid-container {
      display: grid;
      grid-template-columns: 95px 95px 95px 95px;
      background-color: var(--background-grey);
      padding: 20px;
      grid-gap: 10px;
      border-radius: 25px;
      box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.58);
      
  }

  .grid-container>div {
      background-color:  var(--background-botoes);
      text-align: center;
      font-family: 'Nunito', sans-serif;
      padding: 20px 0;
      font-size: 30px;
      height: 35px;
      border-radius: 25px;
      box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.58);
  }

  .display { 
      grid-area: 1 / 1 / 1 / span 4;
      height: 70px !important;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
  }

  #num0 { grid-area: 6 / 1 / 6 / span 2; }

  #num1 { grid-area: 5 / 1 / 5 / 1; }

  #num2 { grid-area: 5 / 2 / 5 / 2; }

  #num3 { grid-area: 5 / 3 / 5 / 3; } 

  #num4 { grid-area: 4 / 1 / 4 / 1; }

  #num5 { grid-area: 4 / 2 / 4 / 2; } 

  #num6 { grid-area: 4 / 3 / 4 / 3; }
  
  #num7 { grid-area: 3 / 1 / 3 / 1; } 

  #num8 { grid-area: 3 / 2 / 3 / 2; } 

  #num9 { grid-area: 3 / 3 / 3 / 3; }     

  #soma { 
      grid-area: 5 / 4 / 5 / 4; 
      background-color: var(--btn-orange) !important;
      color: white;
      font-weight: bold;

  } 

  #subtracao { 
      grid-area: 4 / 4 / 4 / 4; 
      background-color: var(--btn-lite-red) !important;
      color: white;
      font-weight: bold;
  } 

  #multiplicacao { 
      grid-area: 3 / 4 / 3 / 4; 
      background-color: var(--btn-lite-green) !important;
      color: white;
      font-weight: bold;
  } 

  #divisao { 
      grid-area: 2 / 4 / 2 / 4; 
      background-color: var(--btn-dark-blue) !important;
      color: white;
      font-weight: bold;
  } 

  #virgula { 
      grid-area: 6 / 3 / 6 / 3; 
      font-weight: bold;
  } 

  #igual { 
      grid-area: 6 / 4 / 6 / 4 ; 
      background-color: var(--btn-black) !important;
      color: white;
      font-weight: bold;
  }

  #apagar img {
      width: 45px;
  }
</style>
