import Vue from 'vue';
import Main from './Main.vue'
import '../public/stylesheets/style.css';

new Vue({
    render: h => h(Main)
}).$mount('#app');