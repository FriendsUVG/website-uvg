import Link from "next/link"
import { ArrowLeft, Search, BookOpen, Lightbulb, Users } from "lucide-react"

export default function LaboratoriosInvestigacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="bg-purple-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-100">
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
            <h1 className="text-3xl font-bold text-purple-700">Laboratorios de Investigación</h1>
            <p className="text-gray-600 font-medium mt-1">Descubrimiento • Innovación • Conocimiento</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#laboratorios"
          className="inline-flex items-center space-x-2 text-purple-700 hover:text-purple-800 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Regresar a Laboratorios</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Laboratorios de Investigación</h2>
            <p className="text-xl text-purple-50">
              Espacios dedicados al desarrollo de proyectos de investigación científica y tecnológica
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200">
                <Search className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Investigación Aplicada</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Laboratorios equipados para proyectos de investigación con aplicación directa en la industria y
                  sociedad.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Equipos de análisis avanzado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Instrumentación especializada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Software de simulación y modelado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200">
                <Lightbulb className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">Innovación y Desarrollo</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Espacios para el desarrollo de prototipos y pruebas de concepto de nuevas tecnologías.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Área de prototipado rápido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Equipos de fabricación digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Herramientas de diseño y simulación</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Investigación Básica</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instalaciones para investigación fundamental en ciencias naturales y exactas.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Equipos de medición de alta precisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Sistemas de adquisición de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recursos bibliográficos especializados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-200">
                <Users className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold text-pink-800 mb-3">Investigación Colaborativa</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Espacios diseñados para proyectos interdisciplinarios y colaboración entre equipos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Salas de reunión equipadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Sistemas de videoconferencia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Plataformas de colaboración digital</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Líneas de Investigación Activas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Ciencias Naturales</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Biodiversidad y conservación</li>
                    <li>• Cambio climático</li>
                    <li>• Biotecnología</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Tecnología</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Inteligencia artificial</li>
                    <li>• Internet de las cosas</li>
                    <li>• Energías renovables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Ciencias Sociales</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Desarrollo sostenible</li>
                    <li>• Innovación social</li>
                    <li>• Educación y tecnología</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Salud</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Salud pública</li>
                    <li>• Biomedicina</li>
                    <li>• Nutrición y bienestar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 mb-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Apoyo a Investigadores</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span>Asesoría metodológica y estadística</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span>Apoyo en redacción de propuestas y artículos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span>Gestión de fondos de investigación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span>Capacitación en uso de equipos especializados</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Horarios de Acceso</h3>
              <p className="text-gray-700 mb-4">
                El acceso a los laboratorios de investigación es flexible y se adapta a las necesidades de cada
                proyecto. Los investigadores pueden solicitar acceso extendido según los requerimientos de su trabajo.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Horario Regular</h4>
                  <p className="text-gray-700">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                  <p className="text-gray-700">Sábados: 8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Acceso Especial</h4>
                  <p className="text-gray-700">
                    Disponible 24/7 con autorización previa para proyectos que lo requieran
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Solicitar Espacio de Investigación</h3>
            <p className="text-gray-600 mb-6">
              Si tienes un proyecto de investigación, puedes solicitar acceso a nuestros laboratorios especializados.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all font-semibold">
              Solicitar Acceso
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h3>
            <p className="text-gray-600 mb-4">
              Para más información sobre los laboratorios de investigación, contacta al coordinador.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span> investigacion@uvg.edu.gt
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span> +502 7765-4321 ext. 501
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
