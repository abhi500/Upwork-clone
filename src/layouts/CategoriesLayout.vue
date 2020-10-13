<template>
    <section class="section section--size section--theme">
        <ul class="section__categories section__categories--size">
            <li class="section__category" v-for="category in categories" :key="category">
                {{ category }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            categories: ['Web Dev', 'Mobile Dev', 'Design', 'Writing', 'Admin Support', 'Customer Service', 'Marketing', 
            'Accounting', 'See All Categories']
        }
    },
}
</script>

<style lang="scss" scoped>

.section{
    display: flex;
    align-items: center;

    &--size{
        width: 100%;
        height: 40px;
    }

    &--theme{
        background-color: #F9F9F9;
    }

    &__categories{
        margin: auto;
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;

        &--size{
            width: 60%;
            // height: 10px;
        }
    }

    &__category{
        cursor: pointer;
    }
}

</style>