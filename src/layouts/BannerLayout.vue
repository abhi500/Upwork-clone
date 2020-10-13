<template>
    <section class="banner banner--size banner--theme">
        <div class="banner__container banner__container--size">
            <div class="banner__left banner__left--size">
                <h1 class="banner__title">In-demand talent on demand.<span class="banner__trade-symbol">&trade;</span></h1>
                <h1 class="banner__subtitle">Upwork is how.<span class="banner__subtrade-symbol">&trade;</span></h1>
                <p class="banner__label">Hire proven pros with confidence using the world’s largest, remote talent platform. </p>
                <div>
                    <a href="#" 
                        role="button" 
                        class="banner__start-button banner__start-button--theme" 
                        type="button">Get Started
                    </a>
                    <a href="#" 
                        role="button" 
                        class="banner__watch-button banner__watch-button--theme" 
                        type="button">Watch Demo
                    </a>
                </div>
            </div>
            <div class="banner__right banner__right--size">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.banner{
    display: flex;
    font-family: Canela Deck Bold !important;

    &--theme{
        background-color: $bannerbackground;
    }

    &--size{
        min-height: 450px;
        height: auto;
        width: 100%;
    }

    &__title{
        font-size: 52px;
        line-height: 64px;
        font-weight: 700;
        color: #6FDA44;
    }

    &__subtitle{
        color: white;
        font-size: 45px;
        line-height: 60px;
        font-weight: 700;
    }

    &__label{
        color: white;
        font-size: 18px;
        margin: 20px 0;
        letter-spacing: normal;
        font-weight: 500;
    }

    &__subtrade-symbol{
        color: white;
        font-size: 12px;
        vertical-align: super;
    }

    &__trade-symbol{
        font-size: 12px;
        vertical-align: super;
        color: #6FDA44;
    }

    &__container{
        margin: auto;
        display: flex;
        align-items: center;

        &--size{
            width: 60%;
        }
    }

    &__left{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &--size{
            min-height: 450px;
        }
    }

    &__right{
        flex: 1;
        background-image: url('../assets/images/xl-47f811c.jpg');
        background-position: 60%;
        background-repeat: no-repeat;
        background-size: cover;

        &--size{
            min-height: 450px;
        }
    }

    &__start-button{
        padding: 10px 30px;
        border: none;
        color: white;
        margin-right: 20px;
        border-radius: 2px;
        cursor: pointer;
        text-decoration: none;

        &--theme{
            background-color: $green;
        }
    }

    &__watch-button{
        padding: 10px 30px;
        border: none;
        color: $green;
        border-radius: 2px;
        cursor: pointer;
        // background-color: white;
        text-decoration: none;

        &--theme{
            background-color: white;
        }
    }
}

</style>