export interface Config {
  lemma: string
  stem: string
  type: Ending
  ending: string
}

export enum Ending {
  Soft = 'soft',
  Hardened = 'hardened',
  Back = 'back',
  Hard = 'hard',
}

const stemPattern = '(?<stem>[\\s\\p{Ll}]+?)'

const endings = [
  // Soft: ci, si, ni, pi, li, dzi, zi
  '(?<soft>([csnpl]|d?z)i)',
  // Back: ki, gi
  '(?<back>[kg]i)',
  // Hardened: cy, czy, szy, dzy, rzy, dży, ży
  '(?<hardened>(c|[csdr]z|d?ż)y)',
  // Hard
  '(?<hard>(d|s?t|c?h|[szo]?ł|sn|[csdr]?zn|(dzi|ci)?on|r)?y)',
]

export const getConfig = (lemma: string) => {
  const pattern = endings.join('|')

  const regExp = new RegExp(`^${stemPattern}(${pattern})$`, 'gmu')
  const match = regExp.exec(lemma)

  const groups = match?.groups

  if (!groups?.stem) {
    return null
  }

  const { stem, soft, back, hardened, hard } = groups

  let type: Ending
  let ending: string

  if (soft) {
    type = Ending.Soft
    ending = soft
  } else if (back) {
    type = Ending.Back
    ending = back
  } else if (hardened) {
    type = Ending.Hardened
    ending = hardened
  } else if (hard) {
    type = Ending.Hard
    ending = hard
  } else {
    return null
  }

  return {
    lemma,
    type,
    stem,
    ending,
  }
}
