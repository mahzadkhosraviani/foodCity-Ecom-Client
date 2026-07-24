const GetFetch = async (url, headers = {}) => {
  const res = await fetch(`http://localhost:8000/api${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  });
  if (res.ok) {
    const data = await res.json();

    return data.data;
  }
};
const PostFetch = async (url, body, headers = {}) => {
  const res = await fetch(`http://localhost:8000/api${url}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
export { GetFetch, PostFetch };
