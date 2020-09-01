import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:80'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname:sessionStorage.getItem('nickname'),
    headimg:sessionStorage.getItem('headimg'),
    cookie_id:'',
    username:sessionStorage.getItem('username'),
    password:sessionStorage.getItem('password'),
    birth:sessionStorage.getItem('birth'),
    isLogin:false
  },
getters:{
  
},
  mutations: {
  },
  actions: {
      getToken(){
        axios({
          method:'get',
          url:'/qiniuToken',
          
        }).then(response=>{
          console.log(response)
        })
      }
  },
  modules: {
  }
})
