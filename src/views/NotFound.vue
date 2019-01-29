<template>
    <div class="not-found">
        <CentralMessage :message="centralMessage"/>
    </div>
</template>

<script>
    import CentralMessage from '../components/CentralMessage.vue'

    export default {
        name: "NotFound",
        components: {
            CentralMessage
        },
        data: function () {
            return {
                centralMessage: this.$t('message.error404')
            }
        }
    }
</script>

<style scoped>
    .not-found {
        flex-grow: 1;
        flex-shrink: 0;
    }
</style>
