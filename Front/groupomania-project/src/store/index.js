//import Vue from "vue"
import Vuex from "vuex"

//Vue.use(Vuex)

const axios = require('axios');


const instance = axios.create({
  baseURL: 'http://localhost:5001/'
});
// Alter defaults after instance has been created

let user = sessionStorage.getItem('user');
if (!user) {
 user = {
    
    userId: -1,
    token: '',
  }; 
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    user.token = sessionStorage.getItem('token');
    //instance.defaults.headers.common['Authorization'] = user.token;
    //console.log(user,'not empty');
    //console.log(instance.defaults.headers.common['Authorization'] )

  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
    console.log(ex)
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
      console.log(user.token, "ttoo")
      instance.defaults.headers.common['Authorization'] = user.token;
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', JSON.stringify(user.token));
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
            console.log(response.data.user, " reponse login");

            const newuser = response.data.user;
            window.sessionStorage.setItem('user', JSON.stringify(newuser));
            window.localStorage.setItem('user', JSON.stringify(newuser));
            //localStorage.setItem('token', response.data.token);
            console.log(response.data.token, "token");
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus','error_login');
            reject(error);
            
          });
      })
      
    }//account
    , getUserInfos: ({commit}) => {

      instance.get('/user/')
      .then(function (response) {
        commit('userInfos', response.data.user);
      })
      .catch(function () {
      });
      /*console.log(user, 'get usuer')
      if(user){
        console.log(user , "user");
        console.log(user.id, 'IDDDD');
        instance.get('/user/'+user.id)
        .then(function (response) {
          commit('userInfos', response.data.user);
          console.log(response.data.token, "token toekn");
        })
        .catch(function () {
        });

      }else{
        console.log(user,"user vide")
      } */
      
    }// getuser
    ,logOut: ({commit}, userInfos) => {
      console.log(userInfos);
      localStorage.clear(),
      sessionStorage.clear(),
      commit('setStatus','deconnexion');
    }, //logout

    updateProfile :({commit}, user) =>{
      return new Promise((resolve, reject) => {
        console.log(user.userData.id , "modification userid");

        console.log(user.userData , "modification user");
        console.log(user.token , "tok user");
        //let response = user.userData
        instance.put(('/user/'+user.userData.id),user.userData)
        
          
          .then(function (response) {
            console.log(response, "up res"); //avant ici
            commit('setStatus','');
            commit('userInfos',user.userData);
            console.log(user.userData, "la mise a jour");

            const newuser = response.data.user;
            window.sessionStorage.setItem('user', JSON.stringify(newuser));
            
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

