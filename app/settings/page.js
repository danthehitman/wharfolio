import { getData } from "app/clients/testClient";
import styles from "./styles.module.css";

export default async function SettingsPage({ posts }) {
  const dataTemp = getData();
  const [data] = await Promise.all([dataTemp]);
  console.log(data);
  return (
    <div className={styles.test}>
      <h1>This is the /settings page.</h1>
      <ul>
        {data["data"].map((record) => (
          <li key={record.title}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
}
