<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">

      <div class="item" id="item3"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item3.jpg" alt="" /></div>
          <div class="item_text">
            <p>武夷大紅袍 散裝 王明順大師作品</p>
            <p>￥480 - ￥1000</p>
          </div>
        </a></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'teaTypeoolong',
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