import Link from "next/link"
import { ArrowLeft, Wrench, Cog, Zap, Hammer } from "lucide-react"

export default function LaboratoriosIngenieriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="bg-orange-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-orange-50 to-white shadow-xl border-b border-orange-100">
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
            <h1 className="text-3xl font-bold text-orange-700">Laboratorios de Ingeniería</h1>
            <p className="text-gray-600 font-medium mt-1">Diseño • Construcción • Innovación</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#laboratorios"
          className="inline-flex items-center space-x-2 text-orange-700 hover:text-orange-800 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Regresar a Laboratorios</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Laboratorios de Ingeniería</h2>
            <p className="text-xl text-orange-50">
              Instalaciones especializadas para el diseño, prueba y desarrollo de proyectos de ingeniería
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
                <Cog className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-orange-800 mb-3">Lab de Mecánica</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipamiento para diseño mecánico, análisis de materiales y pruebas de resistencia.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Máquinas de ensayo universal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Equipos de medición de precisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Software CAD/CAM/CAE</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
                <Zap className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Lab de Electrónica</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones para diseño de circuitos, programación de microcontroladores y sistemas embebidos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Osciloscopios y analizadores de señales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Kits de Arduino, Raspberry Pi y FPGA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Estaciones de soldadura y prototipado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-3">Lab de Manufactura</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Taller equipado con maquinaria para fabricación y prototipado rápido.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Impresoras 3D y cortadoras láser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Tornos y fresadoras CNC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Herramientas de mecanizado manual</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <Hammer className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Lab de Materiales</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones para análisis y pruebas de propiedades de materiales.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Equipos de ensayo de tracción y compresión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Microscopios metalográficos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Durómetros y equipos de análisis térmico</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 mb-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Horarios de Acceso</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Lunes a Viernes</h4>
                  <p className="text-gray-700">7:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Sábados</h4>
                  <p className="text-gray-700">8:00 AM - 4:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Acceso fuera de horario disponible con autorización del instructor para proyectos especiales.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Normas de Seguridad</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">1.</span>
                  <span>Uso obligatorio de equipo de protección personal (EPP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">2.</span>
                  <span>Capacitación previa requerida para uso de maquinaria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">3.</span>
                  <span>Supervisión obligatoria para equipos de alto riesgo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">4.</span>
                  <span>Mantener área de trabajo limpia y ordenada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Capacitación en Equipos</h3>
            <p className="text-gray-600 mb-6">
              Ofrecemos capacitaciones para el uso seguro y eficiente de todos los equipos del laboratorio.
            </p>
            <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 px-6 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all font-semibold">
              Solicitar Capacitación
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h3>
            <p className="text-gray-600 mb-4">
              Para más información sobre los laboratorios de ingeniería, contacta al coordinador.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span> laboratorios.ingenieria@uvg.edu.gt
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span> +502 7765-4321 ext. 401
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
