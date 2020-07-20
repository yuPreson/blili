import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/user/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/user/userInfo/UserInfo.vue'),
    meta: {
      auth: true
    }
  },
  {path: '*', redirect: '/login'},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=> {
  let id = sessionStorage.getItem('id');
  let token = sessionStorage.getItem('token');
  console.log(id,token,to,from)
  if(id && token){
    if (to.meta.auth && to.path != '/login') {
      next('/login')
    } else {
      next()
    }
  }else {
    next({
      path: '/login',
      query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
})

export default router
