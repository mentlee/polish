import { ArrowLeftOutlined } from '@ant-design/icons'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { WordFormsTable } from '../../components/adjectives/WordFormsTable'

export const AdjectiveFormRoute = () => {
  const { form: formString } = useParams()

  const form = useMemo(() => {
    const formNumber = formString ? Number.parseInt(formString, 10) : 0

    if (formNumber < 1 || formNumber > 11) {
      return null
    }

    return formNumber
  }, [formString])

  if (!form) {
    return <div>Form not found</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 md:col-span-2">
        <WordFormsTable
          corner={
            <Link
              className="flex justify-center hover:text-blue-500"
              to="/adjectives/rules"
            >
              <ArrowLeftOutlined />
            </Link>
          }
          config={{
            [form]: {
              color: 'blue',
            },
          }}
        />
      </div>
    </div>
  )
}
