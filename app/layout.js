import "./globals.css";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Marko Kujacic - Portfolio",
  description: "Technical Lead & Full Stack Developer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.className} d-flex flex-column h-100`}>
        {children}
      </body>
    </html>
  );
}
