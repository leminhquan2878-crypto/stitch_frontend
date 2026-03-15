import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend, PieController)

const deadlineProjects = [
  { code: 'AI-2023-V1', name: 'Nghiên cứu AI trong Y tế', daysLeft: 1, status: 'urgent' },
  { code: 'VL-2023-B2', name: 'Quyết toán Vật liệu Nano', daysLeft: -2, status: 'overdue' },
]

const pendingCouncilProjects = [
  { code: 'NT-102', name: 'Hệ sinh thái biển VN' },
  { code: 'NT-105', name: 'Tự động hóa chip bán dẫn' },
  { code: 'BK-209', name: 'Phân tích dữ liệu y sinh' },
]

const notifications = [
  { id: 1, text: 'Báo cáo quý II đã nộp', time: '10 phút trước', type: 'info' },
  { id: 2, text: 'Nhắc nhở hạn quyết toán', time: '1 giờ trước', type: 'warning' },
]

export default function DashboardPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!canvasRef.current) return
    if (chartRef.current) chartRef.current.destroy()
    
    const existingChart = Chart.getChart(canvasRef.current)
    if (existingChart) existingChart.destroy()

    chartRef.current = new Chart(canvasRef.current, {
      type: 'pie',
      data: {
        labels: ['Đang thực hiện', 'Trễ hạn (TRE_HAN)', 'Đã nghiệm thu'],
        datasets: [
          {
            data: [45, 15, 40],
            backgroundColor: ['#3b82f6', '#ef4444', '#22c55e'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    })

    return () => {
      chartRef.current?.destroy()
    }
  }, [])

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Tổng quan hệ thống
        </h1>
        <p className="text-slate-500 mt-1">Phòng Quản lý Khoa học và Công nghệ</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* LEFT COLUMN */}
        <div className="col-span-4 space-y-8">
          {/* Status Chart */}
          <section className="bg-white p-8 rounded-3xl figma-shadow border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-8">Trạng thái Đề tài</h2>
            <div className="h-48 w-full mb-8 flex justify-center">
              <canvas ref={canvasRef} id="statusPieChart" />
            </div>
            <div className="space-y-3">
              {[
                { color: 'bg-blue-500', label: 'Đang thực hiện', val: '45%' },
                { color: 'bg-red-500', label: 'Trễ hạn (TRE_HAN)', val: '15%' },
                { color: 'bg-green-500', label: 'Đã nghiệm thu', val: '40%' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
                >
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full ${item.color} mr-2`} />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Notifications */}
          <section className="bg-white p-8 rounded-3xl figma-shadow border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Thông báo mới</h2>
            <div className="space-y-4">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-4 rounded-2xl border ${
                    n.type === 'warning'
                      ? 'bg-orange-50 border-orange-100'
                      : 'bg-blue-50 border-blue-100'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-800">{n.text}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{n.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 space-y-8">
          {/* Deadline Warning Zone */}
          <section className="bg-white p-8 rounded-3xl figma-shadow border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Đề tài sắp trễ hạn</h2>
            <div className="grid grid-cols-2 gap-6">
              {deadlineProjects.map((p) => (
                <div
                  key={p.code}
                  className="p-6 rounded-3xl border-2 border-red-500 bg-red-50"
                >
                  <span className="text-[10px] font-black uppercase text-white bg-red-600 px-3 py-1 rounded-lg ring-2 ring-red-100">
                    {p.status === 'overdue'
                      ? `QUÁ HẠN ${Math.abs(p.daysLeft)} NGÀY`
                      : `CÒN ${p.daysLeft} NGÀY`}
                  </span>
                  <h3 className="text-sm font-extrabold text-red-900 mt-4">{p.name}</h3>
                  <p className="text-xs text-red-700 mt-1 font-bold">Mã: {p.code}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pending acceptance table */}
          <section className="bg-white rounded-3xl figma-shadow border border-slate-100 overflow-hidden">
            <div className="px-8 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Danh sách Chờ nghiệm thu</h2>
            </div>
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr className="text-[10px] uppercase font-bold text-slate-400">
                  <th className="px-8 py-4 text-left">Mã</th>
                  <th className="px-8 py-4 text-left">Tên đề tài</th>
                  <th className="px-8 py-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {pendingCouncilProjects.map((p) => (
                  <tr key={p.code} className="text-sm hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-primary">{p.code}</td>
                    <td className="px-8 py-5 font-medium">{p.name}</td>
                    <td className="px-8 py-5 text-right">
                      <button
                        onClick={() => navigate('/council/create')}
                        className="text-xs font-bold text-primary border border-primary bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        Thành lập HĐ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}
