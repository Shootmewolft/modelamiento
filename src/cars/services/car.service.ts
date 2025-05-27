import { APP_ROUTES } from "@/consts"
import { carAdapter } from "../adapters/car.adapter"
import type {
	CarFormData,
	CarType,
	EndpointCar,
	EndpointCarPost,
} from "../models/car.model"
import { del, get, post, put } from "@/services/fetching.model"

export const getCars = async () => {
	const cars = await get<EndpointCar[]>(APP_ROUTES.GET_CARS)
	if (cars instanceof Error) {
		return cars
	}
	const formattedCars: CarType[] = cars.map((car) => carAdapter(car))
	return formattedCars
}

export const getCar = async (id: number) => {
	const car = await get<EndpointCar>(`${APP_ROUTES.GET_CARS}/${id}`)
	if (car instanceof Error) {
		return car
	}
	const formattedCar = carAdapter(car)
	return formattedCar
}

export const createCar = async (car: CarFormData) => {
	const carPost: EndpointCarPost = {
		nombre: car.name,
		cilindraje_cc: car.engineDisplacement,
		combustible: car.fuelType,
		traccion: car.traction,
		potencia_hp: car.horsepower,
		torque_nm: car.torque,
		peso_total_kg: car.weight,
		precio_cop: car.price,
		consumo_gl_km: car.fuelConsumption,
		imagen_vehiculo: "https://www.autolartechevrolet.co/content/dam/chevrolet/sa/co/es/master/home/crossovers-and-suvs/captiva-turbo-xl/colorizer/colorizer-captiva-XL-rojo.png?imwidth=2400",
	}
	const newCar = await post<EndpointCar, EndpointCarPost>(
		APP_ROUTES.CREATE_CAR,
		carPost
	)
	if (newCar instanceof Error) {
		return newCar
	}
	const formattedCar = carAdapter(newCar)
	return formattedCar
}

export const updateCar = async (id: number, newCar: EndpointCar) => {
	const carUpdated = await put<EndpointCar, EndpointCarPost>(`${APP_ROUTES.GET_CARS}/${id}`, newCar)
	if (carUpdated instanceof Error) {
		return carUpdated
	}
	const formattedCar = carAdapter(carUpdated)
	return formattedCar
}

export const deleteCar = async (id: number) => {
	const result = await del(`${APP_ROUTES.GET_CARS}/${id}`)
	console.log(`${APP_ROUTES.GET_CARS}/${id}`);
	if (result instanceof Error) {
		return result
	}
	return result
}
