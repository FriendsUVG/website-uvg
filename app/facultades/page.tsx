"use client"

import Link from "next/link"
import { GraduationCap, Users, Award } from "lucide-react"

export default function FacultadesPage() {
  const facultades = [
    {
      nombre: "Facultad de Ingeniería",
      descripcion: "Formación de ingenieros con excelencia técnica y visión innovadora",
      programas: ["Ingeniería Civil", "Ingeniería Industrial", "Ingeniería en Sistemas"],
      icon: "🏗️",
    },
    {
      nombre: "Facultad de Ciencias Económicas",
      descripcion: "Líderes en negocios y economía con perspectiva global",
      programas: ["Administración de Empresas", "Economía", "Contaduría Pública"],
      icon: "💼",
    },
    {
      nombre: "Facultad de Ciencias Sociales",
      descripcion: "Comprensión profunda del comportamiento humano y social",
      programas: ["Psicología", "Trabajo Social", "Ciencias Políticas"],
      icon: "🧠",
    },
    {
      nombre: "Facultad de Educación",
      descripcion: "Formación de educadores transformadores",
      programas: ["Pedagogía", "Educación Inicial", "Educación Especial"],
      icon: "📚",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 text-white py-16 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#academico"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors group"
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
          <h1 className="text-5xl font-bold mb-4 text-balance">Facultades UVG</h1>
          <p className="text-xl text-blue-100 text-pretty">Excelencia académica en cada una de nuestras facultades</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facultades.map((facultad, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="text-5xl mb-4">{facultad.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{facultad.nombre}</h2>
                <p className="text-blue-100">{facultad.descripcion}</p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Programas Destacados:</h3>
                <ul className="space-y-2">
                  {facultad.programas.map((programa, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {programa}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Información General</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Acreditación</h3>
                <p className="text-gray-600 text-sm">
                  Todas nuestras facultades cuentan con acreditación internacional
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Docentes</h3>
                <p className="text-gray-600 text-sm">Profesores con experiencia académica y profesional</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Excelencia</h3>
                <p className="text-gray-600 text-sm">Programas diseñados para la excelencia académica</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
