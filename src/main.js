import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/sass/style.scss'

// fontawesome settings
library.add(faFacebookSquare)

createApp(App)
.use(store)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
