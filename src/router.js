import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout'
// import Micro from '@/components/micro'

Vue.use(VueRouter)
//
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/pages/home')
        },
        {
          path: 'system',
          name: 'system',
          component: () => import('@/pages/system')
        },
      ]
    },
    {
      path: '/micro/*',
      name: 'micro',
      component: Layout,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(sessionStorage.getItem('token')) {
    if(to.path === '/login') {
      next('/home')
    }
    else {
      next()
    }
  }
  else {
    if(to.path !== '/login') {
      next('/login')
    }
    else {
      next()
    }
  }
})

export default router