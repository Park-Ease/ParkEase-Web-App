import "./globals.css";

export const metadata = {
  title: "ParkEase | Efficient Parking Managment Solutions",
  description:
    "Parkease is an all-in-one parking management solution that helps you manage your parking lot efficiently. It is multi-faceted with a web app and a mobile app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-funnel-sans font-normal antialiased`}>{children}</body>
    </html>
  );
}
