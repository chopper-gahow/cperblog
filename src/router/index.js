import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Blog from '../components/Blog.vue'
import About from '../components/About.vue'
import Note from '../components/Note.vue'
import Home from '../components/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../components/Personal.vue'
import BlogInfo from '../components/BlogInfo.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

  const routes = [
  {
    path:'/',
    redirect:'/index'

  },
  {
    path:'/index',
    name:'Index',
    components:{
      header:Header,
      main:Home
    }
  },
  {
    path:'/about',
    name:'About',
    components:{
      header:Header,
      main:About
    }
  },
  {
    path:'/note',
    name:'Note',
    components:{
      header:Header,
      main:Note
    }
  },
  {
    path:'/personal',
    name:'Personal',
    components:{
      header:Header,
      main:Personal
    }
  },
  {
    path:'/blog',
    name:'Blog',
    components:{
      header:Header,
      main:Blog
    }
  },
  {
    path:'/bloginfo',
    name:'BlogInfo',
    components:{
      header:Header,
      main:BlogInfo
    }
  },
  {
    path:'/login',
    name:'Login',
    components:{
      main:Login
    }
  },
  {
    path:'/register',
    name:'Register',
    components:{
      main:Register
  }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
