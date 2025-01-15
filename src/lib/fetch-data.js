export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ba9a03293msha497160b5fde369p1c9e4fjsn6e701571ad94",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};
