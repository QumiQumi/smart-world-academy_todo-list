<template lang="pug">
	div я лист {{id}}
</template>
<script>
export default {
	name: "TodoList",
	computed: {
		id() {
			return this.$route.params.listId;
		},
	},
};
</script>
