import "./globals.css";
import { notoSansKr } from "@/assets/fonts";

export default function HTMLLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`antialiased bg-black ${notoSansKr.className}`}>
        {children}
      </body>
    </html>
  );
}
