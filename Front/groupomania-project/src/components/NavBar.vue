<template>
  
  <div class="Main-bar">
    <ChildComponent @name="getName"/>
    <div v-show="!mobile">
      <nav v-if="isLogged">
        <router-link to="/homepost">Forum</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/alluser" v-if="userData.isAdmin == 49">Abonné  |</router-link> 
        <router-link to="/" @click="logOut()">Déconnexion</router-link>
        
      </nav>
      
      <nav v-else>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/login">Connexion</router-link> |
        <router-link to="/register">S'inscrire</router-link>

      </nav>
    </div>
    <div class="icon">
      <!--<p>here</p> -->
      <i @click="toggleMobileNav" v-show="mobile"  :class="{'icon-active' : mobileNav}" class='fa fa-bars'></i>
    </div>
    <transition name="mobile-nav">
        <ul v-if="isLogged" v-show="mobileNav" class="dropdown-nav">
          <li><router-link to="/homepost">Forum</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/alluser" v-if="userData.isAdmin == 49">Abonné</router-link> </li>
          <li><router-link to="/" @click="logOut()">Déconnexion</router-link></li>
        </ul>

        <ul v-else v-show="mobileNav" class="dropdown-nav">
          <li><router-link to="/">Accueil</router-link> </li>
          <li><router-link to="/login">Connexion</router-link></li>
          <li><router-link to="/register">S'inscrire</router-link></li>
        </ul>
      
    </transition>
  
  
    <!--<router-view :user="user"/>  {{ $screen.width }}  -->
   </div> 
</template>



<script>

import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      userData:'',
      counter: 0,
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
          this.mobileNav = !this.mobileNav;
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

  .Main-bar{
    background-color: red;
  }
  .icon{
    display: flex;
    align-items: center;
    top: 0;
    height: 100%;
    justify-content: flex-end;
    i{
      font-size: 24px;
      cursor: pointer;
      transition: .8s ease all;
    }
  }
  .icon-active{
    transform: rotate(180deg);
  }
  .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    right: 1em;
    max-height: -webkit-fit-content;
    max-height: -moz-fit-content;
    max-height: fit-content;
    z-index: 1;
    border: 1px solid;
    list-style-type: none;
    padding: 1em;
    margin-right: 1em;
    max-width: 250px;
      li {
      padding: 0.5em 0em;
      font-weight: bold;
      &:hover {
        background-color: #878787;
        a:hover{
          color:white;
        }
      }
      
    }//li

  }
  
</style>