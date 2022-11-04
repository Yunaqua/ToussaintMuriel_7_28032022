<template>

  <head>
    <title>Accueil</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="icon" type="image/png" href="../../Asset/Logo/icon-groupomania.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    

  </head>
 <div id='new'> <NavBar /> </div>

  <div id="Groupomania-App"  :class="{'theme-dark': nightMode}" > <!-- :class="{'theme-dark': nightMode}" -->
    <div id="nightmode">
      <i class="fas fa-sun icon-sun" v-if="nightMode" @click="nightMode = !nightMode"></i>
      <i class="fas fa-moon icon-moon" v-else @click="nightMode = !nightMode"></i>
    </div>
    
    
    <div class ="main-container">
      <router-view/><!-- les pages views-->

      <div class="info">
        <div v-if="isLogged" ><BestPosts /></div>
        <h3>Groupomania</h3>

        <ul class="list-footer">
          <li>À propos</li>
          <li>Aide</li>
          <li>Confidentialité</li>
          <li>Mentions légales</li>
          <li><a href="mailto:contact@example.com">Contact</a></li>
        </ul>
      </div>
    </div>
     

  </div>
 
 

</template>


<script>

  import NavBar from "@/components/NavBar.vue";
  import BestPosts from "@/components/BestPost.vue";
  import { mapState } from 'vuex'
 // import axios from 'axios'

  export default {
    data() {
    return {
      user :null,
      isConnected: false,
      nightMode:false,
      }
   /* function nightMode() {
        localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
        this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
          document.body.style.backgroundColor = "red";
        }*/

  }, 

 
  watch : {
  
      nightMode: function() {
        localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
          /*if(this.nightMode==true){
          document.body.style.backgroundColor = "green";
          document.body.style.backgroundImage = "red";
          console.log(this.nightMode, "night")
        }*/
      }
    ,
    created() {
      this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
      
    }
  }, 
  /*async created(){
    const response = await axios.get('user', {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    });
    //this.user = response.data;
  },  */
   /* props :['users'], */
   
    components: {
      NavBar,
      BestPosts
  },
    computed: {
      
    ...mapState(['status']),
      isLogged (){
        if(localStorage.getItem('user') != null) {
          return true;
        } else {
          return false;
        }
    }//islogged
    },
    methods: {
      
      getName(value) {
      console.log(value); // Raja Tamil
      }
    }//methods
  

  }
  //@import '../../../Front/Asset/Css/styles.css';

</script>

<style lang="scss">

  @import './assets/Css/styles.css';

  #Groupomania-App {
    display: flex;
    justify-content: center;
  }

  body{
    background-image :none;
    background-color:#f5f5f5!important;
    padding: 0;
  }

  .main-container {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
  }



  //////        Info     /////////
   
    .info {
        margin-top: 2em;
        max-width: 250px;
          ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding-left: 10px;
            list-style: none;
            li {
              padding-right: 3px;
            }
          }
    }
  

  /////////            Night mode             ///////////
  #nightmode i{
      
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 1.6rem;
          cursor: pointer;

  }
  #nightmode .icon-moon {
      color: #041B37;
    }
  #nightmode .icon-sun {
    color: #FCDA5F;
    }

    .theme-dark{
  
      color: #efefef;
      background-image: linear-gradient(8deg, #232324 0%, #ffffff 100%);
 
    }

    
</style>
