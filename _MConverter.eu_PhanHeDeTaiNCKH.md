# NHÓM 2 -- Thực hiện đề tài -- Nghiệm thu -- Lưu trữ sản phẩm NCKH {#nhóm-2-thực-hiện-đề-tài-nghiệm-thu-lưu-trữ-sản-phẩm-nckh}

## TỔNG QUAN QUY TRÌNH NGHIỆP VỤ

\[Upload mẫu HĐ\] → \[Ký hợp đồng\] → \[Xác nhận HĐ & ứng 40%\] → \[Thiết lập deadline giữa kỳ\]  
→ \[Báo cáo giữa kỳ\] → \[Nộp kết quả cuối kỳ\]  
→ \[Thành lập Hội đồng nghiệm thu\] → \[Hội đồng đánh giá Online -- chấm điểm\]  
→ \[Thư ký note kết luận chỉnh sửa\] → \[Chủ nhiệm nộp lại & xác nhận hoàn thành\]  
→ \[Phòng NCKH yêu cầu quyết toán\] → \[Quyết toán -- Thanh lý hợp đồng\] → \[Lưu trữ sản phẩm NCKH\]

## PHẦN 1 -- MODULE BACKEND {#phần-1-module-backend}

### 2.1. Quản lý hợp đồng nghiên cứu {#quản-lý-hợp-đồng-nghiên-cứu}

**Mô tả nghiệp vụ:**

Phòng NCKH tạo hợp đồng dựa trên mẫu có sẵn của nhà trường. Hợp đồng có hai bên: Bên A (đại diện nhà trường) và Bên B (chủ nhiệm đề tài). Sau khi tạo, hợp đồng được gửi qua email/tin nhắn cho chủ nhiệm đề tài xem xét và xác nhận. Khi chấp thuận, hợp đồng được in ra để các cấp ký và đóng dấu, sau đó bản scan được tải lên hệ thống. Ngay sau khi hợp đồng được tạo, chủ nhiệm đề tài được ứng trước 40% giá trị đề tài theo mẫu đề nghị tạm ứng.

**Thông tin hợp đồng bao gồm:**

- Số hợp đồng, ngày ký hợp đồng

- Thông tin Bên A: đại diện nhà trường (họ tên, chức vụ)

- Thông tin Bên B: chủ nhiệm đề tài (họ tên, học hàm, học vị, đơn vị)

- Tên đề tài, mã đề tài

- Thời gian thực hiện (ngày bắt đầu -- ngày kết thúc)

- Tổng giá trị hợp đồng, số tiền tạm ứng (40%)

- Có báo cáo giữa kì hay không( với những đề tài \>6m thì không cần báo cáo giữa kì)

**Luồng xử lý:**

1\. Nhân viên phòng NCKH vào màn hình quản lý hợp đồng → Chọn \"Tạo hợp đồng mới\"

2\. Hệ thống hiển thị **danh sách tất cả chủ nhiệm đề tài** → Chọn chủ nhiệm cần tạo hợp đồng

3\. Hệ thống **tự động load template hợp đồng**, điền thông tin đề tài & chủ nhiệm từ CSDL

4\. Nhân viên nhập thêm: thông tin đại diện Bên A, số hợp đồng, ngày ký, thời gian thực hiện, giá trị hợp đồng

5\. Xem trước (preview) hợp đồng → Bấm **\"Tạo hợp đồng\"**

6\. Hệ thống **gán hợp đồng cho chủ nhiệm đề tài**, đồng thời **gửi hợp đồng qua email + thông báo in-app** cho chủ nhiệm

7\. Chủ nhiệm đề tài xem hợp đồng (ngày ký, số hợp đồng, thời gian thực hiện) → Xác nhận OK

8\. Hợp đồng **chuyển trạng thái \"Đã xác nhận\"** → In ra để các cấp ký và đóng dấu

9\. Scan bản hợp đồng đã ký → **Upload lên hệ thống**

10\. Hệ thống lưu bản tóm tắt hợp đồng để dễ theo dõi

11\. Hệ thống tự động tạo **mẫu đề nghị tạm ứng 40%** và lưu vào CSDL

### 2.2. Theo dõi tiến độ & Báo cáo giữa kỳ {#theo-dõi-tiến-độ-báo-cáo-giữa-kỳ}

**Mô tả nghiệp vụ:**  
Chủ nhiệm đề tài có nghĩa vụ nộp báo cáo tiến độ giữa kỳ theo thời gian quy định. Hệ thống tự động gửi thông báo nhắc nhở trước deadline. Báo cáo phải được gắn đúng mã đề tài.

**Luồng xử lý -- Báo cáo giữa kỳ:**

1\. Hệ thống **tự động gửi thông báo nhắc nhở** (in-app + email) đến chủ nhiệm đề tài trước **15 ngày, 7 ngày và 1 ngày** trước deadline báo cáo giữa kỳ

2\. Chủ nhiệm đề tài đăng nhập → Vào mục \"Báo cáo tiến độ giữa kỳ\"

3\. Nhập thông tin báo cáo tiến độ (nội dung thực hiện, kết quả đạt được, khó khăn, kế hoạch tiếp theo, ngày báo cáo)

4\. Hệ thống **tự động gắn mã đề tài** vào báo cáo → Lưu vào CSDL

5\. Người quản lý vào xem tình trạng nộp báo cáo giữa kỳ của các đề tài

**Luồng xử lý -- Nộp kết quả cuối kỳ:**

1\. Chủ nhiệm đề tài vào mục \"Nộp kết quả nghiên cứu\"

2\. Upload các tài liệu: báo cáo tổng kết, bài báo, sản phẩm nghiên cứu

3\. Hệ thống **tự động gắn mã đề tài** và lưu trạng thái \"Đã nộp kết quả\"

4\. Người quản lý xem danh sách đề tài đã nộp kết quả → Bắt đầu thành lập hội đồng nghiệm thu

### 2.3. Quản lý sản phẩm nghiên cứu {#quản-lý-sản-phẩm-nghiên-cứu}

**Mô tả nghiệp vụ:**  
Sau khi nộp kết quả, chủ nhiệm đề tài có thể cập nhật lại sản phẩm trước khi hội đồng nghiệm thu chốt kết quả. Nhân viên Phòng NCKH rà soát, xác nhận sản phẩm hợp lệ trước khi chuyển sang giai đoạn lưu trữ.

**Các loại sản phẩm có thể upload:**

| **Loại sản phẩm** | **Mô tả**                                         | **Định dạng** |
|-------------------|---------------------------------------------------|---------------|
| Báo cáo tổng kết  | Báo cáo khoa học đầy đủ cuối đề tài               | PDF, Word     |
| Bài báo khoa học  | Bài báo Scopus/ISI, tạp chí trong nước            | PDF           |
| Phần mềm          | Link source code/GitHub, bản thuyết minh kỹ thuật | PDF + Link    |
| Tài liệu khác     | Giáo trình, slide bài giảng, dữ liệu thô          | PDF, Word     |

**Luồng xử lý:**

1\. Chủ nhiệm upload sản phẩm nghiên cứu → Hệ thống gán mã đề tài, lưu trạng thái **\"Đã nộp kết quả\"**

2\. Chủ nhiệm **có thể upload lại (cập nhật phiên bản mới)** trước khi Hội đồng nghiệm thu chốt kết quả. Sau khi nghiệm thu thành công, chức năng upload bị **khóa tự động**

3\. Nhân viên Phòng NCKH rà soát: kiểm tra đúng định dạng, đủ số lượng sản phẩm theo yêu cầu đề tài

4\. Nếu hợp lệ → Bấm **\"Xác nhận sản phẩm\"** → Trạng thái chuyển sang **\"Đã xác nhận sản phẩm\"**. Nếu thiếu/sai → Gửi yêu cầu bổ sung cho chủ nhiệm

### 2.4. Thành lập & Quản lý Hội đồng Nghiệm thu {#thành-lập-quản-lý-hội-đồng-nghiệm-thu}

**Mô tả nghiệp vụ:**  
Sau khi chủ nhiệm đề tài nộp kết quả cuối kỳ, quy trình thành lập hội đồng diễn ra theo 3 bước:

\(1\) Chủ nhiệm có thể gửi đề xuất danh sách thành viên;

\(2\) Phòng NCKH thẩm định và điều chỉnh;

\(3\) Hiệu trưởng/Ban khoa học ra quyết định chính thức;

\(4\) Hệ thống tự động tạo tài khoản và xử lý các trường hợp thành viên từ chối/vắng mặt. Mỗi thành viên hội đồng được cấp tài khoản riêng, gửi qua email cá nhân. Mỗi đề tài sau khi chấm xong thì giải tán hội đồng. Sau khi hoàn thành nghiệm thu, tài khoản chuyển trạng thái "Ngủ" (soft delete -- không xóa vĩnh viễn).

**Nguyên tắc Soft Delete toàn hệ thống:** Mọi thao tác xóa trong hệ thống (xóa tài khoản, biểu mẫu, hội đồng, tài liệu...) đều là **xóa mềm (soft delete)** -- dữ liệu được đánh dấu is_deleted = true và ẩn khỏi giao diện, nhưng vẫn lưu trong CSDL để tra cứu khi cần. Không có thao tác xóa vĩnh viễn (hard delete) ở bất kỳ module nào.

**Cơ cấu hội đồng:**

| **Vai trò**       | **Trách nhiệm**                                                               | **Cấp độ**    |
|-------------------|-------------------------------------------------------------------------------|---------------|
| Chủ tịch hội đồng | Điều hành phiên nghiệm thu, tổng hợp ý kiến, kết luận chính thức, ký biên bản | Cao nhất      |
| Phản biện 1       | Nhận xét, chấm điểm, phản biện đề tài                                         | Chuyên môn    |
| Phản biện 2       | Nhận xét, chấm điểm, phản biện đề tài                                         | Chuyên môn    |
| Thư ký hội đồng   | Tổng hợp điểm, ghi note kết luận, lập biên bản, xác nhận chỉnh sửa            | Quản lý hồ sơ |
| Ủy Viên           | Hỗ trợ thủ tục hành chính, lưu hồ sơ giấy tờ                                  | Hành chính    |

#### 2.4.1. Quy trình Đề xuất & Thẩm định Hội đồng {#quy-trình-đề-xuất-thẩm-định-hội-đồng}

**Bước 1 -- Chủ nhiệm đề tài đề xuất thành viên (không bắt buộc):**

1\. Khi nộp hồ sơ nghiệm thu cuối kỳ, chủ nhiệm đề tài có thể gửi kèm **danh sách đề xuất thành viên hội đồng** qua hệ thống

2\. Thông tin mỗi ứng viên đề xuất gồm: họ tên, học hàm/học vị, đơn vị công tác, chuyên môn liên quan,email

3\. Mục đích: giúp Phòng NCKH dễ tìm chuyên gia phù hợp lĩnh vực nghiên cứu

**Lưu ý:** Đề xuất của chủ nhiệm chỉ mang tính **tham khảo**. Phòng NCKH có toàn quyền giữ nguyên, thay đổi một số thành viên, hoặc tự chọn người khác.

**Bước 2 -- Phòng NCKH thẩm định danh sách:**

1\. Phòng NCKH xem xét danh sách đề xuất (nếu có)

2\. **Kiểm tra xung đột lợi ích tự động (COI):** Khi Admin thêm thành viên vào Hội đồng, hệ thống **tự động so sánh Mã GV / User ID** của thành viên với danh sách Chủ nhiệm + Thành viên nhóm thực hiện đề tài. Nếu trùng → hiển thị **cảnh báo đỏ và ngăn chặn (Block)** việc lưu

3\. Kiểm tra **chuyên môn phù hợp** với lĩnh vực của đề tài

4\. Phòng NCKH điều chỉnh danh sách cuối cùng (giữ nguyên / thay đổi / tự chọn thêm)

**Bước 3 -- Ra Quyết định thành lập Hội đồng:**

1\. Phòng NCKH trình danh sách đã thẩm định lên **Hiệu trưởng / Ban Khoa học**

2\. Hiệu trưởng/Ban Khoa học ký **Quyết định thành lập Hội đồng Nghiệm thu**, ghi rõ: Chủ tịch, Phản biện 1 & 2, Ủy viên, Thư ký Hội đồng

3\. Phòng NCKH upload Quyết định thành lập lên hệ thống → Hội đồng chính thức có hiệu lực

4\. Hệ thống **tự động tạo tài khoản** cho từng thành viên, gán vai trò tương ứng

5\. Hệ thống **gửi thông tin tài khoản (username, password tạm)** kèm **link đổi mật khẩu** đến **email cá nhân** của từng thành viên. Thành viên được khuyến nghị đổi mật khẩu ngay lần đăng nhập đầu tiên

6\. Hội đồng được gắn với Mã số đề tài, trạng thái **\"Đang hoạt động\"**

**Bước 4 -- Xử lý thành viên từ chối / vắng mặt:**

1\. Khi thành viên nhận email và bấm **\"Từ chối tham gia\"** → Hệ thống chuyển trạng thái thành viên đó thành REJECTED → Gửi Alert cho Admin Phòng NCKH để thay thế

2\. Admin có quyền **gỡ thành viên cũ và thêm thành viên mới** trước khi buổi nghiệm thu bắt đầu. Mọi thay đổi được ghi vào Audit Log

3\. **Quorum (Túc số tối thiểu):** Buổi nghiệm thu chỉ hợp lệ khi có **ít nhất 2/3 số thành viên có mặt**, bao gồm Chủ tịch và ít nhất 1 Phản biện

4\. Thành viên vắng mặt: hệ thống ẩn ô nhập điểm của người đó. Điểm TB cuối tính trên số thành viên có mặt thực tế

#### 2.4.2. Quy trình Đánh giá theo Vai trò {#quy-trình-đánh-giá-theo-vai-trò}

**Nguyên tắc chung:**

- Mỗi thành viên đăng nhập sẽ thấy **giao diện, biểu mẫu và chức năng riêng** của vai trò mình

- Biểu mẫu cho từng vai trò do **Phòng NCKH upload** sẵn trên hệ thống (Word/PDF theo mẫu chuẩn của trường)

- **Thang điểm: 100 điểm**, làm tròn 1 chữ số thập phân. Công thức: P_TB = (Σ Pᵢ) / n (trung bình cộng không trọng số, n = số thành viên có mặt). Ngưỡng ĐẠT: P_TB ≥ 70/100

- **Chấm điểm:** Chủ tịch, Phản biện 1, Phản biện 2, **Thư ký hội đồng, ủy viên không chấm điểm**

- Sau khi nhập điểm, điểm số **tự động hiển thị phía Thư ký hội đồng** để tổng hợp

**Luồng đánh giá chi tiết:**

1\. Thành viên hội đồng đăng nhập → Hệ thống hiển thị **Dashboard theo vai trò** (tài liệu đề tài, biểu mẫu, chức năng phù hợp)

2\. **Phản biện 1 & 2:** Tải biểu mẫu nhận xét phản biện → Soạn nhận xét → Nhập phiếu chấm điểm (0--100) → Lưu vào hệ thống → Điểm **tự động gửi sang Thư ký hội đồng tổng hợp**

3\. **Chủ tịch Hội đồng:** Tải biểu mẫu kết luận → Nhập điểm chấm (0--100) → Lưu → Điểm gửi sang Thư ký hội đồng

4\. **Thư ký hội đồng** nhận điểm từ tất cả thành viên → Xem bảng tổng hợp → Tính điểm trung bình tự động → Xác nhận điểm hợp lệ → Đánh giá tổng thể

5\. **Chủ tịch Hội đồng** thực hiện tổng kết sau thảo luận:

- Tổng hợp ý kiến của các thành viên

- Nhấn mạnh: Điểm mạnh của đề tài / Hạn chế cần chỉnh sửa / Các yêu cầu bổ sung

- Nhập **kết luận chính thức của Hội đồng** vào hệ thống

6\. **Chủ tịch Hội đồng** ký biên bản nghiệm thu (scan và upload), xác nhận:

- Kết quả đánh giá tổng thể

- Điểm số

- Kết luận hội đồng

- (Biên bản này là cơ sở pháp lý để công nhận kết quả đề tài)

7\. **Thư ký Hội đồng** lập biên bản nghiệm thu chính thức → Công bố kết quả cho chủ nhiệm (đạt/k đạt) → Cấp quyền xem biên bản

**Luồng xử lý sau nghiệm thu:**

Trường hợp cần chỉnh sửa:

1\. Biên bản ghi rõ **yêu cầu chỉnh sửa** (do Thư ký hội đồng note theo kết luận của Chủ tịch) và deadline chỉnh sửa

2\. Chủ nhiệm đề tài upload kết quả chỉnh sửa theo deadline. Hệ thống gửi nhắc nhở trước 7 ngày và 1 ngày

3\. Thư ký hội đồng kiểm tra → Nếu đạt: bấm \"Xác nhận hoàn thành chỉnh sửa\" mà **không cần họp lại hội đồng**

4\. Nếu đạt → Chuyển trạng thái đề tài sang **\"Đã nghiệm thu\"**

Giải tán hội đồng:

- Sau khi nghiệm thu xong đề tài, hội đồng được **giải tán**

- Tài khoản các thành viên chuyển sang trạng thái **\"Ngủ\"** (soft delete -- vô hiệu hóa tạm thời, không xóa vĩnh viễn)

### 2.5. Quyết toán -- Thanh lý hợp đồng {#quyết-toán-thanh-lý-hợp-đồng}

**Mô tả nghiệp vụ:**  
Sau khi đề tài được nghiệm thu, chuyển sang giai đoạn quyết toán. Chủ nhiệm đề tài nộp đầy đủ hồ sơ quyết toán. Sau khi kiểm tra đủ giấy tờ, tiến hành thanh lý hợp đồng và chuyển hồ sơ qua phòng kế toán.

**Luồng xử lý:**

1\. Đề tài chuyển trạng thái **\"Đã nghiệm thu\"** → Tự động mở giai đoạn quyết toán

2\. Hệ thống hiển thị **mẫu đề nghị tạm ứng 40%** đã lưu từ lúc ký hợp đồng (làm minh chứng)

3\. Chủ nhiệm đề tài nộp **các tài liệu quyết toán** kèm minh chứng danh mục chi tiêu (upload lên hệ thống)

4\. Người quản lý/kế toán vào kiểm tra **danh sách giấy tờ đã nộp**:

- \* Đủ hồ sơ → Chuyển bước thanh lý

  - Thiếu hồ sơ → Gửi yêu cầu **bổ sung giấy tờ** cho chủ nhiệm

5\. Bấm **\"Chấp nhận thanh lý\"** → Hệ thống tự động **tạo biên bản thanh lý hợp đồng**

6\. In biên bản thanh lý → Các bên liên quan ký thanh lý hợp đồng

7\. Scan bản thanh lý đã ký → Upload lên hệ thống

8\. Chuyển hồ sơ qua **phòng kế toán** để củng cố hồ sơ và chấp nhận thanh lý

9\. Kế toán xác nhận → Hợp đồng **\"Đã thanh lý\"**, đề tài đóng lại

**Hồ sơ quyết toán bao gồm:**

- Biên bản nghiệm thu (đã có từ bước trước)

- Mẫu đề nghị tạm ứng 40% (đã có trong hệ thống)

- Danh mục minh chứng chi tiêu

- Các tài liệu liên quan khác theo quy định

### 2.6. Lưu trữ & Tra cứu {#lưu-trữ-tra-cứu}

**Mô tả nghiệp vụ:**  
Sau khi đề tài đạt trạng thái **DA_THANH_LY**, sản phẩm nghiên cứu được tự động chuyển vào kho lưu trữ của nhà trường.

**Điều kiện vào kho lưu trữ:**

- Đề tài phải ở trạng thái DA_THANH_LY (hoàn tất đủ cả nghĩa vụ chuyên môn lẫn tài chính)

- Đề tài KHONG_DAT hoặc DA_HUY: **không** vào kho lưu trữ công khai/nội bộ, chỉ giữ trong mục "Lịch sử" của Admin để đối soát

**Phân quyền truy cập kho lưu trữ:**

| **Đối tượng**                | **Xem Metadata**           | **Xem Full-text online** | **Download**          |
|------------------------------|----------------------------|--------------------------|-----------------------|
| Khách ngoài (chưa đăng nhập) | Có (Tên, Tác giả, Tóm tắt) | Không                    | Không                 |
| Sinh viên trong trường       | Có                         | Có                       | Không (hoặc giới hạn) |
| Giảng viên trong trường      | Có                         | Có                       | Có (kèm Watermark)    |
| Admin / Phòng NCKH           | Có                         | Có                       | Có (toàn quyền)       |

**Cơ chế bảo mật Download:**  
Khi Giảng viên download tài liệu, hệ thống tự động **chèn Watermark** (logo trường, tên người download, mã nhân viên, ngày download) vào nền PDF để chống phát tán trái phép.

**Thời gian lưu trữ (theo Thông tư 10/2017/TT-BKHCN):**

- Hồ sơ hành chính (Hợp đồng, biên bản, quyết định): tối thiểu **10--20 năm**

- Sản phẩm khoa học (Báo cáo tổng kết, dữ liệu): lưu trữ **Vĩnh viễn** (dạng điện tử) → phục vụ kiểm tra trùng lặp cho đề tài các năm sau

**Tìm kiếm:**

1\. **Tìm kiếm theo Metadata** (Bắt buộc): Tên đề tài, Tên chủ nhiệm, Mã số, Từ khóa, Năm nghiệm thu, Khoa/Phòng

2\. **Tìm kiếm Full-text** (Khuyến khích -- sử dụng Elasticsearch): Quét toàn bộ nội dung bên trong file PDF. Yêu cầu chủ nhiệm nộp PDF có thể copy-paste (không nộp file scan dạng ảnh thuần túy)

## PHẦN 1B -- QUY TRÌNH BỔ SUNG {#phần-1b-quy-trình-bổ-sung}

### 2.7. Quản lý Biểu mẫu & Ký kết Hợp đồng {#quản-lý-biểu-mẫu-ký-kết-hợp-đồng}

#### 2.7.1. Quản trị biểu mẫu (Nhân viên Phòng NCKH) {#quản-trị-biểu-mẫu-nhân-viên-phòng-nckh}

**Mô tả nghiệp vụ:**  
Nhân viên Phòng NCKH chịu trách nhiệm duy trì thư viện mẫu hợp đồng chuẩn của nhà trường trên hệ thống, đảm bảo chủ nhiệm đề tài luôn sử dụng mẫu mới nhất.

**Luồng xử lý:**

1\. Nhân viên Phòng NCKH vào mục **\"Quản lý Biểu mẫu\"** → Chọn \"Tải lên mẫu mới\"

2\. Upload file mẫu hợp đồng (Word/PDF) kèm tên phiên bản, ngày hiệu lực

3\. Hệ thống lưu mẫu và **đặt làm mẫu mặc định** (mẫu cũ chuyển sang trạng thái \"Lưu trữ\")

4\. Mẫu mới xuất hiện trong danh sách để chủ nhiệm đề tài tải xuống

#### 2.7.2. Quy trình ký kết hợp đồng {#quy-trình-ký-kết-hợp-đồng}

**Luồng xử lý:**

1\. Chủ nhiệm đề tài đăng nhập → Vào mục **\"Hợp đồng của tôi\"** → Tải mẫu hợp đồng chuẩn từ hệ thống

2\. Chủ nhiệm hoàn thiện thông tin còn thiếu, ký và trình lên Phòng NCKH

3\. Các bên liên quan ký đầy đủ (Bên A -- đại diện nhà trường, Bên B -- chủ nhiệm đề tài)

4\. Bản scan hợp đồng đã ký đầy đủ được **tải lên hệ thống** (upload)

5\. Nhân viên Phòng NCKH kiểm tra bản scan → Bấm **\"Xác nhận hợp đồng hợp lệ\"**

#### 2.7.3. Tự động hóa sau xác nhận hợp đồng {#tự-động-hóa-sau-xác-nhận-hợp-đồng}

**Khi hợp đồng được xác nhận hợp lệ, hệ thống tự động thực hiện:**

- Chuyển trạng thái đề tài sang **\"Đồng ý / Đã ký kết\"** (DANG_THUC_HIEN)

- Bóc tách **Ngày ký** và **Thời hạn báo cáo giữa kỳ** từ nội dung hợp đồng

- Thiết lập **lịch nhắc (deadline) tự động** cho báo cáo giữa kỳ

- Hiển thị deadline trên **Dashboard của chủ nhiệm đề tài**

- Gửi **thông báo alert trên hệ thống** đến chủ nhiệm đề tài

- Gửi **email thông báo deadline** đến địa chỉ email của chủ nhiệm đề tài

**Lưu ý:** Hệ thống cũng gửi alert nhắc nhở lại khi deadline đến gần (ví dụ: trước 7 ngày và trước 1 ngày) qua cả thông báo trên hệ thống và email của chủ nhiệm.

### 2.8. Tạm ứng và Nghiệm thu chi tiết {#tạm-ứng-và-nghiệm-thu-chi-tiết}

#### 2.8.1. Quy trình Tạm ứng {#quy-trình-tạm-ứng}

**Mô tả nghiệp vụ:**  
Chủ nhiệm đề tài lập đề nghị tạm ứng. Nhân viên Phòng NCKH kiểm tra và xác nhận trên hệ thống để kích hoạt việc chi tiền.

**Luồng xử lý:**

1\. Chủ nhiệm đề tài vào mục **\"Đề nghị tạm ứng\"** → Điền thông tin đề nghị (số tiền, mục đích)

2\. Hệ thống tự động gắn **Mã số đề tài** vào đề nghị tạm ứng

3\. Nhân viên Phòng NCKH nhận thông báo → Kiểm tra đề nghị

4\. Nếu hợp lệ → Bấm **\"Xác nhận tạm ứng\"** trên hệ thống → **Kích hoạt quy trình chi tiền** (chuyển sang phòng kế toán)

5\. Nếu không hợp lệ → Gửi thông báo yêu cầu chỉnh sửa đề nghị

#### 2.8.2. Hội đồng & Mã số đề tài {#hội-đồng-mã-số-đề-tài}

- Hội đồng đánh giá luôn được **gắn chặt với Mã số đề tài** trong hệ thống để đảm bảo quản lý nhất quán và dễ tra cứu

- Mọi tài liệu, điểm số, biên bản đều được liên kết qua Mã số đề tài

#### 2.8.3. Quy trình Đánh giá Offline trên nền tảng Online {#quy-trình-đánh-giá-offline-trên-nền-tảng-online}

**Mô tả nghiệp vụ:**  
Dù hội đồng ngồi họp trực tiếp (offline), toàn bộ kết quả đánh giá được nhập và lưu trữ trên hệ thống (online).

**Luồng xử lý:**

1\. Hội đồng tổ chức họp trực tiếp để đánh giá đề tài

2\. Từng thành viên hội đồng đăng nhập hệ thống → **Nhập điểm số và nhận xét** vào Form online ngay trong buổi họp (hoặc ngay sau đó)

3\. **Thư ký hội đồng** ghi nhận (note) các kết luận, yêu cầu chỉnh sửa của hội đồng vào **khung văn bản riêng** trên hệ thống

4\. Hệ thống tổng hợp điểm và lưu toàn bộ nhận xét

#### 2.8.4. Tính năng \"Xác nhận chỉnh sửa\" (Không cần họp lại) {#tính-năng-xác-nhận-chỉnh-sửa-không-cần-họp-lại}

**Mô tả nghiệp vụ:**  
Khi chủ nhiệm đề tài nộp lại bản sửa theo note của thư ký, hệ thống cho phép xác nhận hoàn thành ngay mà không cần tổ chức họp lại hội đồng, giúp đẩy nhanh tiến độ.

**Luồng xử lý:**

1\. Thư ký hội đồng note rõ **các yêu cầu chỉnh sửa** và deadline nộp lại vào hệ thống

2\. Chủ nhiệm đề tài nhận thông báo → Upload **bản sửa đổi** lên hệ thống theo đúng deadline

3\. Thư ký hội đồng kiểm tra bản sửa:

- Nếu **đạt yêu cầu** → Bấm **\"Xác nhận hoàn thành chỉnh sửa\"** → Hệ thống tự động chuyển trạng thái sang **\"Đã nghiệm thu\"** (không cần họp lại)

- Nếu **chưa đạt** → Gửi thông báo yêu cầu chỉnh sửa lại, kéo dài deadline hoặc chuyển hội đồng xem xét thêm

### 2.9. Quyết toán và Kết thúc {#quyết-toán-và-kết-thúc}

#### 2.9.1. Thông báo quyết toán từ Phòng NCKH {#thông-báo-quyết-toán-từ-phòng-nckh}

**Mô tả nghiệp vụ:**  
Sau khi có kết quả nghiệm thu, Phòng NCKH chủ động liên hệ chủ nhiệm đề tài qua hệ thống để yêu cầu nộp hồ sơ quyết toán.

**Luồng xử lý:**

1\. Đề tài chuyển sang trạng thái **\"Đã nghiệm thu\"** → Nhân viên Phòng NCKH nhận thông báo

2\. Nhân viên Phòng NCKH gửi **tin nhắn trực tiếp qua hệ thống** đến chủ nhiệm đề tài, nêu rõ:

- Kết quả nghiệm thu

- Yêu cầu nộp hồ sơ quyết toán (chứng từ, hóa đơn, minh chứng chi tiêu...)

- Deadline nộp hồ sơ quyết toán

3\. Chủ nhiệm đề tài nhận tin nhắn → Upload hồ sơ quyết toán lên hệ thống theo yêu cầu

#### 2.9.2. Bảo mật tài khoản thành viên hội đồng {#bảo-mật-tài-khoản-thành-viên-hội-đồng}

- Hệ thống chỉ gửi **Tài khoản & Mật khẩu** đến **email cá nhân của chuyên gia/thành viên hội đồng** (không gửi qua bất kỳ kênh khác)

- Tránh rò rỉ thông tin cá nhân: chỉ người có email nhận được mới biết thông tin đăng nhập

- Mật khẩu được tạo ngẫu nhiên, thành viên được khuyến nghị đổi mật khẩu ngay lần đăng nhập đầu tiên

### 2.10. Biểu mẫu theo Vai trò Hội đồng {#biểu-mẫu-theo-vai-trò-hội-đồng}

**Mô tả nghiệp vụ:**  
Phòng NCKH chịu trách nhiệm upload và quản lý toàn bộ biểu mẫu chuẩn cho từng vai trò trong hội đồng nghiệm thu. Khi thành viên đăng nhập, hệ thống tự động hiển thị đúng biểu mẫu của vai trò đó.

**Luồng quản lý biểu mẫu theo role:**

1\. Nhân viên Phòng NCKH vào **\"Quản lý Biểu mẫu Hội đồng\"** → Chọn role cần upload (Chủ tịch / Phản biện / Thư ký HĐ / Thư ký HC)

2\. Upload file biểu mẫu (Word/PDF) → Nhập tên, phiên bản, ngày hiệu lực

3\. Hệ thống gắn biểu mẫu với đúng role → Đặt làm mẫu mặc định cho role đó (mẫu cũ soft delete)

4\. Khi thành viên đăng nhập với role tương ứng → Hệ thống tự động hiển thị **danh sách biểu mẫu của role đó** để tải xuống

**Phân loại biểu mẫu theo role:**

| **Vai trò**       | **Biểu mẫu hiển thị**                                                        |
|-------------------|------------------------------------------------------------------------------|
| Chủ tịch Hội đồng | Phiếu chấm điểm Chủ tịch, Mẫu kết luận Hội đồng, Biên bản nghiệm thu (để ký) |
| Phản biện 1 & 2   | Phiếu nhận xét phản biện, Phiếu chấm điểm Phản biện                          |
| Thư ký Hội đồng   | Mẫu tổng hợp điểm, Mẫu biên bản nghiệm thu, Mẫu yêu cầu chỉnh sửa            |
| Ủy viên           | Mẫu biên bản hành chính, Mẫu hồ sơ lưu trữ                                   |

**Luồng chấm điểm và tổng hợp:**

1\. Từng thành viên (Chủ tịch, Phản biện 1, Phản biện 2) nhập điểm (0--100) vào Form online theo biểu mẫu của role

2\. Sau khi lưu, điểm số **tự động hiển thị trong bảng tổng hợp của Thư ký Hội đồng** (thời gian thực)

3\. Thư ký Hội đồng xem điểm của từng thành viên → **Xác nhận điểm hợp lệ / yêu cầu nhập lại** nếu thiếu hoặc sai

4\. Hệ thống tính điểm trung bình tự động → Thư ký Hội đồng **đánh giá tổng thể** và lập biên bản nghiệm thu

### 2.11. Quản lý Gia hạn & Xử lý Trễ Deadline {#quản-lý-gia-hạn-xử-lý-trễ-deadline}

**Mô tả nghiệp vụ:**  
Chủ nhiệm đề tài có thể xin gia hạn thời gian nộp báo cáo giữa kỳ, kết quả cuối kỳ, hoặc deadline chỉnh sửa sau nghiệm thu. Gia hạn phải được phê duyệt bởi cấp có thẩm quyền.

**Chính sách gia hạn:**

- **Số lần tối đa:** 02 lần, tổng thời gian gia hạn không quá 12 tháng (hoặc không vượt quá 50% thời gian thực hiện gốc)

- **Thẩm quyền phê duyệt:** Chủ nhiệm gửi đơn → Phòng NCKH thẩm định → Hiệu trưởng/Ban Giám hiệu phê duyệt

**Luồng xử lý gia hạn:**

1\. Chủ nhiệm đề tài vào mục **\"Xin gia hạn\"** → Nhập lý do, deadline đề xuất mới, upload văn bản giải trình

2\. Phòng NCKH xem xét → Trình Hiệu trưởng/BGH phê duyệt

3\. Nếu được duyệt → Hệ thống cập nhật deadline mới, ghi nhận lý do gia hạn, Audit Log ghi lại lịch sử

4\. Hệ thống gửi thông báo (in-app + email) xác nhận đến chủ nhiệm

**Xử lý khi trễ hạn không xin gia hạn:**

- Hệ thống tự động chuyển trạng thái đề tài sang **TRE_HAN**

- Chức năng upload báo cáo/kết quả bị **khóa** cho đến khi có văn bản giải trình được Admin xác nhận

- Alert gửi đến Phòng NCKH để xử lý

### 2.12. Xử lý Đề tài Không Đạt & Hủy Đề tài {#xử-lý-đề-tài-không-đạt-hủy-đề-tài}

#### 2.12.1. Đề tài Không Đạt nghiệm thu {#đề-tài-không-đạt-nghiệm-thu}

**Điều kiện KHÔNG ĐẠT (thỏa một trong các điều kiện):**

- Điểm trung bình P_TB \< 50/100; HOẶC

- Hơn 1/3 số thành viên hội đồng đánh giá \"Không đạt\"; HOẶC

- Chủ tịch Hội đồng kết luận vi phạm đạo đức nghiên cứu (đạo văn, sao chép dữ liệu)

**Luồng xử lý sau khi kết quả KHÔNG ĐẠT:**

1\. Thư ký Hội đồng công bố kết quả \"Không đạt\" → Trạng thái đề tài chuyển sang KHONG_DAT

2\. Hệ thống gửi thông báo (in-app + email) đến Chủ nhiệm và Phòng NCKH

3\. Chủ nhiệm được phép **nghiệm thu lại 01 lần duy nhất** trong vòng 3--6 tháng kể từ ngày hội đồng kết luận không đạt

4\. **Hội đồng:** Giữ nguyên hội đồng cũ để kiểm tra việc khắc phục. Trường hợp chủ nhiệm khiếu nại về tính khách quan → Hiệu trưởng/Phòng NCKH quyết định thành lập hội đồng mới

5\. Nếu hết thời hạn nghiệm thu lại mà không nộp hồ sơ → Đề tài bị **hủy bỏ**, trạng thái chuyển sang DA_HUY

**Quyết toán khi không đạt:**

- Kiểm toán lại các chứng từ đã chi

- Thu hồi phần kinh phí chưa có minh chứng hợp lệ

- Nếu lỗi chủ quan từ phía chủ nhiệm: có thể yêu cầu hoàn trả một phần khoản tạm ứng 40%

#### 2.12.2. Hủy Đề tài Giữa Chừng {#hủy-đề-tài-giữa-chừng}

**Điều kiện hủy:** Chủ nhiệm xin nghỉ việc, đề tài không còn phù hợp, vi phạm quy định, thiếu kinh phí trầm trọng.

**Thẩm quyền:** Hiệu trưởng ra quyết định dựa trên đề xuất của Phòng NCKH.

**Luồng xử lý:**

1\. Phòng NCKH lập tờ trình đề xuất hủy đề tài → Trình Hiệu trưởng ký quyết định hủy

2\. Upload quyết định hủy lên hệ thống → Trạng thái đề tài chuyển sang DA_HUY

3\. Thực hiện **\"Thanh lý cưỡng bức\":** Kiểm toán kinh phí, thu hồi phần chưa có minh chứng hợp lệ

4\. Hệ thống gửi thông báo đến Chủ nhiệm, Phòng Kế toán, các bên liên quan

5\. Dữ liệu đề tài được **Soft Delete** (DA_HUY): vẫn có trong CSDL, xuất hiện trong mục \"Lịch sử\" của Admin để đối soát, thống kê

### 2.13. Quản lý Tài khoản & Phân Quyền {#quản-lý-tài-khoản-phân-quyền}

#### 2.13.1. Phân cấp Tài khoản Hệ thống {#phân-cấp-tài-khoản-hệ-thống}

| **Cấp độ**         | **Đối tượng**          | **Ai tạo tài khoản**               | **Quyền hạn chính**                                                      |
|--------------------|------------------------|------------------------------------|--------------------------------------------------------------------------|
| Superadmin         | Nhân sự IT             | Được tạo sẵn khi triển khai        | Cấu hình hệ thống, tạo/khóa tài khoản Admin NCKH, xem System Log, backup |
| Admin (Phòng NCKH) | Chuyên viên Phòng NCKH | Superadmin tạo                     | Quản lý danh mục, thành lập HĐ, duyệt đề tài, xuất báo cáo               |
| Chủ nhiệm Đề tài   | Giảng viên             | Import từ file Excel (Bulk Import) | Hợp đồng, báo cáo, sản phẩm, quyết toán đề tài mình                      |
| Thành viên HĐ      | Chuyên gia             | Tự động tạo khi lập HĐ             | Chấm điểm, nhận xét theo vai trò được gán                                |
| Phòng Kế toán      | Nhân viên kế toán      | Admin NCKH hoặc Superadmin tạo     | Xem & xác nhận hồ sơ quyết toán, thanh lý                                |

**Quy tắc quản lý danh mục (Admin Phòng NCKH):** Năm học, Lĩnh vực nghiên cứu, Loại đề tài, Thang điểm.

#### 2.13.2. Forgot Password {#forgot-password}

- **Chủ nhiệm / Kế toán:** Bấm \"Quên mật khẩu\" → Nhập email → Hệ thống gửi link đặt lại mật khẩu (hết hạn sau 15 phút) đến email đăng ký

- **Thành viên HĐ:** Liên hệ Admin Phòng NCKH để reset mật khẩu thủ công

- **Superadmin:** Quy trình nội bộ IT

#### 2.13.3. Audit Log (Nhật ký Thao tác) {#audit-log-nhật-ký-thao-tác}

Mọi thao tác quan trọng được ghi lại với các trường: User_ID, Action, Target_Object, Timestamp, Old_Value, New_Value. Audit Log không thể sửa/xóa và chỉ Superadmin có quyền truy cập.

### 2.14. Bảng Notification Triggers (Sự kiện Thông báo) {#bảng-notification-triggers-sự-kiện-thông-báo}

| **Sự kiện**                           | **Kênh**          | **Người nhận**            | **Thời điểm**                    |
|---------------------------------------|-------------------|---------------------------|----------------------------------|
| Hợp đồng được tạo                     | Email + In-app    | Chủ nhiệm đề tài          | Ngay lập tức                     |
| Xác nhận tạm ứng 40%                  | Email + In-app    | Chủ nhiệm đề tài          | Ngay lập tức                     |
| Deadline báo cáo giữa kỳ              | Email + In-app    | Chủ nhiệm                 | Trước 15, 7, 1 ngày              |
| Deadline nộp kết quả cuối kỳ          | Email + In-app    | Chủ nhiệm                 | Trước 15, 7, 1 ngày              |
| Thành lập Hội đồng nghiệm thu         | Email (kèm TK/MK) | Từng thành viên HĐ        | Ngay khi upload QĐ thành lập     |
| Thành viên HĐ từ chối                 | In-app            | Admin Phòng NCKH          | Ngay lập tức                     |
| Đề tài đạt/không đạt nghiệm thu       | Email + In-app    | Chủ nhiệm, Phòng NCKH     | Ngay khi Thư ký Hội đồng công bố |
| Deadline chỉnh sửa sau nghiệm thu     | Email + In-app    | Chủ nhiệm                 | Trước 7, 1 ngày                  |
| Nghiệm thu hoàn thành (DA_NGHIEM_THU) | In-app            | Phòng NCKH, Phòng Kế toán | Ngay lập tức                     |
| Yêu cầu nộp hồ sơ quyết toán          | Email + In-app    | Chủ nhiệm                 | Ngay khi NCKH gửi yêu cầu        |
| Thiếu hồ sơ quyết toán                | Email + In-app    | Chủ nhiệm                 | Ngay khi kế toán đánh dấu thiếu  |
| Đề tài trễ hạn (TRE_HAN)              | Email + In-app    | Phòng NCKH                | Ngay khi quá deadline            |
| Gia hạn được phê duyệt                | Email + In-app    | Chủ nhiệm                 | Ngay khi BGH phê duyệt           |

**Template email:** Tiêu đề theo chuẩn \[NCKH\] {Loại thông báo} -- Đề tài {MaDeTai}.  
**Kênh:** Cả Email (Gmail SMTP) và In-app notification.

### 2.15. Import Dữ liệu Giảng viên (Master Data) {#import-dữ-liệu-giảng-viên-master-data}

**Mô tả nghiệp vụ:**  
Hệ thống hoạt động **độc lập (Standalone)**. Dữ liệu giảng viên được khởi tạo qua import file Excel thay vì kết nối API hệ thống HRM của trường.

**Luồng xử lý:**

1\. Admin Phòng NCKH vào **\"Quản lý Dữ liệu Giảng viên\"** → Tải file mẫu Excel

2\. Điền thông tin theo cấu trúc: Ma_GV (PK), Ho_Ten, Email, Hoc_Vi, Khoa

3\. Upload file Excel → Hệ thống thực hiện **Validation** (kiểm tra định dạng, phát hiện Ma_GV trùng lặp) → Hiển thị báo cáo lỗi nếu có

4\. Xác nhận import → Dữ liệu lưu vào CSDL, trở thành **Master Data** đối soát xuyên suốt vòng đời đề tài

5\. Khi tạo hợp đồng/thành lập HĐ: nhập Ma_GV → hệ thống **Auto-fill** thông tin giảng viên tương ứng

## LUỒNG DỮ LIỆU (DATA FLOW) TÓM TẮT

| **Tác nhân**   | **Hành động chính**                                                                                      |
|----------------|----------------------------------------------------------------------------------------------------------|
| **Phòng NCKH** | Upload Mẫu HĐ → Xác nhận Hợp đồng → Xác nhận Tạm ứng → Yêu cầu Quyết toán                                |
| **Chủ nhiệm**  | Tải mẫu → Ký HĐ → Nộp báo cáo giữa kỳ → Nộp sản phẩm → Chỉnh sửa theo note Thư ký → Nộp hồ sơ quyết toán |
| **Hội đồng**   | Chấm điểm Online (từng thành viên) → Thư ký tổng hợp kết luận & Note chỉnh sửa → Xác nhận hoàn thành     |
| **Hệ thống**   | Bóc tách deadline → Alert trên hệ thống + Email chủ nhiệm → Tự động chuyển trạng thái                    |

## PHẦN 2 -- MODULE FRONTEND {#phần-2-module-frontend}

### 2.1. Giao diện Nhân viên Phòng NCKH {#giao-diện-nhân-viên-phòng-nckh}

**Màn hình Dashboard (Sau đăng nhập):**

- Biểu đồ tròn: Phân bố trạng thái đề tài hiện tại

- Danh sách "Đề tài sắp trễ hạn" (vùng cảnh báo đỏ)

- Danh sách "Đề tài chờ nghiệm thu" và "Chờ quyết toán"

- Thông báo chưa đọc

**Màn hình Quản lý Hợp đồng:**

- Danh sách chủ nhiệm đề tài (chọn để tạo hợp đồng)

- Preview template hợp đồng (tự động điền thông tin, ô trống cho đại diện Bên A)

- Nút \"Tạo hợp đồng\" → Gửi email + in-app cho chủ nhiệm

- Xem danh sách hợp đồng, trạng thái từng hợp đồng

- Upload file hợp đồng scan đã ký (PDF, tối đa 20 MB)

- Xem tóm tắt hợp đồng để theo dõi

**Màn hình Thành lập Hội đồng Nghiệm thu:**

- Danh sách đề tài đã nộp kết quả (chờ thành lập hội đồng)

- Xem **đề xuất thành viên** từ chủ nhiệm đề tài (để tham khảo)

- Kiểm tra xung đột lợi ích tự động (cảnh báo đỏ nếu COI)

- Form nhập thông tin thành viên hội đồng chính thức (họ tên, học hàm, học vị, email, vai trò)

- Upload **Quyết định thành lập Hội đồng** (file scan từ Hiệu trưởng/Ban Khoa học)

- Xem danh sách hội đồng đã tạo, trạng thái thành viên (chấp nhận/từ chối)

**Màn hình Quản lý Biểu mẫu Hội đồng:**

- Upload biểu mẫu cho từng vai trò: Chủ tịch / Phản biện / Thư ký Hội đồng / Ủy viên

- Đặt phiên bản mẫu mặc định, xem lịch sử phiên bản (mẫu cũ được soft delete)

- Xem danh sách biểu mẫu hiện hành theo từng role

**Màn hình Theo dõi Quyết toán:**

- Danh sách đề tài đang ở giai đoạn quyết toán

- Kiểm tra hồ sơ quyết toán (đủ/thiếu)

- Nút \"Chấp nhận thanh lý\" → Sinh biên bản thanh lý

- Xuất Excel/PDF hồ sơ chuyển Phòng Kế toán

**Màn hình Quản lý Gia hạn:**

- Danh sách đơn xin gia hạn chờ xét duyệt

- Thông tin đơn: mã đề tài, lý do, deadline đề xuất

- Nút Duyệt / Từ chối (sau khi có phê duyệt của BGH)

### 2.2. Giao diện Chủ nhiệm Đề tài (Giảng viên) {#giao-diện-chủ-nhiệm-đề-tài-giảng-viên}

**Màn hình Dashboard (Sau đăng nhập):**

- Timeline (Lịch trình) đề tài của mình: các đầu mục cần hoàn thiện

- Deadline sắp tới (hạn báo cáo, hạn nộp kết quả, hạn chỉnh sửa)

- Thông báo chưa đọc từ Phòng NCKH / Hội đồng

- Trạng thái hiện tại của đề tài

**Màn hình Xem Hợp đồng:**

- Xem thông tin hợp đồng (ngày ký, số hợp đồng, thời gian thực hiện)

- Xác nhận hợp đồng (OK/Yêu cầu chỉnh sửa)

- Xem mẫu đề nghị tạm ứng 40%

**Màn hình Báo cáo Tiến độ Giữa kỳ:**

- Form nhập thông tin báo cáo giữa kỳ (tự động gắn mã đề tài)

- Nhận thông báo nhắc nhở từ hệ thống

**Màn hình Nộp Kết quả Nghiên cứu:**

- Upload báo cáo tổng kết, bài báo, sản phẩm

- Xem trạng thái nộp kết quả

**Màn hình Biên bản Nghiệm thu:**

- Xem biên bản nghiệm thu (được thư ký cấp quyền)

- Xem yêu cầu chỉnh sửa (nếu có) và deadline

- Upload kết quả chỉnh sửa theo yêu cầu hội đồng

**Màn hình Quyết toán:**

- Upload tài liệu quyết toán và minh chứng chi tiêu

- Xem trạng thái hồ sơ quyết toán (đủ/thiếu/yêu cầu bổ sung)

### 2.3. Giao diện Thành viên Hội đồng Nghiệm thu {#giao-diện-thành-viên-hội-đồng-nghiệm-thu}

Tài khoản được cấp tự động khi thành lập hội đồng, gửi qua **email cá nhân** của từng chuyên gia. Sau khi hội đồng giải tán, tài khoản chuyển trạng thái **\"Ngủ\" (soft delete)**. Mỗi vai trò sẽ thấy **giao diện, biểu mẫu và chức năng riêng** khi đăng nhập.

**Màn hình chung (tất cả thành viên -- sau đăng nhập):**

- Xem thông tin đề tài và Mã số đề tài được phân công

- Xem tài liệu nghiên cứu (phân quyền theo vai trò -- chỉ thấy tài liệu phù hợp)

- Tải biểu mẫu của vai trò mình (do Phòng NCKH upload sẵn)

- Xem trạng thái đánh giá của hội đồng

**Màn hình Chủ tịch Hội đồng** (vai trò cao nhất):

- Xem toàn bộ tài liệu đề tài và nhận xét của tất cả thành viên

- Tải biểu mẫu: Phiếu chấm điểm Chủ tịch, Mẫu kết luận Hội đồng, Biên bản nghiệm thu

- **Nhập phiếu chấm điểm (0--100)** → Điểm tự động gửi sang Thư ký Hội đồng tổng hợp

- Nhập **kết luận chính thức của Hội đồng** sau thảo luận:

  - Điểm mạnh của đề tài

  - Hạn chế cần chỉnh sửa

  - Các yêu cầu bổ sung

- Upload bản scan **biên bản nghiệm thu có chữ ký** (xác nhận kết quả, điểm số, kết luận)

- Xem bảng tổng hợp điểm toàn hội đồng (quyền xem toàn bộ)

**Màn hình Phản biện 1 & 2**:

- Xem tài liệu đề tài được phân công

- Tải biểu mẫu: Phiếu nhận xét phản biện, Phiếu chấm điểm Phản biện

- Soạn và lưu **bản nhận xét phản biện** (theo mẫu)

- Chỉnh sửa/bổ sung nhận xét sau buổi trình bày (nếu cần)

- **Nhập phiếu chấm điểm (0--100)** online → Điểm tự động gửi sang Thư ký Hội đồng tổng hợp

- Xem trạng thái nhập điểm của bản thân

**Màn hình Thư ký Hội đồng** (không có phần chấm điểm):

- Tải biểu mẫu: Mẫu tổng hợp điểm, Mẫu biên bản nghiệm thu, Mẫu yêu cầu chỉnh sửa

- **Bảng tổng hợp điểm thời gian thực**: điểm và nhận xét của từng thành viên (Chủ tịch, PB1, PB2)

- **Xác nhận điểm hợp lệ** cho từng thành viên / yêu cầu nhập lại nếu thiếu

- Hệ thống tính điểm trung bình tự động

- Ghi **note kết luận và yêu cầu chỉnh sửa** theo kết luận của Chủ tịch vào khung văn bản riêng

- Lập và lưu **biên bản nghiệm thu chính thức**

- Cấp quyền xem biên bản cho chủ nhiệm đề tài

- Bấm **\"Xác nhận hoàn thành chỉnh sửa\"** khi chủ nhiệm nộp bản sửa đạt yêu cầu (không cần họp lại)

**Màn hình Ủy viên** (không có phần chấm điểm):

- Tải biểu mẫu hành chính (Mẫu biên bản hành chính, Mẫu hồ sơ lưu trữ)

- Hỗ trợ thủ tục hành chính, sắp xếp lịch họp

- Upload và lưu hồ sơ giấy tờ hành chính liên quan phiên nghiệm thu

### 2.4. Giao diện Phòng Kế toán {#giao-diện-phòng-kế-toán}

- Xem danh sách hồ sơ quyết toán đã được trình

- Kiểm tra và xác nhận thanh lý hợp đồng

- Quản lý hồ sơ thanh lý

- Xuất Excel/PDF hồ sơ để lưu nội bộ phòng kế toán

### 2.5. Giao diện Kho Lưu trữ (Dùng chung) {#giao-diện-kho-lưu-trữ-dùng-chung}

- Tìm kiếm đề tài theo: mã, tên, chủ nhiệm, năm, lĩnh vực, từ khóa

- Xem chi tiết đề tài (metadata -- Khách ngoài chỉ thấy metadata)

- Xem Full-text online (Sinh viên / GV nội bộ)

- Tải sản phẩm nghiên cứu kèm Watermark (Giảng viên)

### 2.6. Báo cáo -- Thống kê {#báo-cáo-thống-kê}

- Biểu đồ tỷ lệ đề tài nghiệm thu đạt/không đạt/đã hủy

- Thống kê tiến độ nộp báo cáo giữa kỳ, trễ hạn

- Thống kê trạng thái hợp đồng (theo năm học, đơn vị, lĩnh vực)

- Bộ lọc: Năm học, Đơn vị (Khoa/Viện), Lĩnh vực nghiên cứu, Trạng thái

- Xuất báo cáo Excel/PDF theo yêu cầu (On-demand)

- Phân quyền: Admin Phòng NCKH xem/xuất toàn trường; Ban Giám Hiệu xem dashboard tổng hợp

### 2.7. Giao diện Superadmin (Quản trị Hệ thống) {#giao-diện-superadmin-quản-trị-hệ-thống}

- Tạo/khóa tài khoản Admin (Phòng NCKH) và Kế toán

- Cấu hình tham số hệ thống: thang điểm, định dạng file cho phép, dung lượng tối đa

- Xem Audit Log (System Log) -- lịch sử thao tác toàn hệ thống

- Quản lý danh mục: Năm học, Lĩnh vực nghiên cứu, Loại đề tài

## BẢNG TỔNG HỢP TRẠNG THÁI ĐỀ TÀI

| **Trạng thái**       | **Mô tả**                                                                   |
|----------------------|-----------------------------------------------------------------------------|
| CHO_KY_HOP_DONG      | Hợp đồng đã được tạo, chờ các bên ký và upload bản scan                     |
| DA_KY_KET            | Hợp đồng đã được xác nhận hợp lệ (Đồng ý / Đã ký kết)                       |
| DANG_THUC_HIEN       | Đề tài đang trong giai đoạn thực hiện (sau khi ký hợp đồng)                 |
| DA_BAO_CAO_GIUA_KY   | Chủ nhiệm đã nộp báo cáo tiến độ giữa kỳ                                    |
| TRE_HAN              | Đề tài quá deadline không xin gia hạn, chức năng upload bị khóa             |
| DA_NOP_KET_QUA       | Chủ nhiệm đã nộp kết quả nghiên cứu cuối kỳ                                 |
| DA_XAC_NHAN_SAN_PHAM | Phòng NCKH đã xác nhận sản phẩm nghiên cứu hợp lệ                           |
| DANG_NGHIEM_THU      | Hội đồng nghiệm thu đang hoạt động                                          |
| YEU_CAU_CHINH_SUA    | Hội đồng yêu cầu chỉnh sửa sau nghiệm thu                                   |
| CHINH_SUA_HOAN_THANH | Chủ nhiệm đã nộp bản sửa, thư ký xác nhận hoàn thành (không cần họp lại)    |
| DA_NGHIEM_THU        | Đề tài đã được nghiệm thu thành công                                        |
| KHONG_DAT            | Đề tài không đạt nghiệm thu (HĐ kết luận); có thể làm nghiệm thu lại 01 lần |
| CHO_QUYET_TOAN       | Phòng NCKH đã yêu cầu, chờ chủ nhiệm nộp hồ sơ quyết toán                   |
| DANG_QUYET_TOAN      | Đang trong giai đoạn quyết toán hợp đồng                                    |
| THIEU_HO_SO          | Hồ sơ quyết toán chưa đủ, yêu cầu bổ sung                                   |
| DA_THANH_LY          | Hợp đồng đã thanh lý, đề tài hoàn tất; tự động vào Kho lưu trữ              |
| DA_HUY               | Đề tài bị hủy giữa chừng (Soft Delete -- vẫn lưu để đối soát)               |

## BẢNG TỔNG HỢP VAI TRÒ HỆ THỐNG

| **Vai trò**                  | **Nguồn gốc tài khoản**        | **Phạm vi truy cập**                                                      | **Chấm điểm** | **Nhận tk/mk qua** |
|------------------------------|--------------------------------|---------------------------------------------------------------------------|---------------|--------------------|
| Superadmin                   | Tạo sẵn khi triển khai         | Cấu hình hệ thống, tạo/khóa tài khoản Admin, Audit Log                    | Không         | Quy trình IT       |
| Nhân viên Phòng NCKH (Admin) | Superadmin tạo                 | Quản lý biểu mẫu, hợp đồng, tạm ứng, hội đồng, quyết toán, danh mục       | Không         | ---                |
| Chủ nhiệm Đề tài             | Import Excel (Bulk Import)     | Hợp đồng, báo cáo, kết quả, đề xuất HĐ, biên bản, quyết toán đề tài mình  | Không         | ---                |
| Chủ tịch Hội đồng            | Tạo tự động khi lập hội đồng   | Toàn bộ tài liệu, kết luận HĐ, ký biên bản, xem tổng hợp điểm             | **Có**        | Email cá nhân      |
| Phản biện 1 & 2              | Tạo tự động khi lập hội đồng   | Tài liệu đề tài, nhận xét phản biện, chấm điểm online                     | **Có**        | Email cá nhân      |
| Thư ký Hội đồng              | Tạo tự động khi lập hội đồng   | Tổng hợp & xác nhận điểm, note kết luận, lập biên bản, xác nhận chỉnh sửa | Không         | Email cá nhân      |
| Ủy viên                      | Tạo tự động khi lập hội đồng   | Thủ tục hành chính, lưu hồ sơ                                             | Không         | Email cá nhân      |
| Phòng Kế toán                | Admin NCKH hoặc Superadmin tạo | Quyết toán, thanh lý hợp đồng, xuất Excel/PDF                             | Không         | ---                |

**Phân cấp quyền hội đồng:** Chủ tịch (cao nhất) \> Phản biện \> Thư ký Hội đồng \> Ủy viên. Mọi thao tác xóa dữ liệu đều là **soft delete**, không có xóa vĩnh viễn.
