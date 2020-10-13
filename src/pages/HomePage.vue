<template>
    <div class="home home--size home--theme">
        <banner-layout></banner-layout>
        <agencies></agencies>
    </div>
</template>

<script>

import BannerLayout from '../layouts/BannerLayout.vue';
import Agencies from '../layouts/AgenciesLayout.vue';

export default {
    components: {
        'banner-layout': BannerLayout,
        'agencies': Agencies
    }
    
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