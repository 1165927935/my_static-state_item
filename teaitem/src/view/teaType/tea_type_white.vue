<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">
      <div class="item" id="item5"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item5.jpg" alt="" /></div>
          <div class="item_text">
            <p>茉莉花茶 四人装 林乃荣大师作品</p>
            <p>￥200 - ￥500</p>
          </div>
        </a>
      </div>
      <div class="item" id="item6"><a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item6.jpg" alt="" /></div>
          <div class="item_text">
            <p>福鼎白茶 散装 林振荣大师作品</p>
            <p>￥600</p>
          </div>
        </a>
      </div>
      <div class="item" id="item8"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item8.jpg" alt="" /></div>
          <div class="item_text">
            <p>精選茉莉</p>
            <p>￥300 / 斤</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'teaTypewhite',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style >
/* 茶叶组件内容共同CSS文件 */
@import "../../assets/css/teaTypeCommon.css";
</style>