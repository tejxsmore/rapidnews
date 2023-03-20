import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
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
    <html lang="en" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}
