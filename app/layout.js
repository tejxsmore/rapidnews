import Navbar from "./components/Element/Navbar";
import Footer from "./components/Element/Footer";

import "./globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({
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
    <html lang="en" className={font.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
