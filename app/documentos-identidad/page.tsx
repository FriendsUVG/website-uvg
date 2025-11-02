import Link from "next/link"
import { Award as IdCard, CheckCircle2, AlertCircle, FileText } from "lucide-react"

export default function DocumentosIdentidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
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
            <h1 className="text-3xl font-bold text-teal-700">Documentos de Identidad</h1>
            <p className="text-gray-600 font-medium mt-1">Identificación Oficial</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <Link
          href="/#admisiones"
          className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mb-8 group"
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
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
              <IdCard className="w-8 h-8 text-teal-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Documentos de Identidad</h2>
              <p className="text-gray-600">Identificación oficial requerida</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Los documentos de identidad son esenciales para verificar tu información personal y completar tu proceso
              de admisión. Debes presentar documentos oficiales vigentes que acrediten tu identidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-800">Documentos Aceptados</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">DPI (Documento Personal de Identificación)</span>
                  <p className="text-gray-600 text-sm">Para guatemaltecos mayores de 18 años</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Pasaporte vigente</span>
                  <p className="text-gray-600 text-sm">Para estudiantes extranjeros</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Cédula de vecindad</span>
                  <p className="text-gray-600 text-sm">Solo si no tienes DPI</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-800 font-semibold">Partida de nacimiento</span>
                  <p className="text-gray-600 text-sm">Para menores de 18 años</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Requisitos del Documento</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Original y 2 copias legibles</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Vigente y en buen estado</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Fotografía visible y clara</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Datos personales legibles</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Sin tachaduras ni alteraciones</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6">Estudiantes Extranjeros</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3 text-lg">Documentos Adicionales</h4>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Pasaporte vigente con visa de estudiante</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Certificado de antecedentes penales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Constancia de solvencia económica</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3 text-lg">Proceso de Validación</h4>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Apostillado de documentos del país de origen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Traducción oficial al español si aplica</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Validación por el Ministerio de Relaciones Exteriores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-800">Información Importante</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">Verificación de Autenticidad</h4>
              <p className="text-gray-600">
                Todos los documentos serán verificados con las autoridades correspondientes. Cualquier falsificación
                resultará en la cancelación inmediata del proceso de admisión.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">Actualización de Datos</h4>
              <p className="text-gray-600">
                Si tus datos personales cambian durante el proceso de admisión, debes notificarlo inmediatamente y
                presentar los documentos actualizados.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/#admisiones"
            className="bg-teal-700 text-white px-8 py-4 rounded-2xl hover:bg-teal-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Volver a Admisiones
          </Link>
          <button className="bg-white text-teal-700 border-2 border-teal-700 px-8 py-4 rounded-2xl hover:bg-teal-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Verificar Documentos
          </button>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
