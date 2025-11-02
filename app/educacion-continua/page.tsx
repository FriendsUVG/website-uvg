"use client"

import { useState } from "react"
import Link from "next/link"

export default function EducacionContinuaPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const courses = [
    {
      name: "Diplomado en Marketing Digital",
      duration: "4 meses",
      schedule: "Sábados 8:00 - 12:00",
      description: "Aprende estrategias de marketing digital, SEO, redes sociales y analítica web.",
      modules: ["SEO y SEM", "Redes Sociales", "Email Marketing", "Google Analytics"],
    },
    {
      name: "Certificación en Gestión de Proyectos",
      duration: "3 meses",
      schedule: "Lunes y Miércoles 18:00 - 21:00",
      description: "Metodologías ágiles, gestión de riesgos y herramientas para liderar proyectos exitosos.",
      modules: ["Scrum", "Kanban", "Gestión de Riesgos", "MS Project"],
    },
    {
      name: "Curso de Inteligencia Artificial Aplicada",
      duration: "6 semanas",
      schedule: "Virtual - Asincrónico",
      description: "Introducción práctica a IA, machine learning y aplicaciones empresariales.",
      modules: ["Python para IA", "Machine Learning", "Deep Learning", "Casos de Uso"],
    },
    {
      name: "Taller de Liderazgo y Coaching",
      duration: "2 meses",
      schedule: "Viernes 17:00 - 20:00",
      description: "Desarrolla habilidades de liderazgo, comunicación efectiva y coaching ejecutivo.",
      modules: ["Liderazgo Transformacional", "Comunicación", "Coaching", "Inteligencia Emocional"],
    },
    {
      name: "Diplomado en Finanzas Corporativas",
      duration: "5 meses",
      schedule: "Martes y Jueves 19:00 - 22:00",
      description: "Análisis financiero, valoración de empresas y toma de decisiones estratégicas.",
      modules: ["Análisis Financiero", "Valoración", "Inversiones", "Finanzas Estratégicas"],
    },
    {
      name: "Certificación en Ciberseguridad",
      duration: "4 meses",
      schedule: "Sábados 14:00 - 18:00",
      description: "Protección de sistemas, ethical hacking y gestión de seguridad informática.",
      modules: ["Ethical Hacking", "Seguridad de Redes", "Criptografía", "Gestión de Incidentes"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="bg-orange-600 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano - Educación Continua
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-orange-50 to-white shadow-xl border-b border-orange-100">
        <div className="flex items-center justify-between px-8 py-8">
          <Link href="/" className="flex items-center space-x-6 group">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </Link>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-orange-600">Educación Continua</h1>
            <p className="text-gray-600 font-medium mt-1">Diplomados • Certificaciones • Talleres</p>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b shadow-lg">
        <div className="flex items-center justify-between px-8 py-4">
          <Link
            href="/#admisiones"
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver a Admisiones</span>
          </Link>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Programas de Educación Continua</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Actualiza tus conocimientos y desarrolla nuevas habilidades con nuestros programas especializados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{course.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">{course.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-sm flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      Módulos del Programa
                    </h4>
                    <div className="space-y-2">
                      {course.modules.map((module, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course.name)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  >
                    Inscribirme
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12 shadow-xl border border-orange-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Por qué elegir nuestros programas?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Certificación Oficial",
                  desc: "Reconocida por empresas e instituciones",
                },
                {
                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                  title: "Docentes Expertos",
                  desc: "Profesionales activos en la industria",
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Horarios Flexibles",
                  desc: "Adaptados a tu vida profesional",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Planes de Pago</h3>
            <p className="text-gray-600 mb-4">Opciones de financiamiento y descuentos por pronto pago disponibles</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span>Pago único con 10% de descuento</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span>Hasta 3 pagos sin intereses</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span>Descuentos para grupos empresariales</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Programas In-Company</h3>
            <p className="text-gray-600 mb-4">Capacitación personalizada para tu empresa u organización</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                <span>Contenido adaptado a tus necesidades</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                <span>Horarios y modalidad flexible</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                <span>Certificación para todo tu equipo</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {selectedCourse && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Inscripción</h3>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-light w-10 h-10 rounded-full hover:bg-gray-100 transition-all"
                >
                  ×
                </button>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert(`Inscripción a ${selectedCourse} completada. Te contactaremos pronto.`)
                  setSelectedCourse(null)
                }}
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Programa seleccionado</label>
                  <input
                    type="text"
                    value={selectedCourse}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="+502 1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa (opcional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                >
                  Completar Inscripción
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
