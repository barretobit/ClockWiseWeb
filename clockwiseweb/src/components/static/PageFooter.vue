<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; {{ currentYear }} ClockWise. All rights reserved. Made in Switzerland.</p>
            <nav class="footer-nav">
                <a href="/privacy" class="nav-link">Privacy Policy</a>
                <a href="/terms" class="nav-link">Terms of Service</a>
                <a href="/contact" class="nav-link">Contact Us</a>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
.footer {
    background-color: #f0f0f0;
    font-size: small;
    padding: 10px 20px;
    text-align: center;
    color: #333;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}

.footer-nav {
    display: flex;
}

.nav-link {
    font-size: small;
    margin: 0 15px;
    text-decoration: none;
    color: #333;
}

.footer-content p {
    margin: 0 15px;
}
</style>