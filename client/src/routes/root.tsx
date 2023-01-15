import { Menu, Select, type MenuProps } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'

export const RootRoute: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const items = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'inflection',
        label: t('inflection'),
        children: [
          {
            key: '/adjectives',
            label: t('adjectives'),
            onClick: () => navigate('/adjectives'),
          },
        ],
      },
    ],
    [t],
  )
  return (
    <div className="min-h-screen">
      <div className="h-14 bg-slate-200">
        <header className="mx-auto px-4 max-w-5xl h-full flex items-center">
          <Link to="/">
            <Logo className="align-middle mr-2 h-6" />
          </Link>
          <Menu
            className="flex-auto bg-slate-200 border-none"
            mode="horizontal"
            style={{ lineHeight: '3.5rem' }}
            items={items}
            selectedKeys={[pathname]}
          />
          <Select
            value={language}
            onChange={setLanguage}
            options={[
              { label: 'English', value: 'en' },
              { label: 'Polski', value: 'pl' },
            ]}
          />
        </header>
      </div>
      <main className="mx-auto p-4 max-w-5xl">
        <Outlet />
      </main>
    </div>
  )
}
