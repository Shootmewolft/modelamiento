import { z } from "zod"

export const carSchema = z.object({
	name: z.string().min(1, "El nombre es requerido"),
	engineDisplacement: z
		.number()
		.positive()
		.min(1100, "El cilindraje es requerido")
		.max(10000, "El cilindraje no puede ser mayor a 10.000"),
	fuelType: z.string().min(1, "El combustible es requerido"),
	traction: z.string().min(1, "La tracción es requerida"),
	horsepower: z
		.number()
		.int()
		.positive()
		.min(1, "La potencia es requerida")
		.max(10000, "La potencia no puede ser mayor a 10.000"),
	torque: z.number().int().positive().min(1, "El torque es requerido"),
	weight: z
		.number()
		.int()
		.positive()
		.min(1, "El peso es requerido")
		.max(10000, "El peso no puede ser mayor a 10.000"),
	price: z.number().positive().min(1, "El precio es requerido")
})
