<template>
 <!-- 页面内容部分 -->
  <div class="content">
    <p id="tltle">冲泡方法</p>
    <p class="text">
      洺盛茶園位於南投縣名間鄉，是當地種植有機茶的一家茶廠。老闆陳洺俊先生秉持「雜草是我的作物，茶園是昆蟲的家」的種茶理念，致力於推廣有機茶，希望讓大家知道喝有機茶不只能讓身體健康，更能減少對土地的負擔。
      <br>
      <br>
      品牌理念：一初意指一本初衷。
      <br>
      「 以一本誠心的製茶方式，質樸的態度，盼望大眾能在喝茶時想起心中的那份初衷。 」
      <br>
      &nbsp;
      <br>
      設計上以茶農家族為主，結合包裝，透過插畫手法讓大眾更了解有機茶的製作故事以及茶農三代傳承的精神，體會有機茶產業的生活故事與哲理，達到推廣有機茶的目的。
      <br>
      <br>
    </p>
    <div class="pic_text">
      <div class=" item_block">
        <p><img src="~img/wash-tea1.gif" alt=""></p>
        <p><br></p>
        <p><br></p>
        <p>合適茶葉 / </p>
        <p>金萱 | 烏龍 | 綠茶 </p>
        <p>步驟一 / 加入茶葉及水 1g/100cc</p>
        <p>步驟二 / 靜置四小時 （圖示中表示不需搖晃)</p>
        <p>步驟三 / 濾掉茶葉，冰入冰箱4°C（不需加入冰塊) </p>
      </div>
      <div class=" item_block">
        <p><img src="~img/wash_tea2.gif" alt=""></p>
        <p><br></p>
        <p><br></p>
        <p>合適茶葉 / </p>
        <p>球型 | 半球型 </p>
        <p>步驟一 / 加入茶葉及水 4g/300cc</p>
        <p>步驟二 / 靜置10分鐘</p>
        <p>步驟三 / 即可飲用 </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'washMethod',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>

/* 冲洗方法内容 */
.content{ width: 1170px; margin: 0 auto;margin-top: 130px;     margin-bottom: 60px;}
#tltle{    text-align: center;     font-size: 20px;     line-height: 30px;     color: #555;}
.content .text{   margin-top: 20px;  line-height: 24px; font-size: 13px;     color: #666;}
.pic_text>.item_block img{ width: 570px; height: 362.89px;}
.pic_text>.item_block>p{ line-height: 24px; font-size: 13px; color: #666666; }
.pic_text{margin-top: 30px;  display: flex ; justify-content: space-between;}
</style>