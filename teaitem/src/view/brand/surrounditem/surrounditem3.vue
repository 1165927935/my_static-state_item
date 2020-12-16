<template>
 <!-- 周边产品内容模块 -->
  <div class="surround_content module_container">
    <div class="left">
      <div class="text">
        <p class="title" >薄緑でまっすぐにのびています。</p>
        <p class="subtitle"><span>2017</span>-<span>07</span>-<span>11</span></p>
        <p class="description">薄緑でまっすぐにのびています。培されていました。<br>
          生の状態では薄緑でまっすぐにのびています。</p>
      </div>
      <div class="listcontent ">
        <h3>相关内容</h3>
        <div class="tea_link">
          <a @click="catepush('/brand/surroundProduct')">茶壶</a>
        </div>
        <a class="link_content"  @click="catepush('/surrounditemp/surrounditem1')">
          <div>
            <img src="~img/tea_silde1.jpg" alt="" />
            <div class="item_wrapper">
              <div class="text">
                <p>元々は京都「嵯峨野」の地で数多く栽培されていました。生の状態では薄緑でまっすぐにのびています。現在、嵯峨野以外で栽培されたきゅうりを使用していますが、緻密な肉質で柔らく歯切れの良いのが特徴です。</p>
                <p>生の状態では薄緑でまっすぐにのびています。
                  元々は京都「嵯峨野」の地で数多く栽培されていました。</p>
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
          <img src="~img/item2_detail1.jpg" alt=""><img src="~img/item2_detail2.jpg" alt="">
        </div>
        <p><br></p>
        <p>
          元々は京都「嵯峨野」の地で数多く栽培されていました。生の状態では薄緑でまっすぐにのびています。現在、嵯峨野以外で栽培されたきゅうりを使用していますが、緻密な肉質で柔らく歯切れの良いのが特徴です。
        </p>
      </div>

      <div class="link">        
          <a @click="catepush('/surrounditemp/surrounditem2')" class="link_block_right">
            <div class="word" >
              <span class="title" >都錦味淋漬 樽詰 四号（木樽入り）</span>
              <br>
              <span class="subtitle">而不像天然纤维占用土地，加工费时费力、产量有限。是化学纤维的简称。它是利用高分子化合物为原料制作而成的纤维的纺织品。</span>
            </div>
            <span class="iconfont iconjiantouyou"></span>
          </a>
      </div>
    </div>


    
  </div>
</template>

<script>
export default {
    name:'surrounditem3',
    methods:{
        catepush(path){
            this.$router.push(path)
        }
    },

}

</script>
<style scoped>
  @import "../../../assets/css/surrounditem_common.css";
  .link{justify-content: flex-end;}
</style>