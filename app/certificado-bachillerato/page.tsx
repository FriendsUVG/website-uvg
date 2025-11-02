import Link from "next/link"
import { CheckCircle2, FileText, AlertCircle, Download } from "lucide-react"

export default function CertificadoBachilleratoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <h1 className="text-3xl font-bold text-blue-700">Certificado de Bachillerato</h1>
            <p className="text-gray-600 font-medium mt-1">Requisito de Admisión</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <Link
          href="/#admisiones"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold mb-8 group"
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
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Certificado de Bachillerato</h2>
              <p className="text-gray-600">Documento oficial requerido para tu admisión</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El certificado de bachillerato es un documento fundamental que acredita la finalización de tus estudios de
              educación media. Este documento debe ser presentado en original y copia para completar tu proceso de
              admisión.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Requisitos del Documento</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Original y copia del certificado</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Emitido por institución educativa reconocida</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Con sello y firma de autoridades</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Legible y en buen estado</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Traducción oficial si está en otro idioma</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-800">Información Importante</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Debe estar apostillado si es del extranjero</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">No se aceptan copias simples sin original</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Verificar que incluya todas las calificaciones</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Presentar dentro de los plazos establecidos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Proceso de Entrega</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">1</div>
              <h4 className="font-bold mb-2">Solicitar Certificado</h4>
              <p className="text-blue-100 text-sm">Solicita tu certificado original en tu institución educativa</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">2</div>
              <h4 className="font-bold mb-2">Verificar Documentos</h4>
              <p className="text-blue-100 text-sm">Asegúrate de que cumple con todos los requisitos</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">3</div>
              <h4 className="font-bold mb-2">Presentar en UVG</h4>
              <p className="text-blue-100 text-sm">Entrega en la oficina de admisiones con tu solicitud</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">¿Puedo presentar una copia certificada?</h4>
              <p className="text-gray-600">
                Sí, puedes presentar una copia certificada por notario junto con el original para cotejo.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">¿Qué hago si mi certificado está en trámite?</h4>
              <p className="text-gray-600">
                Puedes presentar una constancia de trámite temporal y entregar el certificado oficial cuando esté listo.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">¿Cuánto tiempo tarda la verificación?</h4>
              <p className="text-gray-600">
                El proceso de verificación toma aproximadamente 3-5 días hábiles una vez presentado el documento.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/#admisiones"
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl hover:bg-blue-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Volver a Admisiones
          </Link>
          <button className="bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Descargar Guía</span>
          </button>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
