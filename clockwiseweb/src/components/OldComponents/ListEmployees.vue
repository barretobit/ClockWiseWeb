<template>
    <div class="company-overview">
        <h1>Employees of {{ companyName }}</h1>
        <table v-if="employees.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.employeeTypeId }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else-if="loading">Loading employees...</p>
        <p v-else-if="error">Error loading employees: {{ error }}</p>
        <p v-else>No employees found for this company.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['companyId', 'companyName'],
    data() {
        return {
            employees: [],
            loading: false,
            error: null,
        };
    },
    mounted() {
        console.log('Company ID prop:', this.companyId);
        console.log('Company ID prop:', this.companyName);
        this.fetchEmployees();
    },
    methods: {
        async fetchEmployees() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(
                    `https://clockwise.runasp.net/api/employees/company/${this.companyId}`
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