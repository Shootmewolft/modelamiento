import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
	return (
		<footer className="bg-black text-white px-6 py-10 text-sm">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Sección 1 */}
				<div>
					<ul className="space-y-2">
						<li>
							<Link href="#" className="hover:underline">
								Servicio al Cliente
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Contáctanos
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Envíos y Entregas
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Devoluciones e Intercambios
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Preguntas Frecuentes de Membresía Auténtica
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Seguro Route
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Ofertas Actuales
							</Link>
						</li>
					</ul>
				</div>

				{/* Sección 2 */}
				<div>
					<ul className="space-y-2">
						<li>
							<Link href="#" className="hover:underline">
								Compañía
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Acerca de Chevrolet
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Tarjetas de Regalo
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Guías de Tallas
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Fiel a Esto
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Guías Expertas
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Embajadores de Chevrolet
							</Link>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="text-2xl font-extrabold mb-2">
						10% DE DESCUENTO EN TU PRIMERA COMPRA
					</h3>
					<p className="mb-4 font-semibold">
						Regístrate para recibir las últimas noticias y ofertas exclusivas.
					</p>
					<form className="relative">
						<input
							type="email"
							placeholder="Correo Electrónico"
							className="w-full border-b border-white bg-transparent py-1 placeholder-gray-400 focus:outline-none focus:border-gray-300"
						/>
						<button
							type="button"
							className="absolute right-0 top-0 text-white bottom-0 text-xl"
						>
							→
						</button>
					</form>
					<p className="text-xs mt-2 text-gray-400">
						Al ingresar tu correo, aceptas los{" "}
						<Link href="#" className="underline">
							Términos y Condiciones
						</Link>{" "}
						y reconoces haber leído la{" "}
						<Link href="#" className="underline">
							Política de Privacidad
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Redes sociales y apps */}
			<div className="border-t border-gray-700 mt-10 pt-6 text-center space-y-4">
				<div className="flex flex-col justify-center items-center gap-4 text-lg font-bold uppercase">
					<span>Síguenos</span>
					<div className="inline-flex gap-4">
						<Facebook />
						<Twitter />
						<Instagram />
						<Youtube />
					</div>
				</div>

				<div className="text-xs text-gray-500 flex flex-wrap justify-center gap-x-3 gap-y-1 mt-4">
					<Link href="#" className="hover:underline">
						Política de Privacidad
					</Link>
					<Link href="#" className="hover:underline">
						Términos y Condiciones
					</Link>
					<Link href="#" className="hover:underline">
						Política de Alertas Móviles
					</Link>
					<Link href="#" className="hover:underline">
						Declaración de Accesibilidad
					</Link>
					<Link href="#" className="hover:underline">
						Barra de Herramientas de Accesibilidad
					</Link>
				</div>

				<p className="text-xs text-gray-500 mt-4">
					Chevrolet es una marca registrada de ABG-Chevrolet, LLC. ©
					{new Date().getFullYear()} ABG-Volcom, LLC. Todos los derechos
					reservados.
				</p>
			</div>
		</footer>
	)
}
