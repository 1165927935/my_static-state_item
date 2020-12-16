<template>
  <!-- 页面内容部分 -->
  <div class="content">
    <div class="container_content">
      <div  class="item" id="item1"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item1.jpg" alt="" /></div>
          <div class="item_text">
            <p>西湖龍井 3人裝 戚國偉大師作</p>
            <p>￥480 - ￥1000</p>
          </div>
        </a>
      </div>
      <div class="item" id="item2">
        <a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item2.jpg" alt="" /></div>
          <div class="item_text">
            <p>普洱熟茶 三人装 </p>
            <p>邹炳良大师作品</p>
          </div>
        </a>
      </div>
      <div class="item" id="item3"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item3.jpg" alt="" /></div>
          <div class="item_text">
            <p>武夷大紅袍 散裝 王明順大師作品</p>
            <p>￥480 - ￥1000</p>
          </div>
        </a></div>
      <div class="item" id="item4"><a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item4.jpg" alt="" /></div>
          <div class="item_text">
            <p>清香鐵觀音 散装 高碰来大师作品</p>
            <p>￥200 - ￥1300</p>
          </div>
        </a></div>
      <div class="item" id="item5"><a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item5.jpg" alt="" /></div>
          <div class="item_text">
            <p>茉莉花茶 四人装 林乃荣大师作品</p>
            <p>￥200 - ￥500</p>
          </div>
        </a></div>
      <div class="item" id="item6">
        <a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item6.jpg" alt="" /></div>
          <div class="item_text">
            <p>福鼎白茶 散装 林振荣大师作品</p>
            <p>￥600</p>
          </div>
        </a>
      </div>
      <div class="item" id="item7">
        <a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item7.jpg" alt="" /></div>
          <div class="item_text">
            <p>烏龍茶 豪華精裝</p>
            <p>￥5000</p>
          </div>
        </a>
      </div>
      <div class="item" id="item8">
        <a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item8.jpg" alt="" /></div>
          <div class="item_text">
            <p>精選茉莉</p>
            <p>￥300 / 斤</p>
          </div>
        </a>
      </div>
      <div class="item" id="item9">
        <a @click="catepush('/teaitemp/teaItem1')">
          <div class="image"> <img src="~img/item9.jpg" alt="" /></div>
          <div class="item_text">
            <p>正山小種 精包裝</p>
            <p>￥689 / 盒</p>
          </div>
        </a>
      </div>
      <div class="item" id="item10">
        <a @click="catepush('/teaitemp/teaItem2')">
          <div class="image"> <img src="~img/item10.jpg" alt="" /></div>
          <div class="item_text">
            <p>宇治原裝抹茶</p>
            <p>￥900 - ￥1500</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  
</template>

<script>

import navRight from './nav_right'
export default {
    name:'teaType',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
    components:{
        navRight
    }
    
}

</script>
<style >
/* 茶叶组件内容共同CSS文件 */
@import "../../assets/css/teaTypeCommon.css";
</style>