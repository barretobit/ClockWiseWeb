<template>
    <header class="header">
        <div class="header-left">
            <nav class="nav">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/about" class="nav-link">About</router-link>
                <!-- <router-link to="/products" class="nav-link">Products</router-link> -->
            </nav>
        </div>

        <div class="header-center">
            <img src="@/assets/logo.png" alt="Company Logo" class="logo" />
            <!-- <img src="https://img.icons8.com/3d-fluency/200/clock.png" alt="logo" class="logo" /> -->
        </div>

        <div class="header-right">
            <button v-if="!isLoggedIn" @click="goToLogin" class="button">Login</button>
            <button v-if="isLoggedIn" @click="logout" class="button">Logout</button>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
        };
    },
    methods: {
        goToLogin() {
            this.$router.push('/login');
        },
        logout() {
            sessionStorage.removeItem('isLoggedIn');
            this.isLoggedIn = false;
            console.log('Logout clicked');
        },
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f0f0f0;
}

.header-left,
.header-center,
.header-right {
    display: flex;
    align-items: center;
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