import VueRouter from 'vue-router';
import Home from './../views/Home.vue'
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    }
];

export default new VueRouter({routes});