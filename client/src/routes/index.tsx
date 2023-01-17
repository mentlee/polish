import { createBrowserRouter } from 'react-router-dom'
import {
  AdjectiveFormRoute,
  AdjectivesGeneratorRoute,
  AdjectiveRulesRoute,
} from './adjectives'
import { RootRoute } from './root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      {
        path: 'adjectives/generator',
        element: <AdjectivesGeneratorRoute />,
      },
      {
        path: 'adjectives/rules',
        element: <AdjectiveRulesRoute />,
      },
      {
        path: 'adjectives/rules/:form',
        element: <AdjectiveFormRoute />,
      },
    ],
  },
])
