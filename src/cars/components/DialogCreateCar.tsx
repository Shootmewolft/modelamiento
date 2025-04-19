"use client"
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
} from "@/components/ui"
import { type ReactNode, useActionState, useEffect } from "react"
import { createCar } from "../actions/car"
import type { ActionResponse } from "../models/car.model"

export interface Props {
	children: ReactNode
}

export const initialState: ActionResponse = {
	success: false,
	message: "",
}

export function DialogCreateCar({ children }: Props) {
	const [state, actionState, isPending] = useActionState(
		createCar,
		initialState,
	)

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Crear un nuevo vehículo</DialogTitle>
					<DialogDescription>
						Ingresa los datos del vehículo aquí. Presiona el botón "Crear
						vehículo" cuando termines.
					</DialogDescription>
				</DialogHeader>
				<form
					action={actionState}
					autoComplete="on"
					className="flex flex-col gap-2"
				>
					<div className="grid gap-4 py-4">
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="name" className="w-1/3">
								Nombre
							</Label>
							<Input
								id="name"
								name="name"
								minLength={1}
								placeholder="Chevrolet Onix"
								className={`${state.errors?.name && "border-red-500"}`}
								defaultValue={state.inputs?.name}
							/>
							{state.errors?.name && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.name[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="engineDisplacement" className="w-1/3">
								Cilindrada
							</Label>
							<Input
								id="engineDisplacement"
								name="engineDisplacement"
								type="number"
								placeholder="1.4"
								className={`${state.errors?.engineDisplacement && "border-red-500"}`}
								defaultValue={state.inputs?.engineDisplacement}
							/>
							{state.errors?.engineDisplacement && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.engineDisplacement[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="fuelType" className="w-1/3">
								Tipo de Combustible
							</Label>
							<Input
								id="fuelType"
								name="fuelType"
								placeholder="Gasolina"
								className={`${state.errors?.fuelType && "border-red-500"}`}
								defaultValue={state.inputs?.fuelType}
							/>
							{state.errors?.fuelType && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.fuelType[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="traction" className="w-1/3">
								Tracción
							</Label>
							<Input
								id="traction"
								placeholder="4x4"
								name="traction"
								className={`${state.errors?.traction && "border-red-500"}`}
								defaultValue={state.inputs?.traction}
							/>
							{state.errors?.traction && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.traction[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="torque" className="w-1/3">
								Torque
							</Label>
							<Input
								id="torque"
								name="torque"
								placeholder="200 Nm"
								type="number"
								className={`${state.errors?.torque && "border-red-500"}`}
								defaultValue={state.inputs?.torque}
							/>
							{state.errors?.torque && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.torque[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="weight" className="w-1/3">
								Peso
							</Label>
							<Input
								id="weight"
								name="weight"
								placeholder="1200 kg"
								type="number"
								className={`${state.errors?.weight && "border-red-500"}`}
								defaultValue={state.inputs?.weight}
							/>
							{state.errors?.weight && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.weight[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="price" className="w-1/3">
								Precio
							</Label>
							<Input
								id="price"
								placeholder="COP 50.000.000"
								name="price"
								type="number"
								className={`${state.errors?.price && "border-red-500"}`}
								defaultValue={state.inputs?.price || ""}
							/>
							{state.errors?.price && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.price[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="fuelConsumption" className="w-1/3">
								Consumo de Combustible
							</Label>
							<Input
								id="fuelConsumption"
								name="fuelConsumption"
								type="number"
								placeholder="10 km/l"
								className={`${state.errors?.fuelConsumption && "border-red-500"}`}
								defaultValue={state.inputs?.fuelConsumption}
							/>
							{state.errors?.fuelConsumption && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.fuelConsumption[0]}
								</span>
							)}
						</div>
						<div className="flex justify-between items-center gap-4 relative pb-2">
							<Label htmlFor="horsepower" className="w-1/3">
								Caballos de Fuerza
							</Label>
							<Input
								id="horsepower"
								placeholder="100 hp"
								name="horsepower"
								type="number"
								className={`${state.errors?.horsepower && "border-red-500"}`}
								defaultValue={state.inputs?.horsepower}
							/>
							{state.errors?.horsepower && (
								<span className="absolute left-[29%] bottom-[-11px] text-xs font-bold text-red-500">
									{state.errors.horsepower[0]}
								</span>
							)}
						</div>
					</div>
					<DialogFooter>
						<Button
							type="submit"
							className="cursor-pointer"
							disabled={isPending}
						>
							Crear vehículo
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
