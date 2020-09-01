<template>
    <div id="writeblog">
        <h1>撰写你的文章</h1>
        <div>
            <h2>标题</h2>
            <textarea placeholder="在这里填写标题" id="titlearea" cols="30" rows="10" v-model="title"></textarea>
            <h2>内容</h2>
            <textarea placeholder="在这里编写内容" id="textarea" cols="30" rows="10" v-model="text"></textarea>
        </div>
        <el-button @click="upload" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
</template>
<script>
export default {
    name:'Note',
    data(){
        return {
            title:'',
            text:''
        }
    },
    methods:{
        upload(){
            console.log('hahaha');
            var that = this;
            this.$axios({
                method:'get',
                url:'/blog/writeblog?title='+that.title+'&text='+that.text,
            })
            .then(res=>{
                this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success'
                    });
            })
        }
    }
}
</script>
<style>
    #titlearea{
        width: 70%;
        font-size: 2em;
        height: 3em;
    }
    #textarea{
        width: 80%;
        font-size: 1.7em;
        height: 4em;
    }
</style>