/*var app = new Vue({
  el: '#app',
  data:{
    message:'Hello Vue!'
  }
});
var app2 = new Vue({
  el: '#app2',
  data:{
    message:'页面加载于'+ new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: '#app3',
  data:{
    seen:true
  }
});
var app4 = new Vue({
  el:'#app4',
  data:{
    todos:[
      {text:'学习JavaScript'},
      {text:'学习Vue'},
      {text:'整个牛项目'}
    ]
}
});
var app5 = new Vue({
  el: '#app5',
  data:{
    message:'Hello Vue.js!'
  },
  methods:{
    reverseMessage:function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
var app6 = new Vue({
  el: '#app6',
  data:{
    message:'Hello Vue!'
  }
});*/
Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
});

var app7 = new Vue({
  el: '#app7',
  data:{
    groceryList:[
      {id:0,text:'蔬菜'},
      {id:1,text:'奶酪'},
      {id:2,text:'水果'}
    ]
  }
});

var obj = {
  foo:'bar'
}
Object.freeze(obj)
new Vue({
  el:'#app8',
  data:obj
})

