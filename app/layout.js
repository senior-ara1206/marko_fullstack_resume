import "./globals.css";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Marko Kujacic | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in full-stack products, APIs, NetSuite integrations, cloud infrastructure, DevOps, and AI engineering.",
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
