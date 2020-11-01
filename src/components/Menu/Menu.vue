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
		.list-group.list-group-flush.mt-3.menu__list
			a.list-group-item.list-group-item-action.d-flex.align-items-center(
				type='button' 
				v-for="list in Lists" 
				:key="list.id") {{list.title}}
				font-awesome-icon.ml-auto(icon="trash"  @click="deleteList(list.id)")


		.menu__footer.mt-auto.d-flex.flex-column.align-items-center.mb-2
			//- Поиск по спискам
			input.form-control(type="search" placeholder="Поиск по спискам" aria-label="Search" v-model="newList")

			//- Кнопка добавления списка
			button.btn.btn-primary.mt-2(type='button' @click="addList") Добавить список

</template>

<script>
import { db } from "../../firebase";
export default {
	data: () => ({
		Lists: [],
		newList: "",
		// lists: [
		// 	{ id: 0, title: "Список 1" },
		// 	{ id: 1, title: "Список 2" },
		// 	{ id: 2, title: "Список 3" },
		// 	{ id: 3, title: "Список 4" },
		// ],
		filters: [
			{ filter: "all", text: "Все" },
			{ filter: "completed", text: "Исполненные" },
			{ filter: "uncompleted", text: "Неисполненные" },
		],
	}),
	methods: {
		async addList() {
			if (this.newList) {
				await db.collection("Lists").add({ title: this.newList });
				this.newList = "";
			}
		},
		deleteList(id) {
			db.collection("Lists")
				.doc(id)
				.delete();
		},
	},
	firestore: {
		Lists: db.collection("Lists"),
	},
};
</script>
