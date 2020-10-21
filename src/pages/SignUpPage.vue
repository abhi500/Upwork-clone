<template>
    <div class="container 
        container--size 
        container--theme">
        <auth-navbar></auth-navbar>

        <div class="container__center container__center--theme container__center--size">
            <form action="#" 
                class="container__form container__form--size container__form--theme">
                <h3 class="container__label">Get your free account</h3>
                <google-button name="Continue with Google" class="mt-1"></google-button>
                <apple-button name="Continue with Google" class="mt-1"></apple-button>
                <div class="container__line">
                    <hr class="line">
                    <span class="or-label">or</span>
                    <hr class="line">
                </div>
                <div class="container__email">
                    <font-awesome-icon 
                        icon="envelope" 
                        class="icon icon--size"/>
                    <input type="email" 
                        placeholder="Working email address" 
                        class="container__input">    
                </div>
                <button class="container__continue-button 
                        container__continue-button--theme 
                        container__continue-button--size">Continue</button>
            </form>
        </div>
       <div class="align-bottom">
            <trusted-businesses></trusted-businesses>
            <auth-footer></auth-footer>
       </div>
    </div>
</template>

<script>

import Navbar from '../components/AuthNavbar.vue';
import Footer from '../components/AuthFooter.vue';
import GoogleButton from '../components/GoogleButton.vue'
import AppleButton from '../components/AppleButton.vue'
import TrustedBusinesses from '../layouts/commonlayouts/TrustedBusinesses.vue'

export default {
    components:{
        'auth-navbar' : Navbar,
        'auth-footer': Footer,
        'google-button': GoogleButton,
        'apple-button': AppleButton,
        'trusted-businesses': TrustedBusinesses
    },

    methods: {

        //navigation to signup page
        navToSignUp(){
            this.$router.push({
                name: 'Signup'
            })
        }
    },
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
        background-color: $bannerbackground;
    }

    &__center{
        margin: auto;

        &--size{
            width: 550px;
            height: 400px;
        }

        &--theme{
            background-color: white;
        }
    }

    &__form{
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: center;

        &--size{
            width: 400px;
            height: 400px;
        }

        &--theme{
            // background-color: white;
        }
    }

    &__label{
        margin-top: 40px;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: .5px;
        width: 100%;
    }

    &__line{
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    &__input{
        padding: 10px 20px;
        border: none;

        &::placeholder{
            font-size: 13px;
        }
    }

    &__email{
        border: 1px solid $lightgrey;
        margin-top: 30px;
        padding-left: 10px;
        width: 100%;
    }

    &__continue-button{
        border: none;
        color: white;
        margin-top: 20px;
        cursor: pointer;
        box-shadow: 1px 1px 3px 3px $lightgrey;
        border-radius: 2px;

        &:hover{
            box-shadow: 2px 2px 5px 5px $lightgrey;
        }

        &--theme{
            background-color: $green;
        }

        &--size{
            width: 100%;
            height: 40px;
        }
    }
}

.or-label{
    margin: 0 10px;
    color: grey;
    font-size: 13px;
}

.line{
    height: 1px;
    width: 185px;
    border: none;
    border-top: 1px solid $lightgrey;
}

.align-bottom{
    margin-top: auto;
}

.mt-1{
    margin: 1rem;
}

.icon{
    color: $green;
    
    &--size{
        height: 13px;
    }
}

</style>