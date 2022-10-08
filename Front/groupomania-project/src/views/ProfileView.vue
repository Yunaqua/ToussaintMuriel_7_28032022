<template>
<div class ="container mt-4">
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <div class="row">
      
      <div class="col-3">
          <img class="icon-profil" src="../../../Asset/Logo/icon-profil.png"/>
      </div>

      <table class="table col-9">
        <thead class="thead-light">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{userData.nom}}</td>
            <td>{{userData.prenom}}</td>
            <td>{{userData.email}}</td>
          </tr>
          
          <tr class="thead-light">
            <th scope="col">Age</th>
            <th scope="col">Sexe</th>
            <th scope="col"></th>
          </tr>
          <tr>
            <td>{{userData.age}}</td>
            <td>{{userData.sexe}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <div class="form-row">
          <div class="form-col">
            <div class="title">Date de création du compte</div>
            <div>{{ new Date(userData.createdAt).toLocaleString() }} </div>
          </div>
          <div class="form-col">
            <div class="title">Nombre de messages</div>
            <div>{{userData.createdAt}}</div>
          </div>
          <div class="form-col">
            <div class="title">Admin</div>
            <div v-if="userData.isAdmin == 49">Oui</div>
            <div v-else>Non</div>
          </div>
        </div>
    </div>
    
    <p class="card__subtitle">Voilà mes informations personnelles</p>
    <div><span class="update"><router-link to="/update">Modifier mon profil</router-link></span></div>
    <button v-on:click="DeleteUser(userData.id, userData.email )"><span class="delete">&#x2757; &#9888;&#65039; Supprimer définitivement mon profil &#9888;&#65039; &#x2757;</span></button>
    <img :src="userData.photo"/> 
    <div class="form-row">
      <button @click="logOut()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'
export default {
  
  name :'UserProfile',
  data() {
    return {
      userData:'',

    }
  },
  mounted: function () {
    console.log(this.$store.state.user);
    if(this.$store.state.userId == -1) {  //deconnecté
      this.$router.push('/');
      return ;
    }
    
    if(localStorage.getItem('user') != null) {
          let userData = JSON.parse(localStorage.getItem("user"));
          this.userData= userData;
          //console.log(userData.isAdmin , "valeur admin")
          }
      this.$store.dispatch('getUserInfos');
      //console.log(this.$store.state.user.token , " c'est le token");
    
  }//mounted
  , computed: {
    ...mapState({
      user: 'userInfos',
    })
    } ,
    methods: {
      async logOut (){
        const self=this;
        this.$store.dispatch('logOut', {
          
      }).then( () => {
        this.$emit('name', false)
        self.$router.push('/');
      }, (error) =>{
        console.log(error);
      }
      )
    } //logOut 
    ,
    DeleteUser(id, email) {

                if(confirm("Voulez-vous vraiment supprimer le compte de : "+email+ " ?")){

                                axios.delete('http://localhost:5001/user/'+id)
                                .then( ()=> {
                                    console.log("suppression");
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                }
            }//delete
  }//methode
}
</script>

<style scoped>
  .row {
    text-align: initial;
    justify-content: space-around;
    align-items: center;
  }
  .form-col{
    margin-bottom:20px;
  }

  .table{
    table-layout: fixed;
    border: solid 1px #cdcdcd;
    border-radius: 25px;
    padding: 15px 10px 15px 10px;
  }
  table{
    border-spacing: 1; 
   border-collapse: collapse; 
    border-radius:20px;
  }

  .icon-profil{
    width: 80px;
    height: auto;

  }

  .update{
    color:blue;
    font-weight:bold;
  }
  .delete{
    color:red;
    font-weight:bold;
  }
  .update:hover{
    cursor: pointer;
  }
  .title {
    font-weight:bold;
  }
</style>