<template>
  <div>
    <!-- 小导航模块 -->
  <div class="nav ">您的位置:&nbsp;
    <ul>
      <li><a @click="catepush('/home')">首頁&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/brand')">品牌&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
      <li><a @click="catepush('/brand/partner')">&nbsp;&nbsp;合作夥伴</a></li>
    </ul>
  </div>

  <!-- 页面内容部分 -->
    <div class="partner module_container">
      <div id="silde_pic">
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/facebook.png" alt />
            <p>facebook</p>
          </div>
        </a>
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/osw.png" alt />
            <p>Mozilla</p>
          </div>
        </a>
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/3day3.png" alt />
            <p>oracle</p>
          </div>
        </a>
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/micosoft.png" alt />
            <p>Microsoft</p>
          </div>
        </a>
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/apple.png" alt />
            <p>Apple</p>
          </div>
        </a>
        <a href="https://www.baidu.com/">
          <div>
            <img src="~img/IBM.png" alt />
            <p>IBM</p>
          </div>
        </a>
      </div>
    </div>
    <!-- 页面选择部分 -->
  <div class="page">
    <a href="https://www.baidu.com/">1</a>
  </div>
  </div>
</template>

<script>
export default {
  name: "partner",
  methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
};
</script>
<style scoped>
/* 小导航栏 */
.nav {
  width: 1170px;
  margin: 120px auto 60px;
  font-size: 12px;
  color: #666;
  height: 45px;
  line-height: 45px;
}
.nav ul {
  display: inline;
}
.nav li {
  display: inline-flex;
  align-items: center;
}
.nav a {
  color: #666;
}
.nav img {
  height: 15px;
  width: 15px;
  display: inline-block;
}
.nav a:hover {
  color: #909744;
}
.nav li:nth-of-type(3) > a {
  color: #909744;
}

/* 合作伙伴内容 */
.partner {
  width: 1170px;
  margin: 110px auto 50px;
}
.partner > #silde_pic {
  display: flex;
  flex-wrap: wrap;
}
.partner > #silde_pic > a > div {
  width: 282px;
  margin: 0 10px 30px 0;
}
.partner > #silde_pic > a > div > img {
  height: 127px;
  width: 282px;
  box-sizing: border-box;
  border: 1px solid rgba(170, 170, 170, 0.2);
}
.partner > #silde_pic > a > div > p {
  text-align: center;
}
.partner > #silde_pic > a:hover img {
  border: 1px solid #909744;
  transition: 0.3s all linear;
}

页面选择部分
.page {
  width: 1170px;
  margin: 50px auto 150px;
}
.page > a {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #999;
  line-height: 40px;
  text-align: center;
}
.page > a:hover {
  background-color: #909744;
  color: #ffffff;
}
.page > a:nth-of-type(1) {
  background-color: #909744;
  color: #ffffff;
}
</style>