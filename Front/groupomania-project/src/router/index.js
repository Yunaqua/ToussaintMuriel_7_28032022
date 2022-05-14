import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Profile from '../views/ProfileView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title: "Acceuil",
      description:" Pade d'acceuil de Groupomania"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title: "Acceuil",
      description:" Page qui permet de se connecter à un compte existant"
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      title: "Register",
      description:" Page pour créer un nouveau compte sur notre site"
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta:{
      title: "Profile",
      description:" Page de profile de l'utilisateur"
    }
  },
  {
    path:'/:pathMatch(.*)',
    name: 'NotFound',
    component : NotFound,
    meta:{
      title: "404 NotFound",
      description:" Cette page n'existe pas"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
