import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@geist-ui/themes'
import '@geist-ui/typography'

import App from './App.vue'
import RouterInstance from './router'
import Store from './store/index'
import { AddNProgress } from './utils/routerHooks'
import Highlight from './utils/highlight'

AddNProgress(RouterInstance)

const options: PluginOptions = {
    position: POSITION.TOP_CENTER,
    timeout: 2000,
    newestOnTop: true,
    transition: 'Vue-Toastification__fade',
}
const head = createHead()
createApp(App)
    .use(Toast, options)
    .use(head)
    .use(RouterInstance)
    .use(Highlight)
    .use(Store)
    .mount('#vue-next')
