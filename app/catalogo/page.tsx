"use client"

import Link from "next/link"
import { Book, Search, FileText, Download } from "lucide-react"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="bg-indigo-700 text-white py-2 px-4 md:py-3 md:px-8 shadow-lg">
        <p className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-indigo-50 to-white shadow-xl border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold mb-3 md:mb-4 transition-colors text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-800 mb-2">Catálogo Bibliotecario</h1>
          <p className="text-indigo-600 text-base md:text-lg">Acceso completo a nuestra colección bibliográfica</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border-l-4 border-indigo-600">
            <Book className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Colección Física</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Más de 50,000 títulos disponibles en nuestras instalaciones, incluyendo libros, revistas, tesis y
              documentos especializados.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Libros de texto y referencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Revistas académicas y científicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Tesis y trabajos de investigación</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Material audiovisual</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border-l-4 border-purple-600">
            <FileText className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Colección Digital</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Acceso 24/7 a recursos digitales, bases de datos especializadas y bibliotecas virtuales de prestigio
              internacional.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>E-books y publicaciones digitales</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Bases de datos académicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Revistas electrónicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Repositorios institucionales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <Search className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Búsqueda en el Catálogo</h2>
          <p className="text-indigo-100 mb-6 leading-relaxed">
            Utiliza nuestro sistema de búsqueda avanzada para encontrar exactamente lo que necesitas.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Opciones de búsqueda:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Por criterio:</h4>
                <ul className="space-y-1 text-indigo-100">
                  <li>• Título</li>
                  <li>• Autor</li>
                  <li>• ISBN/ISSN</li>
                  <li>• Tema o materia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Filtros disponibles:</h4>
                <ul className="space-y-1 text-indigo-100">
                  <li>• Tipo de material</li>
                  <li>• Año de publicación</li>
                  <li>• Idioma</li>
                  <li>• Disponibilidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Download className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Servicios del Catálogo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-bold text-indigo-800 mb-2">Reservas</h3>
              <p className="text-gray-700 text-sm">Reserva materiales en línea y recógelos en biblioteca</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="font-bold text-purple-800 mb-2">Renovaciones</h3>
              <p className="text-gray-700 text-sm">Renueva tus préstamos directamente desde el catálogo</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-pink-800 mb-2">Historial</h3>
              <p className="text-gray-700 text-sm">Consulta tu historial de préstamos y favoritos</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-indigo-800 mb-2">¿Cómo accedo al catálogo en línea?</h3>
              <p className="text-gray-700">
                Ingresa con tu carnet estudiantil y contraseña en el portal de biblioteca desde cualquier dispositivo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-800 mb-2">¿Puedo solicitar material que no está disponible?</h3>
              <p className="text-gray-700">
                Sí, puedes hacer solicitudes de adquisición o préstamo interbibliotecario a través del sistema.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-800 mb-2">
                ¿El catálogo incluye recursos de otras bibliotecas?
              </h3>
              <p className="text-gray-700">
                Sí, tenemos convenios con otras instituciones que permiten búsquedas en catálogos compartidos.
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
