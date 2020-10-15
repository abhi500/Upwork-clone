<template>
    <div class="home home--size home--theme">
        <router-view></router-view>
        <banner-layout></banner-layout>
        <agencies></agencies>
        <trustedbusinesses></trustedbusinesses>
        <hireforscope></hireforscope>
        <howitworks></howitworks>
        <bestoffers></bestoffers>
        <homepagevideo></homepagevideo>
        <skillslayout></skillslayout>
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
        'skillslayout': SkillsLayout
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