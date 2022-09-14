<template>

   
    <div class="utilisateur" v-for="item in allusers" v-bind:key="item" >
        <li class="eachuser">
            <ul v-for="(value, key) in item" v-bind:key="value"><b>{{ key }}</b>: {{ value }}</ul>
            
        </li>
        <button class="adminDelete" v-on:click="DeleteUser(item.id, item.email )"> Supprimer</button>
    </div>
       

</template>

<script>

    import axios from 'axios'

    export default {
        el: '#abo',
        name: 'AllUsers',
        data () {
            return {
            allusers: null,
            search:'',
            }
        }
        ,
        methods :{
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
        }
      ,
        mounted () {
            axios
            .get('http://localhost:5001/user/')
            .then(response => (
                this.allusers = response.data)) 
            }//mounted
            
           
        }

</script>
<style scoped>
    .utilisateur{
        background-color: aliceblue;
        margin-bottom: 1em;
        padding: 15px 10px 15px 0;
        border: solid 1px black;
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-end;
    }
    .eachuser{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .adminDelete{
        background-color: #fd2d01;
        font-weight: bold;
        padding: 10px;
        border: solid 1px black;
        border-radius: 25px;
    }

</style>