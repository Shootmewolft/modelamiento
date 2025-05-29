import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui"
import { APP_ROUTES } from "@/consts"
import { getGraph } from "@/services"
import Image from "next/image"
import type { ReactNode } from "react"

export interface Props {
  children: ReactNode
}

export async function DialogGraph({ children }: Props) {
  const data = await getGraph<{
    imagen_grafica: string
    consumo_estimado: string
  }>(APP_ROUTES.GRAPH)

  if (data instanceof Error || !data.imagen_grafica) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Error al cargar la gráfica</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }
  const { imagen_grafica: imageGraph, consumo_estimado } = data
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>La gráfica de la predicción</DialogTitle>
        </DialogHeader>
        <Image
          src={imageGraph}
          width={800}
          height={800}
          alt="Gráfica de predicción"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
        <h2 className="text-3xl font-bold text-center">El consumo de gasolina del vehículo es {consumo_estimado}</h2>
      </DialogContent>
    </Dialog>
  )
}
