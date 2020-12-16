<template>
 <div>
     <!-- 茶叶类型大图模块 -->
  <div class="bgshow"></div>

  <!-- 小导航模块 -->
  <div class="nav">
    <div class="left ">您的位置:&nbsp;
      <ul>
        <li><a @click="catepush('/home')">首頁&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
        <li><a @click="catepush('/teatype')">&nbsp;茶葉種類</a></li>
      </ul>
    </div>
    <ul class="right">
      <navRight/>
    </ul>
  </div>
  <router-view></router-view>
  <!-- 页面选择部分 -->
  <div class="page">
    <a >1</a>
  </div>
 </div>
</template>
<script>

import navRight from './nav_right'
export default {
    name:'teaType',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
    components:{
        navRight
    }
    
}

</script>
<style scoped>
/* 頂部背景圖片 */
.bgshow{ margin-top: 70px; background-image: url(.~img/tea_type.jpg); height: 380px; }

/* 小导航栏 */
.nav {width: 1170px;margin: 35px auto 60px; font-size: 12px; color: #666; height: 45px; line-height: 45px; display: flex; justify-content: space-between; }
.nav ul{ display: inline;  }
.nav li{ display: inline-flex;  align-items: center; }
.left a{color: #666;}
.left img{ height: 15px; width: 15px;display: inline-block;}
.left a:hover{ color: #909744; }
.left li:last-of-type>a{ color: #909744; }

/* 页面选择部分 */
.page{ width: 1170px; margin: 50px auto  100px; }
.page>a{ display: inline-block; width: 40px; height: 40px; border: 1px solid #999; line-height: 40px;text-align: center; }
.page>a:hover{ background-color: #909744 ; color: #ffffff; }
.page>a:nth-of-type(1){ background-color: #909744 ; color: #ffffff; }
</style>