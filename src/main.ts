import {createApp} from 'vue'
import './index.css'
import App from './App.vue'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEnvelope, faCode, faCar, faHouseLaptop} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedinIn, faGithub, faNpm} from '@fortawesome/free-brands-svg-icons'
import {faXmarkCircle} from "@fortawesome/free-regular-svg-icons";
import {createPinia} from "pinia";

/* add icons to the library */
library.add(faEnvelope, faLinkedinIn, faGithub, faInstagram, faCode, faCar, faHouseLaptop, faNpm, faXmarkCircle)

const app = createApp(App)

app.use(createPinia())

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
