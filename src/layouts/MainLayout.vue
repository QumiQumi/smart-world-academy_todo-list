<template lang="pug">
	.container
		.row
			.col-4
				Menu
			.col-8
				router-view
			DeleteModal
		
</template>
<script>
import Menu from "@/components/Menu/Menu";
import DeleteModal from "@/components/Modal/Modal";

export default {
	name: "main-layout",
	components: {
		Menu,
		DeleteModal,
	},
};
</script>
