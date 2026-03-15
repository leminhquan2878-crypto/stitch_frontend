import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import DashboardPage from '../../modules/dashboard/pages/DashboardPage'
import ContractListPage from '../../modules/contracts/pages/ContractListPage'
import ContractCreatePage from '../../modules/contracts/pages/ContractCreatePage'
import ContractDetailPage from '../../modules/contracts/pages/ContractDetailPage'
import CouncilPage from '../../modules/council/pages/CouncilPage'
import CouncilCreatePage from '../../modules/council/pages/CouncilCreatePage'
import ExtensionPage from '../../modules/extensions/pages/ExtensionPage'
import TemplatePage from '../../modules/templates/pages/TemplatePage'
import SettlementPage from '../../modules/settlement/pages/SettlementPage'
import { Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      // Contracts
      {
        path: '/contracts',
        element: <ContractListPage />,
      },
      {
        path: '/contracts/create',
        element: <ContractCreatePage />,
      },
      {
        path: '/contracts/:id',
        element: <ContractDetailPage />,
      },
      // Council
      {
        path: '/council',
        element: <CouncilPage />,
      },
      {
        path: '/council/create',
        element: <CouncilCreatePage />,
      },
      {
        path: '/council/:id',
        element: <CouncilPage />,
      },
      // Extensions
      {
        path: '/extensions',
        element: <ExtensionPage />,
      },
      // Templates
      {
        path: '/templates',
        element: <TemplatePage />,
      },
      // Settlement
      {
        path: '/settlement',
        element: <SettlementPage />,
      },
    ],
  },
])
