<template>
    <div class="home home--size home--theme">
        <navbar-layout class="container__navbar"></navbar-layout>
        <categories-layout class="container__categories"></categories-layout>
        <router-view></router-view>
        <banner-layout></banner-layout>
        <agencies></agencies>
        <trustedbusinesses></trustedbusinesses>
        <hireforscope></hireforscope>
        <howitworks></howitworks>
        <bestoffers></bestoffers>
        <homepagevideo></homepagevideo>
        <skillslayout></skillslayout>
        <footer-layout></footer-layout>
    </div>
</template>

<script>

import BannerLayout from '../layouts/homepagelayouts/BannerLayout.vue';
import Agencies from '../layouts/homepagelayouts/AgenciesLayout.vue';
import TruestedBusinesses from '../layouts/homepagelayouts/TrustedBusinesses.vue';
import HireForScope from '../layouts/homepagelayouts/HireForScope.vue';
import HowItWorks from '../layouts/homepagelayouts/HowItWorksLayout.vue';
import BestOffers from '../layouts/homepagelayouts/BestOffers.vue';
import HomePageVideo from '../layouts/homepagelayouts/HomePageVideo.vue';
import SkillsLayout from '../layouts/homepagelayouts/SkillsLayout.vue';
import NavbarLayout from '../layouts/commonlayouts/NavbarLayout.vue';
import FooterLayout from '../layouts/commonlayouts/FooterLayout.vue';

import EventBus from '../EventBus';

export default {
    components: {
        'banner-layout': BannerLayout,
        'agencies': Agencies,
        'trustedbusinesses': TruestedBusinesses,
        'hireforscope': HireForScope,
        'howitworks': HowItWorks,
        'bestoffers': BestOffers,
        'homepagevideo': HomePageVideo,
        'skillslayout': SkillsLayout,
        'navbar-layout': NavbarLayout,
        'footer-layout': FooterLayout,
        'categories-layout': () => import('../layouts/commonlayouts/CategoriesLayout.vue')
    },

    mounted() {
        EventBus.$on('route', (payload) => {
            if(this.$route.path == payload.to)
                return;  
            this.$router.push({name: 'all'});
            console.log(this.$route)
        })
    },
    
}
</script>

<style lang="scss" scoped>

.home{
    
    &--size{
        min-height: 100vh;
    }

    &--theme{
        background-color: $homebackground;
    }
}

</style>