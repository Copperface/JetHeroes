<template>
    <footer class="main-footer">
        <div class="main-footer__wrapper">
            <div class="main-footer__copyright">
                &copy; {{ $t('copyright') }}
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .main-footer {
        width: 100%;
        margin-top: 100px;
        flex-shrink: 0;
    }

    .main-footer__wrapper {
        max-width: 1080px;
        min-width: 320px;
        min-height: 40px;
        box-sizing: border-box;
        
        margin: 0 auto;
        padding: 0 20px;
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .main-footer__copyright {
        display: inline-flex;
        margin-bottom: 20px;

        color: #C1C4CC;
        font-size: 10px;
        text-align: center;
    }

</style>
