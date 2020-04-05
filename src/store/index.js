import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({

    mutations:{

    },
    actions:{}
})

/**
 * 查询模块
 */
const modulesContext=require.context('@/store/modules',true,/\.js$/);

 /**
  * 创建模块
  */

createStoreModules(modulesContext);


/**
 * 创建模块函数
 */

 function createStoreModules(fileArr){
    fileArr.keys().forEach(element => {
        store.registerModule(element.replace(/(^\.\/)|(\.js$)/g,''),fileArr(element).default)
    });
 }
export default store