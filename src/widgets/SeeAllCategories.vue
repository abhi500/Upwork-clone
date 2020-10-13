<template>
    <section class="section section--size section--theme">
        See all categories
    </section>
</template>

<script>
export default {
    created() {
        console.log(123)
    },
}
</script>

<style lang="scss" scoped>

.section{
    position: fixed;
    bottom: 0;
    animation: animation .5s ease;

    &--theme{
        background-color: $homebackground;
    }

    &--size{
        height: 100vh;
        width: 100%;
    }

}

@keyframes animation {
    0%{
        height: 40vh;
    }

    100%{
        height: 100vh;
    }
}

</style>