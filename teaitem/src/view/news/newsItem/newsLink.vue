<template>
 <div class="link">
      <div class="block_left">
        <a @click="catepush(nextPath)">
          <span class="iconfont iconjiantouzuo"></span>
          <div class="word">国宝级中国茶，献礼风尚与财富——中国茶受邀成为环球网和《第一财经》......</div>
          <img src="~img/news_item1_link1.jpg" alt="">
        </a>
      </div>
      <div class="block_right">
        <a @click="catepush(nextPath)">
          <img src="~img/news_item1_link2.jpg" alt="">
          <div class="word">经典的浪漫—— 茉莉花开·浪漫之夜音乐会</div>
          <span class="iconfont iconjiantouyou"></span>
        </a>
      </div>
    </div>
</template>

<script>


export default {
    name:'newsLink',
    props:{
      nextPath:String
    },
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
            console.log(this.nextPath);
        }
    },
}

</script>
<style scoped>
/* 矢量库图标引用 */
@import "../../../assets/font1/iconfont.css";


/* 链接CSS */
.news_content>.link{ display: flex; }
.news_content>.link>.block_left>a{ display: flex;align-items: center; padding-left: 30px;     width: 585px;height: 120px;  box-sizing: border-box;}
.news_content>.link>.block_left>a>.word{  margin-left: 50px; font-size: 16px;color: #666;     white-space: nowrap;overflow: hidden; text-overflow: ellipsis; width: 250px;}
.news_content>.link>.block_left>a>img{     width: 80px; height: auto; margin-left: 110px; opacity: 0;}
.news_content>.link>.block_left>a:hover{ background-color: #909744;     transition: all 0.36s ease; color: #ffffff;}
.news_content>.link>.block_left>a:hover .word{color: #ffffff; transition: all 0.36s ease; }
.news_content>.link>.block_left>a:hover img{opacity: 1;transition: all 0.36s ease;  }
.news_content>.link>.block_right>a{ display: flex;align-items: center; padding-left: 30px;     width: 585px;height: 120px;  box-sizing: border-box;}
.news_content>.link>.block_right>a>.word{  margin-right: 50px; font-size: 16px;color: #666;     white-space: nowrap;overflow: hidden; text-overflow: ellipsis; width: 250px;}
.news_content>.link>.block_right>a>img{     width: 80px; height: auto; margin-right: 110px; opacity: 0;}
.news_content>.link>.block_right>a:hover{ background-color: #909744;     transition: all 0.36s ease; color: #ffffff;}
.news_content>.link>.block_right>a:hover .word{color: #ffffff; transition: all 0.36s ease; }
.news_content>.link>.block_right>a:hover img{opacity: 1;transition: all 0.36s ease;  }
</style>