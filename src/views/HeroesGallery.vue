<template>
    <div class="hero-gallery">
        <div class="hero-gallery__wrapper">
            <HeroesGalleryItem v-for="heroItem in heroItems" :key="heroItem.id" :heroItem="heroItem"/>
            <CentralMessage v-if="centralMessage" :message="centralMessage"/>
        </div>
        <LoadMoreButton v-on:loadMoreItems="loadMoreItems" :requestStatus="requestStatus" v-show="!isItemsGone"/>
    </div>
</template>


<script>
    import HeroesGalleryItem from '../components/HeroesGallery/HeroesGalleryItem.vue';
    import LoadMoreButton from '../components/HeroesGallery/LoadMoreButton.vue';
    import CentralMessage from '../components/CentralMessage.vue';
    import {
        getItemsData
    } from '../api.js';

    export default {
        name: 'HeroesGallery',
        components: {
            HeroesGalleryItem,
            LoadMoreButton,
            CentralMessage
        },
        data: function () {
            return {
                heroItems: [],
                offset: 0,
                isItemsGone: false,
                requestStatus: 'PENDING',
                errorMessage: ''
            }
        },
        computed: {
            centralMessage: function () {
                if (this.isItemsGone) {
                    return this.$t('message.gone');
                } else if (this.requestStatus == 'ERROR') {
                    return this.$t('message.error', {
                        err: this.errorMessage
                    });
                }
                return '';
            }
        },
        methods: {
            //Обработка запроса к API
            loadMoreItems: function () {
                this.requestStatus = 'PENDING';
                getItemsData(this.offset)
                    .then(r => {
                        //Ответ не 200 - заканчиваем 
                        if (r.status !== 200) {
                            this.requestStatus = 'ERROR';
                            this.errorMessage += this.$t('message.responceCode', {
                                code: r.status
                            });
                            return;
                        }
                        //Ответ 200 продолжаем загрузку
                        r.json()
                            .then(r => {
                                if (r.results.length === 0) {
                                    this.isItemsGone = true;
                                } else {
                                    r.results.forEach(_ => this.heroItems.push(_));
                                    this.offset += r.results.length;
                                }

                                this.requestStatus = 'SUCCESS';
                            });
                    })
                    //Ловим остальные ошибки
                    .catch(err => {
                        this.requestStatus = 'ERROR';
                        this.errorMessage = err;
                    })
            }
        },
        created: function () {
            this.loadMoreItems();
        }
    }

</script>

<style scoped>
    .hero-gallery {
        margin-top: 30px;
        flex-grow: 1;
        flex-shrink: 0;
    }

    .hero-gallery__wrapper {
        max-width: 1080px;
        min-width: 320px;
        box-sizing: border-box;

        margin: 0 auto;
        padding: 0 20px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 1077px) {
        .hero-gallery__wrapper {
            justify-content: space-around;
        }
    }

</style>
