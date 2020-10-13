<template>
    <section class="container container--size container--theme">
        <div class="container__center container__center--size">
            <h5 class="container__title">Find quality talent or agencies</h5>
            <ul class="container__list">
                <li class="container__listitem container__listitem--size" v-for="agency in agencies" :key="agency">
                    <img :src="agency.icon" class="container__image">
                    <span class="container__name">{{ agency.name }}</span>
                </li>
            </ul>
            <p class="container__label">Don't see what you're looking for? 
                <span class="container__link" @click="navigateToGivenRoute('/all')">See all categories</span>
            </p>
        </div>
    </section>
</template>

<script>

import EventBus from '../EventBus';

export default {
    data() {
        return {
            agencies: [
                {
                    name: 'Web, Mobile & Software Dev',
                    icon: '/src/assets/images/svgtopng(1)/admin-support-desktop-ff2e0d4.png',
                },
                {
                    name: 'Design & Creative',
                    icon: '/src/assets/images/svgtopng(2)/customer-service-desktop-22b35df.png',
                },
                {
                    name: 'Writing',
                    icon: '/src/assets/images/svgtopng(2)/data-science-desktop-b430512.png',
                },
                {
                    name: 'Sales & Marketing',
                    icon: '/src/assets/images/svgtopng(2)/design-creative-desktop-109353b.png',
                },
                {
                    name: 'Admin Support',
                    icon: '/src/assets/images/svgtopng(2)/engineering-architecture-desktop-85b023c.png',
                },
                {
                    name: 'Customer Service',
                    icon: '/src/assets/images/svgtopng(1)/marketing-sales-desktop-ebb7dd9.png',
                },
                {
                    name: 'Data Science & Analytics',
                    icon: '/src/assets/images/svgtopng(1)/writing-desktop-1b7ea27.png',
                },
                {
                    name: 'Engineering & Architecture',
                    icon: '/src/assets/images/svgtopng(1)/writing-desktop-1b7ea27.png',
                },
            ]
        }
    },

    methods: {
        navigateToGivenRoute(to){
            EventBus.$emit('route', {to: to});
        }
    },
}
</script>

<style lang="scss" scoped>

.container{
    margin: 70px 0;

    &--size{
        width: 100%;
        min-height: 500px;
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
        // height: 200px;
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
        margin-top: 20px;
    }
}

</style>