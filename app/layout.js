import Navbar from "./components/Element/Navbar";
import Footer from "./components/Element/Footer";

import "./globals.css";

export const metadata = {
  title: "Rapid NEWS",
  description: "Fastest News from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
