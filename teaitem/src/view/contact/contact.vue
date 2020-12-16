<template>
 <div>
     <!-- 联系我们内容模块 -->
  <div class="content">
    <p class="title">聯繫</p>
    <p class="title english">Contact</p>
  </div>

  <!-- 地图模块 -->
  <div class="map">
    <p><iframe src="http://f.amap.com/DKDY_0F82PxG" scrolling="no" width="1200" align="" height="500" frameborder="0"></iframe></p>
  </div>

  <!-- 公司简介模块 -->
  <div class="postbody module_container">
    <div class="item">
      <p>网站建设文化传播有限公司</p>
      <p>Beijing WEBSITE Culture Communication Co. Ltd.</p>
      <p><br></p>
      <p>总部地址：北京市朝阳区世贸商务楼2688室</p>
      <p>总部电话：+86 10 69887650</p>
      <p>电子邮箱：website@webs.com</p>
      <p>邮政编码：100024</p>
      <p><a href="https://www.baidu.com/">https://www.baidu.com/</a></p>
      <p><br></p>
    </div>
    <div class="item">
      <p>深圳网站文化传播有限公司</p>
      <p>Shenzhen WEBSITE Culture Communication Co. Ltd.</p>
      <p><br></p>
      <p>总部地址：深圳市福田区世贸商务楼A栋-606室 </p>
      <p>总部电话：+86 10 88667920</p>
      <p>电子邮箱：futian@webs.com</p>
      <p>邮政编码：100024</p>
      <p><br></p>
      <p><br></p>
    </div>
    <div class="item">
      <p>香港网站文化传播有限公司</p>
      <p>Xianggang WEBSITE Culture Communication Co. Ltd.</p>
      <p><br></p>
      <p>总部地址：香港九龙区中心商务楼8888室</p>
      <p>总部电话：+86 10 69667880</p>
      <p>电子邮箱：joseph@webs.com</p>
      <p>邮政编码：100024</p>
      <p><br></p>
      <p><br></p>
    </div>

  </div>
 </div>
</template>

<script>
export default {
    name:'contact',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>


/* 地图内容 */
.content{ width: 1170px; margin: 0 auto;margin-top: 130px;     margin-bottom: 60px;}
.title{    text-align: center;     font-size: 20px;     line-height: 30px;     color: #555;}
.english{  font-size: 14px; color: #bbbbbb;}
.map{  width: 1170px; margin: 0 auto; }



/* 广告内容部分 */
.module_container{ width: 1170px;margin: 0 auto; padding-top: 12px;} 
.postbody{ display: flex; margin-bottom: 150px;}
.postbody a{ color: #666666;}
.postbody>.item>p{line-height: 24px; font-size: 13px; color: #666666; }
.postbody>.item>p:first-of-type{  font-size: 16px; color: #bfbfbf; font-weight: bold;}
.postbody>.item>p:nth-of-type(2){ font-size: 12px; color: #595959;} 
.postbody>.item{ margin-right: 105px;}


</style>