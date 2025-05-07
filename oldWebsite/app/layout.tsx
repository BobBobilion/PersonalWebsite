import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ scrollBehavior: "smooth" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
