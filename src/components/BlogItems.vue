<template>
    <div id="blogItems">
        <div id="blogItem" v-for="item in blogitem" :key="item._id" @click="goBlog(item._id)">
            
            <div id="titleAndText">
                <div id="blogTitle">{{item.title}}</div>
                <div id="blogtextcontent">
                    <div id="contenthead">
                    <div id="blogwriterhead"><img :src="item.headimg" alt=""></div>
                    <span id="blogwriternick">{{item.writerickname}}</span>
                    <div id="blogText">{{item.text}}</div>
                    </div>
                    <div id="blogvisit">
                        <div id="visit"><i id="iconvisitor" class="el-icon-view"><span>{{item.visitors.length}}</span></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BlogItem',
    data(){
        return {
            blogitem:[],
            blogvisitor:sessionStorage.getItem('username')
        }
    },
    created(){

            this.$axios({
                url:'/blog/getblog',
                method:'get'
            })
            .then(res=>{
                console.log(res);
                this.blogitem=res.data.data.reverse()
            })
            .catch(error=>{
                console.log(error);
                console.log('请求失败')})
            
    },
    methods:{
        goBlog(id){
            if(this.$store.state.isLogin==false){
                this.$message.error('先登陆，宝贝儿');

            }else{
                this.$router.push({name:"BlogInfo"})
                sessionStorage.setItem('blogid',id)
            }
          
            
        }
    }
    
}
</script>
<style>
    #blogItem{
        width: 80%;
        height: 90px;
        background: #EEEEEE;
        margin: 0 auto;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        border-radius: 10px;
    }
    #blogwriterhead{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        overflow: hidden;
    }
    #titleAndText{
        flex: 0.95;
    }
    #blogwriterhead img{
        height: 100%;
        width: 100%;
    }
    #blogwriternick{
        font-size: 1.2em;
        font-weight: 400;
        margin-left: 10px;
        margin-right: 40px;
    }
    #blogTitle{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 1.5em;
        font-weight:bold;
        padding: 0 30px;
    }
    #blogtextcontent{
        height: 50px;
        /* overflow: hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp: 2; */
        font-size: .8em;
        line-height: 2em;
        font-weight: 100;
        border-bottom: .1px solid #ccc;
        padding: 0 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    #contenthead{
         display: flex;
        align-items: center;
    }
    #blogData{
        height: 30px;
        padding: 0 10px;
        text-align: right;
        font-size: 1em;
        font-weight: 100;
        color: #aaa;
    }
</style>