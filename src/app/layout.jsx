import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';

export const metadata = {
  title: "ParkEase | Efficient Parking Managment Solutions",
  description:
    "Parkease is an all-in-one parking management solution that helps you manage your parking lot efficiently. It is multi-faceted with a web app and a mobile app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-funnel-sans font-normal antialiased overflow-x-hidden`}>
        <ClerkProvider
          appearance={{
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
              logoImageUrl: "/parkease-logo.png",
              logoLinkUrl: "/",
              termsPageUrl: "/terms",
              privacyPageUrl: "/privacy-policy",
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        >
          {children}
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
