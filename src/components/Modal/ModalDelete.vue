<template lang="pug">
	//- Modal
	#deleteModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='deleteModalTitle' aria-hidden='true')
		.modal-dialog.modal-dialog-centered(role='document')
			.modal-content
				.modal-header
					h5#deleteModalTitle.modal-title Удаление элемента
					button.close(type='button' data-dismiss='modal' aria-label='Close')
						span(aria-hidden='true') ×
				.modal-body
					| Вы действительно хотите удалить 
					em "{{$store.state.itemToDelete.title}}"
					| ?
				.modal-footer
					button.btn.btn-secondary(type='button' data-dismiss='modal') Отменить
					button.btn.btn-danger(type='button' @click="onConfirm($store.state.itemToDelete.id)") Удалить
</template>

<script>
const $ = require("jquery");
import { API } from "../../firebase";

export default {
	name: "deleteModal",
	methods: {
		onConfirm(id) {
			API.deleteList(id);

			$("#deleteModal").modal("hide");
		},
	},
};
</script>
