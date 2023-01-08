import { Button, Descriptions, Input } from 'antd'
import { useMemo, useState } from 'react'
import { getConfig } from '../../../utils/ending'
import { getForms, type WordForms } from '../../../utils/forms'
import { DeclensionTable } from '../DeclensionTable/DeclensionTable'

export const DeclensionForm: React.FC = () => {
  const [lemma, setLemma] = useState<string>('')
  const [forms, setForms] = useState<WordForms | null>(null)
  const config = useMemo(() => getConfig(lemma), [lemma])

  return (
    <Descriptions
      className="p-4"
      bordered
      layout="vertical"
      size="small"
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label="Base info">
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 6rem)' }}
            width="calc(100% - 4rem)"
            placeholder="Lemma"
            value={lemma}
            onChange={({ target }) => setLemma(target.value)}
          />
          <Button
            disabled={!config}
            onClick={() => setForms(getForms(config!))}
          >
            Generate
          </Button>
        </Input.Group>
      </Descriptions.Item>
      {forms && (
        <Descriptions.Item label="Declension">
          <DeclensionTable forms={forms} />
        </Descriptions.Item>
      )}
    </Descriptions>
  )
}
