"use client"

import Link from "next/link"
import { useState } from "react"

export default function EvaluacionesAlDiaPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué significa tener evaluaciones al día?",
      answer:
        "Significa haber presentado todas las evaluaciones programadas (exámenes, trabajos, proyectos) en las fechas establecidas y no tener evaluaciones pendientes o incompletas.",
    },
    {
      question: "¿Qué pasa si pierdo una evaluación?",
      answer:
        "Si pierdes una evaluación por causa justificada, debes presentar la documentación correspondiente al profesor en un plazo máximo de 3 días hábiles para solicitar una evaluación de reposición.",
    },
    {
      question: "¿Cómo consulto mis evaluaciones pendientes?",
      answer:
        "Puedes consultar tus evaluaciones pendientes en el portal estudiantil, sección 'Mis Cursos' o 'Evaluaciones'. También puedes verificar con cada profesor el estado de tus entregas.",
    },
    {
      question: "¿Las evaluaciones al día afectan mi matrícula?",
      answer:
        "Sí, tener evaluaciones pendientes puede afectar tu elegibilidad para ciertos servicios y trámites académicos. Es importante mantener todas tus evaluaciones al día.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="bg-violet-700 text-white py-2 px-4 md:py-3 md:px-8 shadow-lg">
        <p className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-violet-50 to-white shadow-xl border-b border-violet-100">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-8 gap-4 md:gap-0">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-16 h-16 md:w-28 md:h-28 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <h1 className="text-xl md:text-3xl font-bold text-violet-700">Evaluaciones al Día</h1>
            <p className="text-gray-600 font-medium mt-1 text-sm md:text-base">Requisito Académico</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <Link
          href="/#academico"
          className="inline-flex items-center space-x-2 text-violet-700 hover:text-violet-800 font-semibold mb-6 md:mb-8 group text-sm md:text-base"
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
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Evaluaciones al Día</h2>
            <p className="text-xl text-violet-50">
              Mantén todas tus evaluaciones actualizadas para un progreso académico exitoso
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl border border-violet-200">
                <h3 className="text-2xl font-bold text-violet-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  ¿Qué Incluye?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tener evaluaciones al día significa haber completado y entregado todos los exámenes, trabajos,
                  proyectos, tareas y presentaciones programadas en cada uno de tus cursos dentro de los plazos
                  establecidos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Importancia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mantener tus evaluaciones al día es crucial para tu éxito académico, permite un seguimiento adecuado
                  de tu progreso, evita acumulación de trabajo y te mantiene elegible para todos los servicios
                  universitarios.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-violet-500 rounded-full mr-4"></div>
                Tipos de Evaluaciones
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Exámenes Parciales",
                    desc: "Evaluaciones periódicas del contenido del curso",
                    icon: "📝",
                    color: "violet",
                  },
                  {
                    title: "Trabajos y Proyectos",
                    desc: "Asignaciones individuales o grupales con fecha de entrega",
                    icon: "📚",
                    color: "purple",
                  },
                  {
                    title: "Presentaciones",
                    desc: "Exposiciones orales sobre temas específicos",
                    icon: "🎤",
                    color: "pink",
                  },
                  {
                    title: "Tareas y Ejercicios",
                    desc: "Actividades prácticas y ejercicios de refuerzo",
                    icon: "✍️",
                    color: "violet",
                  },
                  {
                    title: "Laboratorios",
                    desc: "Prácticas y reportes de laboratorio",
                    icon: "🔬",
                    color: "purple",
                  },
                  {
                    title: "Examen Final",
                    desc: "Evaluación comprehensiva al final del curso",
                    icon: "🎓",
                    color: "pink",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${item.color}-50 to-white p-6 rounded-2xl border-2 border-${item.color}-200 hover:shadow-lg transition-all`}
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-purple-500 rounded-full mr-4"></div>
                Consejos para Mantener Evaluaciones al Día
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Usa un Calendario Académico",
                    desc: "Registra todas las fechas de evaluaciones y entregas",
                  },
                  {
                    title: "Planifica con Anticipación",
                    desc: "No dejes todo para el último momento, distribuye tu tiempo",
                  },
                  {
                    title: "Revisa el Syllabus",
                    desc: "Consulta regularmente el programa de cada curso",
                  },
                  {
                    title: "Comunícate con Profesores",
                    desc: "Pregunta si tienes dudas sobre fechas o requisitos",
                  },
                  {
                    title: "Establece Recordatorios",
                    desc: "Usa alarmas y notificaciones para fechas importantes",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-violet-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
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
                      className="w-full p-6 text-left bg-white hover:bg-violet-50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <svg
                        className={`w-6 h-6 text-violet-600 transition-transform ${expandedFaq === index ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === index && (
                      <div className="p-6 bg-violet-50 border-t border-violet-100">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">¿Tienes Evaluaciones Pendientes?</h3>
              <p className="mb-6 text-violet-50">
                Consulta el estado de tus evaluaciones y ponte al día. Nuestro equipo está disponible para ayudarte.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-violet-700 px-8 py-3 rounded-xl font-semibold hover:bg-violet-50 transition-colors">
                  Ver Mis Evaluaciones
                </button>
                <button className="bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-800 transition-colors border-2 border-white">
                  Contactar Profesor
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
