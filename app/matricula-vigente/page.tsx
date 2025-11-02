"use client"

import Link from "next/link"
import { useState } from "react"

export default function MatriculaVigentePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué significa tener matrícula vigente?",
      answer:
        "Matrícula vigente significa que tu inscripción está activa para el ciclo académico actual, has completado el proceso de matrícula y estás habilitado para asistir a clases y utilizar los servicios universitarios.",
    },
    {
      question: "¿Cómo verifico el estado de mi matrícula?",
      answer:
        "Puedes verificar el estado de tu matrícula ingresando al portal estudiantil con tu usuario y contraseña, en la sección 'Mi Matrícula' o 'Estado Académico'.",
    },
    {
      question: "¿Qué pasa si mi matrícula no está vigente?",
      answer:
        "Si tu matrícula no está vigente, no podrás asistir a clases ni acceder a servicios académicos. Debes contactar al departamento de registro académico para regularizar tu situación.",
    },
    {
      question: "¿Cuándo debo renovar mi matrícula?",
      answer:
        "La matrícula debe renovarse cada ciclo académico durante el período de inscripción establecido en el calendario académico, generalmente antes del inicio de clases.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="bg-emerald-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-emerald-50 to-white shadow-xl border-b border-emerald-100">
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
            <h1 className="text-3xl font-bold text-emerald-700">Matrícula Vigente</h1>
            <p className="text-gray-600 font-medium mt-1">Requisito Académico</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <Link
          href="/#academico"
          className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-semibold mb-8 group"
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Matrícula Vigente</h2>
            <p className="text-xl text-emerald-50">
              Mantén tu inscripción activa para acceder a todos los servicios académicos
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  ¿Qué es?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La matrícula vigente es el estado activo de tu inscripción universitaria que te habilita para asistir
                  a clases, presentar exámenes, utilizar servicios académicos y participar en actividades universitarias
                  durante el ciclo académico actual.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200">
                <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Importancia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mantener tu matrícula vigente es fundamental para tu continuidad académica. Sin ella, no podrás
                  acceder a clases, biblioteca, laboratorios, ni realizar trámites académicos. Es tu llave de acceso a
                  la vida universitaria.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
                Requisitos para Mantener Matrícula Vigente
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Inscripción Completa",
                    desc: "Completar el proceso de matrícula en las fechas establecidas",
                  },
                  { title: "Pago de Colegiatura", desc: "Estar al día con los pagos del ciclo académico" },
                  {
                    title: "Documentación Actualizada",
                    desc: "Mantener documentos personales y académicos actualizados",
                  },
                  {
                    title: "Cumplimiento de Normas",
                    desc: "Respetar el reglamento estudiantil y normas académicas",
                  },
                  {
                    title: "Carga Académica Mínima",
                    desc: "Mantener la carga académica mínima requerida por tu programa",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-teal-500 rounded-full mr-4"></div>
                Proceso de Verificación
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Acceso al Portal",
                    desc: "Ingresa al portal estudiantil con tus credenciales",
                  },
                  {
                    step: "2",
                    title: "Consulta de Estado",
                    desc: "Revisa la sección de estado académico o matrícula",
                  },
                  {
                    step: "3",
                    title: "Confirmación",
                    desc: "Verifica que tu estado aparezca como 'Vigente' o 'Activo'",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-200"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
                      className="w-full p-6 text-left bg-white hover:bg-emerald-50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <svg
                        className={`w-6 h-6 text-emerald-600 transition-transform ${
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
                      <div className="p-6 bg-emerald-50 border-t border-emerald-100">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Ayuda?</h3>
              <p className="mb-6 text-emerald-50">
                Si tienes dudas sobre el estado de tu matrícula o necesitas regularizar tu situación, contacta al
                departamento de registro académico.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                  Contactar Registro
                </button>
                <button className="bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors border-2 border-white">
                  Portal Estudiantil
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
