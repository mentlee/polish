import { Button, Descriptions, Input } from 'antd'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getConfig } from '../../../utils/ending'
import { getForms, type WordForms } from '../../../utils/forms'
import { DeclensionTable } from '../DeclensionTable/DeclensionTable'

export const DeclensionForm: React.FC = () => {
  const { t } = useTranslation()
  const [lemma, setLemma] = useState<string>('')
  const [forms, setForms] = useState<WordForms | null>(null)
  const config = useMemo(() => getConfig(lemma), [lemma])

  return (
    <Descriptions
      bordered
      layout="vertical"
      size="small"
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label={t('basicInfo')}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setForms(getForms(config!))
          }}
        >
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 6rem)' }}
              width="calc(100% - 4rem)"
              placeholder="Lemma"
              value={lemma}
              onChange={({ target }) => setLemma(target.value)}
            />
            <Button disabled={!config} htmlType="submit">
              {t('generate')}
            </Button>
          </Input.Group>
        </form>
      </Descriptions.Item>
      {forms && (
        <Descriptions.Item label={t('declension')}>
          <DeclensionTable forms={forms} />
        </Descriptions.Item>
      )}
    </Descriptions>
  )
}
