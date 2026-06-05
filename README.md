# Portfolio Học Phần - Hướng Dẫn Sử Dụng

## 📋 Mô Tả Dự Án

Website Portfolio Học Phần là một website chuyên nghiệp để tổng kết và trình bày nội dung của một học phần (môn học). Website được xây dựng bằng HTML5, CSS3 và JavaScript vanilla, không yêu cầu bất kỳ thư viện hay framework nào.

## 📁 Cấu Trúc Thư Mục

```
project/
├── index.html          # Trang chính
├── css/
│   └── style.css       # Stylesheet chính
├── js/
│   └── script.js       # JavaScript cho tương tác
├── ima/                # Thư mục chứa ảnh
│   └── avatar.jpg      # Ảnh đại diện sinh viên (cần cập nhật)
├── tailieu/            # Thư mục chứa tài liệu
│   ├── 1.docx          # Tài liệu tuần 1
│   ├── 2.docx          # Tài liệu tuần 2
│   ├── 3.pptx          # Tài liệu tuần 3
│   ├── 4.docx          # Tài liệu tuần 4
│   ├── 5.pptx          # Tài liệu tuần 5
│   ├── 6.docx          # Tài liệu tuần 6
│   └── 7.pptx          # Tài liệu tuần 7
└── README.md           # File hướng dẫn này
```

## 🚀 Cách Sử Dụng

### 1. Chuẩn Bị Ban Đầu

#### Thêm Ảnh Đại Diện
- Đặt ảnh đại diện của sinh viên vào thư mục `ima/`
- Đặt tên file là `avatar.jpg` hoặc cập nhật tên file trong `index.html`
- Ảnh tốt nhất là hình vuông, kích thước tối thiểu 300x300px

#### Thêm Tài Liệu
- Đặt các file tài liệu (DOCX, PPTX, PDF) vào thư mục `tailieu/`
- Đặt tên file theo mẫu: `1.docx`, `2.pptx`, `3.pdf`, v.v.
- Website sẽ tự động tìm và link đến các file này

### 2. Cập Nhật Thông Tin Cá Nhân

Mở file `index.html` và tìm phần Home Page, cập nhật thông tin sau:

```html
<h1>Tên Sinh Viên</h1>
<p class="student-id">Mã sinh viên: [MSSV]</p>
<p class="email">Email: student@example.com</p>
<p class="class-info">Lớp: [Tên lớp]</p>
```

### 3. Cập Nhật Nội Dung Các Tuần

Mỗi tuần (Week 1-7) có các phần cần cập nhật:

- **Chủ đề tuần**: Cập nhật tiêu đề `<h1>Tuần X: Chủ Đề`
- **Nội dung tóm tắt**: Thay thế nội dung placeholder
- **Kiến thức đã học**: Cập nhật danh sách các kiến thức
- **Tài liệu**: Các link tài liệu sẽ tự động hoạt động nếu file tồn tại

### 4. Cập Nhật Phần Tổng Kết

Phần Tổng Kết là phần quan trọng nhất. Cập nhật các nội dung sau:

- **Kiến Thức Đã Học**: Liệt kê toàn bộ kiến thức
- **Kỹ Năng Đạt Được**: Mô tả các kỹ năng phát triển
- **Những Khó Khăn Gặp Phải**: Chi tiết các thách thức
- **Cách Khắc Phục**: Giải pháp đã áp dụng
- **Bài Học Kinh Nghiệm**: Những bài học có giá trị
- **Định Hướng Phát Triển Tương Lai**: Kế hoạch tiếp theo

## ✨ Các Tính Năng

### 📱 Responsive Design
- Website tự động thích ứng với mọi kích thước màn hình
- Hỗ trợ điện thoại, tablet, máy tính bảng

### 🎨 Giao Diện Hiện Đại
- Gradient màu chuyên nghiệp (xanh tím)
- Animation mượt mà khi chuyển trang
- Hover effects trên các phần tử tương tác

### 🔀 Navigation
- Menu điều hướng sticky (dính ở đầu trang)
- Dropdown menu cho danh sách tuần học
- Hamburger menu cho thiết bị di động

### 📄 Quản Lý Tài Liệu
- Tự động link đến các file tài liệu
- Hỗ trợ DOCX, PPTX, PDF
- Mở file trong tab mới

### ⌨️ Keyboard Shortcuts
- `Alt + H`: Về trang chủ (Home)
- `Alt + A`: Đến trang giới thiệu (About)
- `Alt + S`: Đến phần tổng kết (Summary)

### ⬆️ Back to Top Button
- Nút quay lên đầu trang xuất hiện khi cuộn xuống
- Click để cuộn mượt đến đầu trang

## 🛠️ Tùy Chỉnh

### Thay Đổi Màu Sắc

Mở `css/style.css` và thay đổi các mã màu:

```css
/* Màu chính (xanh tím) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Thay đổi thành màu khác, ví dụ xanh lá */
background: linear-gradient(135deg, #667eea 0%, #2ecc71 100%);
```

### Thay Đổi Font Chữ

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Thay đổi thành font khác */
body {
    font-family: 'Arial', sans-serif;
}
```

### Thay Đổi Kích Thước Text

Tìm và chỉnh `font-size` trong `style.css`

## 📝 Ghi Chú Quan Trọng

1. **Đường dẫn Tương Đối**: Tất cả đường dẫn đến ảnh và tài liệu sử dụng đường dẫn tương đối (`ima/`, `tailieu/`). Đảm bảo cấu trúc thư mục được giữ nguyên.

2. **Ảnh Placeholder**: Nếu không có ảnh `avatar.jpg`, website sẽ hiển thị hình placeholder từ internet. Hãy thêm ảnh thực để website trông chuyên nghiệp.

3. **Tệp Tài Liệu**: Nếu file tài liệu không tồn tại, link sẽ vẫn hoạt động nhưng sẽ báo lỗi 404. Hãy đảm bảo tất cả file được đặt đúng vị trí.

4. **Browser Compatibility**: Website hoạt động tốt trên tất cả trình duyệt hiện đại (Chrome, Firefox, Safari, Edge).

## 📚 Cấu Trúc Các Trang

### Trang Chủ (Home)
- Ảnh đại diện
- Thông tin sinh viên
- Giới thiệu bản thân
- Giới thiệu môn học

### Trang Giới Thiệu (About)
- Thông tin cá nhân chi tiết
- Mục tiêu học tập
- Kỹ năng và năng lực

### Các Trang Tuần (Week 1-7)
- Chủ đề tuần
- Nội dung tóm tắt
- Kiến thức đã học
- Link tải tài liệu

### Trang Tổng Kết (Summary)
- Kiến thức đã học
- Kỹ năng đạt được
- Khó khăn và cách khắc phục
- Bài học kinh nghiệm
- Định hướng tương lai

## 🎯 Bước Tiếp Theo

1. Đặt ảnh đại diện vào `ima/`
2. Đặt tài liệu tuần học vào `tailieu/`
3. Cập nhật thông tin cá nhân trong `index.html`
4. Cập nhật nội dung từng tuần dựa trên tài liệu học
5. Viết nội dung tổng kết chi tiết
6. Mở `index.html` trong trình duyệt để xem kết quả

## 📧 Hỗ Trợ

Nếu gặp bất kỳ vấn đề nào:
- Kiểm tra console trình duyệt (F12) xem có lỗi nào không
- Đảm bảo cấu trúc thư mục đúng
- Kiểm tra đường dẫn tới ảnh và file tài liệu

---

**Chúc bạn hoàn thành tốt dự án!** 🎉
