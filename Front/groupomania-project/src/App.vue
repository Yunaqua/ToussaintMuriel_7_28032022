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

  <div id="app">
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
  
</style>
