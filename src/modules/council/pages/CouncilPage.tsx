import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const pendingProjects = [
  {
    id: 'DT-2023-001',
    name: 'Ứng dụng AI trong chẩn đoán hình ảnh y khoa tại các bệnh viện tuyến tỉnh',
    principal: 'GS.TS. Nguyễn Văn A',
    duration: '24 tháng',
    deadline: '15/12/2023',
    urgent: true,
  },
  {
    id: 'DT-2023-042',
    name: 'Nghiên cứu vật liệu mới cho pin năng lượng mặt trời hiệu suất cao',
    principal: 'PGS.TS. Trần Thị B',
    duration: '18 tháng',
    deadline: '',
    urgent: false,
  },
]

const proposals = [
  {
    id: 'p1',
    name: 'PGS.TS. Lê Quang C',
    org: 'Đại học Bách Khoa TP.HCM',
    role: 'PHẢN BIỆN 1',
    hasCOI: true,
  },
  {
    id: 'p2',
    name: 'TS. Phạm Minh D',
    org: 'Viện Công nghệ Thông tin',
    role: 'ỦY VIÊN',
    hasCOI: false,
  },
]

const recentCouncils = [
  { decision: 'QĐ/2023/156', project: 'Nghiên cứu văn hóa dân gian vùng đồng bằng sông Hồng...', date: '10/11/2023' },
  { decision: 'QĐ/2023/142', project: 'Phát triển hệ thống quản lý logistics thông minh...', date: '05/11/2023' },
]

interface MemberRow {
  id: string
  name: string
  role: string
  email: string
}

export default function CouncilPage() {
  const navigate = useNavigate()
  const [members, setMembers] = useState<MemberRow[]>([
    { id: '1', name: 'GS.TS. Hoàng Văn E', role: 'Chủ tịch', email: 'hve@university.edu.vn' },
  ])

  const addMember = () => {
    setMembers((prev) => [
      ...prev,
      { id: Date.now().toString(), name: '', role: 'Phản biện 1', email: '' },
    ])
  }

  const removeMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <div className="p-10 space-y-10" style={{ background: '#f8fafc' }}>
      {/* Pending Projects */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-primary rounded-full" />
            Đề tài chờ thành lập Hội đồng
          </h2>
          <span className="bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            {pendingProjects.length} cần xử lý
          </span>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden figma-shadow-sm">
          {pendingProjects.map((p, i) => (
            <div
              key={p.id}
              className={`p-6 flex items-center justify-between gap-6 bg-white ${
                p.urgent ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'
              } ${i > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">
                    {p.id}
                  </span>
                  {p.deadline && (
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      HẠN: {p.deadline}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Chủ nhiệm: {p.principal} • Thời gian: {p.duration}
                </p>
              </div>
              <button
                onClick={() => navigate('/council/create')}
                className={`px-6 py-3 text-xs font-bold rounded-xl transition-colors ${
                  p.urgent
                    ? 'bg-primary text-white figma-shadow-lg hover:bg-blue-700'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {p.urgent ? 'Thiết lập Hội đồng' : 'Xem chi tiết'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Proposals Sidebar */}
        <div className="col-span-4">
          <div className="bg-white border border-gray-200 rounded-2xl figma-shadow-sm sticky top-8">
            <div className="p-5 border-b border-gray-100 bg-gray-50/30">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-tight">
                Đề xuất từ Chủ nhiệm
              </h3>
            </div>
            <div className="p-5 space-y-4">
              {proposals.map((p) => (
                <div key={p.id} className="p-4 border border-gray-100 rounded-xl space-y-3 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-sm text-gray-900">{p.name}</p>
                      <p className="text-[11px] text-gray-500 font-medium">{p.org}</p>
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 border border-gray-100 px-1.5 py-0.5 rounded">
                      {p.role}
                    </span>
                  </div>
                  {p.hasCOI ? (
                    <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      CẢNH BÁO: XUNG ĐỘT LỢI ÍCH (COI)
                    </div>
                  ) : (
                    <div className="bg-green-50 text-green-600 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      ĐỦ ĐIỀU KIỆN
                    </div>
                  )}
                  <button
                    disabled={p.hasCOI}
                    className={`w-full py-2.5 text-[11px] font-bold border rounded-xl transition-colors ${
                      p.hasCOI
                        ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary'
                    }`}
                  >
                    Chọn đề xuất
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="col-span-8 space-y-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 figma-shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
              Chi tiết thành phần Hội đồng
            </h3>
            <div className="space-y-6">
              {/* Member Table */}
              <div className="overflow-hidden border border-gray-100 rounded-xl">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      {['Họ và Tên', 'Vai trò', 'Email', 'Xóa'].map((h) => (
                        <th key={h} className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {members.map((m) => (
                      <tr key={m.id}>
                        <td className="px-6 py-4">
                          <input
                            value={m.name}
                            onChange={(e) =>
                              setMembers((prev) =>
                                prev.map((r) => r.id === m.id ? { ...r, name: e.target.value } : r)
                              )
                            }
                            className="w-full border border-gray-200 rounded-xl text-sm font-medium focus:ring-1 focus:ring-primary px-3 py-1.5 outline-none"
                            type="text"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={m.role}
                            onChange={(e) =>
                              setMembers((prev) =>
                                prev.map((r) => r.id === m.id ? { ...r, role: e.target.value } : r)
                              )
                            }
                            className="w-full border border-gray-200 rounded-xl text-sm font-medium focus:ring-1 focus:ring-primary px-3 py-1.5 outline-none"
                          >
                            {['Chủ tịch', 'Phản biện 1', 'Phản biện 2', 'Thư ký', 'Ủy viên'].map((r) => (
                              <option key={r}>{r}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            value={m.email}
                            onChange={(e) =>
                              setMembers((prev) =>
                                prev.map((r) => r.id === m.id ? { ...r, email: e.target.value } : r)
                              )
                            }
                            className="w-full border border-gray-200 rounded-xl text-sm font-medium focus:ring-1 focus:ring-primary px-3 py-1.5 outline-none"
                            type="email"
                            placeholder="email@domain.com"
                          />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => removeMember(m.id)}
                            className="text-gray-300 hover:text-red-500 font-bold text-[10px] uppercase transition-colors"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={4} className="px-6 py-4">
                        <button
                          onClick={addMember}
                          className="w-full py-4 border-2 border-dashed border-gray-100 rounded-xl text-xs font-bold text-gray-400 hover:text-primary hover:border-blue-200 transition-colors"
                        >
                          + Thêm thành viên mới
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Decision Upload */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase px-1">
                  Quyết định thành lập (.pdf)
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-blue-50/30 hover:border-blue-200 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold text-xs mb-4">
                    UP
                  </div>
                  <button className="bg-white border border-gray-200 px-6 py-2 text-xs font-bold text-primary rounded-xl mb-2 figma-shadow-sm">
                    Chọn tệp tin
                  </button>
                  <p className="text-[11px] text-gray-400 font-medium">
                    hoặc kéo thả vào đây (Tối đa 10MB)
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button className="px-8 py-3 text-xs font-bold text-white bg-primary rounded-xl figma-shadow-lg hover:bg-blue-700 transition-colors">
                  Phê duyệt &amp; Ban hành
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Councils */}
      <section className="pb-10">
        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          Hội đồng đã thành lập gần đây
        </h3>
        <div className="bg-white border border-gray-200 rounded-2xl figma-shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Số Quyết định', 'Tên Đề tài', 'Ngày lập', 'Thao tác'].map((h, i) => (
                  <th
                    key={h}
                    className={`px-8 py-4 text-[10px] font-bold text-gray-400 uppercase ${i === 3 ? 'text-right' : ''}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentCouncils.map((c) => (
                <tr key={c.decision} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-gray-900">{c.decision}</td>
                  <td className="px-8 py-5 text-sm font-medium text-gray-600 max-w-md truncate">{c.project}</td>
                  <td className="px-8 py-5 text-sm text-gray-500">{c.date}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">CHI TIẾT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
