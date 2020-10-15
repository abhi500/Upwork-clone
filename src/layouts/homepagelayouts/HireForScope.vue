<template>
    <section class="section section--size">
        <div class="section__center 
            section__center--size">
            <span class="section__label">Hire for any scope</span>
            <ul class="section__list 
                section__list--size 
                section__list--theme">
                <li class="section__listitem 
                    section__listitem--size" v-for="(data, index) in 3" :key="index">
                    <div class="section__green-box 
                        section__green-box--size 
                        section__green-box--theme"></div>
                    <h3 class="section__title">Complex Project</h3>
                    <p class="section__subtitle">Find specialized experts and agencies for large projects.</p>

                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.section{

    &--size{
        height: 30vh;
    }

    &__center{
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: space-between;

        &--size{
            width: 60%;
            height: 100%;
        }
    }

    &__label{
        font-weight: 600;
        font-size: 17px;
    }

    &__list{
        list-style: none;
        display: flex;
        border: 1px solid $lightgrey;

        &--size{
            height: 70%;
        }

        &--theme{
            background-color: white;
        }
    }

    &__listitem{
        margin: 20px 0px;
        padding: 20px;
        // border-right: 1px solid $lightgrey;

        &:not(:last-child){
            border-right: 1px solid $lightgrey;
        }

        &--size{
            height: auto;
            width: 250px;
        }
    }

    &__green-box{
        background-color: red;

        &--size{
            height: 8px;
            width: 35px;
        }

        &--theme{
            background-color: $lightgreen;
        }
    }

    &__lable{
        font-size: 15px;
        font-weight: 600;
    }

    &__subtitle{
        margin-top: 20px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .5px;
    }

    &__title{
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
    }
}

</style>