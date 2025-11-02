import Link from "next/link"
import { ArrowLeft, Microscope, Flag as Flask, TestTube, Beaker } from "lucide-react"

export default function LaboratoriosCienciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="bg-teal-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-teal-50 to-white shadow-xl border-b border-teal-100">
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
            <h1 className="text-3xl font-bold text-teal-700">Laboratorios de Ciencias</h1>
            <p className="text-gray-600 font-medium mt-1">Investigación • Experimentación • Descubrimiento</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#laboratorios"
          className="inline-flex items-center space-x-2 text-teal-700 hover:text-teal-800 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Regresar a Laboratorios</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Laboratorios de Ciencias</h2>
            <p className="text-xl text-teal-50">
              Instalaciones de vanguardia para la investigación científica y el aprendizaje experimental
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200">
                <Microscope className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-teal-800 mb-3">Laboratorio de Biología</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipado con microscopios de última generación, incubadoras, centrífugas y equipos de biología
                  molecular para estudios celulares y genéticos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Microscopios ópticos y electrónicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Equipos de PCR y electroforesis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Cámaras de cultivo celular</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                <Flask className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold text-cyan-800 mb-3">Laboratorio de Química</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones completas para química orgánica, inorgánica y analítica con equipos de espectroscopía y
                  cromatografía.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Espectrofotómetros UV-Vis e IR</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Cromatógrafos de gases y líquidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Campanas extractoras y equipos de seguridad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <TestTube className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Laboratorio de Física</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipamiento especializado para experimentos de mecánica, óptica, electricidad y física moderna.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Equipos de medición de precisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Sistemas de adquisición de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Equipos de óptica y láser</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                <Beaker className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">Laboratorio de Ciencias Ambientales</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones para análisis de agua, suelo y aire, con equipos de monitoreo ambiental.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Equipos de análisis de calidad de agua</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Sistemas de monitoreo atmosférico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Equipos de análisis de suelos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-200 mb-8">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Horarios de Acceso</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-700 mb-2">Lunes a Viernes</h4>
                  <p className="text-gray-700">7:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700 mb-2">Sábados</h4>
                  <p className="text-gray-700">8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Normas de Seguridad</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">1.</span>
                  <span>Uso obligatorio de bata de laboratorio, gafas de seguridad y guantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">2.</span>
                  <span>Prohibido comer, beber o fumar dentro del laboratorio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">3.</span>
                  <span>Seguir protocolos de manejo de sustancias químicas y desechos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3">4.</span>
                  <span>Reportar inmediatamente cualquier accidente o derrame</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Reserva de Laboratorio</h3>
            <p className="text-gray-600 mb-6">
              Los estudiantes pueden reservar tiempo en los laboratorios para proyectos de investigación y prácticas
              adicionales.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all font-semibold">
              Reservar Laboratorio
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h3>
            <p className="text-gray-600 mb-4">
              Para más información sobre los laboratorios de ciencias, contacta al coordinador.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span> laboratorios.ciencias@uvg.edu.gt
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span> +502 7765-4321 ext. 201
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
