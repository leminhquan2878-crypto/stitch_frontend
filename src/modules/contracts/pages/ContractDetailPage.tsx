import { useNavigate, useParams } from 'react-router-dom'

const mockContract = {
  code: 'HĐ/2024/001',
  name: 'Nguyễn Văn A',
  project: 'Nghiên cứu ứng dụng AI trong quản lý rủi ro thiên tai',
  status: 'Đã ký',
  statusColor: 'bg-green-50 text-green-700 border-green-100',
  startDate: '01/01/2024',
  endDate: '31/12/2024',
  totalValue: '500,000,000',
  advanceAmount: '200,000,000',
}

export default function ContractDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <button onClick={() => navigate('/contracts')} className="text-sm text-primary font-semibold hover:underline mb-4 block">
            ← Quay lại danh sách
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-slate-800">Chi tiết Hợp đồng</h1>
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase ${mockContract.statusColor}`}>
              {mockContract.status}
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 figma-shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <p className="text-sm text-gray-500 font-medium">Mã hợp đồng: <span className="font-bold text-gray-900">{id || mockContract.code}</span></p>
          </div>
          <div className="p-6 space-y-4">
            {[
              ['Chủ nhiệm (Bên B)', mockContract.name],
              ['Tên đề tài', mockContract.project],
              ['Ngày bắt đầu', mockContract.startDate],
              ['Ngày kết thúc', mockContract.endDate],
              ['Tổng giá trị', `${mockContract.totalValue} VND`],
              ['Tạm ứng 40%', `${mockContract.advanceAmount} VND`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-500 font-medium">{label}</span>
                <span className="text-sm font-bold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-bold text-primary border border-primary rounded-lg hover:bg-blue-50">
              Xem hợp đồng PDF
            </button>
            <button onClick={() => navigate(`/contracts/${id || 'HĐ2024001'}/upload`)} className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-blue-700">
              Upload bản ký
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
