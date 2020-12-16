import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters' 
import moduleA from './modules/moduleA'
//1. 安装插件
Vue.use(Vuex)


const state = {
    counter:1000,
    books : [
        {id : '失恋战线1', price : 100},
        {id : '失恋战线2', price : 98},
        {id : '失恋战线6', price : 189},
        {id : '失恋战线3', price : 129},
        {id : '失恋战线4', price : 29},
        {id : '失恋战线5', price : 59}
    ],
    info :{
        name: 'jamese',
        age :'19',
        height:'1.98'
    },
    activepath:'/home'
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a: moduleA
    }
})

// 3.导出store
export default store