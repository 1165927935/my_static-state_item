<template>
 <div>
     <!-- 小导航模块 -->
  <div class="nav ">您的位置:&nbsp;
    <ul>
      <li><a @click="catepush('/home')">首頁&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/brand')">品牌&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/brand/teaMaster')">&nbsp;&nbsp;製茶大師</a></li>
    </ul>
  </div>
  <router-view></router-view>
 </div>
</template>
<script>

export default {
    name:'teaMaster',
    methods:{
        catepush(path){
            this.$router.push(path)
        }
    },
    
}

</script>
<style scoped>

/* 小导航栏 */
.nav {width: 1170px;margin: 120px auto 60px; font-size: 12px; color: #666; height: 45px; line-height: 45px; }
.nav ul{ display: inline;  }
.nav li{ display: inline-flex;  align-items: center; }
.nav a{color: #666;}
.nav img{ height: 15px; width: 15px;display: inline-block;}
.nav a:hover{ color: #909744; }
.nav li:nth-of-type(3)>a{ color: #909744; }




</style>