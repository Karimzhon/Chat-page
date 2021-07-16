<template>
    <div class="v-main-wrapper">
        <v-header />
        <router-view></router-view>
        <v-bottom-nav />
    </div>
</template>

<script>
    import vHeader from './layouts/v-header';
    import vBottomNav from './layouts/v-bottom-nav'
    export default {
        name: "v-main-wrapper",
        components: {
            vHeader,
            vBottomNav
        },
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .v-main-wrapper {
        padding: 16px;
        max-width: 400px;
        margin: 0 auto;
    }
</style>