<template>
    <div class="search-box search-box--size">
        <font-awesome-icon icon="search" class="icon"/>
        <font-awesome-icon icon="angle-down" class="icon"/>
        <input type="search" 
            :placeholder="placeholder"
            name="search" 
            id="search-category" 
            class="input-search input-search--size">
    </div>
</template>

<style lang="scss" scoped>

.search-box{
    border: 1px solid $lightgrey;
    cursor: pointer;
    border-radius: 2px;
    display: flex;
    align-items: center;
    margin-left: 10px;

    &--size{
        width: 300px;
        height: 40px;
    }
}

.icon{
    height: 15px;
    width: 15px;
    color: $lightgreen;
    margin-left: 5px;
}

.input-search{
    border: none;
    font-size: 13px;
    font-size: 500;
    margin: 1px 10px;
}

</style>

<script>

export default {
    data() {
        return {
            placeholder: "Find Professionals & Agencies"
        }
    },

    mounted() {
        this.changeBorderOnHover();
    },

    methods: {

        /**
         * change border of search-box on input-search hover
         */
        changeBorderOnHover(){
            let searchBox = document.querySelector('.search-box');
            let inputSearch = document.querySelector('.input-search');

            //add green border
            inputSearch.addEventListener('mouseover', () => {
                searchBox.style.border = '1px solid #018328';
                searchBox.style.boxShadow = '1px 1px 2px 2px lightgray inset';
                // box-shadow: 1px 1px 3px 2px lightgray inset;
            })

            //add grey border
            inputSearch.addEventListener('mouseout', () => {
                searchBox.style.border = '1px solid #E3E5E5';
                searchBox.style.boxShadow = 'none';
            })
        }
    },
    
}
</script>