import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignupPage from "../views/SignupPage.vue";

import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import TermsOfService from "../components/TermsOfService.vue";
import ContactUs from "../components/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupPage,
    },
    {
      path: "/privacy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/terms",
      name: "TermsOfService",
      component: TermsOfService,
    },
	{
		path: "/contact",
		name: "ContactUs",
		component: ContactUs,
	}
  ],
});

export default router;
