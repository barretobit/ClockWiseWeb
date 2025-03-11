<template>
    <div class="landing-page">
        <header class="landing-header">
            <h1>Welcome to ClockWise</h1>
            <p>Explore our registered companies.</p>
        </header>

        <div class="company-input">
            <input type="number" v-model="companyIdInput" placeholder="Enter Company ID" />
            <button @click="goToCompanyOverview">Enter</button>
            <p v-if="companyError" class="error-message">{{ companyError }}</p>
        </div>

        <main class="landing-content">
            <CompaniesView />
        </main>

        <footer class="landing-footer">
            <p>&copy; {{ currentYear }} ClockWise. All rights reserved. Made in Switzerland.</p>
        </footer>
    </div>
</template>

<script>
import CompaniesView from './CompaniesView.vue';
import axios from 'axios';

export default {
    components: {
        CompaniesView,
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
            companyIdInput: null,
            companyError: null,
        };
    },
    methods: {
        async goToCompanyOverview() {
            this.companyError = null;
            if (!this.companyIdInput) {
                this.companyError = 'Please enter a company ID.';
                return;
            }

            try {
                // Validate if the company exists
                await axios.get(
                    `https://clockwise.runasp.net/api/companies/${this.companyIdInput}`
                );

                // If company exists, navigate
                this.$router.push({
                    name: 'CompanyOverview',
                    params: { companyId: this.companyIdInput },
                });
            } catch (err) {
                this.companyError = 'Company not found.';
            }
        },
    },
};
</script>

<style scoped>
.landing-page {
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
}

.landing-header {
    background-color: #f0f0f0;
    padding: 40px;
    margin-bottom: 20px;
}

.landing-content {
    max-width: 800px;
    margin: 0 auto;
}

.landing-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1px;
    font-size: x-small;
    background-color: #f0f0f0;
    text-align: center;
}

.company-input {
    margin-bottom: 20px;
}

.error-message {
    color: red;
}
</style>