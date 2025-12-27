import Header from "@/components/common/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="pt-25">{children}</main>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
