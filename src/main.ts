import "./set-public-path"
import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {})
                ;
        },
    },
    handleInstance(app) {
        app.use(Quasar, quasarUserOptions)
        app.use(router);
        app.use(store);
    },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
