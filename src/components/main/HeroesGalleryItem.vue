<template>
    <div class="hero-gallery-item">
        <a :href="'/heroinfo?id=' + heroItem.id" class="hero-gallery-item__link">
            <div class="hero-gallery-item__portrait"><img :src="heroItem.image.medium_url" :alt="heroItem.name"></div>
            <div class="hero-gallery-item__info">
                <div class="hero-gallery-item__name">{{ heroItem.name }}</div>
                <div class="hero-gallery-item__issues">{{ $t('heroItem.issues', {num: heroItem.count_of_issue_appearances}) }}</div>
                <div class="hero-gallery-item__publisher">{{ heroItem.publisher.name }}</div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'HeroesGalleryItem',
        props: {
            heroItem: Object
        }
    }

</script>


<style scoped>
    .hero-gallery-item {
        width: 327px;
        margin-bottom: 49px;
        margin-right: 20px;
    }

    .hero-gallery-item__link {
        text-decoration: none;
    }

    .hero-gallery-item__portrait {
        width: 100%;
        height: 231px;

        position: relative;

        background-color: #C4C4C4;
        overflow: hidden;
    }

    .hero-gallery-item__portrait img {
        max-width: 100%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    .hero-gallery-item__name {
        max-width: 250px;
        padding-top: 9px;

        display: inline-block;
        float: left;
        overflow: hidden;
        white-space: nowrap;

        color: #2C467F;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.05em;
    }

    .hero-gallery-item__issues {
        margin-top: 21px;
        float: right;

        color: #849ACC;
        font-size: 10px;
        text-align: right;
        letter-spacing: 0.05em;
    }

    .hero-gallery-item__publisher {
        clear: both;

        color: #C1C4CC;
        font-size: 10px;
    }

    @media (min-width: 1078px) {
        .hero-gallery-item:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 731px) and (max-width: 1077px) {
        .hero-gallery-item:nth-child(3n) {
            margin-right: 20px;
        }

        .hero-gallery-item:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media (max-width: 730px) {
        .hero-gallery-item {
            margin-right: 0;
        }
    }

    @media (max-width: 415px) {
        .hero-gallery-item {
            width: 100%;
        }
    }

</style>
