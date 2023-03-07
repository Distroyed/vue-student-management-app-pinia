import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '@/views/ChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../components/EditComponent.vue')
    },
    {
      path: '/grades/:id',
      name: 'grades',
      component: () => import('../components/GradeComponent.vue')
    },
    {
      path: '/editGrade/:id',
      name: 'editGrade',
      component: () => import('../components/EditGradeComponent.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/cartDemo",
      name: "CartDemo",
      component: () => import('../views/EnrollmentCartDemo.vue')
    }
  ]
})

export default router
