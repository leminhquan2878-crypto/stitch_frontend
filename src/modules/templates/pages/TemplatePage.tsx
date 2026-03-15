import { useState } from 'react';

const mockTemplates = [
  {
    id: '1',
    name: 'BM01-CT: Biên bản họp Hội đồng',
    size: '156 KB',
    version: 'v2024.1.2',
    date: '12/03/2024',
    effectiveDate: '01/01/2024',
  },
  {
    id: '2',
    name: 'BM02-CT: Quyết định phê duyệt',
    size: '210 KB',
    version: 'v2023.1.0',
    date: '05/01/2024',
    effectiveDate: '01/01/2024',
  },
];

export default function TemplatePage() {
  const [templates] = useState(mockTemplates);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50/30 p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* UPLOAD CARD */}
        <section className="bg-white border border-gray-200 rounded-2xl figma-shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold">UP</span>
            <h2 className="font-bold text-gray-900">Tải lên Biểu mẫu Mới</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-12 gap-10">
              {/* Inputs */}
              <div className="col-span-6 space-y-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Tên biểu mẫu</label>
                  <input className="w-full h-11 rounded-xl border border-gray-200 text-sm px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Nhập tên biểu mẫu..." type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Vai trò áp dụng</label>
                    <select className="w-full h-11 rounded-xl border border-gray-200 text-sm px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                      <option>Chủ tịch Hội đồng</option>
                      <option>Người phản biện</option>
                      <option>Ủy viên</option>
                      <option>Thư ký</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Phiên bản</label>
                    <input className="w-full h-11 rounded-xl border border-gray-200 text-sm px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="2024.1.0" type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Ngày hiệu lực</label>
                    <input className="w-full h-11 rounded-xl border border-gray-200 text-sm px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" type="date" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Ghi chú</label>
                  <textarea className="w-full rounded-xl border border-gray-200 text-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Mô tả cập nhật..." rows={3}></textarea>
                </div>
              </div>
              
              {/* Upload Area */}
              <div className="col-span-6">
                <label htmlFor="template-upload" className="h-full border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-full figma-shadow-sm flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-[10px]">FILE</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {uploadedFile ? uploadedFile.name : (
                      <>Kéo thả tệp hoặc <span className="text-blue-600">chọn từ máy tính</span></>
                    )}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Định dạng: .docx, .pdf (Max 10MB)</p>
                  <input 
                    type="file" 
                    id="template-upload" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-8 border-t border-gray-100">
              <button className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">Hủy bỏ</button>
              <button className="px-8 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold figma-shadow-button hover:bg-blue-700 transition-all">Tải lên &amp; Lưu trữ</button>
            </div>
          </div>
        </section>

        {/* LIST SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Danh sách biểu mẫu hiện hành</h2>
            <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <span className="w-4 h-4 bg-gray-100 rounded text-[8px] flex items-center justify-center uppercase font-bold">FL</span>
              Bộ lọc
            </button>
          </div>
          
          {/* TABLE CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl figma-shadow-sm overflow-hidden">
            <div className="px-8 py-4 bg-gray-50/50 border-b border-gray-100 flex items-center gap-3">
              <h3 className="text-sm font-bold text-gray-900">Vai trò: Chủ tịch Hội đồng</h3>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">{templates.length} Biểu mẫu</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tên biểu mẫu</th>
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest">Phiên bản</th>
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest">Cập nhật</th>
                  <th className="px-8 py-4 text-right text-[11px] font-bold text-gray-400 uppercase tracking-widest">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 bg-white">
                {templates.map(tpl => (
                  <tr key={tpl.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <span className="text-[10px] font-bold">DOC</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{tpl.name}</p>
                          <p className="text-xs text-gray-400">{tpl.size} • Ngày hiệu lực: {tpl.effectiveDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-2.5 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-bold">{tpl.version}</span>
                    </td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-500">{tpl.date}</td>
                    <td className="px-8 py-5 text-right space-x-4">
                      <button className="text-sm font-bold text-blue-600 hover:underline">Lịch sử</button>
                      <button className="text-[10px] font-bold text-gray-300 hover:text-red-500 px-2 py-1 border border-gray-100 rounded transition-colors uppercase">XÓA</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
