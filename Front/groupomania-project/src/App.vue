<template>

  <head>
    <title>Accueil</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   
   
    <link rel="icon" type="image/png" href="../../Asset/Logo/icon-groupomania.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    

</head>

  <div id="app">
    <NavBar />
  </div>


</template>


<script>

  //import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import NavBar from "@/components/NavBar.vue";
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    data() {
    return {user :null}
  },
  async created(){
    const response = await axios.get('user');
    this.user = response.data;
  },
    props :['users'],

    components: {
      NavBar,
  },
    computed: {
    ...mapState(['status'])
    }
  

  }

</script>

<style>
  @import '../../../Front/Asset/Css/styles.css';
  
</style>
