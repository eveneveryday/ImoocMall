<template>
    <div class="apple">
      <h1>{{msg}}</h1>
      <!--<p>{{$route.params.color}}</p>
      <button @click="getParam">get param</button>
      <router-view></router-view>-->
      <button @click="addOne">add one</button>
      <button @click="minusOne">minus one</button>
    </div>
</template>

<script>
    export default {
        name: "apple",
      data(){
          return{
            msg:'i am an apple',
            price:5
          }
      },
      methods:{
          getParam(){
            console.log(this.$route.params)
          },
        addOne(){
            this.$store.commit('increment',this.price)
        },
        minusOne(){
            this.$store.commit('decrement',this.price)
        }
      }
    }
</script>

<style scoped>

</style>
