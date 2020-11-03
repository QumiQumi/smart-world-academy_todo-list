import Vue from "vue";
import Vuex from "vuex";
// import { API } from "../firebase";
import { db } from "../firebase";
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "./filters";
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		lists: null,
		itemToDelete: {},
		filter: "SHOW_ALL",
	},
	getters: {
		getLists: ({ lists, filter }) => {
			console.log(filter);
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
		getFilter: ({ filter }) => {
			return filter;
		},
	},
	actions: {
		setLists: ({ commit }) => {
			commit("setLists");
		},
		setFilter: ({ commit }, filter) => {
			commit("setFilter", filter);
		},
		setItemToDelete: (context, item) => {
			context.commit("setItemToDelete", item);
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
						lists.push({
							id: doc.id,
							title: doc.data().title,
							isCompleted: doc.data().isCompleted,
						});
					});

					state.lists = lists;
				});
		},
		setFilter: (state, filter) => {
			state.filter = filter;
		},
		setItemToDelete: (state, item) => {
			state.itemToDelete = item;
		},
	},
});
