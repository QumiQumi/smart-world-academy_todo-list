<template lang="pug">
	.container
		.row
			.col-4
				Menu
			.col-8
				router-view
			ModalDelete
			ModalAdd
		
</template>
<script>
import Menu from "@/components/Menu/Menu";
import ModalDelete from "@/components/Modal/ModalDelete";
import ModalAdd from "@/components/Modal/ModalAdd";

export default {
	name: "main-layout",
	components: {
		Menu,
		ModalDelete,
		ModalAdd,
	},
};
</script>
