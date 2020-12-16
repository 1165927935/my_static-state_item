<template>
  <div>
      <div id="nav_img">
      <img src="~img/nav_img.jpg" alt="" />
  </div>

  <!-- 茶叶种类模块 -->
  <div class="mlist">
    <div class="module_container">
      <div class="head">
        <div class="title">
          <p>茶葉種類</p>
          <p>Tea Species </p>
        </div>
        <ul>
          <navRight/>
        </ul>
      </div>
      <div class="container_content">
        <div class="item" id="item1"><a @click="catepush('/teaitemp/teaItem1')">
            <div class="image"> <img src="~img/item1.jpg" alt="" /></div>
            <div class="item_text">
              <p>西湖龍井 3人裝 戚國偉大師作</p>
              <p>￥480 - ￥1000</p>
            </div>
          </a>
        </div>
        <div class="item" id="item2"><a @click="catepush('/teaitemp/teaItem2')">
            <div class="image"> <img src="~img/item2.jpg" alt="" /></div>
            <div class="item_text">
              <p>普洱熟茶 三人装 </p>
              <p>邹炳良大师作品</p>
            </div>
          </a></div>
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
        <div class="item" id="item6"><a @click="catepush('/teaitemp/teaItem2')">
            <div class="image"> <img src="~img/item6.jpg" alt="" /></div>
            <div class="item_text">
              <p>福鼎白茶 散装 林振荣大师作品</p>
              <p>￥600</p>
            </div>
          </a></div>
      </div>
    </div>
  </div>

  <!-- 茶叶模块下装饰图 -->
  <div class="mcustomize">
    <div class="contentbody">
      <p>人生に、お茶の時間を。</p>
      <p>自然を望む春秋の山床</p>
    </div>
    <div class="mediabody">
      <img src="~img/teapot.gif" alt="" />
    </div>
  </div>

  <!-- 新闻咨询模块 -->
  <div class="mlist news">
    <div class="module_container">
      <div class="head">
        <div class="title">
          <p>新聞資訊</p>
          <p>News information </p>
        </div>
        <ul>
          <li><a @click="catepush('/news/newsAll')">全部</a></li>
          <li><a @click="catepush('/news/newsNew')">最新</a></li>
          <li><a @click="catepush('/news/newsAll')">更多</a></li>
        </ul>
      </div>
      <div class="container_content">
        <div class="item_block" id="item_block_left">
          <div class="text"><a @click="catepush('/newsItemP/newsItem2')">
              <p>12 - 07</p>
              <p>传统与现代碰撞，打造中国式高品质生活</p>
              <p>以“做中国好茶，做好中国茶”为己任的现代茶应运而生，试图以茶为媒，用创意打造属于当下中国人的品质生活方式，再次唤醒国人对中国茶的热爱。
              </p>
            </a>
          </div>
          <div class="text"><a @click="catepush('/newsItemP/newsItem1')">
              <p>12 - 06</p>
              <p>国宝级中国茶，献礼风尚与财富——中国茶受邀成为环球网和《第一财经》......</p>
              <p>因为所秉有的高贵品质，不同于以往茶品的创新思维，使它一举赢得了众多媒体的青睐和认可，更成为环球网和《第一财经》两家知名媒体......
              </p>
            </a>
          </div>
        </div>
        <div class="item_block" id="item_block_right">
          <div class="text">
            <a @click="catepush('/newsItemP/newsItem2')">
              <p>12 - 08</p>
              <div><img src="~img/item_block_right.jpg" alt="" /></div>
              <p>陈文波：是波普艺术在当代中国的品牌代表</p>
              <p>他说：我是都市的卧底 ，他把相对小众的艺术作品 ，
                搬进了车水马龙的时尚商圈
              </p>
              <div class="btn"><span>查看详情</span> </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 公司背景图片模块 -->
  <div class="bgshow">
    <div><img src="~img/tea_bg.png" alt="" /></div>
    <div class="container_content content_list">
      <a @click="catepush('/brand/aboutSelf')">
        <div class="item_block_1">
          <div><img src="~img/black.png" alt="" /></div>
          <div class="block_content">
            <p>北京茶叶有限公司</p>
            <p>北京茶业有限公司创立于2017年，是互联网思维、体验经济下应运而生的一家现代茶商。用创新理念，以极具创造性的手法整合中国茶行业优势资源，坚持原产地特级原料......</p>
          </div>
        </div>
      </a>
      <div class="item_block_2">
        <a @click="catepush('/brand/aboutSelf')">
          <div class="left">
            <img src="~img/bgshow_tea.png" alt="" />
            <div class="item_block_2_text">
              <p>企业理念</p>
              <p>
                企业愿景：打造世界级的中国茶品牌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品牌定位：现代派中国茶&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品牌使命：做中国好茶，做好中国茶&nbsp;&nbsp;因创新而生，为颠覆而来！
              </p>
            </div>
            <div class="btn"><span>查看详情</span></div>
          </div>
        </a>
        <div class="right">
          <a @click="catepush('/brand/washMethod')">
            <div class="company_culture clearfix">
              <div class="text">
                <p>企业文化</p>
                <p>Company Culture</p>
              </div>
              <div class="fr img"><img class="fr" src="~img/company_culture.jpg" alt="" />
              </div>
            </div>
          </a>
          <a @click="catepush('/brand/personrecruit')">
            <div class="recruit_ment clearfix">
              <div class="text">
                <p>人才招聘</p>
                <p>Recruit Ment</p>
              </div>
              <div class="img"><img class="fl" src="~img/elite_summon.jpg" alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- 企业理念人才招聘模块 -->
  <div class="tea_history module_container">
    <div>
      <p> <span>1,887</span><span>年</span></p>
      <p>创建中国茶茶叶品牌</p>
    </div>
    <div>
      <p> <span>120</span><span>万袋</span></p>
      <p>企业历史</p>
    </div>
    <div>
      <p> <span>150</span><span>年</span></p>
      <p>为北京奥运独家提供</p>
    </div>
    <div>
      <p> <span>80</span><span>余家</span></p>
      <p>全国连锁门店</p>
    </div>
  </div>

   <!-- 周边产品轮播图模块 -->
  <div class="tea_slideshow module_container">
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
              <img src="~img/tea_slide3.png" alt="" />
              <div class="item_wrapper">
                <div class="text">
                  <p>都錦味淋漬 箱詰 五号66666666（紙箱入り）</p>
                  <p>元々は京都「嵯峨野」の地で数多く栽培されていました。
                    生の状態では薄緑でまっすぐにのびています。</p>
                </div>
              </div>
            </div>
          </a>
          <a @click="catepush('/surrounditemp/surrounditem3')">
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

  <!-- 茶叶大师模块 -->
  <div class="person_intro" style="background-color: #f2f2f2">
  
          <a @click="catepush('/brand/teaMaster/teaMasterLin')">
            <div class="content module_container">
              <div class="left">
                <p style="text-align: start">鈴木 幸典</p>
                <p style="text-align: start">中国普洱茶终身成就大师 </p>
                <p style="text-align: start">
                  普洱茶是一种阳光之茶，是一种有生命的茶是一种不断变化的茶，我做了大半辈子的茶，还有许多不懂的地方需要学习。并不是我有多大的本事，而是天时地利，云南大叶种本身茶质好，内含物非常丰富，喝同样一口茶，喝到嘴里的东西就多。普洱茶养胃、防‘三高’等功效，要让不同的人群知道，让越来越多的人喜欢上普洱茶。
                </p>
                <div class="btn"><span style="font-size: 14px">人物详情</span></div>
              </div>
              <div class="right">
                <img src="~img/tea_master1..png" alt="" />
              </div>
            </div>
          </a>
  </div>

  <!-- 合作伙伴模块 -->
  <div class="partner module_container">
    <div class="head">
      <div class="title">
        <p>合作夥伴</p>
        <p>partner </p>
      </div>
    </div>
    <div id="silde_pic">
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/facebook.png" alt="" />
          <p>facebook</p>
        </div>
      </a>
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/osw.png" alt="" />
          <p>Mozilla</p>
        </div>
      </a>
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/3day3.png" alt="" />
          <p>oracle</p>
        </div>
      </a>
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/micosoft.png" alt="" />
          <p>Microsoft</p>
        </div>
      </a>
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/apple.png" alt="" />
          <p>Apple</p>
        </div>
      </a>
      <a href="https://www.baidu.com/">
        <div>
          <img src="~img/IBM.png" alt="" />
          <p>IBM</p>
        </div>
      </a>
    </div>
  </div>
 </div>
</template>

<script>
import navRight from "../../view/teaType/nav_right"

export default {
    name:'home',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
            this.$store.state.activepath=path
            this.path =path
            // console.log(this.path);
            console.log(this.$route.path);
        }
    },
    components :{
    navRight
  }
}

</script>
<style scoped>
/* 首页图片 */
#nav_img img{ width: 100%; height: 100%; margin-top: 70px;}

/* 茶叶种类部分 */
.mlist{  padding: 80px 0 100px 0;}   
.head{ display: flex; justify-content: space-between; width: 100%; }
.head::after{ content: "";border-bottom: 1px solid #f2f2f2;width: 100%;height: 1px;position: absolute;margin: 0 auto;left: 0;top: 61px;}
.head>.title>p{ text-align: left; line-height: 30px;}
.head>.title>p:nth-of-type(1){ font-size:20px; color: #555555; }
.head>.title>p:nth-of-type(2){ font-size:14px; color: #bbbbbb;}
.head>ul>li{display: inline;}
.head>ul>li>a{ display: inline-block; color: #828282; font-size: 13px; margin: 0 5px;padding: 0 12px; text-align: center;  line-height: 30px;}
.head>ul>li>a:hover{ color: #909744; }
.head>ul>li>a::after{ content: ""; display: block; position: absolute; height:1px ; width: 0;  background-color: #909744; top: 63px; left: 12px;  transition: .5s all ease; }
.head>ul>li>a:hover::after{ content: ""; display: block; position: absolute; height:1px ; width: 60%;  background-color: #909744; top: 63px; left: 12px;   }
.head>ul>li:nth-of-type(1)>a::after{ content: ""; display: block; position: absolute; height:1px ; width: 60%;  background-color: #909744; top: 63px; left: 12px;   }
.head>ul>li:nth-of-type(1)>a{color: #909744; }
.container_content{ display: flex; padding-top: 70px; flex-wrap: wrap;  justify-content: space-between; width: 1170px; margin: 0 auto;}
.module_container>.container_content>.item{ overflow: hidden;}
.module_container>.container_content>.item:nth-of-type(3n+2){ margin: 0 15px 0 ;}
.module_container>.container_content>.item>a>.item_text{ padding: 24px 20px;}
.module_container>.container_content>.item>a>.item_text>p{ text-align: center;  line-height: 30px; }
.module_container>.container_content>.item>a>.item_text>p:nth-of-type(1){ font-size: 16px; color: #333333;}
.module_container>.container_content>.item>a:hover img{ transform: scale(1.1); transition: .3s all linear;} 
.module_container>.container_content>.item>a:hover .item_text{ background-color: #909744; transition: .3s all linear; }
.module_container>.container_content>.item>a:hover .item_text>p{ color: #ffffff;}

/* 茶叶种类下面的图片模块 */
.mcustomize{  background-color: #000000;     background-position: initial;background-size: cover;background-repeat: no-repeat; width: 100%; height: 346px; color: #ffffff;}
.mcustomize>.contentbody{writing-mode: tb-rl; position: absolute; z-index: 11; left: 48%;}
.mcustomize>.contentbody>p:nth-of-type(1){ margin-top: 70px; font-size: 18px;font-family: SabonLTStd-Roman; line-height: 30px;}
.mcustomize>.contentbody>p:nth-of-type(2){ margin-top: 176px; font-size: 12px;font-family: SabonLTStd-Roman; line-height: 30px;}
.mediabody>img{ display: block; margin: 0 auto;}

/* 新闻资讯部分 */
.news .container_content{ padding: 0;}
.item_block{ width: 557.5px;  padding: 0 20px 34px 0;   }
.item_block>.text>a>p{  line-height: 26px; margin-bottom: 14px; color: #888888; }
.item_block>.text>a>p:nth-of-type(1){   font-size: 24px;font-family: helveticaneuethn, Arial;  margin-top: 78px; }
.item_block>.text>a>p:nth-of-type(2){ font-size: 16px; color: #333333;}
.item_block>.text>a:hover p:nth-of-type(2){ color: #909744; transition: .3s all linear;}
.item_block>.text>a>p:nth-of-type(3){ font-size: 13px;}
#item_block_right{ padding: 0;  }
.item_block>.text>a>div:nth-of-type(1){ overflow: hidden; height: 184.77px;margin-bottom: 20px;}
.item_block>.text>a:hover img{ transform:scale(1.1); transition: .5s all ease;}
.btn{ border: 1px solid #000000; width: 116px; height: 42px; box-sizing: border-box; text-align: center;line-height: 42px; margin-top: 20px;  }
.item_block>.text>a:hover .btn{ border:1px solid #909744 ; border-left: 0;   transition: .3s all ease; color: #909744;  }
.item_block>.text>a:hover span{ margin-left: -57px;   transition: .6s all ease;}


/* 茶叶背景部分 */
.bgshow>div:nth-of-type(1){ overflow: hidden;position: absolute; top: 0; left: 0; width: 100%;}
.bgshow>div:nth-of-type(1)>img{ z-index: 0;}
.bgshow>.container_content>a>.item_block_1{ display: flex; justify-content: space-between; margin-top: 283px;}
.bgshow>.container_content>a>.item_block_1>div>img{ display: block; }
.bgshow>.container_content>a>.item_block_1>.block_content{width: calc(100% - 222px);box-sizing: border-box;padding: 60px 84px 60px;  color: #ffffff; background-color: #ffffff;}
.bgshow>.container_content>a>.item_block_1>.block_content>p:nth-of-type(1){color: #333333; font-size: 18px;line-height: 18px; margin-bottom: 24px;}
.bgshow>.container_content>a>.item_block_1>.block_content>p:nth-of-type(2){color: #999999; font-size: 13px;line-height: 26px;}
.bgshow>.container_content>.item_block_2{ display: flex; justify-content: space-between; width: 100%;}
.bgshow>.container_content>a>.item_block_1:hover p:nth-of-type(1){color: #909744 ; transition: .3s all linear; }
.bgshow>.container_content>.item_block_2>a>.left>.item_block_2_text{ padding: 40px 50px ; width: 722px; box-sizing: border-box;}
.bgshow>.container_content>.item_block_2>a>.left>.item_block_2_text>p:nth-of-type(1){ font-size: 18px;line-height: 18px;  color: #333333;}
.bgshow>.container_content>.item_block_2>a>.left>.item_block_2_text>p:nth-of-type(2){ margin-top: 20px ;  font-size: 13px;line-height: 26px;}
.bgshow .btn{ margin: 0 0 30px 48px;  color: #646464;}
.bgshow>.container_content>.item_block_2>a:hover .item_block_2_text>p:nth-of-type(1){ color: #909744; transition: .3s all ease; }
.bgshow>.container_content>.item_block_2>a:hover .btn{ border:1px solid #909744 ; border-left: 0; transition: .3s all ease; color: #909744;}
.bgshow>.container_content>.item_block_2>a:hover span{ margin-left: -57px;   transition: .6s all ease;}
.bgshow .right{width: 448px;  height: 224px; background-color: #ffffff; }
.bgshow .right>a>div>div>img{  display: block; }
.bgshow .right>a>div>.text{ position: absolute; top: 18%; right: 17%; color: #ffffff; z-index: 2;}
.bgshow .right>a>div>.text>p:nth-of-type(1){ font-size: 18px;}
.bgshow .right>a>div>.text>p:nth-of-type(2){ color: #acacac; font: 14px Arial, "微软雅黑";}
.bgshow .right>a>.recruit_ment>.text{  top: 17%; right: 73%;}
.bgshow .right>a>.recruit_ment>.text>p:nth-of-type(2){ color: #c9c3c3;}
.bgshow .right>a>div:hover .text{ transform: scale(1.1); transition: .5s all linear;}
.bgshow .right>a>div:hover img{ transform: scale(1.2); transition: .5s all linear;}
.bgshow .right>a>div>.img{  width: 224px; height: 224px; overflow: hidden; }


/* 茶叶历史 */
.tea_history{ display: flex; justify-content: space-between;  margin-top: 145px;}
.tea_history>div{ width: 25%;}
.tea_history>div>p{text-align: center; }
.tea_history>div>p:nth-of-type(1)>span:nth-of-type(1){ color: #666666; font-weight: normal; font-size: 44px;font-family: helveticaneuethn, Arial;text-align: center;margin-top: 15px;line-height: 52px;vertical-align: top;}
.tea_history>div>p:nth-of-type(1)>span:nth-of-type(2){     position: relative;top: -1px;left: 3px;font-size: 14px;vertical-align: top;}

/* 周边产品轮播图 */
.tea_slideshow{ margin-top: 200px; display: flex; justify-content: space-between;}
.tea_slideshow a>div{  width: 379.333px; overflow: hidden;}
.tea_slideshow a:hover{ cursor: pointer; }
.tea_slideshow a:hover img{ transform: scale(1.2);  transition: .3s all linear;}
.tea_slideshow a>div>.item_wrapper{ background-color:#909744 ; opacity: 0;  padding: 15px; height: 214px; position: absolute; left: 0;top: 0;}
.tea_slideshow a>div>.item_wrapper>.text{ border: 1px solid rgba(255,255,255,0.3); width: 350px; height: 190px; box-sizing: border-box; padding: 35px 25px;}
.tea_slideshow a>div>.item_wrapper>.text>p{text-align: center; color: #ffffff; font-size: 16px;}
.tea_slideshow a>div>.item_wrapper>.text>p:nth-of-type(2){margin-top: 15px; opacity: 0.4; font-size: 13px; line-height: 26px;}
.tea_slideshow a:hover .item_wrapper{opacity: 1; transition: .5s all linear;}

/* 人物介绍 */
.person_intro{ width: 100%; background-color: #F2F2F2; margin-top: 100px; height: 538px; overflow: hidden;}
.person_intro a>.content{  display: flex; justify-content: space-between;}
.person_intro a>.content>.left>p:nth-of-type(1){ color: #333;  line-height: 30px; font-size: 18px;margin-top: 80px;}
.person_intro a>.content>.left>p:nth-of-type(2){     color: #9fa0a0; line-height: 23px; font-size: 13px; }
.person_intro a>.content>.left>p:nth-of-type(3){  margin-top: 36px; font-size: 13px; line-height: 26px;overflow: hidden;text-overflow: ellipsis;-webkit-line-clamp:2;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;     color: #1d1e1f; opacity: 0.7; margin-bottom: 50px;}
.person_intro a>.content>.left{ padding-right: 145px; width: 740px;box-sizing: border-box;}
.person_intro a:hover .btn{ border:1px solid #909744 ;  border-left: 0;  transition: .5s all ease; color: #909744;}
.person_intro a:hover span{ margin-left: -57px;   transition: .6s all ease;}
.person_intro a:hover .left>p:nth-of-type(1){  transition: .5s all ease; color: #909744;}
.person_intro a:hover .left>p:nth-of-type(2){  transition: .5s all ease; color:#1d1e1f; opacity: 0.7;}


/* 合作夥伴 */
.partner{ margin-bottom: 110px;}
.partner>.head{ margin: 70px 0 ;}
.partner>#silde_pic{ display: flex; justify-content: space-between;}
.partner>#silde_pic>a>div{ width: 183px;}
.partner>#silde_pic>a>div>img{  height: 83px; width: 183px; box-sizing: border-box; border: 1px solid rgba(170, 170, 170, 0.2);}
.partner>#silde_pic>a>div>p{ text-align: center; }
.partner>#silde_pic>a:hover img{ border:1px solid #909744 ;  transition: .3s all linear;}
</style>