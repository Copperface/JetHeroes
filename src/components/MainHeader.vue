<template>
    <header class="main-header">
        <div class="main-header__wrapper">
            <div class="main-header__logo"><img src="img/logo.svg" alt="site logo"></div>
        </div>
    </header>
</template>

<style scoped>
    
    .main-header {
        width: 100%;
        background-color: #52607F;
        flex-shrink: 0;
    }

    .main-header__wrapper {
        max-width: 1080px;
        min-width: 320px;
        min-height: 40px;
        box-sizing: border-box;
        
        margin: 0 auto;
        padding: 0 20px;
        
        position: relative;        
    }

    .main-header__logo {
        position: absolute;
        top: 23.14%;
        bottom: 33.27%;
        width: 87px;
        height: 18px;
    }

</style>
