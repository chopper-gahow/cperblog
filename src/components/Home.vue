<template>
    <div id="home">
        <h1 id="title">CperBlog</h1>
        <div id="down">
            <div id="firstimg">
                <img src="http://hchopper.top/Home.jpg">
            </div>
            <div id="blogdesc">
                <h2>
                    欢迎使用CperBlog
                </h2>
                <div id="jz">
                    <ul>
                        <li>你要记住</li>
                        <li>不是每一次努力都会有收获</li>
                        <li>但是，每一次收获都必须努力</li>
                        <li>这是一个不公平的不可逆转的命题</li>
                        <li id="sj">乘风破浪会有时</li>
                        <li id="sj">直挂云帆济沧海</li>
                    </ul>
                </div>
            </div>
                
        </div>
    </div>
</template>
<script>
export default {
    name:'Home',
    
}

</script>
<style>
    #home{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    #title{
        font-size: 2.8em; 
        border-bottom: 2px #999 solid;
        width: 20%;
    }
    #down{
        display: flex;
        height: 80vh;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    #firstimg{
        width: 66%;
        height: 95%;
        border-radius: 50px;
        overflow: hidden;
    }
    #firstimg img{
        width: 100%;
    }
    #blogdesc{
        width: 30%;
        height: 90%;
        background: #E2CAC6;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    #jz{
        margin-top: 40px;
        height: 30%;
    }
    #blogdesc>h2{
        font-size: 2em;
        border-bottom: .7px solid green;
        font-weight: 400;
    }
    #jz ul{
        height:200%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #jz ul li{
        font-size: 1.4em;
    }
    #sj{
        color: red;
        font-size: 1.7em;
        font-style: italic;
    }
</style>