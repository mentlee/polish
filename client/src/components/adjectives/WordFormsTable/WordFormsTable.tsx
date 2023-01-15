import cn from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { headers, rows } from './WordFormsTable.config'

export interface FormConfig {
  color?: 'gray' | 'green' | 'yellow' | 'orange' | 'red' | 'blue'
  render?: JSX.Element | string
}

export interface WordFormsTableProps {
  config: Record<number, FormConfig | undefined>
}

export const WordFormsTable: React.FC<WordFormsTableProps> = ({ config }) => {
  const { t } = useTranslation()

  return (
    <div className="overflow-scroll">
      <table className="border-separate min-w-[330px] w-full table-fixed">
        <thead>
          <tr>
            <th className="px-1 py-1 w-10"></th>
            {headers.map(({ label, width }) => (
              <th
                key={label}
                className={cn(
                  'px-1 py-1 bg-slate-200 rounded-md h-10 text-xs text-slate-600',
                  {
                    'w-12 sm:w-auto': width === 'l',
                    'w-20 sm:w-auto': width === 'xl',
                  },
                )}
              >
                {t(`genders.${label}.short`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {rows.map(({ grCase, cols }) => (
            <tr key={grCase}>
              <th className="px-1 py-1 bg-slate-200 rounded-md h-10 text-xs text-slate-600">
                {t(`cases.${grCase}.short`)}
              </th>
              {cols.map(({ form, colSpan, rowSpan }, index) => (
                <td
                  key={`${form}-${index}`}
                  className={cn('relative px-1 py-1 rounded-md text-sm', {
                    'bg-gray-200':
                      !config[form] || config[form]?.color === 'gray',
                    'bg-green-200': config[form]?.color === 'green',
                    'bg-yellow-200': config[form]?.color === 'yellow',
                    'bg-orange-200': config[form]?.color === 'orange',
                    'bg-red-200': config[form]?.color === 'red',
                    'bg-blue-200': config[form]?.color === 'blue',
                  })}
                  colSpan={colSpan}
                  rowSpan={rowSpan}
                >
                  {config[form]?.render}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
