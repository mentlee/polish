import { type Config } from './ending'

export interface WordForms extends Record<number, string> {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}

type Formatter = (config: Config) => WordForms

interface Alternations {
  first: Record<string, string | undefined>
  third: {
    other: Record<string, string | undefined>
    hard: Record<string, string | undefined>
  }
}

const alternations: Alternations = {
  first: {
    li: 'l',
  },
  third: {
    other: {
      ki: 'cy',
      gi: 'dzy',
      szy: 'si',
    },
    hard: {
      ty: 'ci',
      sty: 'ści',
      dy: 'dzi',
      hy: 'zi',
      chy: 'si',
      ły: 'li',
      oły: 'eli',
      sły: 'śli',
      zły: 'źli',
      ony: 'eni',
      dziony: 'dzeni',
      ciony: 'ceni',
      sny: 'śni',
      zny: 'źni',
      ry: 'rzy',
    },
  },
}

const exceptions: Record<string, string | undefined> = {
  duży: 'duzi',
  goły: 'goli',
}

const getFirstBase = (config: Config) => {
  if (config.lemma.endsWith('y')) {
    return config.lemma.slice(0, -1)
  }

  const ending = alternations.first[config.ending] ?? config.ending
  return config.stem + ending
}

const getSecondBase = (config: Config) => {
  if (config.type === 'back') {
    return config.lemma.slice(0, -1)
  }

  return getFirstBase(config)
}

const getThirdBase = (config: Config) => {
  const exception = exceptions[config.lemma]

  if (exception) {
    return exception
  }

  if (config.type === 'soft') {
    return config.lemma
  }

  if (config.type === 'back' || config.type === 'hardened') {
    const ending = alternations.third.other[config.ending] ?? config.ending
    return config.stem + ending
  }

  const ending =
    alternations.third.hard[config.ending] ?? config.ending.slice(0, -1) + 'i'

  return config.stem + ending
}

export const getForms: Formatter = (config) => {
  const { lemma } = config
  const base = getFirstBase(config)
  const base2 = getSecondBase(config)
  const base3 = getThirdBase(config)

  return {
    1: lemma,
    2: base + 'ego',
    3: base + 'emu',
    4: lemma + 'm',
    5: base + 'e',
    6: base2 + 'a',
    7: base + 'ej',
    8: base2 + 'ą',
    9: base3,
    10: lemma + 'ch',
    11: lemma + 'mi',
  }
}
