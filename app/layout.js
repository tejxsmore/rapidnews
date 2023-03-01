import "./globals.css";

export const metadata = {
  title: "Rapid NEWS",
  description: "Fastest News from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
