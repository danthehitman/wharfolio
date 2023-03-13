import Link from "next/link";
import styles from "./styles.module.css";

export class LinkItem {
  constructor(text, address) {
    this.text = text;
    this.address = address;
  }
}

export default function TopNav({ linkItems }) {
  return (
    <div className={styles.topnav}>
      {linkItems.map((item) => (
        <div>
          <Link href={item.address}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
}
