// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTE2NmY0YjQ2MDg0ZDFmMDY3MGI5OThkZWI5NmFhNyIsInN1YiI6IjYyNGM1YjI3Y2I3NWQxMDA1MDExYzY0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wB4e-6B-WHrWJ4OwGm_xsCHWYqktJB0KfeWZOxHbEA',
//   },
// };
// useEffect(() => {
//   fetch(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=${
//       process.env.NEXT_MOVIES_API_KEY
//     }&page=${1}`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }, []);
