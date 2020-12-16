<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <a @click="catepush('/newsItemP/newsItem1')">
      <div><img src="~img/new3.jpg" alt="" /></div>
      <div class="word">
        <p>12 - 06</p>
        <p>国宝级中国茶，献礼风尚与财富——中国茶受邀成为环球网和《第一财经》......</p>
        <p>因为所秉有的高贵品质，不同于以往茶品的创新思维，使它一举赢得了众多媒体的青睐和认可，更成为环球网和《第一财经》两家知名媒体......
        </p>
      </div>
    </a>
    <a @click="catepush('/newsItemP/newsItem2')">
      <div><img src="~img/news4.jpg" alt="" /></div>
      <div class="word">
        <p>12 - 06</p>
        <p>星大厨研发的五道创意茶餐，让30人吃出了初恋的味道！</p>
        <p>揭秘比酒配餐更时尚的茶配餐如何打造，米其林三星主厨亲身示范。
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name:'newsAll',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>


/* 内容 */
.content{width: 1170px;margin: 0 auto; padding-top: 12px; display: flex; flex-wrap: wrap; justify-content: space-between;}
.content>a:hover img{ transform:scale(1.1); transition: .5s all ease;}
.content>a{  padding: 0 0px 34px 0;   }
.content>a>.word>p:nth-of-type(1){   font-size: 24px;font-family: helveticaneuethn, Arial;  margin-top:25px; }
.content>a>.word>p:nth-of-type(2){ font-size: 16px; color: #333333;}
.content>a:hover p:nth-of-type(2){ color: #909744; transition: .3s all linear;}
.content>a>.word>p{  margin-left: 20px; line-height: 26px; margin-bottom: 14px; color: #888888; }
.content>a:hover .btn{ border:1px solid #909744 ; border-left: 0;   transition: .3s all ease; color: #909744;  }
.content>a:hover span{ margin-left: -57px;   transition: .6s all ease;}
.content>a>div:nth-of-type(1){ overflow: hidden; height: 184.77px;width: 575px; }
.content>a>.word{  width: 575px;}
.content>a>.word>p:last-of-type::before{  content: ""; display: block; position: absolute; height:1px ; width: 575px;  background-color: #eeeeee; top: 80px; left: -23px; }
.content>a>.word>p:last-of-type::after{  content: ""; display: block; position: absolute; height:1px ; width: 0px;  top: 80px; left: -22px; }
.content>a:hover p:last-of-type::after{   background-color: #909744;  transition: .3s all linear; width: 575px;}


</style>