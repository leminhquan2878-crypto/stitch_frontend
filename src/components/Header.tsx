import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNotificationStore } from '../store/notificationStore'

export default function Header() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const notifications = useNotificationStore((s) => s.notifications)
  const unreadCount = useNotificationStore((s) => s.unreadCount)
  const markAllRead = useNotificationStore((s) => s.markAllRead)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 px-10 flex justify-between items-center">
      {/* Search */}
      <div className="flex items-center w-full max-w-xl">
        <div className="relative w-full">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-slate-300 rounded-full" />
          <input
            className="w-full pl-12 pr-6 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/30 outline-none"
            placeholder="Tìm kiếm mã đề tài, tên chủ nhiệm..."
            type="text"
            id="header-search"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <div className="text-right hidden md:block">
          <p className="text-[10px] text-slate-400 font-bold uppercase">Cập nhật lúc</p>
          <p className="text-[13px] font-bold text-slate-700">
            {new Date().toLocaleDateString('vi-VN', {
              weekday: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>

        {/* Notification Bell */}
        <div className="relative" ref={dropdownRef}>
          <button
            id="notification-btn"
            onClick={() => setOpen((o) => !o)}
            className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-500 rounded-xl font-bold text-xs cursor-pointer relative hover:bg-slate-200 transition-colors"
          >
            TB
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] text-white font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl figma-shadow z-50 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Thông báo mới
                </p>
                <button
                  onClick={markAllRead}
                  className="text-[10px] font-bold text-primary hover:underline"
                >
                  Đánh dấu tất cả đã đọc
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto">
                {notifications.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${
                      !n.isRead ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <p
                      className={`text-[13px] font-semibold ${
                        n.type === 'WARNING' ? 'text-red-600' : 'text-slate-800'
                      }`}
                    >
                      {n.message}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {new Date(n.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3 text-center border-t border-slate-100 bg-slate-50">
                <Link
                  to="/notifications"
                  className="text-[11px] font-bold text-primary hover:underline"
                  onClick={() => setOpen(false)}
                >
                  Xem tất cả
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
