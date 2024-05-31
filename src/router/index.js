import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Layout from '../views/Layout.vue';
import Usuarios from '../views/Usuarios.vue';
import ControleUsuarios from '../views/ControleUsuarios.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/user',
        name: 'Usuarios',
        component: Usuarios
      },
      {
        path: '/controle/usuarios',
        name: 'ControleUsuarios',
        component: ControleUsuarios
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router