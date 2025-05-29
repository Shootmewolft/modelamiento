"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logs } from "lucide-react"
import { deleteCar } from "../services/car.service"
import { APP_ROUTES } from "@/consts"

interface Props {
  id: number
}

export function MenuOptions({ id }: Props) {
  const handleDelete = async () => {
    await deleteCar(id)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="bg-transparent">
          <Logs />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem onClick={handleDelete}>
          Eliminar
        </DropdownMenuCheckboxItem>
        {/* <DropdownMenuCheckboxItem
					onClick={() => {
						updateCar(id, {})
					}}
				>
					Editar
				</DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
