import { createApp } from 'vue'
//import Vue from 'vue';
import App from './App.vue'
import router from './router';
import store from './store';
import VueScreen from 'vue-screen'



createApp(App).use(router).use(store,VueScreen).mount('#app')

