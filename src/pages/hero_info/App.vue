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

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

</style>
