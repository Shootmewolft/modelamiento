import { CarList } from "./components/CarList"
import { getCars } from "./services/car.service"

export async function Cars() {
  const cars = await getCars()
  if (cars instanceof Error) {
    return <h2>Ocurrió un error para mostrar los vehículos. Inténtelo nuevamente.</h2>
  }
  return <CarList cars={cars} />
}
