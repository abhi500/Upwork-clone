<template>
    <nav class="navbar navbar--size navbar--theme">
        <div class="navbar__container navbar__container--size">
            <img :src="image" class="navbar__icon">
            <search-box></search-box>
            <navbar-menus></navbar-menus>
        </div>
    </nav>
</template>

<script>

import image from '../assets/images/image.png';
import SearchBox from '../components/SearchBox.vue';
import NavbarMenus from '../components/NavbarMenus.vue';

export default {
    components: {
        'search-box': SearchBox,
        'navbar-menus': NavbarMenus
    },

    data() {
        return {
            image: image
        }
    },
}
</script>

<style lang="scss" scoped>

.navbar{
    border-top: 1px solid $lightgrey;
    border-bottom: 1px solid $lightgrey;

    &--size{
        height: $navbarheight;
        width: 100%;
    }

    &--theme{
        background-color: $navbarbackground;
    }

    &__container{
        display: flex;
        align-items: center;
        margin: auto;

        &--size{
            width: 60%;
            height: 100%;
        }
    }
}

</style>