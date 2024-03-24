<template>

<div class="row">
	<div class="col-xs-12">
		<menuLateral></menuLateral>
	</div>
</div>
</template>

<script>

import { defineComponent } from 'vue'
import MenuLateral from './MenuLateral.vue'
export default defineComponent({

	components: {
		MenuLateral
	},



})
</script>

<style>
.bordered-container {
	border-left: 2px solid black;
	padding-left: 10px;
}
</style>