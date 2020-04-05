import Vue from 'vue'
import Router from 'vue-router'
import shop_detail from '@/pages/shop/shopDetail'
import navigation from '@/pages/navigation'

import analysis from '@/pages/shop/analysis'
import shop_add from '@/pages/shop/shopAdd'
import order_list from '@/pages/order/orderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navigation',
      component: navigation,
      children:[
        {
          path: '/',
          name: 'analysis',
          component: analysis
       },
        {
        
          path: '/shop_detail',
          name: 'shop_detail',
          component: shop_detail
        
        },{
            path: '/shop_add',
            name: 'shop_add',
            component: shop_add
        },
        {
          path: '/order_list',
          name: 'order_list',
          component: order_list
      },
       
      ]
    },
   
   
  ]
})
