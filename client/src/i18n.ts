import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './translation/english.json'
import translationPl from './translation/polish.json'

const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
}

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: 'en',
})
