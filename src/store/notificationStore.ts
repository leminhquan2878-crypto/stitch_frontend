import { create } from 'zustand'
import type { Notification } from '../types'

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  addNotification: (notification: Notification) => void
  markRead: (id: string) => void
  markAllRead: () => void
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: 'WARNING',
    message: 'Cảnh báo: Đề tài [AI-2023-V1] đã trễ hạn nộp báo cáo.',
    createdAt: '2026-03-15T22:00:00Z',
    isRead: false,
    link: '/contracts/1',
  },
  {
    id: 'n2',
    type: 'INFO',
    message: 'Yêu cầu xử lý: Chủ nhiệm Lê Văn B đã nộp đề nghị tạm ứng.',
    createdAt: '2026-03-15T21:45:00Z',
    isRead: false,
    link: '/settlement',
  },
  {
    id: 'n3',
    type: 'SYSTEM',
    message: 'Thành viên Trần Thị C đã từ chối tham gia Hội đồng nghiệm thu.',
    createdAt: '2026-03-15T20:00:00Z',
    isRead: true,
    link: '/council/1',
  },
]

export const useNotificationStore = create<NotificationState>()((set) => ({
  notifications: MOCK_NOTIFICATIONS,
  unreadCount: MOCK_NOTIFICATIONS.filter((n) => !n.isRead).length,
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    })),
  markRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      ),
      unreadCount: Math.max(0, state.unreadCount - 1),
    })),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
      unreadCount: 0,
    })),
}))
