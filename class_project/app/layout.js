import "./globals.css";
import TopNav, { LinkItem } from "./components/top-nav/top-nav";
import { getUserSettings } from "./clients/api-client";

export default async function Layout({ children }) {
  const userSettings = await getUserSettings(1);
  console.log(userSettings);
  const linkItems = userSettings.links;
  return (
    <html lang="en">
      <body>
        <TopNav linkItems={linkItems}></TopNav>
        <div>{children}</div>
      </body>
    </html>
  );
}
