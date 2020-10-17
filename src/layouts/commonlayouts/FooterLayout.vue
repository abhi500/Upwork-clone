<template>
    <footer class="footer footer--size">
        <div class="footer__center footer__center--size">
            <p class="footer__para">Looking to hire for long-term or full-time assignments? See how 
                <a href="#" class="footer__link">Upwork Payroll</a> simplifies admin. </p>
            <hr class="footer__line">
            <div class="footer__row">
                <div>
                    <h3 class="footer__header">COMPANY</h3>
                    <ul class="footer__list">
                        <li class="footer__listitem" v-for="(item, index) in list" :key="index">
                            <a href="#" class="footer__link footer__link--disable">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                 <div>
                    <h3 class="footer__header">RESOURCES</h3>
                    <ul class="footer__list">
                        <li class="footer__listitem" v-for="(item, index) in list" :key="index">
                            <a href="#" class="footer__link footer__link--disable">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                 <div>
                    <h3 class="footer__header">BROWSE</h3>
                    <ul class="footer__list">
                        <li class="footer__listitem" v-for="(item, index) in list" :key="index">
                            <a href="#" class="footer__link footer__link--disable">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="footer__line">
            <div class="footer__share">
               <div class="footer__left">
                    <div class="footer__label">
                    Follow us
                    </div>
                    <ul class="footer__share-list">
                        <li class="footer__share-item 
                            footer__share-item--size
                            footer__share-item--theme" 
                            v-for="(icon, index) in iconList" :key="index">
                            <a href="#">
                                <font-awesome-icon :icon="['fab', icon]" class="footer__icon footer__icon--size"/>
                            </a>
                        </li>
                    </ul>
               </div>
                <div class="footer__right">
                    <div class="footer__label">
                        Mobile App
                    </div>
                    <ul class="footer__share-list">
                        <li class="footer__share-item 
                            footer__share-item--size
                            footer__share-item--theme" 
                            v-for="(icon, index) in otherList" :key="index">
                            <a href="#">
                                <font-awesome-icon :icon="['fab', icon]" class="footer__icon footer__icon--size"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="footer__line">
            <p class="footer__trademark"><small>© 2015 - 2020 Website® Global Inc.</small></p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            list: [ 'About Us',
                    'Investor Relations',
                    'Careers',
                    'Upwork Foundation',
                    'Press',
                    'Trust, Safety & Security',
                    'Terms of Service',
                    'Privacy Policy',
                    'Accessibility'
            ],

            iconList: [
                'facebook', 'linkedin-in', 'twitter', 'youtube', 'instagram'
            ],

            otherList: ['apple', 'android']
        }
    },
}
</script>

<style lang="scss" scoped>

.footer{
    background-color: $footerbackground;

    &--size{
        height: auto;
    }

    &__center{
        margin: auto;

        &--size{
            width: 60%;
        }
    }

    &__para{
        font-size: 13px;
        text-align: center;
        padding: 15px;
        color: white;
    }

    &__link{
        color: white;

        &--disable{
            text-decoration: none;
        }

        &:hover{
            text-decoration: underline;
        }
    }

    &__line{
        border: none;
        border-top: 1px solid #2B5468;
        width: 100%;
    }

    &__row{
        padding: 50px;
        display: flex;
        justify-content:space-between;
        color: white;
    }

    &__list{
        padding: 10px 0;
        list-style: none;
        
    }

    &__header{
        font-size: 12px;
    }

    &__listitem{
        font-size: 14px;
        padding: 5px 0;
    }

    &__share{
        padding: 10px;
        display: flex;
        align-items: center;
    }

    &__label{
        font-weight: 600;
        font-size: 12px;
        color: white;

    }

    &__share-list{
        list-style: none;
        display: flex;
        margin-left: 20px;
    }

    &__share-item{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        border-radius: 15px;
        cursor: pointer;

        &:hover{
            background-color: #336278;
        }
        
        &--size{
            height: 30px;
            width: 30px;
        }

        &--theme{
            background-color: #2B5468;
        }
    }

    &__icon{
        color: white;

        &--size{
            height: 14px;
        }
    }

    &__left{
        display: flex;
        align-items: center;
    }

    &__right{
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    &__trademark{
        color: white;
        text-align: center;
        padding: 40px 0;
    }
}

</style>