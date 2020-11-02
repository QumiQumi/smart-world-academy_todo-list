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
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>
<style lang="scss">
@import "./components/Menu/menu.scss";
</style>
