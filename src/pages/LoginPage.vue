<template>
    <div class="container 
        container--size 
        container--theme">
        <auth-navbar></auth-navbar>
        <div class="container__login 
            container__login--size 
            container__login--theme">
            <h2 class="container__title">Log in and get to work</h2>
            <div class="container__email">
                <font-awesome-icon icon="user" class="icon"/>
                <input type="text" placeholder="Username or Email" class="container__input">    
            </div>
        </div>
        <auth-footer class="align-bottom"></auth-footer>
    </div>
</template>

<script>

import Navbar from '../components/AuthNavbar.vue';
import Footer from '../components/AuthFooter.vue';

export default {
    components:{
        'auth-navbar' : Navbar,
        'auth-footer': Footer
    }
}
</script>

<style lang="scss" scoped>

.container{
    position: absolute;
    display: flex;
    flex-direction: column;

    &--size{
        height: 100vh;
        width: 100%;
    }

    &--theme{
        background-color: $authbackground;
    }

    &__login{
        margin: auto auto 0 auto;
        box-shadow: 2px 2px 4px 4px $lightgrey;
        display: flex;
        flex-direction: column;

        &--size{
            height: 600px;
            width: 500px;
        }

        &--theme{
            background-color: white;
        }
    }

    &__input{
        padding: 10px 20px;
        border: none;
    }

    &__email{
        border: 1px solid $lightgrey;
    }
}

.align-bottom{
    margin-top: auto;
}

</style>