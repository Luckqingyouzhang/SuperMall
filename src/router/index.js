import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
const category = () => import('@/views/category/category')
const home = () => import('../views/home/home.vue')
const ShopCart = () => import('@/views/ShopCart/ShopCart.vue')
const profile = () => import('@/views/profile/profile')
const detail = () => import('@/views/detail/Detail.vue')
const check = () => import('@/views/Check/CheckIndex.vue')
const Login = () => import('@/views/Login/Login.vue')
const Register = () => import('@/views/Login/Register.vue')
// const Initialize = () => import('../views/index/InitializeIndex.vue')
//安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/login"
  },
  // {
  //   path: '/Initialize',
  //   name: 'Initialize',
  //   component: Initialize
  // },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/home',
    name: 'home',
    meta: { keepAlive: true },
    component: home,
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/ShopCart',
    name: 'shopCart',
    meta: { keepAlive: true },
    component: ShopCart,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },

  {
    path: '/check',
    meta: { keepAlive: true },
    name: 'check',
    component: check

  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
]
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})


// router.beforeEach((to, from, next) => {
//   // if (Object.is(to.name, 'Login') || Object.is(to.name, 'Register')) {
//   //   next();
//   //   return
//   // }
//   // if (store.state.token) {
//   //   next();
//   // } else {
//   //   router.push({ name: 'Login' })
//   // }

// })



// router.beforeEach((to, from, next) => {
//   if (Object.is(to.name, 'Login') || Object.is(to.name, 'Register')) {
//     next();
//     return
//   }

//   let NowUser = JSON.parse(localStorage.getItem('NowUser') || '')
//   console.log(NowUser);

//   store.state.Userlist.filter(item => item.Username === NowUser).forEach(item => {
//     if (item.UserStatus === 1) {
//       next();
//     } else {
//       router.push({ name: 'Login' })
//     }
//   })


// })


export default router
