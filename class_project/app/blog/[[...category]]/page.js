export default function Page({ params }) {
  return (
    <h1>
      This is my blog. The category is:{" "}
      {params.category ? params.category : "no category was given"}
    </h1>
  );
}
