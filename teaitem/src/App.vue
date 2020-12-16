<template>
  <div id="app">
    <!-- 头部导航栏 -->
  <nav-bar ></nav-bar>
  <router-view style="margin-top:70px"></router-view>
  <!-- 右侧浮窗 -->
  <float-right></float-right>
  <!-- 底部版权 -->
  <copy-right></copy-right>
  <!-- <p>{{$store.state.activepath}}</p> -->
  </div>
</template>
<script>

import navBar from 'components/navbar/navbar.vue'
import floatRight from 'components/float_window/float_right'
import copyRight from 'components/down_copyright/copyright'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components :{
    navBar,
    floatRight,
    copyRight
  }
}
</script>
  

<style >
@import "assets/css/common.css";
</style>
