<template>
    <div class="home home--size home--theme">
        <router-view></router-view>
        <banner-layout></banner-layout>
        <agencies></agencies>
        <trustedbusinesses></trustedbusinesses>
        <hireforscope></hireforscope>
        <howitworks></howitworks>
        <bestoffers></bestoffers>
    </div>
</template>

<script>

import BannerLayout from '../layouts/BannerLayout.vue';
import Agencies from '../layouts/AgenciesLayout.vue';
import TruestedBusinesses from '../layouts/TrustedBusinesses.vue';
import HireForScope from '../layouts/HireForScope.vue';
import HowItWorks from '../layouts/HowItWorksLayout.vue';
import BestOffers from '../layouts/BestOffers.vue';

import EventBus from '../EventBus';

export default {
    components: {
        'banner-layout': BannerLayout,
        'agencies': Agencies,
        'trustedbusinesses': TruestedBusinesses,
        'hireforscope': HireForScope,
        'howitworks': HowItWorks,
        'bestoffers': BestOffers
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