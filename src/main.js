import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// fontawesome settings
library.add(faFacebookSquare, faInstagramSquare)

createApp(App)
.use(store)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
