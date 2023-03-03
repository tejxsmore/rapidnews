export const metadata = {
  title: "Shorts",
  description: "Get News in just 60 lines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
