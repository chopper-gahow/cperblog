<template>
    <div id="bloginfo">
        <div id="blogcontent">
            <div id="bloghead">
                <div id="blogtitle">
                    <span id="spantitle">{{title}}</span>
                    <div id="wrierinfo">
                        <div id="infoheadimg">
                                <img :src="headimg" alt="">
                        </div>
                        <div id="writenick">
                            <span id="writerickname">{{writerickname}}</span>
                        </div>
                        <div id="writedate">
                            <span id="writedate">{{writedate}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="infoblogtext">
                <div>
                    {{text}}
                </div>
            </div>
            <div id="blogcomments">
                <div id="commentinput">
                    <div id="infoheadimg">
                        <img :src="commentheadImg" alt="">
                    </div>
                    <div id="conmmentinputbox">
                    <el-input
                        type="textarea"
                        placeholder="请输入评论内容"
                        v-model="comment"
                        maxlength="30"
                        show-word-limit
                        >
                        </el-input>
                    </div>
                    <el-button id="commentbutton" type="danger" @click="writecomment">发表评论</el-button>
                </div>
                <div id="comment">
                    <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>  

                    <ul id="commentlist" >
                        <li v-for="(item,index) in comments" :key="index">
                            <div id="infoheadimg">
                                <img :src="item.commerhead" alt="">
                            </div>
                            <div>
                                {{item.commernickname}}:
                            </div>
                            <div>
                            {{item.content}}
                            </div>   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>

export default {
    name:"BolgInfo",
    data(){
        return {
            id: sessionStorage.getItem("blogid"),
            title: '',
            text: '',
            writedate: '',
            writerickname: '',
            headimg:'',
            comment:'',
            comments:[],
            visitor:sessionStorage.getItem('username')
        }
    },
    computed:{
        commentheadImg(){
            return sessionStorage.getItem('headimg');
        },
    },

    created(){
        var that = this;
        this.$axios({
            method:'get',
            url:'/blog/findblogbyid?id='+that.id+"&visitor="+that.visitor
        })
        .then(res=>{
            console.log(res);
            this.title = res.data.data.title
            this.text = res.data.data.text
            this.writedate = res.data.data.writedate
            this.writerickname = res.data.data.writerickname
            this.headimg = res.data.data.headimg
            this.comments = res.data.data.comments
            this.comments = res.data.data.comments;
        })
    },
    methods:{
        writecomment(){
            var that = this
            if((this.comment.indexOf(" ") >= 0 || this.comment == '')){this.$message.error('评论不能为空');}
            else{
            this.$axios({
                method:'get',
                url:'/blog/writecomment?id='+that.id+"&comment="+that.comment
            })
            .then(res=>{
                console.log(res);
                if(res.data.code !== 200){
                    this.$message.error(res.data.msg);
                }
                else{
                    location.reload()
                }
            })
            }
        }
    }
}
</script>
<style>

    #bloginfo{
        width: 77%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    #blogcontent{
        width: 60%;
        min-height: 85vh;
        background: white; 
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* overflow: auto; */
    }
    #bloghead{
        width: 100%;
        height: 160px;
        background: white;
        display: flex;
    }
    #blogtitle{
        width: 100%;
        height: 100px;
    }
    #spantitle{
        font-size: 2.1em;
    }
    #wrierinfo{
        /* width: 100%;*/
        height: 60%; 
        background: #F7F7FC;
        display: flex;
        align-items: center;
        padding-left: 30px;
        margin-top: 20px;

    }
    #writerickname{
        color: #5893C2;
        font-size: 0.9em;
        margin-right: 20px;
    }
    #writedate{
        color: #999AAA;
        font-size: 0.9em;
    }
    #infoheadimg{
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 5px;
    }
    #infoheadimg>img{
        width: 100%;
        height: 100%;
    }
    #infoblogtext{
        flex: 1;
        font-size: 1.4em;
    }
    #blogcomments{
        width: 100%;


    }
    #commentinput{
        display: flex;
        justify-content: space-between;
    }
    #conmmentinputbox{
        flex: 1;
    }
    #commentbutton{
        height: 100%;
        list-style: none;
    }
    #comment{
        width: 100%;
    }
    #commentlist li{
        height: 100px;
        border-bottom: 1px #E8E8ED solid;
        display: flex;
        align-items: center; 
    }
    #commentlist li div{
        margin-right: 10px;
    }
</style>
