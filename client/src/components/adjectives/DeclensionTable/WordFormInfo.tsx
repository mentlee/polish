import { Button, Modal } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useMemo, useState } from 'react'
import { WordFormsTable } from '../WordFormsTable'
import { type WordForms } from '../../../utils/forms'
import { type Gender, type GrCase } from './DeclensionTable.config'

export interface WordFormInfoProps {
  forms: WordForms
  type: number
  gender: Gender
  grCase: GrCase
}

export const WordFormInfo: React.FC<WordFormInfoProps> = ({
  forms,
  type,
  gender,
  grCase,
}) => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)

  const formName = useMemo(() => {
    let number = 'sg'

    if (gender === 'm1' || gender === 'nm1') {
      number = 'pl'
    }

    return [
      t(`cases.${grCase}.long`),
      t(`number.${number}`),
      t(`genders.${gender}.long`),
    ].join(' — ')
  }, [grCase, gender, t])

  return (
    <div>
      <Button
        className="flex items-baseline"
        type="ghost"
        onClick={() => setShowModal(true)}
      >
        {forms[type]}
        <InfoCircleOutlined />
      </Button>
      <Modal
        className="tw"
        title={formName}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        destroyOnClose
      >
        <div className="-mx-5 sm:mx-0">
          <WordFormsTable config={{ [type]: { color: 'blue' } }} />
        </div>
      </Modal>
    </div>
  )
}
