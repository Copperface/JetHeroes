import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import messages from './locales.json'
import dateTimeFormats from './dateTimeFormats.json'

import HeroCard from './views/HeroCard'
import HeroesGallery from './views/HeroesGallery'
import NotFound from './views/NotFound'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueI18n);

//определяем экземпляр маршрутизатора
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HeroesGallery',
            component: HeroesGallery
        },
        {
            path: '/hero_card/:id',
            name: 'HeroCard',
            component: HeroCard
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});

const i18n = new VueI18n({
    messages,
    dateTimeFormats,
    locale: 'en'
});

new Vue({
    render: h => h(App),
    router,
    i18n
}).$mount('#app');
