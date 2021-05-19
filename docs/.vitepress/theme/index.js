import DefaultTheme from 'vitepress/theme'
import DurationSnippet from '../../components/DurationSnippet.vue'

import './edesign-style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DurationSnippet', DurationSnippet)
  }
}