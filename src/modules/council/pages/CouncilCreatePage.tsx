import { useNavigate } from 'react-router-dom'

export default function CouncilCreatePage() {
  const navigate = useNavigate()
  return (
    <div className="p-8">
      <button onClick={() => navigate('/council')} className="text-sm text-primary font-semibold hover:underline mb-6 block">
        ← Quay lại danh sách Hội đồng
      </button>
      <h1 className="text-2xl font-extrabold text-slate-800 mb-6">Thành lập Hội đồng Nghiệm thu Mới</h1>
      <div className="bg-white rounded-xl border border-gray-200 figma-shadow-sm p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Đề tài cần thành lập Hội đồng</label>
          <select className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 outline-none focus:ring-2 focus:ring-primary/30">
            <option>-- Chọn đề tài --</option>
            <option>DT-2023-001 – Ứng dụng AI trong chẩn đoán hình ảnh y khoa</option>
            <option>DT-2023-042 – Nghiên cứu vật liệu mới cho pin năng lượng mặt trời</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Số quyết định thành lập</label>
          <input type="text" placeholder="VD: QĐ/2024/001" className="w-full rounded-lg border border-gray-300 text-sm py-2.5 px-3 outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button onClick={() => navigate('/council')} className="px-5 py-2 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">Hủy</button>
          <button className="px-6 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 uppercase tracking-wide">
            Phê duyệt &amp; Ban hành
          </button>
        </div>
      </div>
    </div>
  )
}
