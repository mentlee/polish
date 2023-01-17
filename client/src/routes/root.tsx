import { Menu, Select, type MenuProps } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'

export const RootRoute: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const items = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'adjectives',
        label: t('adjectives'),
        children: [
          {
            key: '/adjectives/rules',
            label: t('rules'),
            onClick: () => navigate('/adjectives/rules'),
          },
          {
            key: '/adjectives/generator',
            label: t('generator'),
            onClick: () => navigate('/adjectives/generator'),
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
              { label: 'en', value: 'en' },
              { label: 'pl', value: 'pl' },
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
