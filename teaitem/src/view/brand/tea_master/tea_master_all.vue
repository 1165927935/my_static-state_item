<template>
 <div>
  <!-- 页面内容部分 -->
  <div class="tea_master">
    <div class="person_intro">
      <a @click="catepush('/brand/teaMaster/teaMasterLin')">
        <div class="content module_container">
          <div class="left">
            <p>鈴木 幸典</p>
            <p>中国普洱茶终身成就大师 </p>
            <p>
              普洱茶是一种阳光之茶，是一种有生命的茶是一种不断变化的茶，我做了大半辈子的茶，还有许多不懂的地方需要学习。并不是我有多大的本事，而是天时地利，云南大叶种本身茶质好，内含物非常丰富，喝同样一口茶，喝到嘴里的东西就多。普洱茶养胃、防‘三高’等功效，要让不同的人群知道，让越来越多的人喜欢上普洱茶。
            </p>
          </div>
          <div class="right">
            <img src="~img/tea_master1..png" alt="" />
          </div>
        </div>
      </a>
    </div>
    <div class="person_intro">
      <a @click="catepush('/brand/teaMaster/teaMasterWu')">
        <div class="content module_container">
          <div class="left">
            <p>武野绍鸥</p>
            <p>日本茶道创始人之一 </p>
            <p>
              工艺设计的基本任务是保证生产的产品能符合设计的要求，制定优质、高产、低耗的产品制造工艺规程，制订出产品的试制和正式生产所需要的全部工艺文件。包括：对产品图纸的工艺分析和审核、拟定加工方案、编制工艺规程、以及工艺装备的设计和制造等。
            </p>
          </div>
          <div class="right">
            <img src="~img/tea_master2.png" alt="" />
          </div>
        </div>
      </a>
    </div>
    <div class="person_intro">
      <a @click="catepush('/brand/teaMaster/teaMasterZhang')">
        <div class="content module_container">
          <div class="left">
            <p>张绍谦</p>
            <p>安溪乌龙茶制作技艺代表性传承人 </p>
            <p>生长在铁观音的故乡，历经百余年传承，做好铁观音是我天生的责任做茶跟人的性格是一样的，每一天都要用心加努力</p>
          </div>
          <div class="right">
            <img src="~img/tea_master3.png" alt="" />
          </div>
        </div>
      </a>
    </div>
    <div class="person_intro">
      <a @click="catepush('/brand/teaMaster/teaMasterGao')">
        <div class="content module_container">
          <div class="left">
            <p>高碰来</p>
            <p>安溪乌龙茶制作技艺代表性传承人 </p>
            <p>
              做青是铁观音制作工艺的关键步骤，主要包括晒青、凉青、摇青、摊青四道工序。通过做青，使茶叶嫩梗中所含有的芳香物质、氨基酸和儿茶素随水分扩散到叶片，并转化成更高更浓的香味物质，这是铁观音高香的关键因素之一。具体的做青时间、次数和轻重程度都要依鲜叶本身和温度、湿度、气压、气流而定，即所谓“看青做青，看天做青”。
            </p>
          </div>
          <div class="right">
            <img src="~img/tea_master4.jpg" alt="" />
          </div>
        </div>
      </a>
    </div>
  </div>

   <!-- 页面选择部分 -->
  <div class="page">
    <a href="">1</a>
  </div>
 </div>
</template>

<script>
export default {
    name:'teaMasterAll',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>



/* 制茶大师内容 */
.person_intro{ width: 1170px; background-color: #ffffff;  height: 260px;     margin: 0 auto 20px; border-top: 1px solid rgba(170, 170, 170, 0.2);border-bottom: 1px solid rgba(170, 170, 170, 0.2);}
.person_intro>a{ display: block;  width: 1060px; margin: 0 auto; }
.person_intro>a>.content{  display: flex; justify-content: space-between;  height: 100%; box-sizing: border-box; }
.person_intro>a>.content>.left>p:nth-of-type(1){ color: #333;  line-height: 30px; font-size: 18px;margin-top: 60px;}
.person_intro>a>.content>.left>p:nth-of-type(2){   color: #9fa0a0; line-height: 23px; font-size: 13px; }
.person_intro>a>.content>.left>p:nth-of-type(3){ height: 52px; box-sizing: border-box;  margin-top: 36px; font-size: 13px; line-height: 26px;overflow: hidden;text-overflow: ellipsis;-webkit-line-clamp:2;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;     color: #1d1e1f; opacity: 0.7; }
.person_intro>a>.content>.left{ padding-right: 145px; width: 740px;box-sizing: border-box;}
.person_intro>a:hover .left>p:nth-of-type(1){  transition: .5s all ease; color: #909744;}
.person_intro>a:hover .left>p:nth-of-type(2){  transition: .5s all ease; color:#1d1e1f; opacity: 0.7;}
.person_intro>a>.content>.right{ height: 260px; overflow: hidden; }
.module_container{ width: 1060px;margin: 0 auto;  }   
.person_intro>a>.content>.left>p:nth-of-type(2)::after{content: "";border-top: 1px solid rgba(0,0,0,.3);opacity: 0.3;width: 0;position: absolute;margin-bottom: 10px;transition: all 0.45s ease; top: 60px;left: 0;}
.person_intro>a:hover  .left>p:nth-of-type(2)::after{ width: 600px; opacity: 0.6;}
.person_intro>a:hover  .left>p:nth-of-type(3){margin-top:55px; transition: all 0.45s ease;}

/* 页面选择部分 */
.page{ width: 1170px; margin: 50px auto  100px; }
.page>a{ display: inline-block; width: 40px; height: 40px; border: 1px solid #999; line-height: 40px;text-align: center; }
.page>a:hover{ background-color: #909744 ; color: #ffffff; }
.page>a:nth-of-type(1){ background-color: #909744 ; color: #ffffff; }
</style>