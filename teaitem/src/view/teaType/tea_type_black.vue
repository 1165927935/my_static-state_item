<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">
      <div class="item" id="item2">
        <a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item2.jpg" alt="" /></div>
          <div class="item_text">
            <p>普洱熟茶 三人装 </p>
            <p>邹炳良大师作品</p>
          </div>
        </a>
      </div>
      <div class="item" id="item7">
        <a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item7.jpg" alt="" /></div>
          <div class="item_text">
            <p>烏龍茶 豪華精裝</p>
            <p>￥5000</p>
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
    name:'teaTypeblack',
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