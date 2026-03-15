import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/council', label: 'Thành lập Hội Đồng' },
  { to: '/contracts', label: 'Quản lý Hợp đồng' },
  { to: '/templates', label: 'Quản lý Biểu mẫu' },
  { to: '/settlement', label: 'Theo dõi Quyết toán' },
  { to: '/extensions', label: 'Quản lý Gia Hạn' },
]

export default function Sidebar() {
  const user = useAuthStore((s) => s.user)
  const initials = user?.fullName
    ?.split(' ')
    .slice(-2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() ?? 'NV'

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-50 figma-sidebar-shadow">
      {/* Logo */}
      <div className="p-8 flex items-center">
        <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
          <span className="text-white text-[10px] font-black uppercase">NCKH</span>
        </div>
        <h2 className="font-bold text-slate-800 text-lg leading-tight">Hệ thống NCKH</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-5 py-3.5 text-sm font-semibold rounded-xl transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-button'
                  : 'text-slate-500 hover:bg-slate-50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${
                    isActive ? 'bg-white' : 'bg-slate-300'
                  }`}
                />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-6 border-t border-slate-100 bg-slate-50">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-primary mr-3 flex-shrink-0">
            {initials}
          </div>
          <div className="overflow-hidden">
            <p className="text-[13px] font-bold text-slate-800 truncate">
              {user?.fullName ?? 'Nguyễn Thị A'}
            </p>
            <p className="text-[11px] text-slate-500 font-medium truncate">
              Nhân viên Phòng NCKH
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
