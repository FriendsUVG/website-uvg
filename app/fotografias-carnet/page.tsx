import Link from "next/link"
import { Camera, CheckCircle2, AlertCircle, ImageIcon } from "lucide-react"

export default function FotografiasCarnetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="bg-pink-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-pink-50 to-white shadow-xl border-b border-pink-100">
        <div className="flex items-center justify-between px-8 py-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-28 h-28 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-pink-700">Fotografías Tamaño Carnet</h1>
            <p className="text-gray-600 font-medium mt-1">Requisito Fotográfico</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <Link
          href="/#admisiones"
          className="inline-flex items-center text-pink-700 hover:text-pink-800 font-semibold mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Admisiones
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
              <Camera className="w-8 h-8 text-pink-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Fotografías Tamaño Carnet</h2>
              <p className="text-gray-600">Especificaciones para tu identificación</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Las fotografías tamaño carnet son necesarias para tu expediente estudiantil y la elaboración de tu carnet
              universitario. Deben cumplir con especificaciones técnicas específicas para ser aceptadas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ImageIcon className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800">Especificaciones Técnicas</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Tamaño: 3.5 x 4.5 cm</span>
                  <p className="text-gray-600 text-sm">Medidas estándar de fotografía carnet</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Fondo blanco o celeste claro</span>
                  <p className="text-gray-600 text-sm">Sin texturas ni patrones</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Recientes (máximo 6 meses)</span>
                  <p className="text-gray-600 text-sm">Deben reflejar tu apariencia actual</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">A color</span>
                  <p className="text-gray-600 text-sm">No se aceptan fotografías en blanco y negro</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Cantidad: 4 fotografías</span>
                  <p className="text-gray-600 text-sm">Todas idénticas</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Requisitos de Presentación</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Rostro de frente, mirando a la cámara</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Expresión neutral, boca cerrada</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Sin lentes oscuros ni accesorios que cubran el rostro</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Cabello recogido si es largo (para ver el rostro completo)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Vestimenta formal o semiformal</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Buena iluminación, sin sombras en el rostro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6">Ejemplos Visuales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-6 h-6" />
                <h4 className="font-bold text-lg">Fotografía Correcta</h4>
              </div>
              <ul className="space-y-2 text-pink-100">
                <li>✓ Fondo uniforme y claro</li>
                <li>✓ Rostro centrado y visible</li>
                <li>✓ Buena iluminación</li>
                <li>✓ Expresión neutral</li>
                <li>✓ Sin accesorios que obstruyan</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6" />
                <h4 className="font-bold text-lg">Fotografía Incorrecta</h4>
              </div>
              <ul className="space-y-2 text-pink-100">
                <li>✗ Fondo con patrones o colores oscuros</li>
                <li>✗ Rostro de perfil o inclinado</li>
                <li>✗ Sombras o sobreexposición</li>
                <li>✗ Sonrisa amplia o gestos</li>
                <li>✗ Lentes oscuros o gorras</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">¿Dónde Tomarlas?</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">Estudios Fotográficos</h4>
                <p className="text-gray-600 text-sm">
                  Recomendado para garantizar calidad profesional y cumplimiento de especificaciones
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800 mb-1">Servicio en Campus</h4>
                <p className="text-gray-600 text-sm">
                  Disponible en la oficina de admisiones durante horario de atención (costo adicional)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-800">Importante</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                Las fotografías que no cumplan con las especificaciones serán rechazadas y deberás presentar nuevas, lo
                que puede retrasar tu proceso de admisión.
              </p>
              <p className="text-gray-700">
                Asegúrate de revisar todos los requisitos antes de mandar a imprimir tus fotografías.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/#admisiones"
            className="bg-pink-700 text-white px-8 py-4 rounded-2xl hover:bg-pink-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Volver a Admisiones
          </Link>
          <button className="bg-white text-pink-700 border-2 border-pink-700 px-8 py-4 rounded-2xl hover:bg-pink-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Agendar Sesión Fotográfica
          </button>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
