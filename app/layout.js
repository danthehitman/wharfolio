import Link from "next/link";
import { Suspense } from "react";
import Loading from "app/loading";
import SettingsPage from "./settings/page";
import "./globals.css";
import { inter } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>This is the /app layout.</div>
        <Link href="/settings">Settings</Link>
        {children}
        <Suspense fallback={<Loading />}>
          <SettingsPage></SettingsPage>
        </Suspense>
      </body>
    </html>
  );
}
