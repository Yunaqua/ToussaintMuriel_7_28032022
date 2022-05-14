<template>
<div class ="container mt-4">
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    <!--<p>{{user.prenom}} {{user.nom}} {{user.email}}</p>
    <img :src="user.photo"/> -->
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name :'UserProfile',
  mounted: function () {
    console.log(this.$store.state.user);
    if(this.$store.state.userId == -1) {  //deconnecté
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
    
  }//mounted
  /*,computed: {
        getUserName(){
          return this.$store.state.user.nom
        }
    } */
}
</script>