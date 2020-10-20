<template>
    <footer class="footer footer--size footer--theme">
        <h2 class="footer__title">{{ title }}</h2>
        <ul class="footer__list footer__list--size">
            <li class="footer__listitem" v-for="(item, index) in list" :key="index">
                {{ item }}
            </li>
        </ul>
    </footer>   
</template>

<script>
export default {
    data() {
        return {
            title: '© 2015 - 2020 Upwork® Global Inc. ',
            list: ['Terms of Service', 'Privacy Policy', 'Accessibility']
        }
    },
}
</script>

<style lang="scss" scoped>

.footer{
    display: flex;
    flex-direction: column;

    &--size{
        height: 135px;
        width: 100%;
    }

    &--theme{
        background-color: $footerbackground;
    }

    &__title{
        font-size: 14px;
        margin: auto;
        color: white;
        font-weight: normal;
        margin-top: 30px;
    }

    &__list{
        list-style: none;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--size{
            width: auto;
            // background-color: red;
        }
    }

    &__listitem{
        font-size: 14px;
        color: white;
    }
}

</style>