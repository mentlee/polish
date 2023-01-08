import { describe, expect, it } from 'vitest'
import { Ending, getConfig } from './ending'
import { soft, hardened, back, hard } from './cases'

describe('Lemmas config', () => {
  const softLemmas = soft.map((forms) => forms[1])
  const hardLemmas = hard.map((forms) => forms[1])
  const backLemmas = back.map((forms) => forms[1])
  const hardenedLemmas = hardened.map((forms) => forms[1])
  const lemmas = [
    ...softLemmas,
    ...hardLemmas,
    ...backLemmas,
    ...hardenedLemmas,
  ]

  it('Generates config for all existent lemmas', () => {
    for (const lemma of lemmas) {
      const config = getConfig(lemma)

      expect(config, `config for '${lemma}'`).not.toBeNull()
      expect(config!.lemma, `lemma in config for '${lemma}'`).toBe(lemma)
      expect(
        config!.stem + config!.ending,
        `stem + ending in config for '${lemma}'`,
      ).toBe(lemma)
    }
  })

  it('Gets soft endings', () => {
    for (const lemma of softLemmas) {
      const res = getConfig(lemma)

      expect(res?.type, `type of ending for '${lemma}'`).toBe(Ending.Soft)
    }
  })

  it('Gets hardened endings', () => {
    for (const lemma of hardenedLemmas) {
      const res = getConfig(lemma)

      expect(res?.type, `type of ending for '${lemma}'`).toBe(Ending.Hardened)
    }
  })

  it('Gets back endings', () => {
    for (const lemma of backLemmas) {
      const res = getConfig(lemma)

      expect(res?.type, `type of ending for lemma '${lemma}'`).toBe(Ending.Back)
    }
  })

  it('Gets hard endings', () => {
    for (const lemma of hardLemmas) {
      const res = getConfig(lemma)

      expect(res?.type, `type of ending for lemma '${lemma}'`).toBe(Ending.Hard)
    }
  })
})
