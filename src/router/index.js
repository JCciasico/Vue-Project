import Vue from 'vue'
import VueRouter from 'vue-router'
import ongoing from '../components/Orders/components/OngoingOrder.vue'
import complete from '../components/Orders/components/CompleteOrders.vue'
import cancel from '../components/Orders/components/CancelledOrders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../components/Profile/HomeProfile.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Help Center/HelpBody.vue')
  },
  {
    name:'signinPage',
    path: '/',
    component: () => import(/* webpackChunkName: "signin" */ '../components/Login/SigninPage.vue')
  },
  {
    name:'signupForm',
    path: '/signup',
    component: () => import(/* webpackChunkName: "signup" */ '../components/Login/signupForm.vue')
  },
  {
    name:'registration',
    path: '/registration',
    component: () => import(/* webpackChunkName: "register" */ '../components/Login/RegistrationSuccess.vue')
  },
  {
    name:'verify',
    path: '/verify',
    component: () => import(/* webpackChunkName: "register" */ '../components/Login/verifyMerchant.vue')
  },
  {
    name:'price',
    path: '/price',
    component: () => import(/* webpackChunkName: "register" */ '../components/New Booking/Price/NewBooking.vue')
  },
  {
    name:'routes',
    path: '/routes',
    component: () => import(/* webpackChunkName: "register" */ '../components/New Booking/Routes/ICARGO-HEADER.vue')
  },
  {
    name:'details',
    path: '/details',
    component: () => import(/* webpackChunkName: "register" */ '../components/New Booking/Other Details/NavBody.vue')
  },
  {
    name:'toship',
    path: '/toship',
    component: () => import(/* webpackChunkName: "register" */ '../components/Orders/components/ToShipOrder.vue')
  },
  {
    name:'ongoing',
    path: '/ongoing',
    component: ongoing
  },
  {
    name:'complete',
    path: '/complete',
    component: complete
  },
  {
    name:'cancel',
    path: '/cancel',
    component: cancel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
