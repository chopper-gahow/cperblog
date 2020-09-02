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
        </div>
    </div>
</template>
<script>

export default {
    name:"BolgInfo",
    data(){
        return {
            id: sessionStorage.getItem("blogid"),
            // title: sessionStorage.getItem('title'),
            // text: sessionStorage.getItem('title'),
            // writedate: sessionStorage.getItem('infodate'),
            // writerickname: sessionStorage.getItem('infonickname'),
            // headimg:sessionStorage.getItem('infoheading')
            title: '',
            text: '',
            writedate: '',
            writerickname: '',
            headimg:''
            // title: localStorage.getItem('title'),
            // text: localStorage.getItem('title'),
            // writedate: localStorage.getItem('infodate'),
            // writerickname: localStorage.getItem('infonickname'),
            // headimg:localStorage.getItem('infoheadimg')
            // title:this.$store.state.blogtitle,
            // text:this.$store.state.blogtext,
            // writerickname:this.$store.state.blogwriter,
            // headimg:this.$store.state.blogheadimg,
            // writedate:this.$store.state.blogdate
        }
    },

    created(){
        console.log('mounted');
        console.log(this.id);
        var that = this;
        this.$axios({
            method:'get',
            url:'/blog/findblogbyid?id='+that.id
        })
        .then(res=>{
            console.log(res.data.data[0]);
            // sessionStorage.setItem('infotitle',res.data.data[0].title)
            // sessionStorage.setItem('infotext',res.data.data[0].text)
            // sessionStorage.setItem('infonickname',res.data.data[0].writerickname)
            // sessionStorage.setItem('infodate',res.data.data[0].writedate)
            // sessionStorage.setItem('infoheading',res.data.data[0].headimg)
            this.title = res.data.data[0].title
            this.text = res.data.data[0].text
            this.writedate = res.data.data[0].writedate
            this.writerickname = res.data.data[0].writerickname
            this.headimg = res.data.data[0].headimg
            // localStorage.setItem('infotitle',res.data.data[0].title)
            // localStorage.setItem('infotext',res.data.data[0].text)
            // localStorage.setItem('infonickname',res.data.data[0].writerickname)
            // localStorage.setItem('infodate',res.data.data[0].writedate)
            // localStorage.setItem('infoheadimg',res.data.data[0].headimg)
        })
    },

}
</script>
<style>
    #bloginfo{
        width: 77%;
        height: 80%;
        display: flex;
        justify-content: center;
    }
    #blogcontent{
        width: 60%;
        height: 700px;
        background: white;
        padding: 20px 40px;
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
        background: red;
    }
</style>
