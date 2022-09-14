//import Vue from "vue"
import Vuex from "vuex"

//Vue.use(Vuex)

const axios = require('axios');


const instance = axios.create({
  baseURL: 'http://localhost:5001/'
});
// Alter defaults after instance has been created

let user = localStorage.getItem('user');
if (!user) {
 user = {
    userId: -1,
    token: '',
  }; 
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

export default new Vuex.Store({
  state: {
    status: '',
    user: user,
    userInfos: {
      nom:'',
      prenom: '',
      password: '',
      email: '',
      isAdmin: '',
    },
  },
  getters: {

  },
  mutations: {
    setStatus : function(state,status){ //set status 31min
      state.status=status;
    },
    logUser:function(state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      state.user = user;
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
  },
  actions: {
    createAccount: ({commit}, userInfos) =>{
        commit;
        console.log(userInfos);
        instance.post('/auth/register', userInfos)
          .then(function (response) {
            commit('setStatus','created');
            console.log(response);

            return new Promise((resolve, reject) => {

              instance.post('/auth/login', userInfos)
                .then(function (response) {
                  commit('setStatus','');
                  commit('logUser',response.data);
                  console.log(response.data.user, "la reponse");
      
                  const newuser = response.data.user;
                  window.localStorage.setItem('user', JSON.stringify(newuser));
                  //localStorage.setItem('token', response.data.token);
                  resolve(response);
                })
                .catch(function (error) {
                  commit('setStatus','error_login');
                  reject(error);
                  
                });
            
            }) //promise
          }) //then
          .catch(function (error) {
            commit('setStatus','error_create');
            console.log(error);
          });
      },//account

    logAccount: ({commit}, userInfos) =>{
      return new Promise((resolve, reject) => {
        commit('setStatus','loading');
        instance.post('/auth/login', userInfos)
          .then(function (response) {
            commit('setStatus','');
            commit('logUser',response.data);
           // console.log(response.data.user, " reponse login");

            const newuser = response.data.user;
            window.localStorage.setItem('user', JSON.stringify(newuser));
            localStorage.setItem('token', response.data.token);
            //console.log(response.data.token, "token");
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus','error_login');
            reject(error);
            
          });
      })
      
    }//account
    , getUserInfos: ({commit}, user) => {
      //console.log(user.id, 'IDDDD');
      instance.get('/user/'+user.id)
      .then(function (response) {
        commit('userInfos', response.data.user);
      })
      .catch(function () {
      });
    }
    ,logOut: ({commit}, userInfos) => {
      console.log(userInfos);
      localStorage.clear(),
      commit('setStatus','deconnexion');
    }, //logout

    updateProfile :({commit}, userInfos) =>{
      return new Promise((resolve, reject) => {
        console.log(userInfos , "modification");
        instance.put(('/user/'+user.id), userInfos)
          .then(function (response) {
            console.log(response, "up res"); //avant ici
            commit('setStatus','');
            commit('userInfos',response.data);
            console.log(response.data, "la mise a jour");

            const newuser = response.data.user;
            window.localStorage.setItem('user', JSON.stringify(newuser));
            
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus','error_update');
            reject(error);
            
          });
      })

    }//update 
  },
  modules: {
  }
})

