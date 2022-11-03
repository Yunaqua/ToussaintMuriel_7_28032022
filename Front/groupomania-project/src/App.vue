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
  
  <div id="app"  :class="{'theme-dark': nightMode}" > <!-- :class="{'theme-dark': nightMode}" -->
    <div id="nightmode">
      <i class="fas fa-sun icon-sun" v-if="nightMode" @click="nightMode = !nightMode"></i>
      <i class="fas fa-moon icon-moon" v-else @click="nightMode = !nightMode"></i>
    </div>
    <NavBar />
  </div>
 

</template>


<script>

  import NavBar from "@/components/NavBar.vue";
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
      NavBar
  },
    computed: {
      
    ...mapState(['status']),
    
    },
    methods: {
      
      getName(value) {
      console.log(value); // Raja Tamil
      }
    }//methods
  

  }
  //@import '../../../Front/Asset/Css/styles.css';

</script>

<style>

  @import './assets/Css/styles.css';
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
