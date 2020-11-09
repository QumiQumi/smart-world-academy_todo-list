<template lang="pug">
	.footer.mt-auto.border-top.d-flex.flex-wrap.align-items-center.justify-content-between.p-2
		.footer__input.m-1: input.form-control(type="text" placeholder="Сходить в магаз" @keyup.enter="addTodo()" v-model="newTodo")
		.d-flex.flex-nowrap.align-items-center.input-group-text.mr-auto.border.border-warning.m-1
			input#is-immediate(type='checkbox' aria-label='Checkbox for following text input' v-model="isImmediate") 
			label.m-0.ml-1(for="is-immediate") Срочное
		button.btn.btn-primary.m-1(type='button'  @click="addTodo()") Добавить дело
</template>

<script>
import { API } from "../../firebase";

export default {
	name: "Footer",
	data: () => ({
		newTodo: "",
		isImmediate: false,
	}),

	methods: {
		async addTodo() {
			if (this.newTodo && this.$store.state.activeList) {
				let title = this.newTodo;
				let isImmediate = this.isImmediate;
				this.isImmediate = false;
				this.newTodo = "";
				await this.$store.dispatch("addTodo", { title, isImmediate });
			}
		},
	},
};
</script>
<style lang="scss">
@import "./footer.scss";
</style>
