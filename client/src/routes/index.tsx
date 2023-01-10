import { createBrowserRouter } from 'react-router-dom'
import { AdjectivesRoute } from './adjectives'
import { RootRoute } from './root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      {
        path: 'adjectives',
        element: <AdjectivesRoute />,
      },
    ],
  },
])
