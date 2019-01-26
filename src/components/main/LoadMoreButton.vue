<template>
    <button class="load-more-button" v-on:click="loadMoreItems">{{ buttonText }}</button>
</template>


<script>
    export default {
        name: 'LoadMoreButton',
        props: {
            requestStatus: String
        },
        methods: {
            //Загрузить еще элементы
            loadMoreItems: function() {
                if (!this.loadingData) this.$emit('loadMoreItems');
            }
        },
        computed: {
            //Вычисление надписи на кнопке
            buttonText: function() {
                return (this.requestStatus == 'PENDING') ? this.$t('buttonText.loading') : this.$t('buttonText.show');
            }
        }
    }

</script>


<style scoped>
    .load-more-button {
        width: 386px;
        height: 45px;
        margin: 0 auto;
        margin-top: 71px;
        display: block;

        background-color: #2C467F;
        padding: 0;
        border: none;

        color: #FFFFFF;
        font-size: 14px;
        text-align: center;
        letter-spacing: 0.05em;
    }

    @media (max-width: 415px) {
        .load-more-button {
            width: 80%;
        }
    }

</style>
