<template lang="pug">
	.container
		.row
			.col-4.p-0
				Menu
			.col-8.p-0.d-flex.flex-column
				router-view
				Footer
			ModalDelete
		
</template>
<script>
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import ModalDelete from "@/components/Modal/ModalDelete";

export default {
	name: "main-layout",
	components: {
		Menu,
		ModalDelete,
		Footer,
	},
};
</script>
