<template>
    <div id="register">
        <div id="registercom">
            <div>
                <h1>CperBlog</h1>
                <p>博客查看撰写评论</p>
            </div>
            <div id="zcinput">
                <h2>注册账号</h2>
                <el-input v-model="username" placeholder="请输入账号"></el-input>
                <el-input v-model="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
            <el-button type="primary" @click="clkRegister" round id="btnzc" >注册账号</el-button>
            <el-button type="primary" @click="gogoLogin" round id="btngodl">已有账号？去登陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        clkRegister(){
            var that= this
            this.$axios({
                url:'/register/userRegister?username='+that.username+'&password='+that.password,
                method:'get'
            })
            .then(res=>{
                this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success'
                    });
                this.$router.push({ name: "Login" });
                
            })
            .catch(error=>{
                console.log(error);
                console.log('请求失败')})   
        },
        gogoLogin(){
            this.$router.push({ name: "Login" });
        }
    }
}
</script>
<style>
    #register{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background: skyblue;
        display: flex;
        align-items: center;
    }
    #registercom{
        margin: auto;
        width: 300px;
        height: 600px;
        background: white;
        padding: 0 40px;
        border-radius: 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        opacity: 0.7;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    #registercom p{
        font-size: .8em;
        color: #757C80;
    }
    #btnzc{
        width: 100%;
        margin-bottom: 20px;
    }
    #btngodl{
        width: 100%;
        margin: 0;
    }
</style>