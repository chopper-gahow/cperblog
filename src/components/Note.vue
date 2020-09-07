<template>
    <div id="writeblog">
        <h1>撰写你的文章</h1>
        <div>
            <textarea v-model="title" id="" cols="30" rows="10"></textarea>
            <div v-html="text"></div>
            {{bsText}}
            <el-card style="height: 610px;">
                <quill-editor v-model="text" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
                </quill-editor>
            </el-card>
            <!-- <TinEditor></TinEditor> -->
            <!-- <h2>标题</h2>
            <textarea placeholder="在这里填写标题" id="titlearea" cols="30" rows="10" v-model="title"></textarea>
            <h2>内容</h2>
            <textarea placeholder="在这里编写内容" id="textarea" cols="30" rows="10" v-model="text"></textarea> -->
        </div>
        <el-button @click="upload" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
</template>
<script>
// import TinEditor from "./TinEditor"
// import EditorBar from './WangEditor'
import {
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
export default {
    name:'Note',
    data(){
        return {
            // content: null,
            editorOption: {},
            title:'',
            text:null,
        }
    },
    computed:{
        bsText(){
            let Base64 = {
            encode(str) {
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
                    function toSolidBytes(match, p1) {
                        return String.fromCharCode('0x' + p1)
                    }))
            }
            }
            return Base64.encode(this.text)
        }
    },
    components: { quillEditor },
    methods:{
        upload(){
            var that = this;
            this.$axios({
                method:'get',
                url:'/blog/writeblog?title='+that.title+'&text='+that.bsText,
            })
            .then(res=>{
                console.log(res);
                if(res.data.code==200){
                    this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success'
                    });
                    this.$router.push({ name: "Blog" });
                }
                
                else{
                    this.$message.error(res.data.msg);
                }
            })
        }
    }
}
</script>
<style>
    
</style>