"use client"

import Link from "next/link"
import { BookOpen, Clock, Users, Award } from "lucide-react"

export default function ProgramasPage() {
  const programas = [
    {
      nombre: "Programas de Pregrado",
      duracion: "4-5 años",
      modalidad: "Presencial",
      descripcion: "Carreras universitarias con formación integral y práctica profesional",
      color: "from-green-600 to-emerald-600",
    },
    {
      nombre: "Programas de Postgrado",
      duracion: "1-2 años",
      modalidad: "Presencial / Virtual",
      descripcion: "Maestrías y especializaciones para profundizar conocimientos",
      color: "from-purple-600 to-violet-600",
    },
    {
      nombre: "Programas de Doctorado",
      duracion: "3-4 años",
      modalidad: "Presencial",
      descripcion: "Investigación avanzada y contribución al conocimiento",
      color: "from-blue-600 to-indigo-600",
    },
    {
      nombre: "Educación Continua",
      duracion: "Variable",
      modalidad: "Presencial / Virtual",
      descripcion: "Cursos, diplomados y certificaciones profesionales",
      color: "from-orange-600 to-amber-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <header className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 text-white py-16 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#academico"
            className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors group"
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
          <h1 className="text-5xl font-bold mb-4 text-balance">Programas Académicos</h1>
          <p className="text-xl text-purple-100 text-pretty">Diversidad de programas para tu desarrollo profesional</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programas.map((programa, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${programa.color} p-6 text-white`}>
                <h2 className="text-2xl font-bold mb-2">{programa.nombre}</h2>
                <p className="text-white/90">{programa.descripcion}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <span className="text-sm text-gray-500">Duración:</span>
                    <p className="font-semibold text-gray-800">{programa.duracion}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <span className="text-sm text-gray-500">Modalidad:</span>
                    <p className="font-semibold text-gray-800">{programa.modalidad}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Características de Nuestros Programas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <BookOpen className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Currículo Actualizado</h3>
                <p className="text-gray-600 text-sm">
                  Programas diseñados según las últimas tendencias y necesidades del mercado
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Certificación Internacional</h3>
                <p className="text-gray-600 text-sm">Títulos reconocidos a nivel nacional e internacional</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
