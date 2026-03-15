import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { label: 'Tổng hợp đồng', value: '42', color: '' },
  { label: 'Đang thực hiện', value: '28', color: 'border-l-4 border-l-primary' },
  { label: 'Chờ ký duyệt', value: '10', color: 'border-l-4 border-l-amber-400' },
  { label: 'Hoàn thành', value: '4', color: 'border-l-4 border-l-green-500' },
]

const contracts = [
  { code: 'HĐ/2024/001', name: 'Nguyễn Văn A', status: 'DA_KY', statusLabel: 'Đã ký', statusColor: 'bg-green-50 text-green-700 border-green-100' },
  { code: 'HĐ/2024/005', name: 'Trần Thị B', status: 'CHO_DUYET', statusLabel: 'Chờ duyệt', statusColor: 'bg-amber-50 text-amber-700 border-amber-100' },
  { code: 'HĐ/2024/008', name: 'Lê Quang C', status: 'CHO_KY', statusLabel: 'Chờ ký', statusColor: 'bg-blue-50 text-blue-700 border-blue-100' },
]

const principalOptions = [
  { value: '', label: '-- Chọn chủ nhiệm đề tài --' },
  { value: '1', label: 'GS.TS. Nguyễn Văn A - Đề tài KC.01/2024' },
  { value: '2', label: 'PGS.TS. Trần Thị B - Đề tài KHCN.2023.05' },
  { value: '3', label: 'TS. Lê Quang C - Đề tài CNTT.2024.12' },
]

export default function ContractListPage() {
  const navigate = useNavigate()
  const [selectedPrincipal, setSelectedPrincipal] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [searchCode, setSearchCode] = useState('')

  const filtered = contracts.filter(
    (c) =>
      c.code.toLowerCase().includes(searchCode.toLowerCase()) ||
      c.name.toLowerCase().includes(searchCode.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Page title */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Quản lý Hợp đồng
          </h1>
          <p className="text-slate-500 mt-1">Tạo, theo dõi và quản lý hợp đồng nghiên cứu khoa học.</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`bg-white p-6 rounded-xl border border-gray-200 figma-shadow-sm ${s.color}`}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                {s.label}
              </p>
              <p className={`text-3xl font-bold ${s.color.includes('primary') ? 'text-primary' : s.color.includes('amber') ? 'text-amber-500' : s.color.includes('green') ? 'text-green-600' : 'text-gray-900'}`}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Left Column */}
          <div className="col-span-8 space-y-8">
            {/* Create Contract Form */}
            <section className="bg-white rounded-xl border border-gray-200 figma-shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-800">Tạo Hợp đồng Mới</h2>
                <p className="text-sm text-gray-500">
                  Lựa chọn nhân sự và rà soát nội dung trước khi ban hành.
                </p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chủ nhiệm đề tài (Bên B)
                  </label>
                  <select
                    value={selectedPrincipal}
                    onChange={(e) => setSelectedPrincipal(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary py-2.5 px-3 outline-none"
                    id="principal-select"
                  >
                    {principalOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contract Preview */}
                <div className="bg-gray-100 p-8 rounded-xl border border-gray-200">
                  <div className="bg-white border border-gray-200 p-10 min-h-[300px] text-[11px] leading-relaxed shadow-sm">
                    <div className="text-center mb-6 font-bold space-y-1">
                      <p className="uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                      <p className="border-b border-gray-900 w-36 mx-auto pb-1">
                        Độc lập - Tự do - Hạnh phúc
                      </p>
                    </div>
                    <div className="text-center mb-6 space-y-1">
                      <p className="font-bold text-xs uppercase">HỢP ĐỒNG NGHIÊN CỨU KHOA HỌC</p>
                      <p className="italic text-gray-500">Số: ......./HĐ-KHCN</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold uppercase mb-1">BÊN A: [Tên Cơ quan Quản lý]</p>
                        <div className="flex gap-2">
                          <span>Đại diện bởi:</span>
                          <span className="border-b border-gray-300 flex-1 italic text-blue-700">
                            ..................................................
                          </span>
                          <span>(Bên A)</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold uppercase mb-1">
                          BÊN B:{' '}
                          {selectedPrincipal
                            ? principalOptions.find((o) => o.value === selectedPrincipal)?.label.split(' - ')[0]
                            : '[Tên Chủ nhiệm]'}
                        </p>
                        <p>
                          <span className="inline-block w-24">Tên đề tài:</span>
                          <span className="font-bold">
                            {selectedPrincipal ? 'Đề tài nghiên cứu khoa học' : '.....'}
                          </span>
                        </p>
                      </div>
                      <div className="pt-4 border-t border-gray-100 text-gray-500 italic">
                        [Nội dung điều khoản pháp lý mẫu được tự động thiết lập...]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                <button className="px-5 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  LƯU NHÁP
                </button>
                <button
                  onClick={() => navigate('/contracts/create')}
                  className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 figma-shadow-sm uppercase tracking-wide transition-colors"
                >
                  TẠO VÀ GỬI THÔNG BÁO
                </button>
              </div>
            </section>

            {/* Contracts Table */}
            <section className="bg-white rounded-xl border border-gray-200 figma-shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-md font-bold text-gray-800">Danh sách Hợp đồng</h2>
                <div className="flex gap-2">
                  <input
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    className="px-3 py-1.5 text-xs border border-gray-300 rounded-md w-36 outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tìm mã HĐ..."
                    type="text"
                    id="contract-search"
                  />
                  <button className="px-3 py-1.5 text-[10px] font-bold text-gray-500 border border-gray-300 rounded-md uppercase hover:bg-gray-50 transition-colors">
                    Bộ lọc
                  </button>
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-100">Mã HĐ</th>
                    <th className="px-6 py-3 border-b border-gray-100">Chủ nhiệm</th>
                    <th className="px-6 py-3 border-b border-gray-100">Trạng thái</th>
                    <th className="px-6 py-3 border-b border-gray-100 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((c) => (
                    <tr key={c.code} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{c.code}</td>
                      <td className="px-6 py-4">{c.name}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase ${c.statusColor}`}
                        >
                          {c.statusLabel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => navigate(`/contracts/${c.code}`)}
                          className="text-[10px] font-bold text-primary uppercase hover:underline"
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 border-t border-gray-50 bg-gray-50/30 text-center">
                <button className="text-[11px] font-bold text-gray-400 hover:text-primary uppercase tracking-widest transition-colors">
                  Xem tất cả
                </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-4 space-y-8">
            {/* Upload Section */}
            <section className="bg-white rounded-xl border border-gray-200 figma-shadow-sm p-6">
              <h2 className="text-md font-bold text-gray-800 mb-1">Tải lên PDF Quét</h2>
              <p className="text-xs text-gray-500 mb-6">
                Bản sao chính thức đầy đủ chữ ký và mộc.
              </p>
              <label
                htmlFor="pdf-upload"
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full mb-3 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors">
                  PDF
                </div>
                <p className="text-[12px] font-bold text-gray-700 uppercase">
                  {uploadedFile ? uploadedFile.name : 'Tải lên tài liệu'}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">Định dạng .pdf (Max 20MB)</p>
              </label>
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => setUploadedFile(e.target.files?.[0] ?? null)}
              />
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5">
                    Liên kết Hợp đồng:
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 text-sm py-2 px-3 outline-none focus:ring-1 focus:ring-primary">
                    <option>Chọn mã hợp đồng...</option>
                    {contracts.map((c) => (
                      <option key={c.code}>{c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>
                <button className="w-full py-2.5 bg-gray-900 text-white rounded-lg text-[11px] font-bold uppercase tracking-wider hover:bg-black figma-shadow-sm transition-colors">
                  HOÀN TẤT TẢI LÊN
                </button>
              </div>
            </section>

            {/* Guide Card */}
            <section className="bg-primary rounded-xl figma-shadow p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Hướng dẫn quy trình</h3>
                <p className="text-[12px] text-blue-100 mb-4 leading-relaxed">
                  Xem lại các bước hướng dẫn chuẩn bị hồ sơ hợp đồng và rà soát các điều khoản pháp lý mới nhất.
                </p>
                <button className="px-4 py-2 bg-white text-primary text-[11px] font-bold rounded-lg uppercase tracking-wide hover:bg-blue-50 transition-colors">
                  Xem tài liệu
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/20 rounded-full" />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
