const GetFetch = async (url:string, headers:HeadersInit = {}) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
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
const PostFetch = async (url: string, body: unknown, headers: HeadersInit = {}) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
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
