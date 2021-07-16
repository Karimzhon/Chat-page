<template>
    <div class="v-user">
        <div class="v-user__avatar"></div>
        <div class="v-user__info">
            <p class="info__name">{{user_data.name}}</p>
            <p class="info__last-message">{{user_data.chat[user_data.chat.length - 1].text}}</p>
        </div>
        <div class="v-user__time">
            {{user_data.chat[user_data.chat.length - 1].time}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-user",
        props: {
            user_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style scoped>
    .v-user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
    }
    .v-user__avatar {
         width: 50px;
         height: 50px;
         background: #e7e7e7;
         border-radius: 50%;
     }

    .v-user__info {
         text-align: left;
         max-width: 170px;
         flex-basis: 50%;
     }

    .info__name {
         font-weight: bold;
    }

    .info__last-message {
         white-space: nowrap;
         text-overflow: ellipsis;
         max-width: 150px;
         overflow: hidden;
    }
</style>