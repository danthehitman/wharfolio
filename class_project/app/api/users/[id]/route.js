export async function GET(request, {params}) {
    const data = [{ userId: params.id, route: "users"}];
    console.log(`Data fetched ${data}`);
    return Response.json(data);
  }