export async function get<T>(url: string): Promise<T | Error> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) throw new Error("Error fetching data");
		const json: T = await response.json();
		return json;
	} catch (error) {
		return new Error(`Error ${error}`);
	}
}

export async function post<T, U = unknown>(url: string, body: U): Promise<T | Error> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		if (!response.ok) throw new Error("Error fetching data");
		const json: T = await response.json();
		return json;
	} catch (error) {
		return new Error(`Error ${error}`);
	}
}

export async function put<T, U = unknown>(url: string, body: U): Promise<T | Error> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		if (!response.ok) throw new Error("Error fetching data");
		const json: T = await response.json();
		return json;
	} catch (error) {
		return new Error(`Error ${error}`);
	}
}

export async function del<T>(url: string): Promise<T | Error> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			method: "DELETE",
			headers: {
				"Access-Control-Allow-Origin": "*",
			}
		});
		if (!response.ok) throw new Error("Error fetching data");
		const json: T = await response.json();
		return json;
	} catch (error) {
		return new Error(`Error ${error}`);
	}
}
