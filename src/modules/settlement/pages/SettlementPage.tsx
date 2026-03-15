import { useState } from 'react';

const mockSettlements = [
  {
    id: 'DA-2023-001',
    name: 'Dự án Phát triển Robot AI',
    status: 'Chờ bổ sung',
    statusTag: 'bg-red-50 text-red-600',
    missingDocs: '! Thiếu Mẫu đề nghị tạm ứng 40%',
  },
  {
    id: 'QT-2024-0012',
    name: 'Quyết toán mua vật tư đợt 1',
    status: 'Hợp lệ',
    statusTag: 'bg-green-50 text-green-600',
    missingDocs: 'Đã kèm: Mẫu đề nghị tạm ứng 40%',
  },
];

const stats = [
  { title: 'Tổng kinh phí quản lý', value: '5.420.000.000', unit: 'VND', color: 'text-slate-900', border: '' },
  { title: 'Đã giải ngân đợt 1', value: '2.150.000.000', unit: 'VND', color: 'text-primary', border: 'border-l-4 border-l-primary' },
  { title: 'Hồ sơ trễ hạn', value: '03', unit: 'ĐỀ TÀI', color: 'text-orange-600', border: 'border-l-4 border-l-orange-500' },
  { title: 'Sai sót chứng từ', value: '08', unit: 'VỤ VIỆC', color: 'text-red-600', border: 'border-l-4 border-l-red-500' },
];

export default function SettlementPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex-1 overflow-y-auto p-10 bg-[#f8fafc]">
      {/* Title Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Quản lý Theo dõi Quyết toán</h3>
          <p className="text-slate-500 text-base font-medium">Theo dõi tiến độ, thẩm định chứng từ và yêu cầu bổ sung hồ sơ từ các Nhà khoa học.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 border-b border-slate-200 mb-10">
        {[
          { key: 'all', label: 'Tất cả hồ sơ' },
          { key: 'pending', label: 'Chờ thẩm định (5)' },
          { key: 'missing', label: 'Đã yêu cầu bổ sung (2)' },
          { key: 'done', label: 'Hoàn tất' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-4 text-sm font-bold transition-colors ${
              activeTab === tab.key
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-400 hover:text-slate-600 font-medium'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Checklist Suggestion / Reference */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 figma-shadow-card">
            <h4 className="text-base font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Danh mục minh chứng
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm border-2 border-primary bg-primary/10"></div>
                <span className="text-xs font-semibold text-slate-700">Hóa đơn GTGT (VAT)</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm border-2 border-primary bg-primary/10"></div>
                <span className="text-xs font-semibold text-slate-700">Bảng kê chi tiền mặt</span>
              </div>
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm border-2 border-primary bg-primary/10"></div>
                <span className="text-xs font-bold text-primary">Mẫu đề nghị tạm ứng 40%</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm border-2 border-slate-200"></div>
                <span className="text-xs font-semibold text-slate-700">Quyết định phê duyệt kinh phí</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Ghi chú nghiệp vụ</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Các hồ sơ cần kiểm tra kỹ phần 'Mẫu đề nghị tạm ứng 40%' trước khi xác nhận hợp lệ.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Table */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-2xl border border-slate-200 figma-shadow-card overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h4 className="text-base font-bold text-slate-800">Danh sách hồ sơ cần xử lý</h4>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase bg-slate-50 rounded-md">Bộ lọc</button>
                <button className="px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase bg-slate-50 rounded-md">Xuất Excel</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Mã hồ sơ</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Nội dung &amp; Minh chứng</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Trạng thái</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mockSettlements.map((item, i) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 text-xs font-bold text-primary">{item.id}</td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-800">{item.name}</p>
                        <p className={`text-[10px] font-${i === 0 ? 'bold uppercase tracking-tight' : 'medium italic'} mt-1 ${i === 0 ? 'text-red-500' : 'text-green-600'}`}>
                          {item.missingDocs}
                        </p>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${item.statusTag}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right flex flex-col items-end gap-2 text-wrap">
                        {item.status === 'Chờ bổ sung' ? (
                          <>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-[10px] font-black uppercase figma-shadow-button hover:bg-red-700 transition-colors">
                              Yêu cầu bổ sung
                            </button>
                            <button className="text-[10px] font-black text-slate-400 hover:text-primary uppercase mr-2">Chi tiết</button>
                          </>
                        ) : (
                          <button className="px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-black uppercase figma-shadow-button hover:bg-blue-700 transition-colors">
                            Xác nhận
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-50 bg-slate-50/20 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trang 1 / 2</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-slate-50">PREV</button>
                <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-[10px] font-bold">1</button>
                <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-slate-50">NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl border border-slate-100 figma-shadow-card flex flex-col justify-center ${s.border}`}>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{s.title}</p>
            <h5 className={`text-xl font-black ${s.color}`}>
              {s.value} <span className="text-[10px] font-bold text-slate-400 uppercase">{s.unit}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
