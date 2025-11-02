"use client"

import Link from "next/link"
import { BookOpen, Database, Wifi, Clock } from "lucide-react"

export default function BibliotecaAcademicaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <header className="bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 text-white py-16 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#academico"
            className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Académico
          </Link>
          <h1 className="text-5xl font-bold mb-4 text-balance">Biblioteca Académica</h1>
          <p className="text-xl text-teal-100 text-pretty">
            Recursos bibliográficos y espacios de estudio para tu éxito académico
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Colección Física</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>Más de 50,000 libros especializados</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>Revistas académicas nacionales e internacionales</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>Tesis y trabajos de investigación</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <Database className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recursos Digitales</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>Bases de datos especializadas</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>E-books y revistas electrónicas</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                <span>Acceso remoto 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Horarios y Servicios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Horario de Atención</h3>
                <p className="text-gray-600 text-sm">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                <p className="text-gray-600 text-sm">Sábados: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Wifi className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Servicios Disponibles</h3>
                <p className="text-gray-600 text-sm">WiFi de alta velocidad</p>
                <p className="text-gray-600 text-sm">Computadoras y salas de estudio</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
