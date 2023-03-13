import "./globals.css";
import TopNav, { LinkItem } from "./components/top-nav/top-nav";

export default function Layout({ children }) {
  const linkItems = [];
  linkItems.push(new LinkItem("Home", "/"));
  linkItems.push(new LinkItem("Blog", "/blog"));
  linkItems.push(new LinkItem("Portfolio", "/portfolio"));
  linkItems.push(new LinkItem("About Me", "/about"));
  return (
    <html lang="en">
      <body>
        <TopNav linkItems={linkItems}></TopNav>
        <div>{children}</div>
      </body>
    </html>
  );
}
