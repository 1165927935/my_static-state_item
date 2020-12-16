<template>
 <!-- 周边产品内容模块 -->
  <div class="surround_content module_container">
    <div class="left">
      <div class="text">
        <p class="title">都錦味淋漬 きゅうり</p>
        <p class="subtitle"><span>2017</span>-<span>07</span>-<span>11</span></p>
        <p class="description">元々は京都「嵯峨野」の地で数多く栽培されていました。<br>
          生の状態では薄緑でまっすぐにのびています。</p>
      </div>
      <div class="listcontent ">
        <h3>相关内容</h3>
        <div class="tea_link">
          <a @click="catepush('/brand/surroundProduct')">茶壶</a>
        </div>
        <a class="link_content" @click="catepush('/surrounditemp/surrounditem2')">
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
        <a class="link_content" @click="catepush('/surrounditemp/surrounditem2')">
          <div>
            <img src="~img/tea_slide2.jpg" alt="" />
            <div class="item_wrapper">
              <div class="text">
                <p>都錦味淋漬 きゅうり</p>
                <p>元々は京都「嵯峨野」の地で数多く栽培されていました。
                  生の状態では薄緑でまっすぐにのびています。</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="right">
      <div class="postbody">
        <p>
          <strong>
            <span>緻密な肉質で柔らく歯切れの良いのが特徴です</span>
          </strong>
        </p>
        <p><br></p>
        <p>
          元々は京都「嵯峨野」の地で数多く栽培されていました。
          <br>
          生の状態では薄緑でまっすぐにのびています。現在、嵯峨野以外で栽培されたきゅうりを使用していますが、緻密な肉質で柔らく歯切れの良いのが特徴です。
        </p>
        <p><br></p>
        <div class="pic">
          <img src="~img/surround_item1_pic1.jpg" alt=""><img src="~img/surround_item1_pic2.jpg" alt="">
        </div>
        <p><br></p>
        <p>
          元々は京都「嵯峨野」の地で数多く栽培されていました。生の状態では薄緑でまっすぐにのびています。現在、嵯峨野以外で栽培されたきゅうりを使用していますが、緻密な肉質で柔らく歯切れの良いのが特徴です。
        </p>
      </div>
      <div class="link">
        <a class="link_block_left" @click="catepush('/surrounditemp/surrounditem2')">
          <span class="iconfont iconjiantouzuo"></span>
          <div class="word">
            <span class="title">都錦味淋漬 きゅうり</span>
            <br>
            <span class="subtitle">this is subtitle</span>
          </div>
        </a>
        <a @click="catepush('/surrounditemp/surrounditem3')" class="link_block_right">
          <div class="word">
            <span class="title">都錦味淋漬 きゅうり</span>
            <br>
            <span class="subtitle">以精致工业力量将艺术品限量创造 PRUDENCE INVESTMENT LIMITED</span>
          </div>
          <span class="iconfont iconjiantouyou"></span>
        </a>
    </div>
    </div>
      


  </div>
</template>

<script>
export default {
    name:'surrounditem1',
    methods:{
        catepush(path){
            this.$router.push(path)
        }
    },

}

</script>
<style scoped>
  @import "../../../assets/css/surrounditem_common.css";
</style>