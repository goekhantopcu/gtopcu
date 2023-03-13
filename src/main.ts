import {createApp} from 'vue'
import './index.css'
import App from './App.vue'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEnvelope, faCode, faCar, faHouseLaptop} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faLinkedinIn, faGithub, faInstagram, faCode, faCar, faHouseLaptop)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
