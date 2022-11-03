<template>
  
  
  <ChildComponent @name="getName"/>
  <div v-show="!mobile">
    <nav v-if="isLogged">
      <router-link to="/homepost">Forum</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/alluser" v-if="admAc">Abonné  | </router-link> 
      <router-link to="/" @click="logOut()">Déconnexion</router-link>
      
    </nav>
    
    <nav v-else>
      <router-link to="/">Accueil d</router-link> |
      <router-link to="/login">Connexion</router-link> |
      <router-link to="/register">S'inscrire</router-link>

    </nav>
  </div>
   <div class="icon">
    <!--<p>here</p> -->
    <button @:click="toggleMobileNav" v-show="mobile"  :class="{'icon-active' : mobileNav}"><i class='fa fa-bars'></i></button>
  </div>
  <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link to="/">Accueil</router-link> </li>
        <li><router-link to="/login">Connexion</router-link></li>
        <li><router-link to="/register">S'inscrire</router-link></li>
      </ul>
    
  </transition>
 
  <h3 class="title is-3">
            <p>Page width is  {{ window.width }}px {{ window.height }}px</p>
            <p> <button @click="$emit('test-click')">ici</button> </p>
        </h3>
 
  <!--<router-view :user="user"/>  {{ $screen.width }}  -->
  <router-view/>
</template>



<script>

import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      userData:'',
      mobile :null,
      mobileNav: null,
      windowWidth:null,
      window:{
        width :window.innerWidth,
        height : window.innerHeight
      } 
    }
  }, //data

   props :{
        outLog: Boolean,
      },

    mounted : function() {
        if(sessionStorage.getItem('user') != null) {
          let userData = JSON.parse(sessionStorage.getItem("user"));
          this.userData= userData;

          } //if      
  } //mounted
  
  , 
  
   /* ready: function () {
  window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount: function () {
  window.removeEventListener('resize', this.handleResize)
},*/
      
   computed: {
    ...mapState({
      user: 'userInfos',
    }),
    isLogged (){
        if(localStorage.getItem('user') != null) {
          return true;
        } else {
          return false;
        }
    }//islogged


  },//comp

    created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    methods: {
     /* handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
        ,*/
      toggleMobileNav(){
          alert('Hello ');
          //this.mobileNav = !this.mobileNav;
          console.log("changement", this.mobileNav);
          return;
        },
        checkScreen(){
          this.windowWidth = window.innerWidth;
          if(this.windowWidth <= 750){
            this.mobile =true;
            return;
          }
          this.mobile = false;
          this.mobileNav = false;
          return;
        }//check
        ,

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only lang="scss"-->
<!--
  position: absolute;
   right : 24px;
 -->
<style lang="scss" scoped>
  .icon{
    display:flex;
    align-items: center;
    top: 0;
    height :100%;
  }
  .icon-active{
    transform: rotate(180deg);
  }
  .dropdown-nav{
    display : flex;
    flex-direction: column;
    position :fixed;
  }
  
</style>