<template>
 <div>
     <li><a @click="catepush('/teatype/teaTypeAll')">全部</a></li>
      <li><a @click="catepush('/teatype/green')">綠茶</a></li>
      <li><a @click="catepush('/teatype/red')">紅茶</a></li>
      <li><a @click="catepush('/teatype/oolong')">烏龍茶</a></li>
      <li><a @click="catepush('/teatype/yellow')">黃茶</a></li>
      <li><a @click="catepush('/teatype/white')">白茶</a></li>
      <li><a @click="catepush('/teatype/black')">黑茶</a></li>
 </div>
</template>

<script>
export default {
    name:'navRight',
    methods:{
        catepush(path){
            // console.log(path);
            this.$router.push(path)
        }
    },
}

</script>
<style scoped>

 li{display: inline;}
 li>a{ display: inline-block; color: #828282; font-size: 13px; margin: 0 5px;padding: 0 12px; text-align: center;  line-height: 30px;}
 li>a:hover{ color: #909744; }
 li>a::after{ content: ""; display: block; position: absolute; height:1px ; width: 0;  background-color: #909744; top: 63px; left: 12px;  transition: .5s all ease; }
 li:nth-of-type(1)>a{color: #909744; }
</style>