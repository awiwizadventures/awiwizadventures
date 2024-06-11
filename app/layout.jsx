import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

export const metadata = {
  title: "Awiwiz Adventures",
  description: "Taking you places",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        {children}
      <BootstrapClient />
      </body>
    </html>
  );
}
