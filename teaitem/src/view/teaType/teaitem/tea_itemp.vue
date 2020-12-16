<template>
 <div>
     <!-- 小导航模块 -->
  <div class="nav ">您的位置:&nbsp;
    <ul>
      <li><a @click="catepush('/home')">首頁&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/teatype')">茶葉種類&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/teatype/black')">&nbsp;黑茶</a></li>
    </ul>
  </div>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
    name:'teaitemp',
    methods:{
        catepush(path){
            // console.log(path);
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
.nav li:last-of-type>a{ color: #909744; }
</style>