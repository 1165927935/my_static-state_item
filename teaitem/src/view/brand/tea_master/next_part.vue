<template>
  <!-- 页面选择部分 -->
        <div class="page">
          <a @click="catepush(path)">next_one</a>
        </div>
</template>

<script>
export default {
    name:'next_part',
    props:{
      path : String
    },
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>

/* 页面选择部分 */
.page{ position: absolute; bottom: 0; right: 0; }
.page>a{ display: inline-block; width: 80px; height: 40px; border: 1px solid #000000;; line-height: 40px;text-align: center; color: #000000;}
.page>a:hover{ background-color: #909744 ; color: #ffffff; transition: .3s all ease; border: 1px solid #909744;}
</style>