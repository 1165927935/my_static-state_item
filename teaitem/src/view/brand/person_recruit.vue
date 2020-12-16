<template>
 <div class="content">
    <p id="tltle">人才招聘</p>
    <div class="text">
      <p>
        中日医院2017年护理应届毕业生招聘通知
      </p>
      <p>
        一、资格要求
        <br>
        1.道德品质良好；
        <br>
        2.身体健康；
        <br>
        3.符合《优爱医院毕业生接收工作管理办法》的基本条件，接收毕业生要求全日制本科起点，部分优秀全日制大专毕业生也可适当考虑；
        <br>
        4.成绩优良，研究生须通过国家英语六级考试，本科生通过国家英语四级考试。
      </p>
      <p>
        二、招聘安排
        <br>
        2. 应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：ui@163.com。
        <br>
        2.面试时间另行通知（具体时间以短信形式通知）。
      </p>
      <p>
        三、应聘方式
        <br>
        1.登陆优爱医院网站（www.xxx.com.cn），在首页“医院新闻”最新动态和工作动态栏目下“招聘专栏”下载《中日医院2017年护理毕业生应聘报名表》（附件1）和《中日医院2017年护理毕业生信息登记表》（附件2），并按要求填写。按要求成功投递电子报名表及登记表视为应聘有效，不接收纸质简历应聘；
        <br>
        2. 应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：ui@163.com。
      </p>
      <p>
        3. 投递的邮件及其附件请按以下要求命名：
        <br>
        （1）邮件名称：2017护理+姓名+毕业院校；
        <br>
        （2）应聘报名表：2017护理+姓名+毕业院校+报名表；
        <br>
        （3）信息登记表：2017护理+姓名+毕业院校+登记表。
      </p>
      <p>
        4.优爱医院人事处联系电话：<span class="tel">86888888</span>
      </p>
    </div>
    <div class="item_block">
      <div class="img">
        <img src="~img/recriut_pic.jpg" alt="">
      </div>
      <div class="word">
        <p><br></p>
        <p> “千人计划”招聘启事（2016年7月4日） </p>
        <p><br></p>
        <p>学习经历：1980年至1986年，就读于北京医科大学，1986年获医学学士学位；1986年至1991年，在中国协和医科大学以及北京协和医院攻读博士学位，1991年获临床医学博士学位。</p>
        <p><br></p>
        <p>职务经历：在1995年至1999年期间在美国进修做博士后研究。曾任北京协和医院心内科副主任及兼任北京协和医院临床药理研究中心主任。现任北京协和医院副院长兼临床药理研究中心主任。</p>
      </div>
    </div>
    <div class="item_block">
      <div class="img">
        <img src="~img/recriut_pic.jpg" alt="">
      </div>
      <div class="word">
        <p><br></p>
        <p> 医院护士招聘启事 </p>
        <p><br></p>
        <p>学习经历：1980年至1986年，就读于北京医科大学，1986年获医学学士学位；1986年至1991年，在中国协和医科大学以及北京协和医院攻读博士学位，1991年获临床医学博士学位。</p>
        <p><br></p>
        <p>职务经历：在1995年至1999年期间在美国进修做博士后研究。曾任北京协和医院心内科副主任及兼任北京协和医院临床药理研究中心主任。现任北京协和医院副院长兼临床药理研究中心主任。</p>
      </div>
    </div>
    <div class="item_block">
      <div class="img">
        <img src="~img/recriut_pic.jpg" alt="">
      </div>
      <div class="word">
        <p><br></p>
        <p> 2016年应届毕业生（第三批）招聘通知 </p>
        <p><br></p>
        <p>学习经历：1980年至1986年，就读于北京医科大学，1986年获医学学士学位；1986年至1991年，在中国协和医科大学以及北京协和医院攻读博士学位，1991年获临床医学博士学位。</p>
        <p><br></p>
        <p>职务经历：在1995年至1999年期间在美国进修做博士后研究。曾任北京协和医院心内科副主任及兼任北京协和医院临床药理研究中心主任。现任北京协和医院副院长兼临床药理研究中心主任。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'personRecruit',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>

/* 人才招聘内容 */
.content{ width: 1170px; margin: 0 auto;margin-top: 130px;     margin-bottom: 60px;}
#tltle{    text-align: center;     font-size: 20px;     line-height: 30px;     color: #555; margin-bottom: 50px; }
.content>.text{ font-size: 13px; color: #666666; line-height: 24px;}
.content>.text>p:nth-of-type(1){ font-size: 16px; font-weight: 800; margin-bottom: 30px; }
.content>.text>p{ margin-bottom: 30px;}
.content>.text>p:last-of-type{ margin-bottom: 100px; }
.content .tel{      color: #ff7c42; font-size: 14px; font-weight: 800; }
.content .item_block{ display: flex; justify-content: space-between;  margin-bottom: 50px;}
.content .item_block>.word{ line-height: 24px; color: #666666; font-size: 13px;}
.content .item_block>.word>p:nth-of-type(2){ font-size: 16px;font-weight: 800;}
</style>