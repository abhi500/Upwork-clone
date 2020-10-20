<template>
    <div class="button button--theme" @click="navToSignUpPage">
        Sign Up
    </div>
</template>

<script>
export default {
    methods: {
        navToSignUpPage(){
            this.$router.push({
                name: 'Signup'
            })
        }
    },
}
</script>

<style lang="scss" scoped>

.button{
    padding: 9px 25px;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    box-shadow: 2px 2px 5px 3px $lightgrey;
    letter-spacing: .5px;

    &--theme{
        background-color: $green;
    }

    &:hover{
        box-shadow: 2px 2px 6px 5px $lightgrey;
    }
}

</style>