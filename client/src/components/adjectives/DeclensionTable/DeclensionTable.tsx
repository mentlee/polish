import { Segmented, Table } from 'antd'
import { type SegmentedValue } from 'antd/es/segmented'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type WordForms } from '../../../utils/forms'
import { type Row, tableData } from './DeclensionTable.config'

interface DeclensionTableProps {
  forms: WordForms
}

export const DeclensionTable: React.FC<DeclensionTableProps> = ({ forms }) => {
  const { t } = useTranslation()
  const [number, setNumber] = useState<SegmentedValue>('sg')

  return (
    <>
      <Segmented
        className="mb-2"
        options={[
          { label: t('number.sg'), value: 'sg' },
          { label: t('number.pl'), value: 'pl' },
        ]}
        value={number}
        onChange={setNumber}
      />
      <Table
        tableLayout="fixed"
        size="small"
        rowKey="grCase"
        dataSource={tableData}
        pagination={false}
        scroll={{ x: number === 'sg' ? 850 : 450 }}
        bordered
      >
        <Table.Column
          width={50}
          render={(_, { grCase }: Row) => t('cases.' + grCase + '.short')}
          fixed
        />
        {number === 'sg' ? (
          <>
            <Table.Column
              title={t('genders.m2')}
              render={(_, row: Row) => forms[row.m2]}
            />
            <Table.Column
              title={t('genders.m3')}
              render={(_, row: Row) => forms[row.m3]}
            />
            <Table.Column
              title={t('genders.n')}
              render={(_, row: Row) => forms[row.n]}
            />
            <Table.Column
              title={t('genders.f')}
              render={(_, row: Row) => forms[row.f]}
            />
          </>
        ) : (
          <>
            <Table.Column
              title={t('genders.m1')}
              render={(_, row: Row) => forms[row.m1]}
            />
            <Table.Column
              title={t('genders.o')}
              render={(_, row: Row) => forms[row.o]}
            />
          </>
        )}
      </Table>
    </>
  )
}
