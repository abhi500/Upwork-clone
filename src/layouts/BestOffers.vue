<template>
    <section class="section 
        section--size">
        <div class="section__center 
            section__center--size">
            <h1 class="section__title">Choose the offering that works best for you</h1>
            <h5 class="section__label">All options include access to Upwork’s talent pool of quality talent and agencies.</h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.section{

    &--size{
        height: calc(100vh - 70px);
    }

    &__center{
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--size{
            width: 60%;
        }
    }

    &__title{
        font-size: 35px;
        margin-top: 50px;
    }

    &__label{
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .5px;
    }
}

</style>