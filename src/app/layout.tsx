import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { TopNav } from "./_components/topnav";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "T3 Gallery",
  description: "Generated by prolly me",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`{styles.geistFont} flex flex-col gap-4`}>
        <TopNav/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}