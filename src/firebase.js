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
export const listsCollection = db.collection("lists");
export const todosCollection = db.collection("todos");
