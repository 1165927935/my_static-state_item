<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">
      <div class="item" id="item9">
        <a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item9.jpg" alt="" /></div>
          <div class="item_text">
            <p>正山小種 精包裝</p>
            <p>￥689 / 盒</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'teaTypeyellow',
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