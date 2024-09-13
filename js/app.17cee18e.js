(function(){"use strict";var t={7301:function(t,e,o){var n=o(144),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shadow p-3 rounded",attrs:{id:"app"}},[e("h1",{staticClass:"display-4 mb-3 fw-bold"},[t._v("Todolist")]),e("AddtoDo",{on:{"add-todo":t.addToDoItem}}),e("Todos",{attrs:{"todo-entries":t.todoEntries},on:{"delete-todo":t.deleteToDoItem,"toggle-status":t.toggleStatusItem}})],1)},s=[],i=(o(560),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row flex-column flex-md-row justify-content-between g-3 mb-5"},[e("div",{staticClass:"col-auto col-md-8 col-lg-6"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-auto col-md-4 col-lg-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.todoLevel,expression:"todoLevel"}],staticClass:"form-select",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.todoLevel=e.target.multiple?o:o[0]}}},[e("option",{attrs:{value:"normal"}},[t._v("一般")]),e("option",{attrs:{value:"important"}},[t._v("重要")]),e("option",{attrs:{value:"urgent"}},[t._v("緊急")])])]),e("div",{staticClass:"col-auto col-lg-3"},[e("button",{staticClass:"btn btn-success px-3 d-block w-100",on:{click:t.addTodo}},[t._v(" 增加 ")])])])}),r=[],a={name:"AddTodoButton",data(){return{title:"",todoLevel:"normal"}},methods:{addTodo(){if(""===this.title)return alert("請輸入事項！");const t=(new Date).toLocaleString(),e={title:this.title,level:this.todoLevel,completed:!1,timeStamp:t};this.$emit("add-todo",e),this.title="",this.todoLevel="normal"}}},d=a,c=o(1001),u=(0,c.Z)(d,i,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"list-unstyled mb-0"},[t._l(t.todoEntries,(function(o,n){return e("li",{key:n,staticClass:"mb-3"},[e("ToDoItem",{attrs:{"todo-item":o},on:{delete:function(e){return t.deleteItem(n)},toggle:function(e){return t.toggleStatus(n)}}})],1)})),0==t.todoEntries.length?e("li",[e("h2",{staticClass:"text-secondary fs-4 text-center"},[t._v("尚無任何事項")])]):t._e()],2)])},f=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column flex-xl-row flex-wrap gap-2 justify-content-sm-between align-items-xl-center border border-2 rounded px-3 py-2"},[e("p",{staticClass:"mb-0 fs-5",class:[t.getLevelClass(t.todoItem.level),{completed:t.todoItem.completed}]},[t._v(" "+t._s(t.todoItem.title)+" ")]),e("div",{staticClass:"align-self-end d-flex align-items-center justify-content-end gap-2 flex-wrap"},[e("span",{staticClass:"text-body-tertiary fw-light time-stamp"},[t._v(t._s(t.todoItem.timeStamp))]),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:t.toggleStatus}},[t._v(" "+t._s(t.todoItem.completed?"標示未完成":"標示已完成")+" ")]),e("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.deleteTodo}},[t._v("刪除")])])])])},g=[],h={name:"TodoItem",props:{todoItem:Object},methods:{deleteTodo(){this.$emit("delete")},getLevelClass(t){return"important"===t?"important":"urgent"===t?"urgent":void 0},toggleStatus(){this.$emit("toggle")}}},b=h,y=(0,c.Z)(b,v,g,!1,null,null,null),_=y.exports,x={name:"ToDos",components:{ToDoItem:_},props:{todoEntries:Array},methods:{deleteItem(t){this.$emit("delete-todo",t)},toggleStatus(t){this.$emit("toggle-status",t)}}},w=x,C=(0,c.Z)(w,p,f,!1,null,null,null),S=C.exports,T={name:"App",components:{AddtoDo:m,Todos:S},data(){return{todoEntries:[]}},methods:{addToDoItem(t){this.todoEntries.push(t)},deleteToDoItem(t){this.todoEntries.splice(t,1)},toggleStatusItem(t){const e=(new Date).toLocaleString();this.todoEntries[t].timeStamp=e,this.todoEntries[t].completed=!this.todoEntries[t].completed},loadFromLocalStorage(){const t=localStorage.getItem("todoEntries");t&&(this.todoEntries=JSON.parse(t))}},watch:{todoEntries:{handler(t){localStorage.setItem("todoEntries",JSON.stringify(t))},deep:!0}},created(){this.loadFromLocalStorage()}},I=T,O=(0,c.Z)(I,l,s,!1,null,null,null),E=O.exports;o(8877);n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(E)}).$mount("#app")}},e={};function o(n){var l=e[n];if(void 0!==l)return l.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,l,s){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],l=t[c][1],s=t[c][2];for(var r=!0,a=0;a<n.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(r=!1,s<i&&(i=s));if(r){t.splice(c--,1);var d=l();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,l,s]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,s,i=n[0],r=n[1],a=n[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);if(a)var c=a(o)}for(e&&e(n);d<i.length;d++)s=i[d],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},n=self["webpackChunkVue_todolist"]=self["webpackChunkVue_todolist"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7301)}));n=o.O(n)})();
//# sourceMappingURL=app.17cee18e.js.map