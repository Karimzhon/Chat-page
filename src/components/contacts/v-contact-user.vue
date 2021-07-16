<template>
    <div class="v-contact-user" @click="toContactInfo">
        <div class="user__avatar"></div>
        <div class="user__name">
            <span>{{contact_data.name}}</span>
        </div>
        <div
            class="user__status"
            :class="className"
        ></div>
    </div>
</template>

<script>
    export default {
        name: "v-contact-user",
        components: {

        },
        props: {
            contact_data: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        computed: {
            className() {
                return {
                    'online': this.contact_data.status === 'online',
                    'offline': this.contact_data.status === 'offline',
                }
            }
        },
        methods: {
            toContactInfo () {
                this.$emit('to-contact-info')
            }
        }
    }
</script>

<style scoped>
    .v-contact-user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
    .user__avatar {
         width: 50px;
         height: 50px;
         background: #e7e7e7;
         border-radius: 50%;
    }
    .user__name {
         font-weight: bold;
         text-align: left;
         flex-basis: 50%;
    }
    .user__status {
         width: 10px;
         height: 10px;
         border-radius: 50%;
    }
    .user__status.online {
         background: green;
    }
    .user__status.offline {
         background: red;
    }

</style>