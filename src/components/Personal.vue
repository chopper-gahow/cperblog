<template>
    <div id="personalPage">
        <div id="editbox">
            <h1>个人信息</h1>
            <el-tabs v-model="activeName" @tab-click="handleClick" id="edit">
                <el-tab-pane label="个人资料" name="first">
                    <div>
                        <div id="nickenameupdate">
                            修改昵称：{{nickname}}
                            <el-input v-model="editnickname" id="nicknameinput"></el-input>
                            <el-button type="success" plain @click="editniknam">修改昵称</el-button>
                        </div>
                        
                        <div class="block">
                            生日:{{birth}}<br>
                            <span class="demonstration"></span>
                            <el-date-picker
                                v-model="editbirth"
                                type="date"
                                placeholder="选择生日">
                            </el-date-picker><br>
                            <el-button type="success" plain @click="editbth">修改生日</el-button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="头像管理" name="second">
                    <div>2</div>
                </el-tab-pane>
                <el-tab-pane label="账号信息" name="third">
                    <div>3</div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name:'Personal',
    data(){
        return {
            editpassword:'',
            editnickname:'',
            editbirth:'',
            activeName: 'first'
        }
    },
    methods:{
        editpwd(){
            console.log('wcwq');
        },
        editniknam(){
            var that = this;
            this.$axios({
                url:'/personal/editnickname?nickname='+that.editnickname,
                method:'get'
            })
            .then((res,err)=>{
                console.log(res);
                if(res.data.code == 200){
                    sessionStorage.setItem('nickname',res.data.data.nickname)
                    that.$store.state.nickname=sessionStorage.getItem('nickname')
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                        });
                }
                else{
                    console.log(err);
                    this.$message.error('修改失败');
                    }
            })
            
        },
        editbth(){
            var that = this;
            this.$axios({
                url:'/personal/editbirth?birth='+that.a,
                method:'get'
            })
            
            .then((res,err)=>{
                if(res.data.code == 200){
                    sessionStorage.setItem('birth',res.data.data.birth)
                    that.$store.state.birth=sessionStorage.getItem('birth')
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                        });
                }
                else{
                    console.log(err);
                    this.$message.error('修改失败');
                    }
            })
        },
        handleClick(tab, event) {
            console.log(tab, event);
      }

    },
    computed:{
        a(){
            var date = this.editbirth
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        username(){
            return this.$store.state.username
        },
        password(){
            return this.$store.state.password
        },
        headimg(){
            return this.$store.state.headimg
        },
        nickname(){
            return this.$store.state.nickname
        },
        birth(){
            return this.$store.state.birth
        }
    }
}
</script>
<style>
    #personalPage{
        width: 70vw;
        height: 100%;
    }
    #editbox{
        width: 100%;
        height: 80%;
        background: white;
        text-align: center;
        padding: ;
    }
    #edit{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    /* #personalheadimg{
    width: 100px;
    height: 100px;
    }
    #personalheadimg img{
        width: 100%;
        height: 100%;
    } */

</style>