<template>
    <div class="v-header">
        <div
            class="v-header__back"
            @click="goBack"
            v-if="!isCoreRoute"
        >
            <i class="material-icons">keyboard_arrow_left</i>
            <span>Back</span>
        </div>
        <div
            class="v-header__user-info"
            v-if="!isCoreRoute"
        >
            <span>{{ currentUserChat }}</span>
        </div>
        <div class="right-side"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "v-header",
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'currentUserChat'
            ]),
            isCoreRoute() {
                return this.$route.path === '/'
            }
        },
        methods: {
            goBack () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .v-header {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 8px;
        background: #e7e7e7;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
    }
    .v-header__back {
         display: flex;
         align-items: center;
         flex-basis: 25%;
     }
    .v-header__user-info {
         flex-basis: 50%;
     }
    .v-header__right-side {
         flex-basis: 25%;
     }
</style>