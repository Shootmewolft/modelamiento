"use server"

import { APP_ROUTES } from "@/consts"
import { revalidatePath } from "next/cache"
import type { ActionResponse, CarFormData } from "../models/car.model"
import { carSchema } from "../schemas/carSchema"
import { createCar as createCarService } from "../services/car.service"

export async function createCar(
	_: ActionResponse | null,
	formData: FormData,
): Promise<ActionResponse> {
	try {
		const rawData: CarFormData = {
			name: formData.get("name") as string,
			engineDisplacement: Number(formData.get("engineDisplacement")),
			fuelType: formData.get("fuelType") as string,
			traction: formData.get("traction") as string,
			torque: Number(formData.get("torque")),
			weight: Number(formData.get("weight")),
			price: Number(formData.get("price")),
			fuelConsumption: Number(formData.get("fuelConsumption")),
			horsepower: Number(formData.get("horsepower")),
		}

		const validatedData = carSchema.safeParse(rawData)
		if (!validatedData.success) {
			return {
				success: false,
				message: "Por favor corrige los errores en el formulario",
				errors: validatedData.error.flatten().fieldErrors,
				inputs: rawData,
			}
		}
		// Simulate network delay
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// await createCarService(validatedData.data)
		revalidatePath(APP_ROUTES.HOME)
		return {
			success: true,
			message: "¡El vehículo fue creado exitosamente!",
		}
	} catch (error) {
		return {
			success: false,
			message: `Ha ocurrido un error inesperado: ${(error as Error).message}`,
		}
	}
}
