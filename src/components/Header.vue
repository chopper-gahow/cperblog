<template>
  <div class="site-header">
    <div class="site-header-warp">
      <div class="site-header-inside">
        <div class="site-branding">
          <div v-if="isLogin">
            <p class="profile">
              <router-link to="/index">
                <img :src="headImg" alt />
              </router-link>
            </p>
            <div class="site-identify">
              <h1>{{nickName}}</h1>
              <!-- <div @click="outLogin">退出登陆</div> -->
              <el-button type="warning" @click="outLogin" round id="out">退出登陆</el-button>
              <p>Blog Developer</p>
            </div>
          </div>
          <div v-show="!isLogin">
            <div class="site-identify">
              <h1>
                <el-button type="success" round @click="gotoLogin">登陆</el-button>
                <el-button type="success" round @click="gotoRegister">注册</el-button>
              </h1>
            </div>
          </div>
          <div class="site-nav-inside">
            <ul class="menu">
              <li class="menu-item">
                <a @click="goIndex">主页</a>
              </li>
              <li class="menu-item">
                <a @click="goBlog">博客</a>
              </li>
              <li class="menu-item">
                <a @click="goNote">撰写博客</a>
              </li>
              <li class="menu-item">
                <a @click="goPersonal">个人中心</a>
              </li>
              <li class="menu-item">
                <a @click="goAbout">关于</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Header",
  data(){
    return {
      isLogin:sessionStorage.getItem('isLogin')
    }
  },
  computed:{
    headImg(){
      return sessionStorage.getItem('headimg');
    },
    nickName(){
      return this.$store.state.nickname;
    }
  },
  methods: {
    outLogin(){
      this.$axios({
        method:'get',
        url:'/login/outlogin'
      })
      .then(res=>{
        console.log(res);
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
            });
      })
      sessionStorage.clear()
      this.isLogin=false;
    },
    gotoLogin(){
      this.$router.push({ name: "Login" });
    },
    gotoRegister(){
      this.$router.push({ name: "Register" });
    },
    goIndex(){
      this.$router.push({ name: "Index" });
    },
    goNote(){
      this.$router.push({ name: "Note" });
    },
    goAbout(){
      this.$router.push({ name: "About" });
    },
    goBlog(){
      this.$router.push({ name: "Blog" });
    },
    goPersonal(){
      this.$router.push({ name: "Personal" });
    }
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.site-header {
  background: #1d1d1d;
  color: #fff;
  height: 100%;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
}
.profile img {
  width: 100px;
  height: 100px;
  border: 2px solid #d4a259;
  border-radius: 50%;
}
.site-identify {
  padding-bottom: 1.6em;
}
.site-identify h1 {
  font-size: 12px;
  color: rgb(102, 102, 102);
}
.menu {
  font-size: 1.2rem;
  color: #aaa;
  line-height: 1.5;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-bottom: 1px solid #333;
  list-style: none;
  padding: 0;
}
.menu-item {
  border-top: 1px solid #333;
  padding: 0.5rem 0;
}
.menu-item a {
  color: #aaa;
  cursor: pointer;
}
.menu-item a:hover {
  color: #d4a259;
}
/* .menu-item-select {
  color: #d4a259 !important;
} */
@media only screen {
  .site-header {
    width: 300px;
  }
  .site-header-inside {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 3.33333em;
    padding-top: 3.33333em;
  }
}
#out{
  margin-top: 20px;
}
.site-header-warp {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
.site-identify h1 a{
  font-size: 1.3em;
  color: #aaa;
  font-weight: 300;
}
.site-identify h1{
  font-size: 1.3em;
  color: #aaa;
  font-weight: 300;
}
.site-identify div{
  cursor: pointer;
}
</style>