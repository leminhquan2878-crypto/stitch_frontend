import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { useAuthStore, MOCK_USER } from './store/authStore'
import { useEffect } from 'react'

export default function App() {
  const login = useAuthStore((s) => s.login)
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  // Auto-login with mock user for development
  useEffect(() => {
    if (!isAuthenticated) {
      login(MOCK_USER, 'mock-token-dev')
    }
  }, [isAuthenticated, login])

  return <RouterProvider router={router} />
}
