import { describe, it, expect } from 'vitest'
import { back, hard, hardened, soft } from './cases'
import { getConfig } from './ending'
import { getForms, type WordForms } from './forms'

const lemmaBasedForms = [1, 4, 10, 11]
const firstBasedForms = [2, 3, 5, 7]
const secondBasedForms = [6, 8]
const thirdBasedForms = [9]

const testCases = (cases: WordForms) => {
  const lemma = cases[1]
  const config = getConfig(lemma)
  const forms = getForms(config!)

  for (const form of lemmaBasedForms) {
    expect(forms[form], `Lemma based form #${form} for '${lemma}'`).toBe(
      cases[form],
    )
  }

  for (const form of firstBasedForms) {
    expect(forms[form], `First based form #${form} for '${lemma}'`).toBe(
      cases[form],
    )
  }

  for (const form of secondBasedForms) {
    expect(forms[form], `Second based form #${form} for '${lemma}'`).toBe(
      cases[form],
    )
  }

  for (const form of thirdBasedForms) {
    expect(forms[form], `Third based form #${form} for '${lemma}'`).toBe(
      cases[form],
    )
  }
}

describe('Forms generation', () => {
  const lemmaBasedForms = [1, 4, 10, 11]
  const firstBasedForms = [2, 3, 5, 7]
  const secondBasedForms = [6, 8]

  it('Generates correctly for soft endings', () => {
    for (const cases of soft) {
      testCases(cases)
    }
  })

  it('Generates correctly for hardened endings', () => {
    for (const cases of hardened) {
      testCases(cases)
    }
  })

  it('Generates correctly for back endings', () => {
    for (const cases of back) {
      testCases(cases)
    }
  })

  it('Generates correctly for hard endings', () => {
    for (const cases of hard) {
      testCases(cases)
    }
  })
})
