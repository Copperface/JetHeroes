<template>
    <div class="central-message"> {{ message }}</div>
</template>


<script>
    export default {
        name: 'CentralMessage',
        props: {
            message: String
        }
    }

</script>

<style>
    .central-message {
        margin: 0 auto;
        margin-top: 100px;
        padding: 0 20px;

        font-size: 24px;
        text-align: center;
    }

</style>
