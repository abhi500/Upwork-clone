<template>
    <div class="container container--size">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    components: {
       
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
}

</style>