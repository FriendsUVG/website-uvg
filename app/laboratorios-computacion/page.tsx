import Link from "next/link"
import { ArrowLeft, Monitor, Code, Database, Cpu } from "lucide-react"

export default function LaboratoriosComputacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="bg-blue-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl border-b border-blue-100">
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
            <h1 className="text-3xl font-bold text-blue-700">Laboratorios de Computación</h1>
            <p className="text-gray-600 font-medium mt-1">Tecnología • Innovación • Desarrollo</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#laboratorios"
          className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Regresar a Laboratorios</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Laboratorios de Computación</h2>
            <p className="text-xl text-blue-50">
              Infraestructura tecnológica de última generación para el desarrollo de software y proyectos digitales
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <Monitor className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Lab de Desarrollo de Software</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  40 estaciones de trabajo con procesadores de alto rendimiento, monitores duales y software de
                  desarrollo profesional.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>IDEs: Visual Studio, IntelliJ, Eclipse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Herramientas de control de versiones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Entornos de desarrollo web y móvil</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                <Code className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">Lab de Programación</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Espacio dedicado para cursos de programación con 35 computadoras y proyectores interactivos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Compiladores para múltiples lenguajes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Plataformas de aprendizaje interactivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Sistemas de evaluación automática</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                <Database className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold text-cyan-800 mb-3">Lab de Bases de Datos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones especializadas para el diseño, implementación y administración de bases de datos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>SQL Server, MySQL, PostgreSQL, MongoDB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Herramientas de modelado de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Sistemas de Big Data y Analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Lab de Redes y Sistemas</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipamiento para configuración de redes, servidores y sistemas operativos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Routers, switches y equipos Cisco</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Servidores Linux y Windows Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Herramientas de virtualización</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Horarios de Acceso</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Lunes a Viernes</h4>
                  <p className="text-gray-700">6:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Sábados</h4>
                  <p className="text-gray-700">7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Acceso 24/7 disponible para estudiantes con proyectos especiales mediante autorización previa.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Software Disponible</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Desarrollo</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Visual Studio Code</li>
                    <li>• IntelliJ IDEA</li>
                    <li>• Android Studio</li>
                    <li>• Xcode</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Diseño</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Adobe Creative Suite</li>
                    <li>• Figma</li>
                    <li>• Sketch</li>
                    <li>• Blender</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Análisis</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• MATLAB</li>
                    <li>• R Studio</li>
                    <li>• Tableau</li>
                    <li>• Power BI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Soporte Técnico</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible para ayudarte con cualquier problema técnico o consulta sobre el
              uso de los laboratorios.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold">
              Solicitar Soporte
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h3>
            <p className="text-gray-600 mb-4">
              Para más información sobre los laboratorios de computación, contacta al coordinador.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span> laboratorios.computacion@uvg.edu.gt
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span> +502 7765-4321 ext. 301
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
