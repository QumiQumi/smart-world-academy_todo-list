<template lang="pug">
	//- Modal
	#{{props.id}}.modal.fade(tabindex='-1' role='dialog' aria-labelledby='deleteModalTitle' aria-hidden='true')
		.modal-dialog.modal-dialog-centered(role='document')
			.modal-content
				.modal-header
				h5.modalTitle {{props.title}}
					h5#deleteModalTitle.modal-title Удаление элемента
					button.close(type='button' data-dismiss='modal' aria-label='Close')
						span(aria-hidden='true') ×
				.modal-body
					span {{props.text}}
					//- span(v-if="$store.state.itemToDelete.isTodo") Вы действительно хотите удалить задачу 
					//- span(v-else) Вы действительно хотите удалить список 
					em "{{$store.state.itemToDelete.title}}"
					| ?
				.modal-footer
					button.btn.btn-secondary(type='button' data-dismiss='modal') Отменить
					button.btn.btn-danger(type='button' @click="onConfirm()") Удалить
</template>

<script>
const $ = require("jquery");
import { API } from "../../firebase";

export default {
	name: "deleteModal",
	props: {
		id: String,
		title: String,
		text: String,
		buttons: Array,
	},
	methods: {
		onConfirm() {
			let itemToDelete = this.$store.state.itemToDelete;
			let activeList = this.$store.state.activeList;
			if (itemToDelete.isTodo)
				API.deleteTodo(activeList.id, itemToDelete.index);
			else API.deleteList(activeList.id);

			$("#deleteModal").modal("hide");
		},
	},
};
</script>
