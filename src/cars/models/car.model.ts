export interface CarType {
	id: number
	name: string
	engineDisplacement: number
	fuelType: string
	traction: string
	horsepower: number
	torque: number
	weight: number
	price: number
	fuelConsumption: number
	image: string
	chart: string
}

export interface EndpointCar {
	id: number
	nombre: string
	cilindraje_cc: number
	combustible: string
	traccion: string
	potencia_hp: number
	torque_nm: number
	peso_total_kg: number
	precio_cop: number
	consumo_gl_km: number
	imagen_vehiculo: string
	imagen_grafica: string
}

export interface ActionResponse {
	success: boolean
	message: string
	errors?: {
		[K in keyof CarFormData]?: string[]
	}
	inputs?: CarFormData
}

export type EndpointCarPost = Omit<EndpointCar, "id" | "imagen_grafica">
export type CarFormData = Omit<CarType, "id" | "chart" | "image">
