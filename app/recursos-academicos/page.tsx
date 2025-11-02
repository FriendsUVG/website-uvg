"use client"

import Link from "next/link"
import { Laptop, FileText, Video, Headphones } from "lucide-react"

export default function RecursosAcademicosPage() {
  const recursos = [
    {
      titulo: "Plataforma Virtual",
      descripcion: "Acceso a materiales de clase, tareas y calificaciones",
      icon: Laptop,
      color: "from-blue-600 to-indigo-600",
    },
    {
      titulo: "Tutorías Académicas",
      descripcion: "Apoyo personalizado en materias específicas",
      icon: FileText,
      color: "from-green-600 to-emerald-600",
    },
    {
      titulo: "Videoteca Educativa",
      descripcion: "Contenido multimedia para complementar tu aprendizaje",
      icon: Video,
      color: "from-purple-600 to-violet-600",
    },
    {
      titulo: "Audiolibros",
      descripcion: "Biblioteca de audio para estudio flexible",
      icon: Headphones,
      color: "from-orange-600 to-amber-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 text-white py-16 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#academico"
            className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors group"
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
          <h1 className="text-5xl font-bold mb-4 text-balance">Recursos Académicos</h1>
          <p className="text-xl text-indigo-100 text-pretty">Herramientas y materiales para potenciar tu aprendizaje</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {recursos.map((recurso, index) => {
            const Icon = recurso.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${recurso.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{recurso.titulo}</h2>
                  <p className="text-white/90">{recurso.descripcion}</p>
                </div>
                <div className="p-6">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors">
                    Acceder al Recurso
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
