<template lang="pug">
	//- Modal
	#addListModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='addModalTitle' aria-hidden='true')
		.modal-dialog.modal-dialog-centered(role='document')
			.modal-content
				.modal-header
					h5#addModalTitle.modal-title Введите название списка
					button.close(type='button' data-dismiss='modal' aria-label='Close')
						span(aria-hidden='true') ×
				.modal-body
					input.form-control.mt-2(type="text" placeholder="Списочек" aria-label="Search" v-model="newList")

				.modal-footer
					button.btn.btn-secondary(type='button' data-dismiss='modal') Отменить
					button.btn.btn-primary(type='button' @click="onConfirm()" ) Добавить список
</template>

<script>
const $ = require("jquery");
import { API } from "../../firebase";

export default {
	name: "addListModal",
	data: () => ({
		newList: "",
	}),
	methods: {
		async onConfirm() {
			let value = this.newList;
			this.newList = "";
			if (value) {
				await API.addList(value);
			}
			$("#addListModal").modal("hide");
		},
	},
};
</script>
