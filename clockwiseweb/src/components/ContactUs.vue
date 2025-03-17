<template>
    <div class="contact-us">
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us.</p>

        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="formData.name" required />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" required />
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" required></textarea>
            </div>

            <div class="form-group recaptcha">
                <label for="recaptcha">Solve: {{ num1 }} + {{ num2 }} = ?</label>
                <input type="number" id="recaptcha" v-model="formData.recaptcha" required />
                <p v-if="recaptchaError" class="error-message">Incorrect answer. Please try again.</p>
            </div>

            <button type="submit">Submit</button>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
                recaptcha: null,
            },
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
            recaptchaError: false,
            successMessage: '',
        };
    },
    methods: {
        handleSubmit() {
            if (parseInt(this.formData.recaptcha) === this.num1 + this.num2) {
                // Simulate sending the form data (replace with your actual logic)
                console.log('Form data:', this.formData);
                this.successMessage = 'Thank you for your message! We will get back to you soon.';
                this.recaptchaError = false;
                // Reset form
                this.formData.name = "";
                this.formData.email = "";
                this.formData.message = "";
                this.formData.recaptcha = null;
                this.num1 = Math.floor(Math.random() * 10),
                this.num2 = Math.floor(Math.random() * 10)
            } else {
                this.recaptchaError = true;
                this.successMessage = '';
                this.formData.recaptcha = null;
                this.num1 = Math.floor(Math.random() * 10),
                this.num2 = Math.floor(Math.random() * 10)
            }
        },
    },
};
</script>

<style scoped>
.contact-us {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    resize: vertical;
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
    margin-top: 5px;
}

.success-message {
    color: green;
    margin-top: 10px;
}

.recaptcha {
    display: flex;
    flex-direction: column;
    width: 150px;
}
</style>