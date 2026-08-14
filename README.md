# Một Chương Mới — Birthday website for Tú Thư

Website chúc mừng sinh nhật dạng single-page, mobile-first, không cần backend.

## Chạy local

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in ra trong terminal (thường là `http://localhost:5173`).

## Đổi nội dung

Toàn bộ tên, ngày sinh, lời chúc và caption ảnh nằm trong `src/data/birthday.js`. Chỉ cần sửa file này để tái sử dụng cho người khác. Khi đổi tên, nhớ cập nhật title/meta trong `index.html`.

## Thay ảnh

Hiện project dùng 4 placeholder tại `public/images/`. Có hai cách:

1. Ghi đè bằng ảnh thật và sửa đường dẫn trong `src/data/birthday.js`, ví dụ `/images/thu-1.webp`.
2. Đặt ảnh trong `src/assets/images/`, import vào `birthday.js`, rồi gán vào trường `src`.

Khuyến nghị dùng WebP/AVIF, ảnh hero rộng khoảng 1600px và dưới 500 KB. Không đổi tỷ lệ khuôn mặt; giao diện tự crop bằng `object-fit: cover`.

## Nhạc nền

Website dùng file `src/assets/images/Happy Birthday.mp3`. Nhạc bắt đầu sau khi người xem bấm “Mở nhé” và có nút bật/tắt.

## Build

```bash
npm run lint
npm run build
npm run preview
```

## Deploy Vercel

Import repository vào Vercel. Framework Preset chọn **Vite**, Build Command `npm run build`, Output Directory `dist`. Không cần biến môi trường hoặc backend.
