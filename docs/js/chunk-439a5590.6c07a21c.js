(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439a5590"],{"140d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list p-3 d-flex flex-column h-100"},[t.$store.state.activeList?o("div",{staticClass:"list-group list-group-flush m-1"},t._l(t.todos,(function(e,s){return o("div",{staticClass:"list-group-item list-group-item-action d-flex align-items-center border border-primary mt-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.getters.getTodoByIndex(s).isDone,expression:"$store.getters.getTodoByIndex(index).isDone"}],attrs:{id:"todo-"+s,type:"checkbox"},domProps:{checked:Array.isArray(t.$store.getters.getTodoByIndex(s).isDone)?t._i(t.$store.getters.getTodoByIndex(s).isDone,null)>-1:t.$store.getters.getTodoByIndex(s).isDone},on:{click:function(e){return t.toggleTodo(s)},change:function(e){var o=t.$store.getters.getTodoByIndex(s).isDone,i=e.target,n=!!i.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);i.checked?a<0&&t.$set(t.$store.getters.getTodoByIndex(s),"isDone",o.concat([r])):a>-1&&t.$set(t.$store.getters.getTodoByIndex(s),"isDone",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.$store.getters.getTodoByIndex(s),"isDone",n)}}}),o("label",{staticClass:"m-0 ml-1",attrs:{for:"todo-"+s}},[t._v(t._s(e.title)+" ")]),o("div",{staticClass:"ml-auto"},[t.$store.getters.getTodoByIndex(s).isImmediate?o("font-awesome-icon",{staticClass:"ml-2 todo-list__bolt-icon text-warning",attrs:{icon:"bolt"}}):t._e(),o("span",{staticClass:"ml-2"},[t._v(t._s(t.todoDate(s)))]),o("font-awesome-icon",{staticClass:"ml-3 todo-list__delete-icon",attrs:{icon:"trash","data-toggle":"modal","data-target":"#deleteModal"},on:{click:function(o){return t.sendTodoToModal(s,e.title,t.isTodo=!0)}}})],1)])})),0):o("div",{staticClass:"d-flex align-items-center justify-content-center h-100"},[o("h1",[t._v("Кликай на лист и вперед!")])])])},i=[],n={name:"TodoList",computed:{todos:function(){return this.$store.state.activeList.todos}},methods:{todoDate:function(t){var e={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric"};return this.$store.getters.getTodoByIndex(t).date.toDate().toLocaleString("ru",e)},toggleTodo:function(t){this.$store.dispatch("toggleTodo",t)},sendTodoToModal:function(t,e,o){this.$store.dispatch("setItemToDelete",{index:t,title:e,isTodo:o})}}},r=n,a=(o("a6c2"),o("2877")),d=Object(a["a"])(r,s,i,!1,null,null,null);e["default"]=d.exports},1959:function(t,e,o){},a6c2:function(t,e,o){"use strict";o("1959")}}]);
//# sourceMappingURL=chunk-439a5590.6c07a21c.js.map