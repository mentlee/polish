export interface Col {
  form: number
  colSpan?: number
  rowSpan?: number
}

export interface Row {
  grCase: string
  cols: Col[]
}

export const headers = [
  { label: 'm2', width: 'l' },
  { label: 'm3', width: 'l' },
  { label: 'n' },
  { label: 'f' },
  { label: 'm1', width: 'xl' },
  { label: 'nm1', width: 'l' },
]

export const rows: Row[] = [
  {
    grCase: 'nom',
    cols: [
      { form: 1, colSpan: 2 },
      { form: 5 },
      { form: 6 },
      { form: 9 },
      { form: 5 },
    ],
  },
  {
    grCase: 'gen',
    cols: [
      { form: 2, colSpan: 3 },
      { form: 7, rowSpan: 2 },
      { form: 10, colSpan: 2 },
    ],
  },
  {
    grCase: 'dat',
    cols: [
      { form: 3, colSpan: 3 },
      { form: 4, colSpan: 2 },
    ],
  },
  {
    grCase: 'acc',
    cols: [
      { form: 2 },
      { form: 1 },
      { form: 5 },
      { form: 8, rowSpan: 2 },
      { form: 10 },
      { form: 5 },
    ],
  },
  {
    grCase: 'ins',
    cols: [
      { form: 4, rowSpan: 2, colSpan: 3 },
      { form: 11, colSpan: 2 },
    ],
  },
  {
    grCase: 'loc',
    cols: [{ form: 7 }, { form: 10, colSpan: 2 }],
  },
]
