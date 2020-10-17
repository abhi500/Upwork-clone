<template>
    <nav class="navbar navbar--theme navbar--size">
        <div class="navbar__container navbar__container--size">
            <img src="/src/assets/images/image.png" class="navbar__icon navbar__icon--size">
        </div>
    </nav>
</template>

<style lang="scss" scoped>

.navbar{
    box-shadow: 0 5px 3px 2px $lightgrey;

    &--size{
        width: 100%;
        height: 70px;
    }

    &--theme{
        background-color: white;
    }

    &__container{
        margin: auto;
        display: flex;
        align-items: center;

        &--size{
            width: 50%;
            height: 70px;
        }
    }
}

</style>