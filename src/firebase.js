import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCgem2fjbMaGUELojMoAx-DkOCfUohxlsM",
	authDomain: "smart-world-academy-todo-list.firebaseapp.com",
	databaseURL: "https://smart-world-academy-todo-list.firebaseio.com",
	projectId: "smart-world-academy-todo-list",
	storageBucket: "smart-world-academy-todo-list.appspot.com",
	messagingSenderId: "310733091898",
	appId: "1:310733091898:web:a7a3b541961ae267b63103",
	measurementId: "G-3HG4RE91DY",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
export const API = {
	getLists: function() {
		let lists = [];
		db.collection("Lists")
			.orderBy("title")
			.get()
			.then((snapshot) => {
				console.log(snapshot);
				snapshot.forEach((doc) => {
					lists.push({ id: doc.id, title: doc.data().title });
				});
			});

		console.log(lists);
		return lists;
	},
	deleteList: function(id) {
		if (id) {
			db.collection("Lists")
				.doc(id)
				.delete()
				.then(function() {
					console.log("List successfully deleted");
				})
				.catch(function(error) {
					this.error = error;
				});
		} else {
			this.error = "Invalid ID";
		}
	},
	addList: function(value) {
		db.collection("Lists")
			.add({ title: value, isCompleted: false, todos: [] })
			.catch(function(error) {
				this.error = error;
			});
	},
	addTodo: function(listId, title, isImmediate) {
		let list = db.collection("Lists").doc(listId);
		list.update({
			todos: firebase.firestore.FieldValue.arrayUnion({
				title: title,
				isImmediate: isImmediate,
				isDone: false,
				date: firebase.firestore.Timestamp.fromDate(new Date()),
			}),
		});
	},
	deleteTodo: function(listId, index) {
		let newTodos = [];
		db.collection("Lists")
			.doc(listId)
			.get()
			.then((doc) => {
				newTodos = doc.data().todos;
				newTodos.splice(index, 1);
				db.collection("Lists")
					.doc(listId)
					.update({
						todos: newTodos,
					});
			});
	},
	toggleTodo: function(listId, index) {
		let newTodos = [];
		db.collection("Lists")
			.doc(listId)
			.get()
			.then((doc) => {
				newTodos = doc.data().todos;
				newTodos[index].isDone = !newTodos[index].isDone;
				db.collection("Lists")
					.doc(listId)
					.update({
						todos: newTodos,
					});
			});
	},
};
