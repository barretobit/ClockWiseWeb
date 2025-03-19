<template>
	<header class="header">
		<div class="header-left">
			<nav v-if="isLoggedIn" class="nav">
				<router-link to="/" class="nav-link">Home</router-link>
				<router-link to="/logs" class="nav-link">Logs</router-link>
				<router-link to="/reports" class="nav-link">Reports</router-link>
			</nav>
		</div>

		<div class="header-center">
			<router-link to="/" class="logo-link">
				<img src="@/assets/logo.png" alt="Company Logo" class="logo" />
			</router-link>
		</div>

		<div class="header-right">
			<button v-if="!isLoggedIn" @click="goToLogin" class="button">Login</button>
			<button v-if="isLoggedIn" @click="logout" class="button">Logout</button>
		</div>
	</header>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
	props: ['isLoggedIn'],
	setup(props, { emit }) {
		const router = useRouter();

		const goToLogin = () => {
			router.push('/login');
		};

		const logout = () => {
			sessionStorage.removeItem('isLoggedIn');
			emit('logout-success'); // Emit logout-success event
			console.log('Logout clicked');
		};

		return {
			goToLogin,
			logout,
		};
	},
};
</script>

<style scoped>
.header {
	display: grid;
	grid-template-columns: minmax(0, 1fr) 1fr minmax(0, 1fr);
	align-items: center;
	padding: 10px 20px;
	background-color: #f0f0f0;
}

.header-left {
	grid-column: 1;
	justify-self: start;
}

.header-center {
	grid-column: 2;
	justify-self: center;
}

.header-right {
	grid-column: 3;
	justify-self: end;
}

.nav {
	display: flex;
}

.nav-link {
	margin-right: 15px;
	text-decoration: none;
	color: #333;
}

.logo {
	height: 40px;
	cursor: pointer;
}

.logo-link {
	text-decoration: none;
	color: inherit;
}

.button {
	padding: 8px 15px;
	background-color: #03ad45;
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 5px;
}
</style>