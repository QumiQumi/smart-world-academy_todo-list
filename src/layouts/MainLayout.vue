<template lang="pug">
	.container
		.row
			.col-4
				Menu
			.col-8
				router-view
</template>
<script>
import Menu from "@/components/Menu/Menu";
export default {
  name: "main-layout",
  components: {
    Menu
  }
};
</script>
