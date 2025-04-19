import { APP_ROUTES } from "@/consts"
import { fetching } from "@/services"
import { carAdapter } from "../adapters/car.adapter"
import type {
	CarFormData,
	CarType,
	EndpointCar,
	EndpointCarPost,
} from "../models/car.model"

export const getCars = async () => {
	const cars = await fetching<EndpointCar[]>(APP_ROUTES.CARS)
	if (cars instanceof Error) {
		return cars
	}
	const formattedCars: CarType[] = cars.map((car) => carAdapter(car))
	return formattedCars
}

export const getCar = async (id: number) => {
	const car = await fetching<EndpointCar>(`${APP_ROUTES.CARS}/${id}`)
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
		imagen_vehiculo: "https://i.imgure.com/4f2x5Jm.png",
	}
	const newCar = await fetching<EndpointCar, EndpointCarPost>(
		APP_ROUTES.CARS,
		carPost,
		"POST",
	)
	if (newCar instanceof Error) {
		return newCar
	}
	const formattedCar = carAdapter(newCar)
	return formattedCar
}

export const updateCar = async (_id: number) => {}

export const deleteCar = async (_id: number) => {}
