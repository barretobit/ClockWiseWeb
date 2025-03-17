<template>
    <div class="home">
        <h1>Welcome to ClockWise!</h1>
        <p>Your solution for time management.</p>

        <section class="features">
            <h2>Key Features</h2>
            <ul>
                <li>Effortless Time Tracking</li>
                <li>Detailed Reports and Analytics</li>
                <li>Customizable Project Management</li>
                <li>User-Friendly Interface</li>
            </ul>
        </section>

        <section class="get-started">
            <h2>Get Started Today</h2>
            <p>Sign up now to experience the benefits of ClockWise.</p>
            <button class="signup-button" @click="goToSignup">Sign Up</button>
            <p>Already have an account?</p>
            <button class="login-button" @click="goToLogin">Login</button>
        </section>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goToSignup = () => {
            router.push('/signup');
        };

        const goToLogin = () => {
            router.push('/login');
        };

        return {
            goToSignup,
            goToLogin,
        };
    },
};
</script>

<style scoped>
.home {
    text-align: center;
    padding: 40px;
}

.home h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.home p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.features {
    margin-bottom: 40px;
}

.features h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.features ul {
    list-style: none;
    padding: 0;
}

.features li {
    font-size: 1.1em;
    margin-bottom: 10px;
}

.get-started {
    margin-bottom: 40px;
}

.get-started h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.signup-button {
    padding: 9px 22px;
    font-size: 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.login-button {
    padding: 9px 22px;
    font-size: 1em;
    background-color: #03ad45;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
</style>