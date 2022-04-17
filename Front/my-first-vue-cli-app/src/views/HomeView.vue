<template>
  <div id="home" class="home">


    <h2>{{ msg }}</h2>
    
    <div class="Evenement">
      <h2>Evenements</h2>
      <button> Envoyer un message</button>
    </div>
  </div>

</template>


<script>

export default {
  //msg=" Hola!"   <h1>Bienvenue chez Groupomania! </h1>
  name: 'HelloWorld',
  props :{
    msg :{
      type: String,
      default:" Bienvenue sur la page d'accueil !",
    },
  },
}

/*
const home = new Vue({
  el: '#home',
  data: {
    entreprise :
      [{name:"Groupomania", img:"../../../Front/Asset/Logo/icon.png"}
      ]
      
  }
})*/


</script>

<style>
h2{
  display: flex;
    align-items: center;
    justify-content: center;
}
</style>