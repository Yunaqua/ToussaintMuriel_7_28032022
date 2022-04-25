import { createApp } from 'vue'
import { createStore } from 'vuex'

const axios = require('axios');

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:5001/auth'
  });

const store = createStore ({
    state: {
    },
    actions: {
        createAccount: ({commit}, userInfos) =>{
            commit;
            console.log(userInfos);
            instance.post('/register', userInfos)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
})

export default store;