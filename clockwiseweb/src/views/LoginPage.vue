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
            <BButton type="submit" variant="success"><i class="bi bi-shield-lock-fill"></i>&nbsp; Submit</BButton>
            <p v-if="error" class="error-message">{{ error }}</p>
        </form>
        <div v-if="loading" class="loading-overlay">
            <div class="loading-container">
                <b-spinner variant="primary" type="border"></b-spinner>
            </div>
        </div>
    </div>
</template>

<script>
import { BSpinner, BButton } from 'bootstrap-vue-next';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const loading = ref(false);

export default {
    components: {
        BSpinner,
        BButton,
    },
    setup(props, { emit }) {
        const username = ref('');
        const password = ref('');
        const error = ref('');
        const router = useRouter();

        const login = async () => {
            loading.value = true;
            await delay();
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
            loading.value = false;
        };

        return {
            username,
            password,
            error,
            login,
            loading,
        };
    },
};

async function delay() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Waited for 1 second");
}
</script>

<style scoped>

h1 {
    font-size: 2em;
    margin-bottom: 20px; 
}

.login-page {
    max-width: 400px;
    margin: 50px auto auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
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
    /* color: white; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
}

.loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>