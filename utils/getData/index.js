export const getData = async () => {
  const res = await fetch(
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=798df523-6664-4b6c-ade0-18ea897ff19e"
  );
  return res.json();
};
