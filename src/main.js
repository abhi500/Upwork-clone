import Vue from 'vue';
import Main from './Main.vue';
import Router from './router';
import '../public/stylesheets/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//font awesome
library.add(faSearch)
library.add(faAngleDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router: Router,
    render: h => h(Main)
}).$mount('#app');