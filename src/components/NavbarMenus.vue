<template>
    <div class="container">
        <ul class="container__menus">
            <li class="container__menu-item" v-for="menu in menus" :key="menu">
                {{ menu }}
            </li>
        </ul>
        <signup-btn></signup-btn>
    </div>
</template>

<script>

import SignUpBtn from '../components/SignUpButton.vue';

export default {
    components:{
        'signup-btn': SignUpBtn
    },

    data() {
        return {
            menus: ['HOW IT WORKS', 'SOLUTIONS', 'ENTERPRISE', 'LOG IN']
        }
    },
}
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    margin-left: auto;

    &__menus{
        display: flex;
        list-style: none;
        align-items: center;

    }

    &__menu-item{
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 20px;
        color: #655C6A;

        &:hover{
            color: $green;
        }
    }
}

</style>