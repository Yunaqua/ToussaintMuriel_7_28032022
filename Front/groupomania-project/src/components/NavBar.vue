<template>
  
  <nav v-if="isLogged">
    <router-link to="/homepost">Forum</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/"><span @click="logOut()">Déconnexion</span></router-link>

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
  },
   computed: {
    isLogged (){
        if(localStorage.getItem('user') != null) {
          return true;
        } else {
          return false;
        }
      
    },
    methods: {
      async logOut (){
        const self=this;
        this.$store.dispatch('logOut', {
          
      }).then( () => {
        localStorage.clear(),
        self.$router.push('/');
      }, (error) =>{
        console.log(error);
      }
      )
    } //logOut 
  }//methode

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../../Front/Asset/Css/styles.css';
  
</style>