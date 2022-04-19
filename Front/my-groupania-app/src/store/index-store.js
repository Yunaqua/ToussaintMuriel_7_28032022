import { createStore } from 'vuex'

const axios =require('axios');


const instance= axios.create({
    baseURL :"http://localhost:5001/auth/"
});

const store = createStore ({
    state:{

    },
    actions: {
        createAccount :({ commit }, userInfos => {
            commit;
            console.log(userInfos);
            axios
            instance.post('/register', userInfos )
            .then(response => console.log(response))
            .catch(error => console.log(error))
        })
    }
})

export default store;