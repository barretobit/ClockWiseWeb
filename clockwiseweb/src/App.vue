<template>
	<div id="app">
		<PageHeader />
		<router-view />
		<PageFooter />
	</div>
</template>

<script>
import PageHeader from './components/static/PageHeader.vue';
import PageFooter from './components/static/PageFooter.vue';

export default {
	components: {
		PageHeader,
		PageFooter
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, Content, Footer */
  min-height: 100vh;
}

body {
	margin: 0;
}
</style>