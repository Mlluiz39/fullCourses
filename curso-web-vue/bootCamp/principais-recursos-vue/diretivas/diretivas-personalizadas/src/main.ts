import { createApp } from 'vue'
import App from './components/App.vue'
import highlight from '@/directives/highlight'

const app = createApp(App)

app.directive('highlight', highlight)

app.mount('#app')
