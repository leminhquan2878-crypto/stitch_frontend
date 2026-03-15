import { useNavigate } from 'react-router-dom'

export default function ContractCreatePage() {
  const navigate = useNavigate()
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <button onClick={() => navigate('/contracts')} className="text-sm text-primary font-semibold hover:underline mb-4">
            ← Quay lại danh sách
          </button>
          <h1 className="text-2xl font-extrabold text-slate-800">Tạo Hợp đồng Mới</h1>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 figma-shadow-sm p-8 space-y-6">
          {[
            { label: 'Số hợp đồng', id: 'contract-number', placeholder: 'VD: HĐ/2024/009', type: 'text' },
            { label: 'Ngày ký', id: 'sign-date', placeholder: '', type: 'date' },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-sm font-semibold text-gray-700 mb-2">{f.label}</label>
              <input id={f.id} type={f.type} placeholder={f.placeholder} className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chủ nhiệm đề tài (Bên B)</label>
            <select className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
              <option>-- Chọn chủ nhiệm đề tài --</option>
              <option>GS.TS. Nguyễn Văn A - Đề tài KC.01/2024</option>
              <option>PGS.TS. Trần Thị B - Đề tài KHCN.2023.05</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày bắt đầu</label>
              <input type="date" className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày kết thúc</label>
              <input type="date" className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tổng giá trị hợp đồng (VND)</label>
            <input type="number" placeholder="0" className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="has-midterm" className="rounded border-gray-300 text-primary focus:ring-primary" />
            <label htmlFor="has-midterm" className="text-sm font-medium text-gray-700">Có báo cáo giữa kỳ</label>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button onClick={() => navigate('/contracts')} className="px-5 py-2 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">Hủy</button>
            <button className="px-6 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 uppercase tracking-wide">TẠO VÀ GỬI THÔNG BÁO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
