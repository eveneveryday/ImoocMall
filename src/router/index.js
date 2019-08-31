import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Title from "../views/Title"

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        image:Image
      }
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component: Cart
    }
  ]
})
