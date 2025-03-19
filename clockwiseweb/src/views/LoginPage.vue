<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <input type="text" id="username" placeholder="Username" v-model="username" required />
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
            <p v-if="error" class="error-message">{{ error }}</p>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup(props, { emit }) {
        const username = ref('');
        const password = ref('');
        const error = ref('');
        const router = useRouter();

        const login = async () => {
            try {
                if (username.value === 'test' && password.value === 'UltimateTest!#7') {
                    sessionStorage.setItem('isLoggedIn', 'true');
                    router.push('/');
                    emit('login-success'); // Emit the event
                } else {
                    error.value = 'Invalid username or password.';
                }
            } catch (err) {
                error.value = 'An error occurred. Please try again.';
                console.error('Login error:', err);
            }
        };

        return {
            username,
            password,
            error,
            login,
        };
    },
};
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 50px auto auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

input[type='text'],
input[type='password'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>