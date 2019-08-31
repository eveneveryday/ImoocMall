// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnalysis from './pages/detail/analysis'
import DetailPublish from './pages/detail/publish'
import DetailForecast from './pages/detail/forecast'
import DetailCount from './pages/detail/count'
import OrderListPage from './pages/orderList'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component: IndexPage
    },
    {
      path:'/orderList',
      component:OrderListPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnalysis
        },
        {
          path:'publish',
          component:DetailPublish
        },
        {
          path:'forecast',
          component:DetailForecast
        },
        {
          path:'count',
          component:DetailCount
        }
      ]
    }
  ]
})
/*Vue.config.productionTip = false;
Vue.use(Vuerouter)
Vue.use(Vuex)
//Vue.use(VueResource)

let store = new Vuex.Store({
  state:{
    totalPrice:0
  },
  mutations:{
    increment(state,price){
      state.totalPrice +=price
    },
    decrement(state,price){
      state.totalPrice -=price
    }
  }
})
let router=new Vuerouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/apple'
    },
    {
      path:'/banana',
      component:Banana
    },
    {
      path:'/apple',
      component:Apple,
      /!*children:[
        {
          path:'/red',
          component:RedApple
        }
      ]*!/
    }
  ]
})*/

// Vue.component('my-header',{
//   template:'<p>this is my header</p>'
// })

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template:'<Layout/>',
  components: { Layout }
})
