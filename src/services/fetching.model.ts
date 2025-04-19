import type { MethodType } from "@/models/fetching"

export async function fetching<T, U = null>(
	url: string,
	body?: U,
	method?: MethodType,
): Promise<T | Error> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			method: method || "GET",
			headers: {
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : null,
		})
		if (!response.ok) throw new Error("Error fetching data")
		const json: T = await response.json()
		return json
	} catch (error) {
		return new Error(`Error ${error}`)
	}
}
