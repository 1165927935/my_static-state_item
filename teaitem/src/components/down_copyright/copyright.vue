<template>
     <!-- 底部版权模块 -->
  <div class="fonter">
    <p>
      <span>COPYRIGHT (©) 2020 mo005_5124 - 企业类网站. </span>
    </p>
  </div>
</template>

<script>
export default {
    name:'fonter'
}

</script>
<style scoped>
.fonter{  z-index: 11111; display: block; height: 44px; color: #666666;font-size: 13px;  width: 100vw; text-overflow: ellipsis;overflow: hidden;white-space: nowrap; line-height: 44px;     background-color: #ffffff; position: fixed; bottom: 0; left: 0;}
.fonter span{ margin-left: 15%;}
</style>