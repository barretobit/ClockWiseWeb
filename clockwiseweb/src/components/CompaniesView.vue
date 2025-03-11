<template>
    <div>
        <h1>Companies</h1>
        <div v-if="companies.length > 0" class="company-cards">
            <div v-for="company in companies" :key="company.id" class="company-card">
                <h2>{{ company.name }}</h2>
                <p>ID: {{ company.id }}</p>
            </div>
        </div>
        <p v-else-if="loading">Loading companies...</p>
        <p v-else-if="error">Error loading companies: {{ error }}</p>
        <p v-else>No companies found.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            companies: [],
            loading: false,
            error: null,
        };
    },
    mounted() {
        this.fetchCompanies();
    },
    methods: {
        async fetchCompanies() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('https://clockwise.runasp.net/api/companies');
                this.companies = response.data;
            } catch (err) {
                this.error = err.message || 'An unknown error occurred.';
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.company-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.company-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
}

.company-card h2 {
    margin-bottom: 10px;
}
</style>