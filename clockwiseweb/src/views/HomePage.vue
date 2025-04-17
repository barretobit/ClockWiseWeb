<template>
    <div class="home">
        <div v-if="isLoggedIn">
            <h1>Welcome back to ClockWise!</h1>
            <p>Are you starting or finishing your work?</p>
            <BButton @click="startWorking" class="home-button" variant="light"><i class="bi bi-play-btn"></i>&nbsp;
                Start</BButton>&nbsp;
            <BButton @click="stopWorking" class="home-button" variant="light"><i class="bi bi-stop-btn"></i>&nbsp; Stop
            </BButton>
            <p>Here's a summary of your recent activity.</p>
            <section class="user-dashboard" v-if="activitySummary">
                <p>Time Worked today: {{ activitySummary }}</p>
                <p>Time Worked this week: {{ activitySummary.week }}</p>
                <p>Time Worked this month: {{ activitySummary.month }}</p>
                <button class="view-reports-button">View Reports</button>
            </section>
            <div v-else-if="loading" class="loading-spinner">
                <b-spinner variant="primary" type="border"></b-spinner>
                <p>Loading activity summary...</p>
            </div>
            <div v-else-if="error" class="error-message">
                <p>Error: {{ error }}</p>
            </div>
        </div>
        <div v-else>
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
                <BButton @click="goToSignup" class="home-button" variant="primary"><i
                        class="bi bi-check-circle-fill"></i>&nbsp; Sign Up</BButton>
                <p>Already have an account?</p>
                <BButton @click="goToLogin" class="home-button" variant="success"><i class="bi bi-key-fill"></i>&nbsp;
                    Login</BButton>
            </section>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BButton } from 'bootstrap-vue-next';
import axios from 'axios';

export default {
    components: {
        BButton,
    },
    props: ['isLoggedIn'],
    setup(props) {
        const router = useRouter();
        const activitySummary = ref(null);
        const loading = ref(false);
        const error = ref(null);

        const goToSignup = () => {
            router.push('/signup');
        };

        const goToLogin = () => {
            router.push('/login');
        };

        const fetchActivitySummary = async () => {
            if (!props.isLoggedIn) return;

            loading.value = true;
            error.value = null;

            try {
                const response = await axios.get('https://clockwise.runasp.net/api/tickLogs/workedtoday/62');
                activitySummary.value = response.data;
            } catch (err) {
                error.value = 'Failed to fetch activity summary.';
                console.error(err);
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            fetchActivitySummary();
        });

        const startWorking = () => {
            // Logic to start tracking work
            console.log('Start Working clicked');
        };

        const stopWorking = () => {
            // Logic to stop tracking work
            console.log('Stop Working clicked');
        };

        return {
            goToSignup,
            goToLogin,
            activitySummary,
            loading,
            error,
            startWorking,
            stopWorking,
        };
    },
};
</script>

<style scoped>
.home-button {
    margin-bottom: 15px;
}

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
    /* margin-bottom: 40px; */
}

.get-started h2 {
    font-size: 1.8em;
    /* margin-bottom: 20px; */
}

.signup-button {
    /* padding: 9px 22px; */
    font-size: 1em;
    /* background-color: #007bff; */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.login-button {
    /* padding: 9px 22px; */
    font-size: 1em;
    background-color: #03ad45;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.user-dashboard {
    margin: 20px;
}

.view-reports-button {
    padding: 9px 22px;
    font-size: 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
</style>