import TopNav, { LinkItem } from "../../components/top-nav/top-nav";

export default function Layout({ children }) {
  const linkItems = [];
  linkItems.push(new LinkItem("Art", "/blog/art"));
  linkItems.push(new LinkItem("Video Games", "blog/video-games"));
  linkItems.push(new LinkItem("Misc", "/blog/misc"));
  return (
    <>
      <TopNav linkItems={linkItems}></TopNav>
      <div>{children}</div>
    </>
  );
}
