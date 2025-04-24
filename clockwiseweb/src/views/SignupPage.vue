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
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            required
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Signing Up...' : 'Sign Up' }}
        </button>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
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
      const loading = ref(false);
  
      const signup = async () => {
        if (password.value !== confirmPassword.value) {
          error.value = 'Passwords do not match.';
          return;
        }
  
        loading.value = true;
        error.value = ''; 
  
        try {
          const response = await axios.post('/signup', {
            name: username.value,
            email: email.value,
            password: password.value,
          });
  
          if (response.status === 202) {
            successMessage.value = 'Signup successful! Redirecting to login in 10 seconds...';
            setTimeout(() => {
              router.push('/login');
            }, 10000); // 10000 milliseconds = 10 seconds
          } else {
            error.value = response.data.message || 'Signup failed. Please try again.';
            successMessage.value = '';
          }
        } catch (err) {
          error.value = 'An error occurred. Please try again.';
          successMessage.value = '';
          console.error('Signup error:', err);
        } finally {
          loading.value = false;
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
        loading,
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
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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