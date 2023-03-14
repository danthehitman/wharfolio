export async function GET(request, { params }) {
  const data = {
    userId: params.id,
    links: [
      { text: "Home", address: "/" },
      { text: "Blog", address: "/blog" },
    ],
  };
  return Response.json(data);
}
