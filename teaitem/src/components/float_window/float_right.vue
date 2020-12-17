<template>
  <div class="float_right">
    <!-- 右侧在线咨询模块 -->
    <transition name="lx"><div id="online_lx" style=" margin-right: 0px;" v-show="lxshow">
      <div id="olx_head" >
        在线咨询
        <a id="out" @click="lxchange" >
          <span class="iconfont iconjiaochacross14"></span>
        </a>
      </div>
      <div id="olx_qq">
        <a href="tencent://message/?uin=2852263145&Site=uemo&Menu=yes">1165927935</a>
      </div>
      <div id="olx_tel">
        <div>
          <span class="iconfont icondianhua"></span>
          联系电话
        </div>
        <p>010-17823663</p>
      </div>
    </div></transition>

    <!-- 咨询底下分享模块 -->
    <transition name="lx"><div class="share" id="olx_head_out" @click="lxchange" v-show="!lxshow" >
      <a >
        <span class="iconfont iconweixin1"></span>
      </a>
    </div></transition>

    <div class="share">
      <a href="https://www.baidu.com/">
        <span class="iconfont iconweibo1"></span>
      </a>
      <a href="https://www.baidu.com/">
        <span class="iconfont iconshouji"></span>
      </a>
    </div>

    <transition name="lx"><div class="share go_top" v-show="goTopShow" @click="goTop">
      <a href="javascript:window.scrollTo(0,0)">
        <span class="iconfont iconjiantou-shang"></span>
      </a>
    </div></transition>
  </div>
</template> 

<script>
export default {
  name: "float_right",
  data() {
    return {
      scrollTop: "",
      goTopShow: false,
      lxshow: true,
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 500) {
        this.goTopShow = true;
      }else {
        this.goTopShow = false;
      }
      console.log(this.scrollTop);
    },
    goTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    lxchange(){
      this.lxshow = ! this.lxshow
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
@import "../../assets/font1/iconfont";

.lx-enter-active {transition: all 1s ease;}
.lx-leave-active {transition: all 1s ease;}
.lx-enter, .lx-fade-leave-to{opacity: 0; transform: translateX(25px);}
.lx-fade-enter, .lx-leave-to{opacity: 0; transform: translateX(25px);}





#online_lx {
  position: fixed;
  right: 0px;
  bottom: 210px;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0 5px 9px rgba(4, 0, 0, 0.17);
}
#olx_head {
  padding: 20px;
  line-height: 16px;
  height: 56px;
  width: 180px;
  box-sizing: border-box;
  background: #909744;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#olx_qq {
  border-bottom: 1px solid rgba(170, 170, 170, 0.2);
  box-sizing: border-box;
  width: 180px;
  height: 42px;
}
#olx_qq > a {
  height: 18px;
  padding: 12px 30px;
  display: flex;
  align-items: center;
}
#olx_tel {
  height: 82px;
  width: 180px;
  box-sizing: border-box;
  padding: 20px 30px;
}
#olx_tel > div {
  display: flex;
  align-items: center;
  font: 12px Arial, "微软雅黑";
  color: #666;
  margin-bottom: 8px;
}
#olx_tel > div > span {
  margin-right: 20px;
  font-size: 14px;
}
#olx_tel > p {
  font-family: HELVETICANEUELTPRO-THEX;
  font-size: 16px;
}
.share {
  z-index: 1111;
  position: fixed;
  right: 0px;
  bottom: 125px;
  width: 42px;
  background-color: #ffffff;
}
.share > a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
}
.share > a:hover {
  background-color: #909744;
  color: #ffffff;
  transition: 0.2s linear;
  border: 1px solid #909744;
}
#olx_head > a > span {
  color: #ffffff;
}
#olx_head > a:hover {
  transform: rotate(90deg) scale(1.2);
  transition: 0.5s all linear;
}
.go_top {
  bottom: 83px;
}

#olx_head_out{
  bottom: 209px;
}
</style>