<template lang="pug">
	.sticky-top.d-flex.flex-column.align-items-center.menu

		//- Фильтр
		button#filter-lists.btn.dropdown-toggle.mt-2(type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false') Dropdown
		.dropdown-menu(aria-labelledby='filter-lists')
			button.dropdown-item(
				type='button'
				v-for="filter in filters"
				:key="filter.filter"
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
			input.form-control.mt-2(type="search" placeholder="Поиск по спискам" aria-label="Search" v-model="newList")

			//- Кнопка добавления списка
			button.btn.btn-primary.mt-2(type='button'  data-toggle='modal' data-target='#addListModal') Добавить список
		
</template>

<script>
export default {
	data: () => ({
		Lists: [],
		filters: [
			{ filter: "all", text: "Все" },
			{ filter: "completed", text: "Исполненные" },
			{ filter: "uncompleted", text: "Неисполненные" },
		],
	}),
	methods: {
		sendListToModal(list) {
			this.$store.dispatch("setItemToDelete", list);
		},
	},

	beforeCreate: function() {
		this.$store.dispatch("setLists");
	},
};
</script>
