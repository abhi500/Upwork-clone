<template>
    <div class="container 
        container--size 
        container--theme">
        <auth-navbar></auth-navbar>
        <div class="container__mid">
             <div class="container__login 
                container__login--size 
                container__login--theme">
                <div class="container__center container__center--size">
                    <h2 class="container__title">Log in and get to work</h2>
                    <div class="container__email">
                        <font-awesome-icon 
                            icon="user" 
                            class="icon icon--size"/>
                        <input type="email" 
                            placeholder="Username or Email" 
                            class="container__input">    
                    </div>
                    <button class="container__continue-button 
                        container__continue-button--theme 
                        container__continue-button--size">Continue</button>
                    <div class="container__line">
                        <hr class="line">
                        <span class="or-label">or</span>
                        <hr class="line">
                    </div>
                    <google-button class="mt-1"></google-button>
                    <apple-button class="mt-1"></apple-button>
                </div>
            </div>
            <div class="container__bottom 
                container__bottom--size 
                container__bottom--theme">
                <div class="container__center container__center--size">
                    <div class="container__line">
                        <hr class="line-bottom">
                        <span class="newbee-label">New to freelance</span>
                        <hr class="line-bottom">
                    </div>
                    <button class="container__button container__button--size container__button--theme" 
                        @click="navToSignUp">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <auth-footer class="align-bottom"></auth-footer>
    </div>
</template>

<script>

import Navbar from '../components/AuthNavbar.vue';
import Footer from '../components/AuthFooter.vue';
import GoogleButton from '../components/GoogleButton.vue'
import AppleButton from '../components/AppleButton.vue'

export default {
    components:{
        'auth-navbar' : Navbar,
        'auth-footer': Footer,
        'google-button': GoogleButton,
        'apple-button': AppleButton
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
        background-color: $authbackground;
    }

    &__mid{
        margin: auto auto 0 auto;
        box-shadow: 2px 2px 4px 4px $lightgrey;
    }

    &__login{
        display: flex;
        flex-direction: column;
        align-items: center;

        &--size{
            height: auto;
            width: 500px;
        }

        &--theme{   
            background-color: white;
        }
    }

    &__bottom{
        display: flex;
        flex-direction: column;
        align-items: center;

        &--size{
            height: auto;
            width: 100%;
        }

        &--theme{
            background-color: #F9F9F9;
        }   
    }

    &__center{
        display: flex;
        flex-direction: column;
        margin: 50px 0;

        &--size{
            width: 310px;
        }

        &:last-child{
            margin: 30px;
        }
    }

    &__title{
        font-weight: 500;
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
        padding: 0 10px;

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

    &__line{
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    &__button{
        border: none;
        padding: 10px;
        margin: 30px auto;
        box-shadow: 1px 1px 2px 2px $lightgrey;
        color: $green;
        cursor: pointer;

        &:hover{
            box-shadow: 2px 2px 5px 5px $lightgrey;
        }
        
        &--theme{
            background-color: white;
        }

        &--size{
            width: 60%;
        }
    }
}

.or-label{
    margin: 0 10px;
    color: grey;
    font-size: 13px;
}

.newbee-label{
    margin: 0 10px;
    color: grey;
    font-size: 13px;
}

.align-bottom{
    margin-top: auto;
}

.icon{
    color: $green;
    
    &--size{
        height: 13px;
    }
}

.line{
    height: 1px;
    width: 100%;
    border: none;
    border-top: 1px solid $lightgrey;
}

.mt-1{
    margin-top: 1rem;
}

.line-bottom{
    height: 1px;
    width: 100%;
    flex: 1;
    border: none;
    border-top: 1px solid black;
}

</style>