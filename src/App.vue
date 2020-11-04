<template lang="pug">
	component(:is="layout")
		div#app
			router-view

</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
	name: "app",
	data() {
		return {
			newTodo: "",
			newList: "",
		};
	},
	methods: {},
	computed: {
		layout() {
			return this.$route.meta.layout + "-layout";
		},
	},
	components: {
		MainLayout,
	},
	beforeCreate: function() {
		this.$store.dispatch("setLists");
	},
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>

