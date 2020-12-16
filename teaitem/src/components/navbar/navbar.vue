<template>
 <div>
     <div id="header">
    <div class="content">
      <div id="headTop"><a href=""> <img src="~img/logo.png" alt="" /> </a></div>
      <ul id="headright">
        <navbarItem cpath="/home" ><span @click="catepush('/home')" >首頁</span></navbarItem>
        <navbarItem cpath="/brand" bpath="/surrounditemp" ><span @click="catepush('/brand')" >品牌<span class="iconfont iconjiantouxia"></span></span>
          <ul class="subnav">
            <li><a @click="catepush('/brand/aboutSelf')" >關於我們</a></li>
            <li><a @click="catepush('/brand/washMethod')" >沖泡方法</a></li>
            <li><a @click="catepush('/brand/teaMaster')">製茶大師</a></li>
            <li><a @click="catepush('/brand/surroundProduct')">周邊產品</a></li>
            <li><a @click="catepush('/brand/personrecruit')">人才招聘</a></li>
            <li><a @click="catepush('/brand/partner')">合作夥伴</a></li>
          </ul></navbarItem>
        <navbarItem cpath="/news" ><span @click="catepush('/news')" >新聞資訊</span></navbarItem>
        <navbarItem cpath="/teatype" bpath="/teaitemp"><span @click="catepush('/teatype')"  >茶葉種類</span></navbarItem>
        <navbarItem cpath="/contact" ><span @click="catepush('/contact')" >聯繫</span></navbarItem>
        <navbarItem  ><a href="https://www.baidu.com/"> 返回Kooboo</a></navbarItem>
        <navbarItem  ><a href="https://www.baidu.com/"><span class="iconfont iconsousuo"></span></a>
          <input type="text" placeholder="搜索" /></navbarItem>
      </ul>
    </div>
  </div>
 </div>





</template>

<script>

import navbarItem from './navbaritem'

export default {
  name :'navBar',
    data(){
        return{
          activeColor:'#909744'
        }
    },
    methods:{
        catepush(path){
            this.$router.push(path)
        }
    },
    computed:{
    },
    components:{
        navbarItem
    }
}

</script>
<style scoped>

  @import "../../assets/font1/iconfont.css";
/* 头部导航栏 */
#header{ transition:  0.36s all ease;width: 100%;height: 70px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);     position: fixed;top: 0;z-index: 99;background: #fff;}
#header .content{width: 1170px;margin: 0 auto; display: flex; justify-content: space-between; align-items: center;}
#headTop  img{ height: 50px}
ul#headright{ height: 100%; line-height: 70px;}
ul#headright>div{display: inline-block;height: 100%;  }   
ul#headright>div>li>span{  padding:  0 26px; display: block; height: 100%;}
ul#headright>div>li>a{  padding:  0 26px; display: block; height: 100%;}
ul#headright>div>li:hover>span{color: #909744; cursor: pointer;}
ul#headright>div>li:hover>a{color: #909744; }
ul#headright>div .iconfont{ padding-left: 10px;  font-size: 10px; color: #000000;}
#header .subnav{ display: block; width: 200vw; background-color: #ffffff; height: 0;opacity: 0;transition: 0.36s ease;     border-top: 1px solid #f2f2f2; text-align: center; position: absolute; top: 69px;  left: -100vw; overflow: hidden; } 
#header .subnav>li{ display: inline-block; }
#header .subnav>li>a{ padding: 12px 24px; font-weight: 500; font-size: 12px;}
ul#headright>div:nth-of-type(2):hover .subnav{opacity: 1;height: 46px;line-height: 46px;}
#header .subnav>li>a:hover{ color: #909744; }
#header li:last-of-type>input{  background-color: #909744; display: block; width: 268px; height: 0; opacity: 0; box-sizing: border-box; transition: 0.36s ease;     border: none;  position: absolute; top: 71px;  left: -200px; padding-left: 15px; outline: none; } 
input::-webkit-input-placeholder {  color: #ffffff;}
ul#headright>div>li:last-of-type:hover input { opacity: 1; height: 40px;}
</style>


