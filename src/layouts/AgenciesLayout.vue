<template>
    <section class="container container--size container--theme">
        <div class="container__center container__center--size">
            <h5 class="container__title">Find quality talent or agencies</h5>
            <ul class="container__list">
                <li class="container__listitem container__listitem--size" v-for="(n, index) in 8" :key="index">
                    <img src="../assets/images/554764919_640.jpg" class="container__image">
                    <span class="container__name">{{ agencies[0].name }}</span>
                </li>
            </ul>
            <p class="container__label">Don't see what you're looking for? <span class="container__link">See all categories</span></p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            agencies: [
                {
                    name: 'Web, Mobile & Software Dev',
                    icon: '../assets/images/xl-47f811c.jpg',
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.container{

    &--size{
        width: 100%;
        min-height: 400px;
        height: auto;
    }

    &--theme{
        background-color: transparent;
    }

    &__center{
        margin: auto;

        &--size{
            width: 60%;
        }
    }

    &__title{
        line-height: 24px;
        font-size: 17px;
        word-break: break-word;
        margin: 30px 0;
        color: #222;
    }

    &__list{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &__listitem{
        display: flex;
        flex-direction: column;
        cursor: pointer;
        margin: 0 30px 30px 0;
        box-shadow: 5px 5px 5px 3px $lightgrey;

        &--size{
            min-height: 150px;
            width: 250px;
        }
    }

    &__image{
        width: auto;
        height: 200px;
    }

    &__name{
        font-size: 14px;
        font-weight: 600;
        padding: 10px 20px;
    }

    &__link{
        color: $lightgreen;
        font-size: 14px;
        cursor: pointer;
    }

    &__label{
        text-align: center;
        font-size: 14px;
    }
}

</style>