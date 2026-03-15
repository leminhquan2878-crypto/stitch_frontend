import { useState } from 'react'

type BOMStatus = 'APPROVED' | 'PENDING'
type AdminStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

interface Extension {
  id: string
  projectCode: string
  count: 1 | 2
  reason: string
  proposedDeadline: string
  extensionDays: number
  bomStatus: BOMStatus
  adminStatus: AdminStatus
}

const MOCK: Extension[] = [
  { id: '1', projectCode: 'DT-2023-001', count: 1, reason: 'Thiếu mẫu khảo sát từ các đơn vị thực địa do điều kiện thời tiết.', proposedDeadline: '30/11/2023', extensionDays: 15, bomStatus: 'APPROVED', adminStatus: 'PENDING' },
  { id: '2', projectCode: 'DT-2023-045', count: 2, reason: 'Chậm trễ trong quá trình thu thập dữ liệu thứ cấp từ cơ quan đối tác.', proposedDeadline: '15/12/2023', extensionDays: 30, bomStatus: 'APPROVED', adminStatus: 'PENDING' },
  { id: '3', projectCode: 'DT-2023-089', count: 1, reason: 'Cần thêm thời gian chạy mô hình AI và kiểm thử bộ dữ liệu lớn.', proposedDeadline: '05/01/2024', extensionDays: 10, bomStatus: 'PENDING', adminStatus: 'PENDING' },
]

const stats = [
  { label: 'Tổng yêu cầu', value: '12', color: 'text-primary' },
  { label: 'Chờ phê duyệt', value: '08', color: 'text-amber-500' },
  { label: 'Đã xử lý (Hôm nay)', value: '04', color: 'text-emerald-500' },
]

export default function ExtensionPage() {
  const [extensions, setExtensions] = useState<Extension[]>(MOCK)

  const handleAction = (id: string, action: 'APPROVED' | 'REJECTED') => {
    setExtensions((prev) => prev.map((e) => e.id === id ? { ...e, adminStatus: action } : e))
  }

  const approved = extensions.filter((e) => e.adminStatus === 'APPROVED').length
  const rejected = extensions.filter((e) => e.adminStatus === 'REJECTED').length

  return (
    <div className="p-10 max-w-7xl mx-auto w-full space-y-10">
      <section>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Quản lý Gia hạn</h1>
        <p className="text-gray-500 mt-2 text-base max-w-2xl leading-relaxed">
          Danh sách các yêu cầu gia hạn đề tài nghiên cứu đang chờ xử lý sau khi có sự phê duyệt từ Ban Giám đốc.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-8 rounded-2xl figma-shadow-sm border border-gray-100">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</span>
            <div className={`text-4xl font-extrabold mt-3 tracking-tight ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </section>

      {/* Table */}
      <section className="bg-white rounded-2xl figma-shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Yêu cầu Đang chờ</h2>
          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-blue-50 text-primary border border-blue-100 uppercase">
            Cần hành động
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                {['Mã Đề Tài', 'Lý Do Gia Hạn', 'Giải Trình', 'Hạn Đề Xuất', 'Trạng Thái BOM', 'Thao Tác'].map((h, i) => (
                  <th key={h} className={`px-8 py-5 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest ${i === 5 ? 'text-right' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {extensions.map((e) => {
                const isPendingBOM = e.bomStatus === 'PENDING'
                const isProcessed = e.adminStatus !== 'PENDING'
                return (
                  <tr key={e.id} className={`hover:bg-gray-50/50 transition-colors ${isPendingBOM ? 'bg-gray-50/20' : ''}`}>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex flex-col gap-1.5">
                        <span className={`font-mono font-bold text-sm ${isPendingBOM ? 'text-gray-400' : 'text-primary'}`}>
                          {e.projectCode}
                        </span>
                        <span className={`inline-flex w-fit px-2 py-0.5 rounded text-[9px] font-bold border ${e.count === 2 ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-blue-50 text-primary border-blue-100'} ${isPendingBOM ? '!bg-gray-100 !text-gray-400 !border-gray-200' : ''}`}>
                          GIA HẠN LẦN {e.count}
                        </span>
                      </div>
                    </td>
                    <td className={`px-8 py-6 text-sm max-w-[260px] ${isPendingBOM ? 'text-gray-400' : 'text-gray-600'}`}>{e.reason}</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button disabled={isPendingBOM} className={`text-[11px] font-bold uppercase tracking-tight ${isPendingBOM ? 'text-gray-300 cursor-not-allowed' : 'text-primary hover:text-blue-800'}`}>
                        Xem file
                      </button>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className={`text-sm font-bold ${isPendingBOM ? 'text-gray-400' : 'text-gray-900'}`}>{e.proposedDeadline}</div>
                      <div className={`text-[11px] mt-1 ${isPendingBOM ? 'text-gray-400 italic' : 'text-gray-400'}`}>Gia hạn +{e.extensionDays} ngày</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      {isPendingBOM ? (
                        <span className="px-3 py-1 text-[10px] font-bold rounded-lg bg-gray-100 text-gray-500 italic border border-gray-200">ĐANG CHỜ BOM...</span>
                      ) : (
                        <span className="px-3 py-1 text-[10px] font-bold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">ĐÃ PHÊ DUYỆT</span>
                      )}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-2">
                        {isProcessed ? (
                          <span className={`px-5 py-2 rounded-xl text-xs font-bold ${e.adminStatus === 'APPROVED' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>
                            {e.adminStatus === 'APPROVED' ? 'ĐÃ PHÊ DUYỆT' : 'ĐÃ TỪ CHỐI'}
                          </span>
                        ) : (
                          <>
                            <button disabled={isPendingBOM} onClick={() => handleAction(e.id, 'APPROVED')} className={`px-5 py-2 rounded-xl text-xs font-bold transition-colors figma-shadow-sm ${isPendingBOM ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}>
                              PHÊ DUYỆT
                            </button>
                            <button disabled={isPendingBOM} onClick={() => handleAction(e.id, 'REJECTED')} className={`px-5 py-2 rounded-xl text-xs font-bold transition-colors ${isPendingBOM ? 'bg-gray-100 text-gray-300 cursor-not-allowed border border-gray-200' : 'bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100'}`}>
                              TỪ CHỐI
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-8 py-6 bg-white border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Hiển thị 1 - {extensions.length} / {extensions.length + 9} yêu cầu
          </span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 disabled:opacity-50">Trước</button>
            <div className="flex gap-1">
              <button className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-xl text-xs font-bold figma-shadow-sm">1</button>
              <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">2</button>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">Sau</button>
          </div>
        </div>
      </section>
    </div>
  )
}
