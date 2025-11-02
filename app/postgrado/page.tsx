"use client"

import { useState } from "react"
import Link from "next/link"

export default function PostgradoPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const programs = [
    {
      name: "Maestría en Administración de Empresas (MBA)",
      duration: "2 años",
      modality: "Presencial / Virtual",
      description:
        "Programa diseñado para desarrollar habilidades gerenciales y estratégicas en líderes empresariales.",
      areas: ["Finanzas", "Marketing", "Operaciones", "Recursos Humanos"],
    },
    {
      name: "Maestría en Ingeniería de Software",
      duration: "2 años",
      modality: "Presencial",
      description:
        "Formación avanzada en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
      areas: ["Desarrollo Web", "Inteligencia Artificial", "Ciberseguridad", "Cloud Computing"],
    },
    {
      name: "Maestría en Educación",
      duration: "18 meses",
      modality: "Virtual",
      description: "Programa enfocado en metodologías pedagógicas innovadoras y liderazgo educativo.",
      areas: ["Pedagogía", "Tecnología Educativa", "Gestión Educativa", "Evaluación"],
    },
    {
      name: "Doctorado en Ciencias Sociales",
      duration: "4 años",
      modality: "Presencial",
      description: "Investigación avanzada en fenómenos sociales, políticos y culturales de Guatemala y Latinoamérica.",
      areas: ["Sociología", "Antropología", "Ciencia Política", "Desarrollo Social"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="bg-purple-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano - Estudios de Postgrado
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-100">
        <div className="flex items-center justify-between px-8 py-8">
          <Link href="/" className="flex items-center space-x-6 group">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </Link>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-purple-700">Estudios de Postgrado</h1>
            <p className="text-gray-600 font-medium mt-1">Maestrías • Doctorados • Especialidades</p>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b shadow-lg">
        <div className="flex items-center justify-between px-8 py-4">
          <Link
            href="/#admisiones"
            className="flex items-center space-x-2 text-purple-700 hover:text-purple-900 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver a Admisiones</span>
          </Link>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Programas de Postgrado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Impulsa tu carrera profesional con nuestros programas de maestría y doctorado diseñados para líderes e
              investigadores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{program.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{program.modality}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Áreas de Especialización
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(program.name)}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Proceso de Admisión</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Solicitud", desc: "Completa el formulario en línea" },
                { step: "2", title: "Documentos", desc: "Envía tu expediente académico" },
                { step: "3", title: "Evaluación", desc: "Entrevista y examen de admisión" },
                { step: "4", title: "Matrícula", desc: "Confirma tu inscripción" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.62 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Becas Disponibles</h3>
            <p className="text-gray-600 mb-4">Hasta 50% de descuento en colegiatura para estudiantes destacados</p>
            <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
              Ver requisitos →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Horarios Flexibles</h3>
            <p className="text-gray-600 mb-4">Clases vespertinas y fines de semana para profesionales activos</p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              Ver horarios →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Red de Contactos</h3>
            <p className="text-gray-600 mb-4">Conecta con profesionales y líderes de diversas industrias</p>
            <button className="text-pink-600 font-semibold hover:text-pink-800 transition-colors">Conocer más →</button>
          </div>
        </section>
      </main>

      {selectedProgram && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
            onClick={() => setSelectedProgram(null)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Solicitar Información</h3>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-light w-10 h-10 rounded-full hover:bg-gray-100 transition-all"
                >
                  ×
                </button>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert(`Información sobre ${selectedProgram} enviada a tu correo.`)
                  setSelectedProgram(null)
                }}
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Programa de interés</label>
                  <input
                    type="text"
                    value={selectedProgram}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="+502 1234-5678"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                >
                  Solicitar Información
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      <footer className="bg-gray-100 py-8 text-center mt-16">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
