<template lang="pug">
	component(:is="layout")
		div#app
			router-view
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import { todosCollection, listsCollection } from "./firebase";
export default {
	name: "app",
	data() {
		return {
			newTodo: "",
			newList: "",
		};
	},
	methods: {
		addTodo() {
			todosCollection
				.add({
					text: this.newTodo,
					completed: false,
					createdAt: new Date(),
				})
				.then(function(docRef) {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch(function(error) {
					console.error("Error adding document: ", error);
				});
			this.newTodo = "";
		},
		addList() {
			listsCollection
				.add({
					text: this.newList,
					completed: false,
					createdAt: new Date(),
				})
				.then(function(docRef) {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch(function(error) {
					console.error("Error adding document: ", error);
				});
			this.newList = "";
		},
	},
	computed: {
		layout() {
			return this.$route.meta.layout + "-layout";
		},
	},
	components: {
		MainLayout,
	},
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>
<style lang="scss">
@import "./components/Menu/menu.scss";
</style>
