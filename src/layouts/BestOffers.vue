<template>
    <section class="section 
        section--size">
        <div class="section__center 
            section__center--size">
            <h1 class="section__title">Choose the offering that works best for you</h1>
            <h5 class="section__label">All options include access to Upwork’s talent pool of quality talent and agencies.</h5>
            <ul class="section__list 
                section__list--size">
                <li class="section__listitem 
                    section__listitem--size" v-for="item in list" :key="item">
                    <h3>{{ item.title }}</h3>
                    <button class="section__button 
                        section__button--theme 
                        section__button--size">{{ item.btnTitle }}</button>
                    <span class="section__price">{{ item.price }}</span>
                    <hr class="section__line section__line--size">
                    <ul class="section__sublist">
                        <li class="section__sublistitem" v-for="subitem in item.infolist" :key="subitem">
                            <font-awesome-icon icon="check" class="section__icon"/>
                            <span class="section__sub-label">{{ subitem }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: 'Basic',
                    btnTitle: 'Select Basic',
                    price: 'Free*',
                    infolist: [
                        'Verified work history and reviews',
                        'Unlimited proposals ',
                        'Built-in collaboration tools and easy payments'
                    ]
                },
                {
                    title: 'Plus',
                    btnTitle: 'Select Plus',
                    price: '$49.99/month*',
                    infolist: [
                        'Verified work history and reviews',
                        'Unlimited proposals ',
                        'Built-in collaboration tools and easy payments'
                    ]
                },
                {
                    title: 'Business',
                    btnTitle: 'Contact Us',
                    price: '$849/month**',
                    infolist: [
                        'Verified work history and reviews',
                        'Unlimited proposals ',
                        'Built-in collaboration tools and easy payments'
                    ]
                },
                {
                    title: 'Enterprice',
                    btnTitle: 'Contact Us',
                    price: 'Price varies - contact us for a demo',
                    infolist: [
                        'Verified work history and reviews',
                        'Unlimited proposals ',
                        'Built-in collaboration tools and easy payments'
                    ]
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.section{
    padding: 50px 0;

    &--size{
        height: auto;
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

    &__list{
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 50px 0;

        &--size{
            width: 100%;
        }
    }

    &__listitem{
        box-shadow: 2px 5px 5px 2px $lightgrey;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;

        &:not(:last-child){
            margin-right: 30px;
        }
        
        &--size{
            height: auto;
            width: 300px;
        }
    }

    &__button{
        border: none;
        padding: 12px 30px;
        color: white;
        margin-top: 30px;
        border-radius: 2px;
        box-shadow: 2px 2px 2px 2px $lightgrey;
        cursor: pointer;

        &:hover{
            box-shadow: 2px 2px 7px 7px $lightgrey;
        }

        &--theme{
            background-color: $green;
        }
    }

    &__price{
        margin-top: 20px;
        font-size: 14px;
    }

    &__line{
        border: none;
        border-top: 1px solid $lightgrey;
        margin-top: 30px; 
        
        &--size{
            width: 100%;
        }
    }

    &__sublist{
        list-style: none;
        padding: 10px;
    }

    &__sublistitem{
        padding: 10px 20px;
    }

    &__icon{
        color: $green;
    }

    &__sub-label{
        font-size: 14px;
        margin-left: 5px;
    }
}

</style>