<template lang="pug">
	.sticky-top.d-flex.flex-column.align-items-center.menu

		//- Фильтр
		button#filter-lists.btn.dropdown-toggle.mt-2(
			type='button' data-toggle='dropdown' 
			aria-haspopup='true' aria-expanded='false') {{getFilterText(this.$store.state.filter)}}
		.dropdown-menu(aria-labelledby='filter-lists')
			button.dropdown-item(
				type='button'
				v-for="filter in filters"
				:key="filter.filter"
				@click="setFilter(filter.filter)"
				) {{filter.text}}


		//- Список списков дел
		.list-group.list-group-flush.mt-3.mb-auto.border-bottom.menu__list
			a.list-group-item.list-group-item-action.d-flex.align-items-center(
				type='button' 
				v-for="list in this.$store.getters.getLists" 
				:key="list.id") {{list.title}}
				font-awesome-icon.ml-auto.menu__delete-icon(icon="trash" data-toggle='modal' data-target='#deleteModal' @click="sendListToModal(list)")
		
		//- Нижняя часть
		.menu__footer.d-flex.flex-column.align-items-center.mb-2
			//- Поиск по спискам
			input.form-control.mt-2(type="search" placeholder="Поиск по спискам" aria-label="Search")

			//- Кнопка добавления списка
			button.btn.btn-primary.mt-2(type='button'  data-toggle='modal' data-target='#addListModal') Добавить список
		
</template>

<script>
import filters from "@/store/filters";

export default {
	name: "Menu",
	data: () => ({
		filters: filters,
	}),
	methods: {
		sendListToModal(list) {
			this.$store.dispatch("setItemToDelete", list);
			console.log(this.$store.state.filter);
			console.log(this.$store.getters.getFilter);
		},
		getFilterText(filter) {
			// return filter.text;
			switch (filter) {
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
		setFilter(filter) {
			this.$store.dispatch("setFilter", filter);
		},
	},
	beforeCreate: function() {
		this.$store.dispatch("setLists");
	},
};
</script>
