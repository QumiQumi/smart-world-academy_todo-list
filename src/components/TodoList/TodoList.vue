<template lang="pug">
	.todo-list.p-3.d-flex.flex-column.h-100
		.list-group.list-group-flush.m-1(v-if="$store.state.activeList")
			.list-group-item.list-group-item-action.d-flex.align-items-center.border.border-primary.mt-2(
				v-for="(todo, index) in todos"
				@click="toggleTodo(index)"
			)
				input(:id="'todo-'+index" type='checkbox' v-model="$store.getters.getTodoByIndex(index).isDone")
				label.m-0.ml-1(v-bind:for="'todo-'+index") {{todo.title}}	
				.ml-auto
					font-awesome-icon.ml-2.todo-list__bolt-icon.text-warning(icon="bolt" v-if="$store.getters.getTodoByIndex(index).isImmediate")
					span.ml-2 {{todoDate(index)}}
					font-awesome-icon.ml-3.todo-list__delete-icon(icon="trash" data-toggle='modal' data-target='#deleteModal' @click="sendTodoToModal(index,todo.title, isTodo=true)" )
		h1(v-else) Выбери лист
			
</template>
<script>
export default {
	name: "TodoList",

	computed: {
		id() {
			return this.$route.params.listId;
		},
		list() {
			return this.$store.state.activeList;
		},
		todos() {
			return this.$store.state.activeList.todos;
		},
	},
	methods: {
		todoDate(index) {
			var options = {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				timezone: "UTC",
				hour: "numeric",
				minute: "numeric",
			};
			return this.$store.getters
				.getTodoByIndex(index)
				.date.toDate()
				.toLocaleString("ru", options);
		},
		toggleTodo(index) {
			this.$store.dispatch("toggleTodo", index);
		},
		sendTodoToModal(index, title, isTodo) {
			this.$store.dispatch("setItemToDelete", { index, title, isTodo });
		},
	},
};
</script>
