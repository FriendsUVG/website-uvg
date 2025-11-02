"use client"

import Link from "next/link"
import { useState } from "react"

export default function CumplimientoAcademicoPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué es el cumplimiento académico?",
      answer:
        "El cumplimiento académico se refiere a mantener un rendimiento satisfactorio según los estándares de la universidad, incluyendo asistencia, calificaciones mínimas y progreso en tu programa de estudios.",
    },
    {
      question: "¿Cuál es el promedio mínimo requerido?",
      answer:
        "El promedio mínimo general es de 60 puntos sobre 100. Algunos programas pueden requerir promedios más altos. Consulta el reglamento de tu facultad para requisitos específicos.",
    },
    {
      question: "¿Qué pasa si no cumplo con los requisitos académicos?",
      answer:
        "Si no cumples con los requisitos, podrías entrar en período de prueba académica. Durante este tiempo, deberás mejorar tu rendimiento o podrías enfrentar suspensión temporal.",
    },
    {
      question: "¿Cómo puedo mejorar mi cumplimiento académico?",
      answer:
        "Utiliza los servicios de tutoría, asiste a asesorías con profesores, gestiona mejor tu tiempo, participa activamente en clases y busca apoyo del departamento de bienestar estudiantil.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            <h1 className="text-3xl font-bold text-blue-700">Cumplimiento Académico</h1>
            <p className="text-gray-600 font-medium mt-1">Requisito Académico</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <Link
          href="/#academico"
          className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-semibold mb-8 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Volver a Servicios Académicos</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Cumplimiento Académico</h2>
            <p className="text-xl text-blue-50">
              Mantén un rendimiento académico satisfactorio y progresa en tu carrera
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Definición
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  El cumplimiento académico es el conjunto de requisitos y estándares que debes mantener para continuar
                  tu formación universitaria, incluyendo asistencia, calificaciones, progreso curricular y conducta
                  académica.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Beneficios
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mantener buen cumplimiento académico te permite acceder a becas, participar en programas de
                  intercambio, obtener cartas de recomendación y graduarte en el tiempo previsto.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
                Criterios de Cumplimiento Académico
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Promedio Mínimo",
                    desc: "Mantener un promedio general de al menos 60/100 puntos",
                    icon: "📊",
                  },
                  {
                    title: "Asistencia Regular",
                    desc: "Cumplir con el 80% mínimo de asistencia en cada curso",
                    icon: "✓",
                  },
                  {
                    title: "Progreso Curricular",
                    desc: "Aprobar el número mínimo de créditos por ciclo académico",
                    icon: "📈",
                  },
                  {
                    title: "Integridad Académica",
                    desc: "Respetar el código de honor y evitar plagio o fraude",
                    icon: "🎓",
                  },
                  {
                    title: "Cumplimiento de Plazos",
                    desc: "Entregar trabajos y presentar exámenes en las fechas establecidas",
                    icon: "⏰",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-indigo-500 rounded-full mr-4"></div>
                Recursos de Apoyo Académico
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Tutorías Académicas",
                    desc: "Apoyo personalizado en materias específicas",
                    color: "blue",
                  },
                  {
                    title: "Asesorías con Profesores",
                    desc: "Horarios de consulta con docentes",
                    color: "indigo",
                  },
                  {
                    title: "Centro de Escritura",
                    desc: "Ayuda con trabajos escritos y ensayos",
                    color: "purple",
                  },
                  {
                    title: "Talleres de Estudio",
                    desc: "Técnicas de estudio y gestión del tiempo",
                    color: "blue",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${item.color}-50 to-white p-6 rounded-2xl border-2 border-${item.color}-200 hover:shadow-lg transition-shadow`}
                  >
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left bg-white hover:bg-blue-50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <svg
                        className={`w-6 h-6 text-blue-600 transition-transform ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === index && (
                      <div className="p-6 bg-blue-50 border-t border-blue-100">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Apoyo Académico?</h3>
              <p className="mb-6 text-blue-50">
                Si estás teniendo dificultades académicas, no esperes. Contáctanos para recibir orientación y apoyo
                personalizado.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  Solicitar Tutoría
                </button>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors border-2 border-white">
                  Ver Mi Progreso
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
