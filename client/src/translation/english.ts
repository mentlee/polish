import { type Translation } from './polish'

export const translationEn: Translation = {
  inflection: 'Inflection',
  adjectives: 'Adjectives',
  declension: 'Declension',
  basicInfo: 'Basic info',
  generate: 'Generate',
  cases: {
    nom: {
      short: 'Nom',
      long: 'Nominative',
    },
    gen: {
      short: 'Gen',
      long: 'Genitive',
    },
    dat: {
      short: 'Dat',
      long: 'Dative',
    },
    acc: {
      short: 'Acc',
      long: 'Accusative',
    },
    ins: {
      short: 'Ins',
      long: 'Instrumental',
    },
    loc: {
      short: 'Loc',
      long: 'Locative',
    },
  },
  genders: {
    m1: {
      short: 'MP',
      long: 'Masculine personal',
    },
    m2: {
      short: 'MA',
      long: 'Masculine animate',
    },
    m3: {
      short: 'MIA',
      long: 'Masculine inanimate',
    },
    n: {
      short: 'N',
      long: 'Neutral',
    },
    f: {
      short: 'F',
      long: 'Feminine',
    },
    nm1: {
      short: 'NMP',
      long: 'Non masculine personal',
    },
  },
  number: {
    sg: 'Singular',
    pl: 'Plural',
  },
}
