export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`https://opentdb.com${endpoint}`, { ...options });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (error) {
      console.error(error);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}
