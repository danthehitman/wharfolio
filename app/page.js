import { getData } from "app/clients/testClient";
import Image from "next/image";
import topoBagImage from "public/topobag.jpg";

export default async function Page() {
  //   const data = await getData();
  return (
    <>
      <div>This is the /app page.</div>
      <Image
        src={topoBagImage}
        alt="Picture of bag"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
    </>
  );
}
