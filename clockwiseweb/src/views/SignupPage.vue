<template>
    <div class="signup-page">
        <h1>Sign Up</h1>
        <form @submit.prevent="signup">
            <div class="form-group">
                <input type="text" id="username" placeholder="Username" v-model="username" required />
            </div>
            <div class="form-group">
                <input type="email" id="email" placeholder="Email" v-model="email" required />
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Password" v-model="password" required />
            </div>
            <div class="form-group">
                <input type="password" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword"
                    required />
            </div>
            <button type="submit">Sign Up</button>
            <p v-if="error" class="error-message">{{ error }}</p>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const error = ref('');
        const successMessage = ref('');
        const router = useRouter();

        const signup = async () => {
            if (password.value !== confirmPassword.value) {
                error.value = 'Passwords do not match.';
                successMessage.value = '';
                return;
            }

            try {
                const response = await axios.post('/api/signup', {
                  username: username.value,
                  email: email.value,
                  password: password.value,
                });
                if (response.data.success) {
                  successMessage.value = 'Signup successful! Please log in.';
                  error.value = '';
                  router.push('/login');
                } else {
                  error.value = response.data.message || 'Signup failed. Please try again.';
                  successMessage.value = '';
                }

                // Simulate signup logic (replace with your actual API call)
                // Example:
                // const response = await axios.post('/api/signup', {
                //   username: username.value,
                //   email: email.value,
                //   password: password.value,
                // });
                // if (response.data.success) {
                //   successMessage.value = 'Signup successful! Please log in.';
                //   error.value = '';
                //   router.push('/login');
                // } else {
                //   error.value = response.data.message || 'Signup failed. Please try again.';
                //   successMessage.value = '';
                // }

                //Simulated successful signup.
                successMessage.value = 'Signup successful! Please log in.';
                error.value = '';
                router.push('/login');

            } catch (err) {
                error.value = 'An error occurred. Please try again.';
                successMessage.value = '';
                console.error('Signup error:', err);
            }
        };

        return {
            username,
            email,
            password,
            confirmPassword,
            error,
            successMessage,
            signup,
        };
    },
};
</script>

<style scoped>
.signup-page {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    align-self: center;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

input[type='text'],
input[type='email'],
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

.success-message {
    color: green;
    margin-top: 10px;
}
</style>