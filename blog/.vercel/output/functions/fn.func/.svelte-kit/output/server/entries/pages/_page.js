async function load({ fetch, parent }) {
  await parent();
  const res = await fetch("https://syntax.fm/api/shows/latest");
  const data = await res.json();
  return {
    latest_episode: data
  };
}
export {
  load
};
