<template>
    <nav class="navbar navbar--theme navbar--size">
        <div class="navbar__container navbar__container--size">
            <img src="/src/assets/images/image.png" class="navbar__icon navbar__icon--size" @click="navToHomePage">
            <p class="navbar__label" v-if="isSignupPage">Already have an account? 
                <a href="#" class="navbar__link">Log in</a>
            </p>
        </div>
    </nav>
</template>

<script>
export default {

    computed: {
        isSignupPage(){
            return this.$route.name == 'Signup'
        }
    },

    methods: {

        /**
         * navigation to home page on icon click
         */
        navToHomePage(){
            this.$router.push({
                name: 'Home'
            })
        }
    },
}
</script>

<style lang="scss" scoped>

.navbar{
    box-shadow: 0 5px 3px 2px $lightgrey;

    &--size{
        width: 100%;
        height: 70px;
    }

    &--theme{
        background-color: white;
    }

    &__container{
        margin: auto;
        display: flex;
        align-items: center;

        &--size{
            width: 50%;
            height: 70px;
        }
    }

    &__icon{
        cursor: pointer;
    }

    &__label{
        font-size: 14px;
        margin-left: auto;
    }

    &__link{
        color: $green;
        font-weight: 600;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
}

</style>