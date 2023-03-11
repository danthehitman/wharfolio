function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  // await sleep(2000);
  const data = [{ title: "title1" }, { title: "title2" }];
  console.log(`Data fetched ${data}`);
  return Response.json({ data });
}
