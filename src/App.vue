<template>
  <div id="app">
   <img src="./assets/logo.png">
    {{totalPrice}}
    <!--<transition name:fade>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <router-link :to="{path:'apple'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>-->
    <!--<ul>
     <li v-for="(item,index) in list" >{{item.name}} - {{item.price}}</li>
   </ul>
   <a v-bind:href="link" v-bind:title="hello"> to baidu </a>
   <button v-on:click="addItem">addItem</button>
   <select v-model="selection">
     <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
   </select>
   <input v-model.trim="myValue" type="text">
   <button v-on:click="show=!show">Toggle</button>
   <p v-color="'red'">hello world</p>
   <div v-color2="'green'">
     <transition name="my-trans">
       <p v-show="show">i am show</p>
     </transition>-->
    <apple></apple>
    <banana></banana>
    </div>
    <!--<router-view class="main"></router-view>-->
    <!--<router-view class="left" name="title"></router-view>-->
    <!--<router-view class="right" name="image"></router-view>-->
  </div>
</template>
<script>
  import Banana from './components/banana'
  import Apple from './components/apple'

  // import Vue from 'vue'
  //import comA from './components/a'
  export default {
    name:'app',
    components:{
      Banana,
      Apple
      //comA
    },
    computed:{
      totalPrice(){
        return this.$store.state.totalPrice
      }
    }
    /*directives:{
      color:function (el,binding) {
        el.style.color=binding.value
      },
      color2:function (el,binding) {
        el.style.backgroundColor=binding.value
      }
    },
    props:{
      'number-to-do':Number
    },
  data(){
    return{
      selectOption:[
        {
          text:'apple',
          value:0
        },
        {
          text:'banana',
          value:1
        }
      ],
      show:true,
      selection:null,
      myValue:'',
      hello:'<span><img>world</span>',
      link:'http://www.baidu.com',
      list: [
        {
          name: 'apple',
          price:34
        },
        {
          name :'banana',
          price:56
        }
      ],
      objList:{
        name:'apple',
        price:34,
        color:'red',
        weight:14
      }
    }
  },
    watch:{
      myValue:function (val,oldvalue) {
        console.log(val,oldvalue)
      }
    },
    computed:{
      myValueWithoutNumber () {
        return this.myValue.replace(/\d/g,'')
  }
    },
    methods:{
    addItem(){
      this.list.push({
        name:'Pinaple',
        price:256
      })
    },
    onKeydown(){
      console.log('on key down!')
    },
      onComaMyEvent(parmfromA){
      console.log('onComaMyEvent'+ parmfromA)
      },
      this.$http.get('')
    }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
  }
  .my-trans-enter-active,.my-trans-leave-active{
    transition: opacity .5s ease-out;
  }
.my-trans-enter{
  transform: translateY(-500px);
  opacity: 0;
}
  .my-trans-leave-active{
    transform: translateY(500px);
    opacity: 0;
  }
</style>
