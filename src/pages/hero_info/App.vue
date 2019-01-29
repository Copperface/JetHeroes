<template>
    <div id="app">
        <MainHeader />
        <HeroCard />
        <MainFooter />
    </div>
</template>

<script>
    import MainHeader from '../../components/MainHeader.vue'
    import HeroCard from '../../components/hero_info/HeroCard.vue'
    import MainFooter from '../../components/MainFooter.vue'


    export default {
        name: 'app',
        components: {
            MainHeader,
            HeroCard,
            MainFooter
        }
    }

</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100%;
        height: 1px;
        font-family: 'Open Sans', sans-serif;
    }

    #app {
        min-height: 100%;

        display: flex;
        flex-direction: column;
    }

</style>
