import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';

// Improved metadata for better SEO
export const metadata = {
  title: "ParkEase | Streamline Parking Management Solutions",
  description:
    "Discover ParkEase, the ultimate parking management system offering efficient, reliable, and user-friendly solutions for web and mobile platforms. Manage parking lots seamlessly with cutting-edge technology.",
  keywords: "parking management, ParkEase, efficient parking solutions, parking lot system, parking app, parking software",
  author: "A4Awesome Team",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport and basic meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="theme-color" content={metadata.themeColor} />
        <link rel="canonical" href="https://parkease-web-app.vercel.app" />
        
        {/* Social Sharing / Open Graph meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://parkease-web-app.vercel.app" />
        <meta property="og:image" content="/parkease-logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/parkease-social.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
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
