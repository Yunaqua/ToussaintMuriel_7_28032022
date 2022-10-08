<template>

<div class ="container mt-4">
  <div class="card">
    <h1 class="card__title">Page d'accueil</h1>
    <p class="card__subtitle">Voici les nouveaux commentaire</p>

    <div class="message-group">
      <div class ="newpost">
        <label>Poster un nouveau message</label>
        <textarea rows = "1" cols = "40" name = "description" class="newpost-input" v-model="message" placeholder="Ecrivez votre message"></textarea>
        <button @onclick=msgpost() id="poster">Poster le message</button>
      </div>
    </div>

      <div class="message-group">
        <div class="message-group-received">
            <div>
              <div class="user-logo">
                <img src="https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png" width="100" height="100" />
              </div>
              <div class="message-received ">
                <b>Name 1 </b><p> Bonjour.  Ravi de discuter avec vous</p>
              </div>
            </div>
            <div class="message-group-time">
              <p>Date du dernier message : xx/xx/xxxx à xx h xx</p>
          </div>

        </div>
        <div class="message-group-received">
            <div>
              <div class="user-logo">
                <img src="https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png" width="100" height="100" />
              </div>
              <div class="message-received ">
                <b>Name 2 </b><p> N'hesitez pas à posez des questions. Nous ferons en sorte de répondre rapidement à vos questions</p>
              </div>
            </div>
            <div class="message-group-time">
              <p>Date du dernier message : xx/xx/xxxx à xx h xx</p>
          </div>

        </div>                      

        <div class="message-group-sent">
          <div class="user-logo">
            <img src="https://upload.wikimedia.org/wikipedia/fr/archive/a/ad/20190808214526%21Logo-Snapchat.png" width="100" height="100" />
          </div>
          <div>
            <div class="message-sent ">
              <b>Name 3 </b><p> Hé salut. Ok je n'hésiterai pas</p>
            </div>
            <div class="message-group-time">
              <p>Date du dernier message : xx/xx/xxxx à xx h xx</p>
          </div>
          </div>
        </div>

        <div class ="newpost">
          <input id="" class="newpost-input" type ="text" placeholder="Ecrivez un commentaire" />
        </div>
      </div>


       <div class="message-group">
        <div class="message-group-received">
            <div>
              <div class="user-logo">
                <img src="https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png" width="100" height="100" />
              </div>
              <div class="message-received ">
                <b>Name 1 </b><p> Bonjour.  Ravi de discuter avec vous</p>
              </div>
            </div>
            <div class="message-group-time">
              <p>Date du dernier message : xx/xx/xxxx à xx h xx</p>
          </div>

        </div>           
        <div class="message-received ">
               <b>Name 2 </b><p> N'hesitez pas à posez des questions. Nous ferons en sorte de répondre rapidement à vos questions</p>
            </div>

          <div class="message-group-sent">
          <div class="user-logo">
            <img src="https://upload.wikimedia.org/wikipedia/fr/archive/a/ad/20190808214526%21Logo-Snapchat.png" width="100" height="100" />
          </div>
          <div>
            <div class="message-sent ">
              <b>{{userData.nom}}</b><p> Hé salut. Ok je n'hésiterai pas</p>
            </div>
            <div class="message-group-time">
              <p>Date du dernier message : xx/xx/xxxx à xx h xx</p>
          </div>
          </div>
        </div>
    

        <div class ="newpost">
          <input id="" class="newpost-input" type ="text" placeholder="Ecrivez un commentaire" />
        </div>
      </div>
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
  name :'PostProfile',
   data: function () {
     
    return {
      titre:'',
      message:'',
      userData:'',

    }
  }, //data 
  //props :['user'],
  
  mounted: function () {
    //console.log(this.$store.state.user , 'mounted');
    if(this.$store.state.user.userId == -1) {  //deconnecté
      this.$router.push('/');
      return ;
    }
    else if(localStorage.getItem('user') != null){
          let userData = JSON.parse(localStorage.getItem("user"));
          this.userData= userData;

          }

     
    this.$store.dispatch('getUserInfos');
    console.log(this.$store.state.user.token + " c'est le token");
    /*console.log(this.$store.state.user.user.id , " c'est l'id");
    console.log(this.$store.state.user.user  , " c'est l'user");
    console.log(this.$store.state.user.user.prenom , " c'est le prenom"); */
    
  }//mounted
 , 
   methods: {
    
      async logOut (){
        const self=this;
        this.$store.dispatch('logOut', {
          
      }).then( () => {
        //localStorage.clear(),
        self.$router.go('/');
      }, (error) =>{
        console.log(error);
      }
      )
    } //logOut 
  /*  ,
      ShowData(){ 
         if(localStorage.getItem('user') != null){
          let userData = JSON.parse(localStorage.getItem("user"));
          console.log(userData.nom, " nom");
          return userData;

          }

      } */
       
  }//methode
}
</script>
<style scoped>

  .message-group {
      background: white;
      border: black 1px solid;
      margin-bottom: 2em;
      border-radius: 10px;
  }

  .message-sent{
    background-color: rgb(128 228 255 / 18%);
  }

   .message-group-sent > div:first-child {
    margin-top : auto; 
    margin-left : 5px;
  }

    .message-group-received, .message-group-sent  {
     display: flex;
    width: 100%;
    margin-bottom: 20px;
    flex-direction: column;
   }

  .message-group-time{
    display:flex;
    font-size: 12px;
  }

   .message-group-received > div:first-child, .message-group-sent > div:first-child {
    display: flex;
    margin-top: auto;
    margin-right: 10px;
  }

  .message-group-received > div:last-child {
    flex-grow:1; 
  }
  .message-group-received > div:first-child > img , .message-group-sent > div:first-child > img {
    border-radius :50%;
    height : 25px;
    width: 25px;
  }

  .user-logo> img {
    margin-right: 5px;
    border-radius :50%;
    height : 25px;
    width: 25px;
  }
  
  .message-received ,.message-sent {
    max-width: 90%;
    margin: 2px 0;
    display: flex;
    flex-direction: row;
    text-align: left;
    flex-wrap: wrap;
  }

   .message-received:first-child > .message-received-text {
     border-top-left-radius : 20px;
 }

    .message-received:last-child > .message-received-text {
     border-bottom-left-radius : 20px;
 }

   .message-received-text {
    padding : 10px;
    min-height : 2px;
    background : #e7e7e7;
    border-radius : 4px 20px 20px 4px;
  }

  input.newpost-input {
    width: 100%;
    background-color: #cdcdcd6e;
    border-radius: 10px;
    border: solid 1px black;
}
  input.newpost-input:focus {
    outline-color: red;
    border:1px solid #719ECE;
    box-shadow: 0 0 10px red;
  }
  .newpost {
    display: flex;
    flex-direction: column;
}

  .newpost-content{
    display: flex;
    margin-bottom: 1em;
    flex-direction: column;
  }

  button#poster {
    color: #089cf3;
    font-weight: bold;
    border-radius: 0px 0 10px 10px;
}

</style>