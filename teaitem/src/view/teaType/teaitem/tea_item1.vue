<template>
 <!-- 页面内容部分 -->
  <div class="content module_container ">
    <div class="content_up">
      <div class="left">
        <div class="item_img">
              <div ><img src="~img/item1_swiper1.jpg" alt=""></div>
        </div>
        <p>
          西湖龙井优选西湖龙井一级核心产区明前一芽一叶原料，每一片都由戚国伟炒茶工作室手工炒制而成，戚国伟先生多年制茶经验打磨出的手工辉锅提香绝技使得茶品品质尤为出众。其外形扁平光滑，色泽嫩绿鲜润；冲泡后芽叶挺立，清香持久，着实为西湖龙井中的标杆级产品。
        </p>
        <div class="content_down">
          <div class="down_img">
            <img src="~img/item1_detail.jpg" alt="">
          </div>
          <div class="down_text">
            <p>看外形</p>
            <p><br></p>
            <p>扁平光滑，苗锋尖削，芽长于叶，
              <br>
              挺直如剑，色泽黄绿鲜艳，体表无茸毛。
              <br>
              <br>
            </p>
            <p><br></p>
            <p>See shape
              <br>
            </p>
            <p><br></p>
            <p>Flat and smooth, Miao Feng pointed, bud leaf,
              <br>
              As straight as the sword, bright yellow green color, surface glabrous.
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <p class="title">西湖龍井 3人裝 戚國偉大師作</p>
        <p class="subtitle">￥480 - ￥1000</p>
        <div class="description">
          <p>茶类：绿茶&nbsp;&nbsp;</p>
          <p>原料：茶鲜叶&nbsp;&nbsp;&nbsp;</p>
          <p>产地：浙江省杭州市&nbsp;&nbsp;&nbsp;</p>
          <p>等级：特级（AAA）</p>
          <p><br></p>
          <p><a
              href="https://weidian.com/item.html?itemID=1593025191&recommonTag=relreclistol12839989866742358528&reqID=SIMILARPRODUCT_XIANGSI&fromRecommon=1593011970">微店购买</a>
          </p>
        </div>

        <div class="listcontent">
          <h3>相关内容</h3>
          <div class="tea_link">
            <a @click="catepush('/teatype/green')">绿茶</a>
            <a @click="catepush('/teaitemp/teaItem1')">戚国伟</a>
            <a @click="catepush('/teatype/red')">紅茶</a>
          </div>
          <div class="item_content">
            <div class="item" id="item1">
              <a @click="catepush('/teaitemp/teaItem2')">
                <div class="image"> <img src="~img/item1.jpg" alt="" /></div>
                <div class="item_text">
                  <p>西湖龍井 3人裝 戚國偉大師作</p>
                  <p>￥480 - ￥1000</p>
                </div>
              </a>
            </div>
            <div class="item" id="item9">
              <a @click="catepush('/teaitemp/teaItem2')">
                <div class="image">
                  <img src="~img/item9.jpg" alt="" />
                </div>
                <div class="item_text">
                  <p>正山小種 精包裝</p>
                  <p>￥689 / 盒</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'teaItem1',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>

.module_container{ width: 1170px;margin: 0 auto; padding-top: 12px;} 
/* 项目内容 */
.content>.content_up{ display: flex; }
.content>.content_up>.left>.item_img{ width: 790px;height: 490px; box-sizing: border-box; }
.content>.content_up img{width: 100%;height: 100%;}
.content>.content_up>.left>p:last-of-type{ font-size: 13px; color: #666666; margin-top: 30px; line-height: 24px;}
.content>.content_up>.right{padding: 0 0  50px 50px; }
.content>.content_up .title{    color: #444;font-size: 16px;line-height: 20px;}
.content>.content_up .subtitle{    color: #999;font-size: 12px;margin-top: 4px;line-height: 14px; }
.content>.content_up .description{ margin: 20px 0; line-height: 30px;font-size: 13px;color: #929292; }
.content>.content_up .description>p>a{ transition: all 0.6s ease; border: 1px solid #dbdbdb; background-color: #fff; color: #555; height: 40px; padding: 0 30px; line-height: 40px;text-align: center; display: inline-block; margin-top: 20px;}
.content>.content_up .description>p>a:hover{background-color: #909744;border-color: #909744;color: #ffffff;}
.content>.content_up .listcontent{      border-top: 1px solid rgba(170, 170, 170, 0.2);}
.content>.content_up .listcontent>h3{     font-size: 14px; padding: 30px 0; color: #666;}
.content>.content_up .listcontent>.tea_link{margin-bottom: 30px; }
.content>.content_up .listcontent>.tea_link>a{  margin-right: 10px; padding: 0 14px;line-height: 26px;border: 1px solid rgba(170, 170, 170, 0.2);color: #828282;background-color: transparent;transition: all 0.6s ease;}
.content>.content_up .listcontent>.tea_link>a:hover{border-color: #909744;background-color: #909744;color: #fff;	}
.content .item{ overflow: hidden; width: 150px; height: 179px; box-sizing: border-box;     border: 1px solid rgba(170, 170, 170, 0.2); margin: 0 10px 20px 0;}
.content .item>a>.item_text{ padding: 24px 20px;}
.content .item>a>.item_text>p{ line-height: 30px; overflow: hidden; text-align: center; white-space: nowrap; text-overflow: ellipsis;}
.content .item>a>.item_text>p:nth-of-type(1){ font-size: 13px; color: #333333;}
.content .item>a:hover img{ transform: scale(1.1); transition: .3s all linear;} 
.content .item>a:hover .item_text{ background-color: #909744; transition: .3s all linear; }
.content .item>a:hover .item_text>p{ color: #ffffff;}
.content .item_content{ display: flex;}
.content .content_down{display: flex; margin-top: 80px;}
.content .down_img>img{margin-right: 34px; width: 330px; height: 264px; margin-bottom: 200px;}
.content .down_text{ font-size: 13px; color: #666666; line-height: 24px; }

</style>