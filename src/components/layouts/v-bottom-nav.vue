<template>
    <div class="v-bottom-nav">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">person_pin</i>
        </router-link>
        <router-link :to="{name: 'chats'}">
            <i class="material-icons">chat</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">settings</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">call</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">home</i>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "v-bottom-nav",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .v-bottom-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 8px;
        background: #e7e7e7;
        min-height: 50px;
    }
    .material-icons {
        font-size: 36px;
        color: #2d2d2d;
    }
</style>