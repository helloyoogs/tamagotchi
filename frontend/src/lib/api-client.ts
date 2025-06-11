export async function post<T>(path: string, data: T) {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`POST ${path} failed: ${response.statusText}`);
  }

  return response.json();
}
export async function get(path: string, params?: Record<string, string>) {
  const url = new URL(path, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`GET ${path} failed: ${response.statusText}`);
  }

  return response.json();
}
