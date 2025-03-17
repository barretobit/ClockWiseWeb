<template>
    <div class="landing-page">
        <header class="header">
            <h1 class="title">ClockWise</h1>
        </header>

        <main class="main-content">
            <button class="search-button" @click="toggleSearch">Search Company</button>

            <div v-if="showSearch" class="search-area">
                <section class="company-list">
                    <h2>Available Companies:</h2>
                    <div class="company-cards">
                        <div v-for="company in companies" :key="company.id" class="company-card">
                            <h3>🏢 {{ company.name }}</h3>
                            <p>ID: {{ company.id }}</p>
                        </div>
                    </div>
                </section>

                <section class="employee-search">
                    <h2>Find Employees:</h2>
                    <div class="search-input">
                        <input type="number" class="input-box-style" v-model="selectedCompanyId" placeholder="Enter Company ID" /><br>
                        <button @click="fetchEmployees" class="search-button">Show Employees</button>
                    </div>
                </section>
            </div>

            <section class="employee-list" v-if="employees && employees.length > 0">
                <h2>Employees for Company ID: {{ selectedCompanyId }}</h2>
                <ul class="employee-list-items">
                    <li v-for="employee in employees" :key="employee.id" class="employee-item">
                        {{ employee.name }} {{ employee.id }}
                    </li>
                </ul>
            </section>

            <section class="no-employees" v-else-if="selectedCompanyId && employees && employees.length == 0">
                <p>No employees found for this company.</p>
            </section>

            <section class="error-message" v-if="companyError">
                <p style="color: red">{{ companyError }}</p>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; 2025 ClockWise. All rights reserved. Made in Switzerland.</p>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            showSearch: false,
            selectedCompanyId: null,
            employees: null,
            companies: [],
            companyError: null,
        };
    },
    mounted() {
        this.fetchCompanies();
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        async fetchCompanies() {
            try {
                const response = await axios.get('https://clockwise.runasp.net/api/companies');
                this.companies = response.data;
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        },
        async fetchEmployees() {
            this.companyError = null;
            if (!this.selectedCompanyId) {
                return;
            }
            try {
                const response = await axios.get(
                    `https://clockwise.runasp.net/api/employees/company/${this.selectedCompanyId}`
                );
                this.employees = response.data;
                if (this.employees.length > 0) {
                    this.$router.push({
                        name: 'CompanyOverview',
                        params: { companyId: this.selectedCompanyId },
                    });
                }
            } catch (error) {
                console.error('Error fetching employees:', error);
                this.employees = [];
                this.companyError = "Company not found";
            }
        },
    },
};
</script>

<style scoped>
.landing-page {
  font-family: sans-serif;
  min-height: 100vh; 
  background-image: url('@/assets/background.jpg'); 
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 50px 0;
  color: white; /* White text for contrast */
}

.title {
  font-size: 6em;
  font-family: "Pacifico", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for depth */
}

.main-content {
  flex-grow: 1; /* Allow main content to fill remaining space */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
  padding: 20px;
}

.search-button {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #1459a8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top:10px;
}

.search-area {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
}

.company-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.company-card {
  background-color: #f0f0f0;
  padding: 15px;
  padding-left: 30px;
  margin: 10px;
  border-radius: 8px;
  width: 200px;
  text-align: left;
}

.search-input {
  margin-bottom: 20px;
}

/* Hide arrows from number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.input-box-style {
    border-radius: 5px;
    padding: 10px;
}

.employee-list {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  margin-top:20px;
}

.footer {
  text-align: center;
  font-size: x-small;
  padding: 5px 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
}
</style>