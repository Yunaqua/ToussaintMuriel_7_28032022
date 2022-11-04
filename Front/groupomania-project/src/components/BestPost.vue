<template>

   
    <div class="bestpots">
        <h3>Best posts</h3>
        <div class="list-post" v-for="index in 3" :key="index">
            <li class="eachpost" >
                <ul><b>{{ key }} Messages</b>: {{ index }}</ul>
                
            </li>
    </div>
    </div>
       

</template>

<script>

    //import axios from 'axios'

    export default {
        el: '#posts',
        name: 'BestPosts',
        data () {
            return {
            allusers: null,
            search:'',
            }
        }
        ,
        methods :{
             
        }
      ,
        mounted () {
            
            }//mounted
            
           
        }

</script>
<style lang="scss" scoped>

    .bestpots {
        border: 1px solid black;
        border-radius: 25px;
    }
    
    li.eachpost {
        border: #dc3545 1px solid;
        margin: 1em 0.2em;
        border-radius: 25px;
    }

</style>