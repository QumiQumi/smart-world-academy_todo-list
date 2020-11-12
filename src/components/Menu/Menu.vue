<template lang="pug">
	.sticky-top.d-flex.flex-column.align-items-center.menu.border-right

		//- Фильтр
		button#filter-lists.btn.dropdown-toggle.mt-2(
			type='button' data-toggle='dropdown' 
			aria-haspopup='true' aria-expanded='false') {{filterText}}
		.dropdown-menu(aria-labelledby='filter-lists')
			button.dropdown-item(
				type='button'
				v-for="filter in filters"
				:key="filter.filter"
				@click="setFilter(filter.filter)"
				
				) {{filter.text}}

		//- Список списков дел
		.list-group.list-group-flush.mt-3.menu__list.border-top
			
			router-link.list-group-item.list-group-item-action.d-flex.align-items-center.border-bottom(
					:to="{name:'TodoList',params:{listId:list.id}}" 
					v-for="list in this.$store.getters.getLists" 
					:key="list.id"
					v-on:click.native="setActiveList(list.id)"
					active-class="active-link"
					v-bind:style="{'background-color': linkColor(list.id)}"
					) {{list.title}}
				font-awesome-icon.ml-auto.menu__delete-icon(icon="trash" data-toggle='modal' data-target='#deleteModal' @click="sendListToModal(list)")
		
		//- Нижняя часть
		.menu__footer.d-flex.flex-column.align-items-center.mt-auto.border-top.w-100.p-2
			//- Поиск по спискам
			input.form-control.m-1(type="text" placeholder="Списочек" @keyup.enter="addList()" v-model="newList")
			//- Кнопка добавления списка
			button.btn.btn-primary.m-1.w-100(type='button'  @click="addList()") Добавить список
</template>

<script>
import filters from "@/store/filters";
import { API } from "../../firebase";

export default {
	name: "Menu",
	data: () => ({
		newList: null,
		filters: filters,
		colors: {
			white: "#ffffff",
			green: "rgb(232, 255, 209)",
			gray: "rgb(248, 248, 248)",
		},
	}),

	computed: {
		filterText: function() {
			switch (this.$store.state.filter) {
				case "SHOW_ALL":
					return "Все";
				case "SHOW_ACTIVE":
					return "Неисполненные";
				case "SHOW_COMPLETED":
					return "Исполненные";
				default:
					return "Че это за фильтр";
			}
		},
	},
	methods: {
		sendListToModal(list) {
			this.$store.dispatch("setItemToDelete", list);
		},
		setFilter(filter) {
			this.$store.dispatch("setFilter", filter);
		},
		setActiveList(id) {
			this.$store.dispatch("setActiveList", id);
		},
		async addList() {
			let value = this.newList;
			this.newList = "";
			if (value) {
				await API.addList(value);
			}
		},
		linkColor(listId) {
			let list = this.$store.getters.getList(listId);
			if (list.todos.length === 0) return this.colors.white;
			if (
				list.todos.filter((todo) => todo.isDone).length ===
				list.todos.length
			)
				return this.colors.gray;
			else return this.colors.green;
		},
	},
};
</script>
<style lang="scss">
@import "./menu.scss";
</style>
