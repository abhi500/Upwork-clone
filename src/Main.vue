<template>
    <div>
        <navbar-layout></navbar-layout>
        <footer-layout></footer-layout>
    </div>
</template>

<script>

import NavbarLayout from './layouts/NavbarLayout.vue';
import FooterLayout from './layouts/FooterLayout.vue';

export default {
    components: {
        'navbar-layout': NavbarLayout,
        'footer-layout': FooterLayout
    }
}
</script>