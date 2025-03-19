<template>
	<div id="app">
		<PageHeader :isLoggedIn="isLoggedIn" @logout-success="handleLogoutSuccess" />
		<router-view :isLoggedIn="isLoggedIn" @login-success="handleLoginSuccess" />
		<PageFooter />
	</div>
</template>

<script>
import PageHeader from './components/static/PageHeader.vue';
import PageFooter from './components/static/PageFooter.vue';
import { ref, onMounted } from 'vue';

export default {
	components: {
		PageHeader,
		PageFooter,
	},
	setup() {
		const isLoggedIn = ref(sessionStorage.getItem('isLoggedIn') === 'true');

		onMounted(() => {
			isLoggedIn.value = sessionStorage.getItem('isLoggedIn') === 'true';
		});

		const handleLoginSuccess = () => {
			isLoggedIn.value = true;
			sessionStorage.setItem('isLoggedIn', 'true');
		};

		const handleLogoutSuccess = () => {
			isLoggedIn.value = false;
			sessionStorage.removeItem('isLoggedIn');
		};

		return {
			isLoggedIn,
			handleLoginSuccess,
			handleLogoutSuccess,
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}

body {
	margin: 0;
}
</style>