import "./globals.css";
import { Gloock } from "next/font/google";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rapid NEWS",
  description: "Fastest News from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gloock.className}>
      <body>{children}</body>
    </html>
  );
}
