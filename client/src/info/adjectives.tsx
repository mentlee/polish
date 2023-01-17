import { Link } from 'react-router-dom'
import { type FormConfig } from '../components/adjectives/WordFormsTable'

export const adjectiveFormsInfo = {
  1: {
    ending: '-y / -i',
    base: 'lemma',
  },
  2: {
    ending: '-ego',
    base: 1,
  },
  3: {
    ending: '-emu',
    base: 1,
  },
  4: {
    ending: '-ym / -im',
    base: 'lemma',
  },
  5: {
    ending: '-e',
    base: 1,
  },
  6: {
    ending: '-a',
    base: 2,
  },
  7: {
    ending: '-ej',
    base: 1,
  },
  8: {
    ending: '-ą',
    base: 2,
  },
  9: {
    ending: '-y / -i',
    base: 3,
  },
  10: {
    ending: '-ych / -ich',
    base: 'lemma',
  },
  11: {
    ending: '-ymi / -imi',
    base: 'lemma',
  },
}

export const adjectiveFormsNavigation = Object.fromEntries(
  Object.entries(adjectiveFormsInfo).map(([form, { ending, base }]) => {
    const formConfig: FormConfig = {
      color: 'gray',
      render: (
        <>
          <Link
            className="absolute top-0 left-0 block w-full h-full"
            to={`/adjectives/rules/${form}`}
          />
          <span>{ending}</span>
        </>
      ),
    }

    if (base === 'lemma') {
      formConfig.color = 'green'
    }

    if (base === 1) {
      formConfig.color = 'yellow'
    }

    if (base === 2) {
      formConfig.color = 'orange'
    }

    if (base === 3) {
      formConfig.color = 'red'
    }

    return [form, formConfig]
  }),
)
