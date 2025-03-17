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
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async login() {
            try {
                // Replace with your actual authentication logic
                // Example:
                // const response = await axios.post('/api/login', {
                //   username: this.username,
                //   password: this.password,
                // });
                // if (response.data.success) {
                //   // Successful login
                //   this.$router.push('/'); // Redirect to home page
                // } else {
                //   this.error = 'Invalid username or password.';
                // }
                if (this.username === 'test' && this.password === 'password') {
                    sessionStorage.setItem('isLoggedIn', 'true');
                    // Simulate successful login
                    // Store authentication token or user info if needed
                    this.$router.push('/'); 
                } else {
                    this.error = 'Invalid username or password.';
                }
            } catch (err) {
                this.error = 'An error occurred. Please try again.';
                console.error('Login error:', err);
            }
        },
    },
};
</script>

<style scoped>
.login-page {
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

label {
    display: block;
    margin-bottom: 5px;
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