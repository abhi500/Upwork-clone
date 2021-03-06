import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./pages/HomePage.vue'),
            children: [
                {
                    name: 'all',
                    path: 'all',
                    component: () => import('./widgets/SeeAllCategories.vue')
                }
            ]
        },
        {
            name: 'Login',
            path: '/login',
            component: () => import('./pages/LoginPage.vue'),
        },
        {
            name: 'Signup',
            path: '/signup',
            component: () => import('./pages/SignUpPage.vue'),
        }
    ]
})