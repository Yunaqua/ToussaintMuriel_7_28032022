<template>
  
  <nav v-if="user">
    <router-link to="/">Forum</router-link> |
    <router-link to="/login">Profile</router-link>

  </nav>
   <nav v-else>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">S'inscrire</router-link>

  </nav>

  <!--<router-view :user="user"/> -->
  <router-view/>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../../Front/Asset/Css/styles.css';
  
</style>