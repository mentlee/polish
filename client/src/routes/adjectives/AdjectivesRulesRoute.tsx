import { WordFormsTable } from '../../components/adjectives/WordFormsTable'
import { adjectiveFormsNavigation } from '../../info/adjectives'

export const AdjectiveRulesRoute = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <WordFormsTable config={adjectiveFormsNavigation} />
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="w-full">
            <span className="inline-block align-middle w-8 h-6 rounded-lg bg-green-200" />{' '}
            — Form I
          </div>
          <div className="w-full">
            <span className="inline-block align-middle w-8 h-6 rounded-lg bg-yellow-200" />{' '}
            — Form II.a
          </div>
          <div className="w-full">
            <span className="inline-block align-middle w-8 h-6 rounded-lg bg-orange-200" />{' '}
            — Form II.b
          </div>
          <div className="w-full">
            <span className="inline-block align-middle w-8 h-6 rounded-lg bg-red-200" />{' '}
            — Form III
          </div>
        </div>
      </div>
    </>
  )
}
