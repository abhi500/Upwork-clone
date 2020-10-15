<template>
    <section class="section section--size section--theme">
        <div class="section__center section__center--size">
            <h3 class="section__title">How it works</h3>
            <ul class="section__list section__list--size">
                <li class="section__listitem section__listitem--size" v-for="(item, index) in list" :key="index">
                    <img :src="item.icon"  class="section__icon section__icon--size">
                    <h5 class="section__label">{{ item.name }}</h5>
                    <p class="section__description">{{ item.description }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    icon: '/src/assets/images/svgtopng(3)/find-9449b48.png',
                    name: 'Post a job(it\'s free)',
                    description: 'Tell us about your project. Upwork connects you with top talent and agencies around the world, or near you. '
                },
                {
                    icon: '/src/assets/images/svgtopng(3)/work-e0cdb7b.png',
                    name: 'Bids come to you',
                    description: 'Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.'
                },
                {
                    icon: '/src/assets/images/svgtopng(3)/hire-f1d0563.png',
                    name: 'Collaborate easily',
                    description: 'Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.'
                },
                {
                    icon: '/src/assets/images/svgtopng(3)/pay-8951f52.png',
                    name: 'Payment simplified',
                    description: 'Pay hourly or fixed-price and receive invoices through Upwork. Pay for work you authorize. '
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.section{

    &--size{
        height: 500px;
    }

    &--theme{
        background-color: white;
    }

    &__center{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 50px 0;

        &--size{
            width: 60%;
        }
    }

    &__title{
        font-weight: 600;
        font-size: 34px;
    }

    &__list{
        list-style: none;
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }

    &__listitem{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        flex: 1;

        &--size{
            height: 400px;
            min-width: 200px;
        }

    }

    &__icon{

        &--size{
            width: 110px;
            height: 100px;
        }
    }

    &__label{
        margin-top: 20px;
        letter-spacing: .5px;
    }

    &__description{
        margin-top: 20px;
        font-size: 14px;
        letter-spacing: .5px;
        line-height: 22px;
        text-align: center;
    }
}

</style>