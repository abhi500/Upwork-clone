<template>
    <div class="container container--size">
        <navbar-layout class="container__navbar"></navbar-layout>
        <categories-layout class="container__categories"></categories-layout>
        <router-view class="container__view"></router-view>
        <footer-layout class="container__footer"></footer-layout>
    </div>
</template>

<script>

import NavbarLayout from './layouts/commonlayouts/NavbarLayout.vue';
import FooterLayout from './layouts/commonlayouts/FooterLayout.vue';

export default {
    components: {
        'navbar-layout': NavbarLayout,
        'footer-layout': FooterLayout,
        'categories-layout': () => import('./layouts/commonlayouts/CategoriesLayout.vue')
    },
}
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    flex-direction: column;

    &--size{
        min-height: 100vh;
    }

    &__navbar{
        height: 1;
    }

    &__view{
        flex: 100%;
    }

    &__footer{
        height: 1;
    }
}

</style>