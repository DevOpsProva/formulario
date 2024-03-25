<template>
	<div id="app">
		<router-view name="menu"></router-view>
		<router-view></router-view>
	</div>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',

});
</script>
