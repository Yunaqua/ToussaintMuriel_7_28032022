//import Vue from "vue"
import Vuex from "vuex"
//Vue.use(Vuex)

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:5001/auth'
});


export default new Vuex.Store({
  state: {
    status:'',
    user:{
      id:-1,
      token:'',
      email:'',
      nom:'',
      prenom:''
    }
  },
  getters: {
  },
  mutations: {
    setStatus : function(state,status){ //set status 31min
      state.status=status;
    },
    logUser:function(state, user) {
      state.user = user;
    }
  },
  actions: {
    createAccount: ({commit}, userInfos) =>{
        commit;
        console.log(userInfos);
        instance.post('/register', userInfos)
          .then(function (response) {
            commit('setStatus','created');
            console.log(response);
          })
          .catch(function (error) {
            commit('setStatus','error_create');
            console.log(error);
          });
    },//account
    logAccount: ({commit}, userInfos) =>{
      commit('setStatus','loading');
      console.log(userInfos);
      instance.post('/login', userInfos)
        .then(function (response) {
          commit('setStatus','');
          commit('logUser',response.data);
          console.log(response);
          const newuser = response.data.user;
          window.localStorage.setItem('user', JSON.stringify(newuser));
        })
        .catch(function (error) {
          commit('setStatus','');
          console.log(error);
        });
  }//account
  ,logOut: ({commit}, userInfos) => {
    console.log(userInfos);
    commit('setStatus','deconnexion');
    },
  },
  modules: {
  }
})

