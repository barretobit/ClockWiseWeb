<template>
    <div class="company-overview">
        <h1>Employees of Company ID: {{ companyId }}</h1>
        <ul v-if="employees.length > 0">
            <li v-for="employee in employees" :key="employee.id">
                {{ employee.name }} (ID: {{ employee.id }})
            </li>
        </ul>
        <p v-else-if="loading">Loading employees...</p>
        <p v-else-if="error">Error loading employees: {{ error }}</p>
        <p v-else>No employees found for this company.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['companyId'],
    data() {
        return {
            employees: [],
            loading: false,
            error: null,
        };
    },
    mounted() {
        this.fetchEmployees();
    },
    methods: {
        async fetchEmployees() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(
                    `https://clockwise.runasp.net/api/companies/${this.companyId}/employees`
                );
                this.employees = response.data;
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
.company-overview {
    padding: 20px;
}
</style>