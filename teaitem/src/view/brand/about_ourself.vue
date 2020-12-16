<template>
 <!-- 关于我们内容部分 -->
  <div class="content ">
    <p id="tltle">關於我們</p>
    <p id="subtitle">About Us</p>
    <div class="pic">
      <img src="~img/about_ourselves.png" alt="">
    </div>
    <p class="text">
      中国茶业有限公司创立于2014年，是互联网思维、体验经济下应运而生的一家现代茶商。用创新理念，以极具创造性的手法整合中国茶行业优势资源，联合六大茶类的八位泰斗级制茶大师，坚持
      原产地特级原料、坚持传统工艺、大师制作，独创保鲜技术，共同打造大师级的中国茶，以创新工艺，为中国好茶立标准；以创新产品，为中国高端茶树标杆。
      <br>
      <br>
      顺应时代变革，以满足现代人的生活需求为核心，坚持唯一等级和唯一价格，为中国茶做减法，还原茶叶真相，彻底解决茶叶消费买、喝、送的三大需求痛点，让茶真正回归生活，美化生活。
      <br>
      <br>
      以“做中国好茶、做好中国茶”为使命，用标准和透明，打破传统茶行业的发展瓶颈；用创新体验，为中国茶的全面复兴，走向世界探寻新的道路。
      <br>
      <br>
      <br>
      <br>
      <br>
    </p>
  </div>
</template>

<script>
export default {
    name:'aboutOurself',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>
/* 关于我们内容 */
.content{ width: 1170px; margin: 0 auto;margin-top: 130px;}
#tltle{   text-align: center;     font-size: 20px;     line-height: 30px;     color: #555;}
#subtitle{ font-size: 14px;color: #bbb;line-height: 26px;  text-align: center;}
.pic{ margin-top: 20px;}
.content .text{ margin: 20px 0 70px 0;color: #666666; ;line-height: 24px;font-size: 13px;}
</style>