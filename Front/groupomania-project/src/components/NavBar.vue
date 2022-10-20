<template>
  
  
  <ChildComponent @name="getName"/>
	<nav v-if="isLogged">
    <router-link to="/homepost">Forum</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/alluser" v-if="admAc">Abonné  | </router-link> 
    <router-link to="/" @click="logOut()">Déconnexion</router-link>
    
  </nav>
  
   <nav v-else>
    <i class='fa fa-bars'></i>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">S'inscrire</router-link>

  </nav>
 
  <h3 class="title is-3">
            Width:  px<br/>
            Height:  px
        </h3>

  <!--<router-view :user="user"/> -->
  <router-view/>
</template>



<script>

import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      userData:'',
    }
  },

   props :{
        outLog: Boolean,
      },

    mounted : function() {
        if(localStorage.getItem('user') != null) {
          let userData = JSON.parse(localStorage.getItem("user"));
          this.userData= userData;

          }
    },
      
   computed: {
   admAc (){
        if(localStorage.getItem('user') != null) {
           let userAdd = JSON.parse(localStorage.getItem("user"));
          //console.log(userAdd.nom, " nom");
          if(userAdd.isAdmin == 49) {
            return true;
          }else{
            return false
          }
      
        }  else{
            return false
          }
    }, 
 
    isLogged (){
        if(localStorage.getItem('user') != null) {
          
          return true;
        } else if(localStorage.getItem('user') == 'undefined'){
          localStorage.clear();
          return false;
          
        }
        else {
          return false;
        }  
    }//logged
   ,
   ...mapState({
      user: 'userInfos',
    })
    ,
    methods: {

      async logOut (){
        const self=this;
        this.$store.dispatch('logOut', {
          
      }).then( () => {
        //this.$emit('isConnected', false),
        self.$router.push('/');
      }, (error) =>{
        console.log(error);
      }
      )
    } //logOut 
    ,
    getName(value) {
      console.log(value); // Raja Tamil
   }
    
     /* async logOut (){
        window.localStorage.clear();
        this.$emit('isConnected', false)
        self.$router.go('/');
    } //logOut */
  }//methode

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>