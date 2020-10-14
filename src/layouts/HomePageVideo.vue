<template>
    <section class="section section--size section--theme">
        <div class="section__center section__center--size">
            <div class="section__left">
                <h1 class="section__title">Instapage saved $2.3M with Upwork </h1>
                <h5 class="section__subtitle">"Upwork took a lot of stress off of growing with minimal resources"</h5>
                <div class="section__info">
                    <img src="/src/assets/images/tyson-avatar-a5754d7.png"
                        class="section__image 
                            section__image--size">
                    <div class="section__user-data">
                        <span class="section__name">Tyson Quick</span>
                        <span class="section__status">CEO and co-founder, Instapage</span>
                    </div>
                </div>
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

    &__title{
        color: white;
        font-size: 35px;
    }

    &__subtitle{
        color:#a0a0a0;
        font-weight: normal;
        font-size: 16px;
        letter-spacing: .5px;
        margin-top: 20px;
    }

    &__info{
        display: flex;
        margin-top: 30px;
    }

    &__image{
        border-radius: 20px;

        &--size{
            height: 40px;
            width: 40px;
        }
    }

    &__name{
        font-size: 12px;
        font-weight: 600;
    }

    &__status{
        margin-top: 5px;
        font-size: 13px;
    }

    &__user-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #a0a0a0;
        margin-left: 10px;
    }
}

</style>