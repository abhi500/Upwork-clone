<template>
    <section class="section section--size section--theme">
        <div class="section__center section__center--size">
            <div class="section__left">
                <h1>Instapage saved $2.3M with Upwork </h1>
                <h5>"Upwork took a lot of stress off of growing with minimal resources"</h5>
            </div>
            <div class="section__right"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.section{

    &--theme{
        background-color: $lightbrown;
    }

    &--size{
        height: 40vh;
    }

    &__center{
        margin: auto;
        display: flex;
        align-items: center;

        &--size{
            width: 60%;
            height: 100%;
        }
    }

    &__left{
        flex: 1;
        
    }

    &__right{
        flex: 1;
    }
}

</style>