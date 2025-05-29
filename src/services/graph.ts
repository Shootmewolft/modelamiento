export async function getGraph<T>(url: string): Promise<T | Error> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "GET"
    });
    if (!response.ok) throw new Error("Error fetching on graph");
    const json: T = await response.json();
    return json;
  } catch (error) {
    return new Error(`Error ${(error as Error).message}`);
  }
}