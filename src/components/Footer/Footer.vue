<template lang="pug">
	.footer.mt-auto.border-top.d-flex.flex-wrap.align-items-center.justify-content-between.border-right.p-2
		.footer__input.m-1: input.form-control(type="text" placeholder="Сходить в магаз" @keyup.enter="addTodo()" v-model="newTask")
		.d-flex.flex-nowrap.align-items-center.input-group-text.mr-auto.border.border-warning.m-1
			input#is-urgent(type='checkbox' aria-label='Checkbox for following text input') 
			label.m-0.ml-1(for="is-urgent") Срочное
		button.btn.btn-primary.m-1(type='button'  @click="addTodo()") Добавить дело
</template>

<script>
export default {
	name: "Footer",
	data: () => ({
		newTask: null,
	}),

	methods: {
		addTodo: function() {},
	},
};
</script>
<style lang="scss">
@import "./footer.scss";
</style>
