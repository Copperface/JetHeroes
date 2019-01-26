<template>
    <!-- Блок информации о персонаже -->
    <div class="hero-card">
        <CentralMessage :message="centralMessage" v-if="centralMessage" />

        <div class="hero-card__wrapper" v-else>
            <div class="hero-card__portrait">
                <div class="hero-card__portrait-inner">
                    <div class="hero-card__portrait-content"><img :src="heroData.image.super_url" :alt="heroData.name"></div>
                </div>
            </div>
            <div class="hero-card__block">
                <div class="hero-card__name">{{ heroData.name }}</div>
                <div class="hero-card__records">
                    <span class="hero-card__label hero-card__label-real-name">{{ $t("heroCard.realName") }}</span><span class="hero-card__info hero-card__info-real-name">{{ heroData.real_name }}</span><br>
                    <span class="hero-card__label hero-card__label-publisher">{{ $t("heroCard.publisher") }}</span><span class="hero-card__info hero-card__info-publisher">{{ heroData.publisher.name}}</span><br>
                    <span class="hero-card__label hero-card__label-gender">{{ $t("heroCard.gender") }}</span><span class="hero-card__info hero-card__info-gender">{{ heroData.gender-1 ? $t("heroCard.female"):$t("heroCard.male") }}</span><br>
                    <span class="hero-card__label hero-card__label-updated">Updated:</span><span class="hero-card__info hero-card__info-updated">{{ $d(new Date(heroData.date_last_updated),'short') }}</span><br>
                </div>
                <div class="hero-card__description">{{ heroData.deck }}</div>
            </div>
        </div>
    </div>
</template>


<script>
    import {
        getCardData
    } from '../../api.js';
    import {
        parseUrlQuery
    } from '../../methods.js';
    import CentralMessage from '../CentralMessage.vue'

    export default {
        name: 'HeroCard',
        components: {
            CentralMessage
        },
        data: function() {
            return {
                heroData: {},
                requestStatus: 'PENDING',
                errorMessage: ''
            }
        },
        computed: {
            centralMessage: function() {
                if (this.requestStatus == 'PENDING') {
                    return this.$t("message.loading");
                } else if ((this.requestStatus == 'SUCCESS') && !this.heroData) {
                    return this.$t("message.empty");
                } else if (this.requestStatus == 'ERROR') {
                    return this.$t("message.error", {err: this.errorMessage});
                }
                return '';
            }
        },
        created: function() {
            let id = parseUrlQuery().id;
            getCardData(id)
                .then(r => {
                    //Ответ не 200 - заканчиваем 
                    if (r.status !== 200) {
                        this.requestStatus = 'ERROR';
                        this.errorMessage += this.$t("message.responceCode", {code: r.status});
                        return;
                    }
                    //Ответ 200 продолжаем загрузку
                    r.json()
                        .then(r => {
                            this.heroData = r.results[0] || false;
                            this.requestStatus = 'SUCCESS';
                        });
                })
                //Ловим остальные ошибки 
                .catch(err => {
                    this.requestStatus = 'ERROR';
                    this.errorMessage = err;
                })
        }
    }

</script>


<style>
    .hero-card__wrapper {
        max-width: 1080px;
        min-width: 320px;
        box-sizing: border-box;

        margin: 0 auto;
        margin-top: 30px;
        padding: 0 20px;
    }

    .hero-card__wrapper:after {
        content: "";
        display: table;
        clear: both;
    }

    .hero-card__portrait {
        width: 40%;
        float: left;
    }

    .hero-card__portrait-inner {
        position: relative;

        height: 0;
        padding-top: 146.6%;
    }

    .hero-card__portrait-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #C4C4C4;
    }

    .hero-card__portrait img {
        max-height: 100%;
        max-width: 100%;
    }

    .hero-card__block {
        width: 57.3%;
        float: right;
    }

    .hero-card__name {
        color: #2C467F;
        font-weight: bold;
        font-size: 48px;
        line-height: 66px;
        letter-spacing: 0.05em;
    }

    .hero-card__label {
        display: inline-block;
        width: 90px;

        color: #C1C4CC;
        font-size: 14px;
        text-align: left;
    }

    .hero-card__info {
        color: #000000;
        font-size: 14px;
        text-align: left;
    }

    .hero-card__description {
        margin-top: 33px;

        color: #000000;
        font-size: 18px;
    }

    @media (min-width: 675px) and (max-width: 899px) {
        .hero-card__portrait {
            width: 45%;
        }

        .hero-card__block {
            width: 50%;
        }

    }

    @media (max-width: 674px) {
        .hero-card__portrait {
            width: 80%;

            margin: 0 auto;

            float: none;
        }

        .hero-card__block {
            width: 90%;

            margin: 0 auto;

            float: none;
        }

        .hero-card__name {
            text-align: center;
            font-size: 24px;
        }

    }

</style>
