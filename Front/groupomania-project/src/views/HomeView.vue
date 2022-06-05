<template>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="icon" href="Front/Asset/Logo/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
  </head>
  <div id="home" class="home">

    <div class ="container mt-4">
    <div class="card">
      <div class="accueil-home">      
        
        <h1>Bienvenue chez <span><img src="../assets/Logo/icon-above-font.png"/></span></h1>
      </div>

      <h2>{{msg}}</h2>
    </div>
     
    </div>
    

  </div>

</template>


<script>

export default {
  //msg=" Hola!"   <h1>Bienvenue chez Groupomania! </h1>
  name: 'HelloWorld',
  
  props : {
    msg :{
      type: String,
      default:" Vous êtes sur la page d'accueil !",
    },
  },
}

</script>

<style>
h2{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>