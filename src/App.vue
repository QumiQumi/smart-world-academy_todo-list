<template lang="pug">
	component(:is="layout")
		div#app
			router-view
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
	computed: {
		layout() {
			console.log(this.$route.meta);
			return "main-layout";
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
