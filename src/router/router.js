import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

import vContactList from '../components/contacts/v-contact-list'
import vContactUserInfo from '../components/contacts/v-contact-user-info'
import vUserList from '../components/users/v-users-list'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: vContactList
        },
        {
            path: '/contact',
            name: 'contact',
            component: vContactUserInfo
        },
        {
            path: '/chats',
            name: 'chats',
            component: vUserList
        }
    ]
});

export default router;