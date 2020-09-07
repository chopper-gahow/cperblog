<template>
    <div id="personalPage">
        <div v-if="isLogin" id="editbox">
            <h1>个人信息</h1>
            <el-tabs v-model="activeName" @tab-click="handleClick" id="edit">
                <el-tab-pane label="个人资料" name="first">
                    <div>
                        <div id="nicknameupdate">
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
                    <el-upload
                        class="avatar-uploader"
                        action="http://upload-z2.qiniup.com"
                        :data="postData"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img id="img" v-if="imageUrl" :src="imageUrl" class="avatar">
                        <img id="img" v-else :src="personalheadimg">
                    </el-upload>
                </el-tab-pane>
                <el-tab-pane label="账号信息" name="third">
                    <div>3</div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-else>
            先登录，死鬼
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
            personalheadimg:this.$store.state.headimg,
            activeName: 'first',
            isLogin:sessionStorage.getItem('isLogin'),
            imageUrl:'',
            postData:{
                token:this.$store.state.qiniutoken,
                domain:'hcpr.s3-cn-south-1.qiniucs.com'
            }
        }
    },
    mounted(){
        console.log(this.$store.state.qiniutoken);
    },
    methods:{
        handleAvatarSuccess(res, file) {
            var that = this
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$message({
                showClose: true,
                message: '上传成功',
                type: 'success'
            });
            this.$axios({
                method:"get",
                url:'/personal/editheadimg?headimg=http://hchopper.top/'+res.hash,
                
            }).then(res=>{
                this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'success',
                });
                sessionStorage.setItem('headimg',res.data.data.headimg)
                that.$store.state.headimg=sessionStorage.getItem('headimg')
                location.reload()
            })
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        editpwd(){
            alert('别急还没写');
        },
        editniknam(){
            var that = this;
            this.$axios({
                url:'/personal/editnickname?nickname='+that.editnickname,
                method:'get'
            })
            .then((res,err)=>{
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
        height: 1000%;
        background: white;
        text-align: center;
    }
    #edit{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    #nicknameupdate{
        margin-top: 50px;
        margin-bottom: 50px;
    }
.upload {
  width: 600px;
  margin: 0 auto;
}
.avatar-uploader .el-upload {
  width: 300px;
  height: 300px;
  border: 2px dashed #ca1717;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
#img{
    width: 100%;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>