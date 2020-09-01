<template>
    <div id="blogItems">
        <div id="blogItem" v-for="(item,index) in blogitem" :key="index">
            <div id="itemheadImg">
                <img :src="item.headimg">
            </div>
            <div id="titleAndText">
                <div id="blogTitle">{{item.title}}</div>
                <div id="blogText">{{item.text}}</div>
                <!-- <div id="blogData">{{currentdate}}</div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BlogItem',
    data(){
        return {
            blogitem:[
              
            ],
            
        }
    },
    created(){
            let url = '/blog/getblog'
            this.$axios({
                url:url,
                method:'get'
            })
            .then(res=>{
                this.blogitem=res.data.data
                console.log(res.data.data)
            })
            .catch(error=>{
                console.log(error);
                console.log('请求失败')})
            
    },
    computed:{
        currentdate:function(){
            var date = new Date();
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
        
        
    }
}
</script>
<style>
    #blogItem{
        width: 80%;
        height: 150px;
        background: #EEEEEE;
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        border-radius: 10px;
    }
    #itemheadImg{
        height: 100%;
        width: 150px;
        background: blue;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    #titleAndText{
        flex: 0.95;
    }
    #itemheadImg img{
        height: 100%;
        width: 100%;
    }
    #blogTitle{
        width: 100%;
        height: 40px;
        border-bottom: .1px solid #ccc;
        display: flex;
        align-items: center;
        font-size: 1.5em;
        font-weight:bold;
    }
    #blogText{
        height: 80px;
        overflow: hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp: 2;
        font-size: .8em;
        line-height: 2em;
        font-weight: 100;
        border-bottom: .1px solid #ccc;
        padding: 0 10px;
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