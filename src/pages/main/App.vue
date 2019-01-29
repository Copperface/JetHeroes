<template>
    <div id="app">
        <MainHeader/>
        <HeroesGallery/>
        <MainFooter/>
    </div>
</template>

<script>
    import MainHeader from '../../components/MainHeader.vue'
    import HeroesGallery from '../../components/main/HeroesGallery.vue'
    import MainFooter from '../../components/MainFooter.vue'

    export default {
        name: 'app',
        components: {
            MainHeader,
            MainFooter,
            HeroesGallery
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');

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
