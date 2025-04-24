<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="email" id="email" placeholder="Email" v-model="email" required />
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" v-model="password" required />
        </div>
        <BButton type="submit" variant="success" :disabled="loading">
          <i class="bi bi-shield-lock-fill"></i>&nbsp; {{ loading ? 'Logging In...' : 'Submit' }}
        </BButton>
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
  import axios from 'axios';
  
  export default {
    components: {
      BSpinner,
      BButton,
    },
    setup(props, { emit }) {
      const email = ref('');
      const password = ref('');
      const error = ref('');
      const router = useRouter();
      const loading = ref(false);
  
      const login = async () => {
        loading.value = true;
        error.value = '';

        try {
          const response = await axios.get('/login', { 
            email: email.value,
            password: password.value,
          });
  
          if (response.status === 200) { 
            sessionStorage.setItem('isLoggedIn', 'true');
            emit('login-success'); 
            router.push('/');
          } else if (response.status === 401) {
            error.value = 'Invalid email or password.';
          } else {
            error.value = 'Login failed. Please try again.';
            console.error('Login failed with status:', response.status);
          }
        } catch (err) {
          error.value = 'An error occurred during login.';
          console.error('Login error:', err);
        } finally {
          loading.value = false;
        }
      };
  
      return {
        email,
        password,
        error,
        login,
        loading,
      };
    },
  };
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
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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