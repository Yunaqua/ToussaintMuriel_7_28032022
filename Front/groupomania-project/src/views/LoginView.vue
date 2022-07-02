<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="icon" href="Front/Asset/Logo/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
  </head>
  
  <div class ="container mt-4">
        <div class="card">
            <div class="card-header">
                Login form
            </div>
            <div class="card-body">
                <form > 

                    <div class="form-row">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="email">
                    </div>

                    <div class="form-row">
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password"  v-model="password">
                    </div>
                   
                    <div class="form-row" v-if="status == 'error_login'">
                      Adresse mail et/ou mot de passe invalide
                    </div>
                     <div class="form-row">
                        <button @click="logAccount()" class="button" :class="{'disabled' : isDisabled }" :disabled="isDisabled">
                            <span v-if="status == 'loading'">Connexion en cours...</span>
                            <span v-else>Se connecter à mon compte</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
   
    </div>



</template>

<script>
//import axios from 'axios'
import { mapState } from 'vuex'

//form action="/auth/login" method="POST"
export default {
  name: 'ToLogin',
  data: function () {
    return {
      email: '',
      password: '',

    }
  }, //data
  computed: {
    isDisabled (){
        if (this.email != "" && this.password.length >= 6) {
          return false;
        } else {
          return true;
        }
      
    },
    ...mapState(['status'])

  }, //computed
 methods: {
      async logAccount (){
        const self=this;
        this.$store.dispatch('logAccount', {
        email: this.email,
        password: this.password,
      }).then( () => {
        self.$router.push('homepost');
        console.log(self);
      }, (error) =>{
        console.log(error);
      }
      )
    } //createAccount 
  }//methode
}

</script>

<style>


</style>