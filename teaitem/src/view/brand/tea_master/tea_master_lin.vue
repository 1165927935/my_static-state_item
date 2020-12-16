<template>
 <!-- 页面内容部分 -->
  <div class="content">

    <div class="title">
      <p>鈴木 幸典</p>
      <p>中国普洱茶终身成就大师</p>
    </div>
    <div class="master" >
      <div class="master_pic">
        <img src="~img/tea_master1..png" alt="">
        <div class="master_bir">
          <p>鈴木 幸典</p>
          <p>武野绍鸥为茶坛名人之一，（1502年-1555年）</p>
        </div>
      </div>
      <div class="master_itro">
        <p>普洱茶是一种阳光之茶，是一种有生命的茶是一种不断变化的茶，我做了大半辈子的茶，还有许多不懂的地方需要学习。</p>
        <p>并不是我有多大的本事，而是天时地利，云南大叶种本身茶质好，内含物非常丰富，喝同样一口茶，喝到嘴里的东西就多。</p>
        <p>普洱茶养胃、防‘三高’等功效，要让不同的人群知道，让越来越多的人喜欢上普洱茶。</p>
        <p><br></p>
        <p>这是一个奇迹的时代，一个艺术的时代，一个挥金如土的时代，也是一个充满嘲讽的时代。</p>
        <p>狩猎帽子起源于14世纪的英国北部和意大利南部的部分地区，之后又被英国殖民者带去了美国。</p>
        <p><br></p>
        <p>武野绍鸥为茶坛名人之一，（1502年-1555年）。</p>
        <p><br></p>
        <p>饮茶鼻祖村田珠光曾对武野先生有过很大的影响。武野绍鸥既是千利休的老师，也是日本茶道创始人之一。</p>
        <p><br></p>
        <p>即使说活跃在安土桃山时代的茶人都是他的弟子的话也决不会过言。</p>
        <p>简而言之，武野绍鸥是把茶术教于千利休的人。（千利休在日本人人皆知）。就是这样有名的千利休，他60多岁前还只是武野门下的一个学徒。</p>
        <p><br></p>
        <p>重要原因是他还是一个连歌师。他的连歌中凝聚了日本人的审美意识。简单地说，他的连歌中反应了日本最美、最好的情感。而且，他把这种美的意识及思维方式与茶世界的表现方式结合为一。</p>
        <p><br></p>
        <p>也就是说，他通过书法、茶道具、花、礼等具体的东西来表现那种抽象的、难以表现的东西。为此，引起了很多人的共鸣。武野绍鸥时代诞生的“茶禅一味”这个单词，是与他的作用分不开的。</p>
        <p><br></p>
        <p><br></p>
        <p><br></p>
        <p><br></p>
        <nextPart path="/brand/teaMaster/teaMasterGao"></nextPart>
      </div>
    </div>

  </div>
</template>

<script>
import nextPart from "./next_part"
export default {
    name:'master_lin',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
    components:{
      nextPart
    }
}

</script>
<style scoped>
@import "../../../assets/css/teaMasterItem.css";
</style>