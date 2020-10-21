<template>
    <button class="button button--size button--theme">
        <img src="/src/assets/images/google-icon.png" 
            class="button__icon 
                button__icon--size
                button__icon--theme">
        <span class="button__label">{{ name }}</span>
    </button>
</template>

<script>
export default {
    props: ['name']
}
</script>

.<style lang="scss" scoped>

.button{
    border: none;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 1px 2px 2px $lightgrey;

    &--size{
        width: 100%;
        height: 40px;
    }

    &--theme{
        background-color: #4285F4;
    }

    &:hover{
        box-shadow: 2px 2px 4px 4px $lightgrey;
    }

    &__icon{
        margin: 0 2px;
        padding: 5px;

        &--size{
            width: 25px;
            height: 25px;
        }

        &--theme{
            background-color: white;
        }
    }

    &__label{
        margin: auto;
    }
}

</style>