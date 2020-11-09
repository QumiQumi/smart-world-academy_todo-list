import Vue from "vue";
import Vuex from "vuex";
import { API, db } from "../firebase";
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		lists: null,
		activeList: null,
		itemToDelete: {},
		filter: "SHOW_ACTIVE",
	},
	getters: {
		getLists: ({ lists, filter }) => {
			if (lists)
				switch (filter) {
					case "SHOW_ALL":
						return lists;
					case "SHOW_COMPLETED": {
						return lists.filter((list) => list.isCompleted);
					}
					case "SHOW_ACTIVE":
						return lists.filter((list) => !list.isCompleted);
					default:
						throw new Error("Unknown filter: " + filter);
				}
		},
		getList: ({ lists }) => (id) => {
			if (lists && id) return lists.find((list) => list.id == id);
		},
		getFilter: ({ filter }) => {
			return filter;
		},
		getTodoByIndex: (state) => (index) => {
			return state.activeList.todos[index];
		},
	},
	actions: {
		setLists: ({ commit }) => {
			commit("setLists");
		},
		setFilter: ({ commit }, filter) => {
			commit("setFilter", filter);
		},
		setActiveList: ({ commit }, id) => {
			commit("setActiveList", id);
		},
		setItemToDelete: (context, item) => {
			context.commit("setItemToDelete", item);
		},
		addTodo: (context, todo) => {
			context.commit("addTodo", todo);
		},
		toggleTodo: (context, index) => {
			context.commit("toggleTodo", index);
		},
	},
	mutations: {
		setLists: (state) => {
			let lists = [];
			db.collection("Lists")
				.orderBy("title")
				.onSnapshot((snapshot) => {
					lists = [];
					snapshot.forEach((doc) => {
						let isCompleted = false;
						if (doc.data().todos.length != 0)
							isCompleted =
								doc.data().todos.length ==
								doc.data().todos.filter((todo) => todo.isDone)
									.length
									? true
									: false;
						let newList = {
							id: doc.id,
							title: doc.data().title,
							isCompleted: isCompleted,
							todos: doc.data().todos,
						};
						lists.push(newList);
						if (state.activeList && doc.id == state.activeList.id) {
							state.activeList = newList;
						}
					});

					state.lists = lists;
				});
		},
		setActiveList: (state, id) => {
			state.activeList = state.lists.find((list) => list.id == id);
		},
		setFilter: (state, filter) => {
			state.filter = filter;
		},
		setItemToDelete: (state, item) => {
			state.itemToDelete = item;
		},
		addTodo: (state, todo) => {
			API.addTodo(state.activeList.id, todo.title, todo.isImmediate);
		},
		toggleTodo: (state, index) => {
			API.toggleTodo(state.activeList.id, index);
		},
	},
});
