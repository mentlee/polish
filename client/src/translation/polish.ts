export const translationPl = {
  inflection: 'Odmiana',
  adjectives: 'Przymiotniki',
  declension: 'Odmiana',
  basicInfo: 'Podstawowa informacja',
  generate: 'Generuj',
  cases: {
    nom: {
      short: 'M.',
      long: 'Mianownik',
    },
    gen: {
      short: 'D.',
      long: 'Dopełniacz',
    },
    dat: {
      short: 'C.',
      long: 'Celownik',
    },
    acc: {
      short: 'B.',
      long: 'Biernik',
    },
    ins: {
      short: 'N.',
      long: 'Narzędnik',
    },
    loc: {
      short: 'Ms.',
      long: 'Miejscownik',
    },
  },
  genders: {
    m1: {
      short: 'MOs',
      long: 'Męskoosobowy',
    },
    m2: {
      short: 'MZw',
      long: 'Męskozwierzęcy',
    },
    m3: {
      short: 'MRz',
      long: 'Męskorzeczowy',
    },
    n: {
      short: 'N',
      long: 'Nijaki',
    },
    f: {
      short: 'Ż',
      long: 'Żeński',
    },
    nm1: {
      short: 'NMOs',
      long: 'Niemęskoosobowy',
    },
  },
  number: {
    sg: 'Liczba pojedyńcza',
    pl: 'Liczba mnoga',
  },
}

export type Translation = typeof translationPl
