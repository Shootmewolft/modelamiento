import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui"
import {
	CarFront,
	Droplet,
	Fuel,
	Gauge,
	WeightIcon,
	Wrench,
	Zap,
} from "lucide-react"
import Image from "next/image"
import type { CarType } from "../models/car.model"
import { MenuOptions } from "./MenuOptions"

type Props = Omit<CarType, "chart">

export function Car({
	engineDisplacement,
	fuelConsumption,
	fuelType,
	horsepower,
	image,
	name,
	price,
	torque,
	traction,
	weight,
	id,
}: Props) {
	return (
		<Card className="w-full max-w-sm shadow-md overflow-hidden">
			<CardHeader className="p-0 relative">
				<MenuOptions id={id} />
				<Image
					src={image}
					alt={name}
					width={400}
					height={250}
					className="object-cover p-4 w-full h-48 aspect-auto"
				/>
				<Badge className="absolute top-2 right-2 bg-green-500 text-white">
					${price.toLocaleString()}
				</Badge>
			</CardHeader>
			<CardContent className="px-4 py-3">
				<CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
				<div className="inline-flex flex-wrap gap-2">
					<Badge className="bg-orange-100 text-orange-700">
						<Wrench className="mr-1" /> {engineDisplacement} cc
					</Badge>
					<Badge className="bg-green-100 text-green-700">
						<Gauge className="mr-1" /> {fuelConsumption} km/l
					</Badge>
					<Badge className="bg-blue-100 text-blue-700">
						<Droplet className="mr-1" /> {fuelType}
					</Badge>
					<Badge className="bg-red-100 text-red-700">
						<Zap className="mr-1" /> {horsepower} hp
					</Badge>
					<Badge className="bg-yellow-100 text-yellow-700">
						<Fuel className="mr-1" /> {torque} Nm
					</Badge>
					<Badge className="bg-purple-100 text-purple-700">
						<CarFront className="mr-1" /> {traction}
					</Badge>
					<Badge className="bg-teal-100 text-teal-700">
						<WeightIcon className="mr-1" /> {weight} kg
					</Badge>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Badge variant="secondary">ID: {id}</Badge>
			</CardFooter>
		</Card>
	)
}
