"use client"

import Link from "next/link"
import { Globe, Database, BookOpen, Video } from "lucide-react"

export default function RecursosDigitalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="bg-cyan-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-cyan-50 to-white shadow-xl border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-cyan-800 mb-2">Recursos Digitales</h1>
          <p className="text-cyan-600 text-lg">Acceso ilimitado a contenido académico digital de calidad</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-600">
            <Database className="w-12 h-12 text-cyan-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bases de Datos</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Acceso a las principales bases de datos académicas y científicas del mundo.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>EBSCO - Artículos académicos multidisciplinarios</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>ProQuest - Investigación y tesis doctorales</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>IEEE Xplore - Ingeniería y tecnología</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>JSTOR - Humanidades y ciencias sociales</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>ScienceDirect - Ciencias exactas y naturales</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bibliotecas Virtuales</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Colecciones digitales completas disponibles 24/7 desde cualquier lugar.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>E-Libro - Más de 100,000 libros electrónicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>SpringerLink - Libros y revistas científicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Wiley Online Library - Publicaciones especializadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Oxford Academic - Contenido de prestigio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cambridge Core - Investigación de vanguardia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <Globe className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Acceso Remoto</h2>
          <p className="text-cyan-100 mb-6 leading-relaxed">
            Todos nuestros recursos digitales están disponibles desde cualquier ubicación con tu cuenta institucional.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Cómo acceder:</h3>
            <ol className="space-y-3 text-cyan-100">
              <li className="flex items-start">
                <span className="font-bold mr-3">1.</span>
                <span>Ingresa al portal de biblioteca con tu carnet estudiantil</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">2.</span>
                <span>Selecciona el recurso digital que necesitas</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">3.</span>
                <span>Serás autenticado automáticamente para acceso completo</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">4.</span>
                <span>Descarga, lee o guarda el contenido según tus necesidades</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <Video className="w-12 h-12 text-cyan-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recursos Multimedia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-cyan-50 rounded-xl">
              <h3 className="font-bold text-cyan-800 mb-2">Videos Educativos</h3>
              <p className="text-gray-700 text-sm">
                Acceso a plataformas como LinkedIn Learning, Coursera y Khan Academy
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-800 mb-2">Podcasts Académicos</h3>
              <p className="text-gray-700 text-sm">Colección curada de podcasts científicos y educativos</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-bold text-indigo-800 mb-2">Webinars</h3>
              <p className="text-gray-700 text-sm">Grabaciones de conferencias y seminarios especializados</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-cyan-800 mb-2">¿Puedo acceder desde mi casa?</h3>
              <p className="text-gray-700">
                Sí, todos los recursos digitales están disponibles 24/7 desde cualquier ubicación con tu cuenta
                institucional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-800 mb-2">¿Hay límite de descargas?</h3>
              <p className="text-gray-700">
                No hay límite de descargas, pero debes respetar los derechos de autor y usar el material solo para fines
                académicos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-800 mb-2">¿Ofrecen capacitación para usar estos recursos?</h3>
              <p className="text-gray-700">
                Sí, ofrecemos talleres regulares y tutoriales en video sobre cómo aprovechar al máximo cada recurso
                digital.
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
