# Screen Map - Phân hệ đề tài NCKH

## Dashboard

folder: dashboard  
route: /dashboard

description: Trang tổng quan hệ thống

---

## Quản lý hợp đồng

folder: QuanLyHopDong  
route: /contracts

actions:

- Tạo hợp đồng -> /contracts/create
- Xem chi tiết -> /contracts/:id
- Upload hợp đồng đã ký -> /contracts/:id/upload

next_flow:

- Thành lập hội đồng

---

## Thành lập hội đồng

folder: ThanhLapHoiDong  
route: /council

actions:

- Tạo hội đồng -> /council/create
- Xem chi tiết hội đồng -> /council/:id

next_flow:

- Nghiệm thu đề tài

---

## Quản lý gia hạn

folder: QuanLyGiaHan  
route: /extensions

actions:

- Tạo yêu cầu gia hạn -> /extensions/create
- Duyệt gia hạn -> /extensions/:id

---

## Quản lý biểu mẫu

folder: QuanLyBieuMau  
route: /templates

description: Quản lý các biểu mẫu văn bản

---

## Quyết toán

folder: QuanLyQuyetToan  
route: /settlement

actions:

- Tạo quyết toán -> /settlement/create
- Xem chi tiết -> /settlement/:id
