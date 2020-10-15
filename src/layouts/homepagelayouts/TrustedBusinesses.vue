<template>
    <section class="section section--size section--theme">
        <div class="section__center section__center--size">
            <span class="section__label">Trusted by 5M+ businesses</span>
            <ul class="section__list section__list--size">
                <li v-for="(image, index) in images" :key="index" class="section__listitem">
                    <img :src="image" class="section__image section__image--size">
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            images: ['/src/assets/images/svgtopng/airbnb-b562d93.png', '/src/assets/images/svgtopng/automatic-6156771.png',
                '/src/assets/images/svgtopng/bissell-5f96ccb.png', '/src/assets/images/svgtopng/coty-355301a.png',
                '/src/assets/images/svgtopng/microsoft-a4ac95d.png', '/src/assets/images/svgtopng/bissell-5f96ccb.png'
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.section{

    &--size{
        height: 200px;
        width: 100%;
    }

    &--theme{
        background-color: white;
    }

    &__center{
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--size{
            width: 60%;
            min-height: 200px;
        }
    }

    &__label{
        font-weight: 600;
        font-size: 16px;
        margin-top: 30px;
    }

    &__list{
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        &--size{
            width: 100%;
        }
    }

    &__listitem{

    }

    &__image{

        // &--size{
        //     // height: 200px;
        //     // width: 200px;
        // }
    }
}

</style>