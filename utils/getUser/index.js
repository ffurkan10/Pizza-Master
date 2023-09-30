export const getUser = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=5");
  return res.json();
};
