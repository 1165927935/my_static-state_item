<template>
 <div>
     <li :style="activestyle"><slot></slot>
     <div class="underline" v-if="isActive"></div>
     </li>
     <!-- <a target="_self">首頁</a> -->
 </div>
</template>

<script>
export default {
    name:'navbaritem',
    props:{
        cpath:String,
        bpath:String,
        activecolor: {
            type:String,
            default:'#909744'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.cpath)!== -1 || this.$route.path.indexOf(this.bpath)!== -1
        },
        activestyle(){
            return this.isActive ? {color : this.activecolor } : {}
        }
    },
    
    

}

</script>
<style scoped>
    /* 下划线 */
    .underline{position: absolute; height:1px ; width: 100%;  background-color: #909744; bottom: 0; left: 0; }
</style>