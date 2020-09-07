<template>
  <div id="app">
    <router-view name="header"/>
    <transition name="fade" mode="out-in">
    <router-view name="main" class="site-content"/>
    </transition>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100vw;
    min-height: 100vh;
    background:skyblue;
    overflow: auto;
  } 
  .site-content{
    padding-left: 3vw;
    padding-right: 3vw;
    margin: 0 auto;
  }
  @media only screen and (min-width:500px){
    .site-content{
      margin-left: 300px;
      padding-bottom: 3.33333em;
      padding-top: 3.33333em;
    }
  }

  /* @media only screen and (min-width: 801px) and (max-width:1001px){
    .site-content{
      margin-left: 30vw;
      padding-bottom: 3.33333em;
      padding-top: 3.33333em;
    }
    @media only screen and (max-width:801px){
    }
  } */
  .fade-enter{
    transform: translate3d(100%, 0, 0);

  }
    
  .fade-leave{
    transform: translate3d(100%, 0, 0);
  }
  
  .fade-enter-active{
    transition:transform .5s;
  }
  .fade-leave-active{
    transition:trasnform 0s;
  }

</style>
  