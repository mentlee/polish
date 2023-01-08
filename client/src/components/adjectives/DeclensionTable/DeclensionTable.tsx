import { Segmented, Table } from 'antd'
import { type SegmentedValue } from 'antd/es/segmented'
import { useState } from 'react'
import { type WordForms } from '../../../utils/forms'
import { type Row, tableData } from './DeclensionTable.config'

interface DeclensionTableProps {
  forms: WordForms
}

export const DeclensionTable: React.FC<DeclensionTableProps> = ({ forms }) => {
  const [number, setNumber] = useState<SegmentedValue>('Single')

  return (
    <>
      <Segmented
        className="mb-2"
        options={['Single', 'Plural']}
        value={number}
        onChange={setNumber}
      />
      <Table
        tableLayout="fixed"
        size="small"
        rowKey="case"
        dataSource={tableData}
        pagination={false}
        scroll={{ x: number === 'Single' ? 850 : 450 }}
        bordered
      >
        <Table.Column width={50} render={(_, row: Row) => row.case} fixed />
        {number === 'Single' ? (
          <>
            <Table.Column
              title="Masculine animate"
              render={(_, row: Row) => forms[row.sgMasculineAnimate]}
            />
            <Table.Column
              title="Masculine inanimate"
              render={(_, row: Row) => forms[row.sgMasculineInanimate]}
            />
            <Table.Column
              title="Neutral"
              render={(_, row: Row) => forms[row.sgNeutral]}
            />
            <Table.Column
              title="Feminine"
              render={(_, row: Row) => forms[row.sgFeminine]}
            />
          </>
        ) : (
          <>
            <Table.Column
              title="Masculine personal"
              render={(_, row: Row) => forms[row.plMasculinePersonal]}
            />
            <Table.Column
              title="Other"
              render={(_, row: Row) => forms[row.plNonMasculine]}
            />
          </>
        )}
      </Table>
    </>
  )
}
