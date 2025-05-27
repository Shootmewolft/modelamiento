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
  const data = await getGraph<{ imagen_grafica: string }>(APP_ROUTES.GRAPH)
  console.log(data);
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
  const { imagen_grafica: imageGraph } = data
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>La gráfica de la predicción</DialogTitle>
        </DialogHeader>
        <Image src={imageGraph} alt="Gráfica de predicción" />
      </DialogContent>
    </Dialog>
  )
}
