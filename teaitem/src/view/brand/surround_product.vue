<template>
 <div><!-- 产品大图模块 -->
  <div class="bgshow"></div>

  <!-- 小导航模块 -->
  <div class="nav">
    <div class="left ">您的位置:&nbsp;
      <ul>
        <li><a @click="catepush('/home')">首頁&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
        <li><a @click="catepush('/brand')">品牌&nbsp;&nbsp;</a><img src="~img/arrow_right.png" alt=""></li>
        <li><a @click="catepush('/brand/surroundProduct')">&nbsp;&nbsp;周邊產品</a></li>
      </ul>
    </div>
  </div>

   <!-- 页面内容部分 -->
  <div class="content">
    <a @click="catepush('/surrounditemp/surrounditem1')">
      <div>
        <img src="~img/tea_silde1.jpg" alt="" />
        <div class="item_wrapper">
          <div class="text">
            <p>都錦味淋漬 きゅうり</p>
            <p>元々は京都「嵯峨野」の地で数多く栽培されていました。
              生の状態では薄緑でまっすぐにのびています。</p>
          </div>
        </div>
      </div>
    </a>

    <a @click="catepush('/surrounditemp/surrounditem2')">
      <div>
        <img src="~img/tea_slide2.jpg" alt="" />
        <div class="item_wrapper">
          <div class="text">
            <p>都錦味淋漬 箱詰 五号（紙箱入り）</p>
            <p>元々は京都「嵯峨野」の地で数多く栽培されていました。
              生の状態では薄緑でまっすぐにのびています。
            </p>
          </div>
        </div>
      </div>
    </a>
    <a @click="catepush('/surrounditemp/surrounditem3')">
      <div>
        <img src="~img/tea_slide3.png" alt="" />
        <div class="item_wrapper">
          <div class="text">
            <p>都錦味淋漬 樽詰 四号（木樽入り）</p>
            <p>而不像天然纤维占用土地，加工费时费力、产量有限。是化学纤维的简称。它是利用高分子化合物为原料制作而成的纤维的纺织品。
            </p>
          </div>
        </div>
      </div>
    </a>
    <a @click="catepush('/surrounditemp/surrounditem1')">
      <div>
        <img src="~img/tea_slide4.jpg" alt="" />
        <div class="item_wrapper">
          <div class="text">
            <p>都錦味淋漬 箱詰 五号（紙箱入り）
            </p>
            <p>元々は京都「嵯峨野」の地で数多く栽培されていました。
              生の状態では薄緑でまっすぐにのびています。
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- 页面选择部分 -->
  <div class="page">
    <a href="">1</a>
  </div>
  </div>
</template>

<script>
export default {
    name:'surroundProduct',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>
/* 頂部背景圖片 */
.bgshow{ margin-top: 70px; background-image: url(~img/surround_product_bgshow.jpg); height: 380px; }

/* 小导航栏 */
.nav {width: 1170px;margin: 35px auto 60px; font-size: 12px; color: #666; height: 45px; line-height: 45px; display: flex; justify-content: space-between; }
.nav ul{ display: inline;  }
.nav li{ display: inline-flex;  align-items: center; }
.left a{color: #666;}
.left img{ height: 15px; width: 15px;display: inline-block;}
.left a:hover{ color: #909744; }
.left li:nth-of-type(3)>a{ color: #909744; }
.nav>.right li{display: inline;}
.nav>.right li>a{ display: inline-block; color: #828282; font-size: 13px; margin: 0 5px;padding: 0 12px; text-align: center;  line-height: 30px;}
.nav>.right li>a:hover{ color: #909744; }
.nav>.right li>a::after{ content: ""; display: block; position: absolute; height:1px ; width: 0;  background-color: #909744; top: 63px; left: 12px;  transition: .5s all ease; }
.nav>.right li>a:hover::after{ content: ""; display: block; position: absolute; height:1px ; width: 60%;  background-color: #909744; top: 63px; left: 12px;   }
.nav>.right li:nth-of-type(1)>a::after{ content: ""; display: block; position: absolute; height:1px ; width: 60%;  background-color: #909744; top: 63px; left: 12px;   }
.nav>.right li:nth-of-type(1)>a{color: #909744; }

/* 内容 */
.content{ width: 1170px; margin: 70px auto ; display: flex; flex-wrap: wrap;}
.content>a>div{ margin:  0 15px 20px 0; width: 374.333px; overflow: hidden;}
.content>a:hover{ cursor: pointer; }
.content>a:hover img{ transform: scale(1.2);  transition: .3s all linear;}
.content>a>div>.item_wrapper{ background-color:#909744 ; opacity: 0; width: 380px; padding: 15px; height: 214px; position: absolute; left: 0;top: 0;}
.content>a>div>.item_wrapper>.text{ border: 1px solid rgba(255,255,255,0.3); width: 350px; height: 190px; box-sizing: border-box; padding: 35px 25px;}
.content>a>div>.item_wrapper>.text>p{text-align: center; color: #ffffff; font-size: 16px;}
.content>a>div>.item_wrapper>.text>p:nth-of-type(2){margin-top: 15px; opacity: 0.4; font-size: 13px; line-height: 26px;}
.content>a:hover .item_wrapper{opacity: 1; transition: .5s all linear;}

/* 页面选择部分 */
.page{ width: 1170px; margin: 50px auto  100px; }
.page>a{ display: inline-block; width: 40px; height: 40px; border: 1px solid #999; line-height: 40px;text-align: center; }
.page>a:hover{ background-color: #909744 ; color: #ffffff; }
.page>a:nth-of-type(1){ background-color: #909744 ; color: #ffffff; }
</style>