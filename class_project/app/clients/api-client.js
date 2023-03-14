const getUserSettings = async (userId) => {
  const res = await fetch(
    `http://localhost:3000/api/users/${userId}/settings/`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export { getUserSettings };
