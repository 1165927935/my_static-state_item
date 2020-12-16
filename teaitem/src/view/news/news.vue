<template>
 <div>
     <div class="nav">
    <div class="left ">您的位置:&nbsp;
      <ul>
        <li><a @click="catepush('/home')">首頁&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
        <li><a @click="catepush('/news')">&nbsp;&nbsp;新聞資訊</a></li>
      </ul>
    </div>
    <ul class="right">
      <li><a @click="catepush('/news/newsAll')">全部</a></li>
      <li><a @click="catepush('/news/newsNew')">最新</a></li>
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

export default {
    name:'news',
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
.nav {width: 1170px;margin: 125px auto 60px; font-size: 12px; color: #666; height: 45px; line-height: 45px; display: flex; justify-content: space-between; }
.nav ul{ display: inline;  }
.nav li{ display: inline-flex;  align-items: center; }
.left a{color: #666;}
.left img{ height: 15px; width: 15px;display: inline-block;}
.left a:hover{ color: #909744; }
.left li:last-of-type>a{ color: #909744; }
.nav>.right li{display: inline;}
.nav>.right li>a{ display: inline-block; color: #828282; font-size: 13px; margin: 0 5px;padding: 0 12px; text-align: center;  line-height: 30px;}
.nav>.right li>a:hover{ color: #909744; }



/* 页面选择部分 */
.page{ width: 1170px; margin: 50px auto  100px; }
.page>a{ display: inline-block; width: 40px; height: 40px; border: 1px solid #999; line-height: 40px;text-align: center; }
.page>a:hover{ background-color: #909744 ; color: #ffffff; }
.page>a:nth-of-type(1){ background-color: #909744 ; color: #ffffff; }
</style>