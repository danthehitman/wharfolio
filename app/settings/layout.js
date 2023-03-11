import Link from "next/link";

export default function SettingsLayout({ children }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <div>This is the /settings layout.{children}</div>
    </div>
  );
}
