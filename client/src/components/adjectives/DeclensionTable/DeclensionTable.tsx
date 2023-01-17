import { Segmented, Table } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type WordForms } from '../../../utils/forms'
import { type Row, tableData } from './DeclensionTable.config'
import { WordFormInfo } from './WordFormInfo'

interface DeclensionTableProps {
  forms: WordForms
}

export const DeclensionTable: React.FC<DeclensionTableProps> = ({ forms }) => {
  const { t } = useTranslation()
  const [number, setNumber] = useState<'sg' | 'pl'>('sg')

  return (
    <>
      <Segmented
        className="mb-2"
        options={[
          { label: t('number.sg'), value: 'sg' },
          { label: t('number.pl'), value: 'pl' },
        ]}
        value={number}
        onChange={(value: string | number) => setNumber(value as 'sg' | 'pl')}
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
              title={t('genders.m2.long')}
              render={(_, { grCase, m2: type }: Row) => (
                <WordFormInfo
                  gender="m2"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
            <Table.Column
              title={t('genders.m3.long')}
              render={(_, { grCase, m3: type }: Row) => (
                <WordFormInfo
                  gender="m3"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
            <Table.Column
              title={t('genders.n.long')}
              render={(_, { grCase, n: type }: Row) => (
                <WordFormInfo
                  gender="n"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
            <Table.Column
              title={t('genders.f.long')}
              render={(_, { grCase, f: type }: Row) => (
                <WordFormInfo
                  gender="f"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
          </>
        ) : (
          <>
            <Table.Column
              title={t('genders.m1.long')}
              render={(_, { grCase, m1: type }: Row) => (
                <WordFormInfo
                  gender="m1"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
            <Table.Column
              title={t('genders.nm1.long')}
              render={(_, { grCase, nm1: type }: Row) => (
                <WordFormInfo
                  gender="nm1"
                  forms={forms}
                  type={type}
                  grCase={grCase}
                />
              )}
            />
          </>
        )}
      </Table>
    </>
  )
}
