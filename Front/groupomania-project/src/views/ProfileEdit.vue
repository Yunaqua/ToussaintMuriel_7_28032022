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
            <td><input type="text" class="form-control" id="nom" name="nom" :placeholder="[userData.nom]" v-model="nom"></td>
            <td><input type="text" class="form-control" id="prenom" name="prenom" :placeholder="[userData.prenom]" v-model="prenom"></td>
            <td><input type="email" class="form-control" id="email" name="email" :placeholder="[userData.email]" v-model="email"></td>
          </tr>
          
          <tr class="thead-light">
            <th scope="col">Age</th>
            <th scope="col">Sexe</th>
            <th scope="col"></th>
          </tr>
          <tr>
            <td><input type="number" min=0 max=120 class="form-control" id="age" name="age" :placeholder="[userData.age]" v-model="age"></td>
            <td><input type="text" class="form-control" id="sexe" name="sexe" :placeholder="[userData.sexe]" v-model="sexe"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <div class="form-row">
          <div class="form-col">
            <div class="title">Date de création du compte</div>
            <div>{{userData.createdAt}}</div>
          </div>
          <div class="form-col">
            <div class="title">Nombre de messages</div>
            <div>{{userData.createdAt}}</div>
          </div>
          <div class="form-col">
            <div class="title">Admin</div>
            <div v-if="userData.isAdmin==true">Oui</div>
            <div v-else>Non</div>
          </div>
        </div>
    </div>
    
    <p class="card__subtitle">Voilà mes informations personnelles</p>
    <div><span class="update"><router-link to="/profile" @click="updateProfile()">Sauvegarder mon profil</router-link></span></div>
    
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
export default {
  name :'UserProfile',
  data() {
    return {
      userData:'',
      nom: '',
      prenom: '',
      sexe: '',
      age: '',
      email: '',
      password: '',
    }
  },
  mounted: function () {
    console.log(this.$store.state.user);
    if(this.$store.state.userId == -1) {  //deconnecté
      this.$router.push('/');
      return ;
    }else if(localStorage.getItem('user') != null){
          let userData = JSON.parse(localStorage.getItem("user"));
          //console.log(userData.nom, " nom");
          this.userData= userData;

          }
    
  }//mounted
  ,computed: {
        getUserName(){
          return this.$store.state.user.nom
        }
    } ,
    methods: {
      async updateProfile(){
         this.$store.dispatch('updateProfile', {
          email: this.email,
          nom: this.nom,
          prenom: this.prenom,
          age: this.age,
          sexe: this.sexe,
          password: this.password,
        }).then( () => {
          self.$router.push('profile');
        }, (error) =>{
          console.log(error);
        }
        )
      }//update
      , 
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
  .update:hover{
    cursor: pointer;
  }
  .title {
    font-weight:bold;
  }
</style>