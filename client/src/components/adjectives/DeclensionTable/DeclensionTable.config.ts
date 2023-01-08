export interface Row {
  case: string
  sgMasculineAnimate: number
  sgMasculineInanimate: number
  sgNeutral: number
  sgFeminine: number
  plMasculinePersonal: number
  plNonMasculine: number
}

export const tableData: Row[] = [
  {
    case: 'Nom',
    sgMasculineAnimate: 1,
    sgMasculineInanimate: 1,
    sgNeutral: 5,
    sgFeminine: 6,
    plMasculinePersonal: 9,
    plNonMasculine: 5,
  },
  {
    case: 'Gen',
    sgMasculineAnimate: 2,
    sgMasculineInanimate: 2,
    sgNeutral: 2,
    sgFeminine: 7,
    plMasculinePersonal: 10,
    plNonMasculine: 10,
  },
  {
    case: 'Dat',
    sgMasculineAnimate: 3,
    sgMasculineInanimate: 3,
    sgNeutral: 3,
    sgFeminine: 7,
    plMasculinePersonal: 4,
    plNonMasculine: 4,
  },
  {
    case: 'Acc',
    sgMasculineAnimate: 2,
    sgMasculineInanimate: 1,
    sgNeutral: 5,
    sgFeminine: 8,
    plMasculinePersonal: 10,
    plNonMasculine: 5,
  },
  {
    case: 'Ins',
    sgMasculineAnimate: 4,
    sgMasculineInanimate: 4,
    sgNeutral: 4,
    sgFeminine: 8,
    plMasculinePersonal: 11,
    plNonMasculine: 11,
  },
  {
    case: 'Loc',
    sgMasculineAnimate: 4,
    sgMasculineInanimate: 4,
    sgNeutral: 4,
    sgFeminine: 7,
    plMasculinePersonal: 10,
    plNonMasculine: 10,
  },
]
