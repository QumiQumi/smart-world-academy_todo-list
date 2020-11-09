<template lang="pug">
	div#app
		component(:is="layout")
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
			return (this.$route.meta.layout || "main") + "-layout";
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
<style lang="scss">
@import "./assets/style.scss";
</style>
