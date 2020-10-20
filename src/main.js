import Vue from 'vue';
import Main from './Main.vue';
import Router from './router';
import '../public/stylesheets/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//font awesome
library.add(faSearch)
library.add(faAngleDown)
library.add(faCheck);
library.add(faFacebook)
library.add(faLinkedinIn)
library.add(faTwitter)
library.add(faYoutube)
library.add(faInstagram)
library.add(faApple)
library.add(faAndroid)
library.add(faUser)
library.add(faGoogle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router: Router,
    render: h => h(Main)
}).$mount('#app');