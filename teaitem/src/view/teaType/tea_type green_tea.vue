<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">
      <div class="item" id="item1"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item1.jpg" alt="" /></div>
          <div class="item_text">
            <p>西湖龍井 3人裝 戚國偉大師作</p>
            <p>￥480 - ￥1000</p>
          </div>
        </a>
      </div>
      <div class="item" id="item4"><a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item4.jpg" alt="" /></div>
          <div class="item_text">
            <p>清香鐵觀音 散装 高碰来大师作品</p>
            <p>￥200 - ￥1300</p>
          </div>
        </a></div>
      <div class="item" id="item10"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item10.jpg" alt="" /></div>
          <div class="item_text">
            <p>宇治原裝抹茶</p>
            <p>￥900 - ￥1500</p>
          </div>
        </a></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'teaTypeGreenTea',
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