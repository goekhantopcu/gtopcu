import {createApp} from 'vue'
import './index.css'
import App from './App.vue'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faBars, faUserSecret, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faEnvelope, faLinkedin, faFacebook, faTwitter, faWhatsapp, faInstagram)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
