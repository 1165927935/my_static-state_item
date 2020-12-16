<template>
 <div>
   
  <!-- 新闻内容模块 -->
  <div class="news_content module_container">
    <div class="title">
      <p>传统与现代碰撞，打造中国式高品质生活</p>
      <p><span>2016</span>-<span>12</span>-<span>07</span></p>
    </div>
    <div class="description">
      <p>以“做中国好茶，做好中国茶”为己任的现代茶应运而生，试图以茶为媒，用创意打造属于当下中国人的品质生活方式，再次唤醒国人对中国茶的热爱。 </p>
    </div>
    <div class="text">
      <hr>
      <p><br></p>
      <p>
        “志于道、据于德、依于仁、游于艺”，中国文化向来讲究文以载道，而茶极大地在生活中滋养人们，形成一种独特的生活方式。自汉武帝开启丝绸之路，茶的角色愈加重要，成为经济贸易的卓越贡献者，随着经济的发展，中国茶传至日本、韩国、乃至欧洲和美洲，“东方树叶”成为中国的代名词。
      </p>
      <p><br></p>
      <p>
        然而，当茶走出国门，影响了全世界时，越来越多的中国人却习惯了添加奶与方糖的各式咖啡，忘记了中国茶的韵味；都市人习惯了上班前匆匆一杯星巴克，忘记了中国茶的恬静。当这些西方舶来品涌进现代人的生活，以“做中国好茶，做好中国茶”为己任的小罐茶应运而生，试图以茶为媒，用创意打造属于当下中国人的品质生活方式，再次唤醒国人对中国茶的热爱。
      </p>
      <p><br></p>
      <p>正值春茶上市之际，小罐茶创始人杜国楹邀请8位来自不同领域的大咖与一条、罗辑思维等媒体的爱茶之人，加入小罐茶“寻找春天礼”活动，用生活美学释放中国文化之美。</p>
      <img src="~img/news_item1.jpg" alt="">
      <p>现代都市人的生活如一场舞台剧，总想在有限的时间呈现更多绚丽和惊喜。</p>
      <p>于是，我们习惯了吃快餐，开快车，走快步，在“快生活”中行色匆匆，争分夺秒。面对压力，忘记了停下脚步，看看生活的美景。而此次采茶、制茶的活动，就是想把大家重新带回大自然。</p>
    </div>
    <newsLink nextPath='/newsItemP/newsItem2'></newsLink>

    <!-- 底部相关内容模块 -->
  <div class="module_container">
    <div class="listcontent ">
      <h3>相关内容</h3>
      <div class="tea_link">
        <a @click="catepush('/teatype/green')">抹茶</a>
      </div>
      <a id="link_content" @click="catepush('/newsItemP/newsItem2')">
        <div class="pic">
          <img src="~img/news_item1_listcontent.jpg" alt="">
        </div>
        <div class="link_text">
          <p><span>12</span>-<span>07</span></p>
          <p>传统与现代碰撞，打造中国式高品质生活</p>
          <p>以“做中国好茶，做好中国茶”为己任的现代茶应运而生，试图以茶为媒，用创意打造属于当下中国人的品质生活方式，再次唤醒国人对中国茶的热爱。 </p>
          <div id="more"> MORE <span class="iconfont iconjiantouyou"></span>
          </div>
        </div>
      </a>
    </div>
  </div>
  </div>

  
 </div>
</template>

<script>

 import newsLink from "../newsItem/newsLink"
export default {
    name:'newsItem1',
    components:{
      newsLink
    },
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style >
@import "../../../assets/css/newsCommon.css";
</style>