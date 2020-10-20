<template>
    <button type="button" class="button button--size button--theme">
        <font-awesome-icon :icon="['fab','apple']"></font-awesome-icon>
        Sign in with Apple
    </button>
</template>

<style lang="scss" scoped>

.button{
    border: 1px solid black;
    border-radius: 7px;
    box-shadow: 1px 1px 2px 2px $lightgrey;
    color: black;
    cursor: pointer;

    &:hover{
        box-shadow: 2px 2px 4px 4px $lightgrey;
    }

    &--theme{
        background-color: white;
    }

    &--size{
        width: 100%;
        height: 40px;
    }
}

</style>