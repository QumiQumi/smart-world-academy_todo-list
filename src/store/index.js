import Vue from "vue";
import Vuex from "vuex";
// import { API } from "../firebase";
import { db } from "../firebase";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		lists: null,
		itemToDelete: {},
	},
	getters: {
		getLists: (state) => {
			return state.lists;
		},
	},
	actions: {
		setLists: ({ commit }) => {
			commit("setLists");
		},
		setItemToDelete: (context, item) => {
			context.commit("setItemToDelete", item);
		},
	},
	mutations: {
		setLists: (state) => {
			// API.getLists();
			// state.lists = lists;
			// console.log(state.lists);

			let lists = [];

			db.collection("Lists")
				.orderBy("title")
				.onSnapshot((snapshot) => {
					lists = [];
					snapshot.forEach((doc) => {
						lists.push({ id: doc.id, title: doc.data().title });
					});

					state.lists = lists;
				});
		},
		setItemToDelete: (state, item) => {
			state.itemToDelete = item;
		},
	},
});
