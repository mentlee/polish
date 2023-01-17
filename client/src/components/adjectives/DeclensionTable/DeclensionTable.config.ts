export type Gender = 'm1' | 'm2' | 'm3' | 'n' | 'f' | 'nm1'
export type GrCase = 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'loc'
export interface Row extends Record<Gender, number> {
  grCase: GrCase
}

export const tableData: Row[] = [
  {
    grCase: 'nom',
    m2: 1,
    m3: 1,
    n: 5,
    f: 6,
    m1: 9,
    nm1: 5,
  },
  {
    grCase: 'gen',
    m2: 2,
    m3: 2,
    n: 2,
    f: 7,
    m1: 10,
    nm1: 10,
  },
  {
    grCase: 'dat',
    m2: 3,
    m3: 3,
    n: 3,
    f: 7,
    m1: 4,
    nm1: 4,
  },
  {
    grCase: 'acc',
    m2: 2,
    m3: 1,
    n: 5,
    f: 8,
    m1: 10,
    nm1: 5,
  },
  {
    grCase: 'ins',
    m2: 4,
    m3: 4,
    n: 4,
    f: 8,
    m1: 11,
    nm1: 11,
  },
  {
    grCase: 'loc',
    m2: 4,
    m3: 4,
    n: 4,
    f: 7,
    m1: 10,
    nm1: 10,
  },
]
