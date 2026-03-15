import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserRole } from '../types'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'nckh-auth',
    }
  )
)

// Mock user for development
export const MOCK_USER: User = {
  id: 'user-001',
  fullName: 'Nguyễn Thị A',
  email: 'nguyenthia@university.edu.vn',
  role: 'ADMIN_NCKH' as UserRole,
  employeeCode: 'NV001',
  faculty: 'Phòng NCKH',
}
