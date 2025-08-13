export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:3000/api";

async function request(
  path,
  { method = "GET", body, token, auth = "user" } = {}
) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok)
    throw Object.assign(new Error(data.error || "Request failed"), {
      status: res.status,
      data,
    });
  return data;
}

export const userApi = {
  register: (payload) =>
    request("/users/register", { method: "POST", body: payload }),
  login: (payload) =>
    request("/users/login", { method: "POST", body: payload }),
  profile: () => request("/users/profile"),
  logout: () => request("/users/logout", { method: "POST" }),
};

export const captainApi = {
  register: (payload) =>
    request("/captains/register", { method: "POST", body: payload }),
  login: (payload) =>
    request("/captains/login", { method: "POST", body: payload }),
  profile: () => request("/captains/profile"),
  logout: () => request("/captains/logout", { method: "POST" }),
};
