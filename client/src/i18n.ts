import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { translationEn } from './translation/english'
import { translationPl } from './translation/polish'

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
  lng: 'pl',
})
