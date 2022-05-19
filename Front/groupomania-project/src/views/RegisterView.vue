<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="css/bootstrap.css">

    <link rel="icon" href="Front/Asset/Logo/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link href="Front/Asset/Css/styles.css" rel="stylesheet" />
  </head>
  <div class ="container mt-4">
        <div class="card">
            <div class="card-header">
                Register form
            </div>
            <div class="card-body">
                <form> 
                    <div class="form-row">
                        <label for="lastname">Nom</label>
                        <input type="text" class="form-control" id="lastname" name="lastname" v-model="nom">
                        <label for="name">Prénom</label>
                        <input type="text" class="form-control" id="name" name="name" v-model="prenom">
                    </div>
                    <div class="form-row">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="email">
                    </div>
                     <div class="form-row">

                        <select class="form-row__input" placeholder="Sexe" v-model="sexe">
                            <option value="" disabled selected>Sexe</option>
                            <option value="Indéfini">Indéfini</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </select>
                    <input class="form-row__input" type="number" min=0 placeholder="Age" v-model="age"/>
                    </div>
                    <div class="form-row">
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password" v-model="password">
                    </div>
                    <div class="form-row">
                        <label for="passwordConfirm">Mot de passe confirmé </label>
                        <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm" v-model="passwordConfirm">
                        <p v-if="password != '' && password != passwordConfirm">{{badpassword}}</p>
                    </div>
                    
                     <div class="form-row">
                        <button @click="createAccount()" class="button" :class="{'disabled' : isDisabled }" :disabled="isDisabled">
                            <span v-if="status == 'loading'">Création en cours...</span>
                            <span>Créer mon compte</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>



</template>

<script>
//import axios from 'axios'

export default {
  name: 'ToLogin',
  data: function () {
    return {  
      nom: '',
      prenom: '',
      sexe: '',
      age: '',
      email: '',
      password: '',
      passwordConfirm: '', 

      badpassword:"Mots de passe différent",

    }
  }, // action="/auth/register" method="POST"
  computed: {
    isDisabled (){
        if (this.nom != "" && this.prenom != "" && this.age != "" && this.sexe != "" && this.email != "" && this.password.length >= 6 && this.password == this.passwordConfirm) {
          return false;
        } else {
          return true;
        }
      
    },

  }, //computed
    methods: {
  
    async createAccount (){

        this.$store.dispatch('createAccount', {
        email: this.email,
        nom: this.nom,
        prenom: this.prenom,
        age: this.age,
        sexe: this.sexe,
        password: this.password,
      }).then( () => {
        self.$router.push('homepost');
      }, (error) =>{
        console.log(error);
      }
      )
    } //createAccount
  }//methode

}

</script>

