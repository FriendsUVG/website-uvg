"use client"

import Link from "next/link"
import { useState } from "react"

export default function PregradoPage() {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null)

  const careers = {
    "Ingeniería en Ciencias de la Computación": {
      duration: "5 años",
      description:
        "Forma profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras.",
      areas: ["Desarrollo de Software", "Inteligencia Artificial", "Ciberseguridad", "Redes y Sistemas"],
      opportunities: ["Desarrollador de Software", "Arquitecto de Soluciones", "Científico de Datos", "Consultor TI"],
    },
    "Ingeniería Industrial": {
      duration: "5 años",
      description: "Prepara líderes en optimización de procesos, gestión de operaciones y mejora continua.",
      areas: ["Gestión de Operaciones", "Logística", "Calidad", "Proyectos"],
      opportunities: [
        "Gerente de Operaciones",
        "Consultor Industrial",
        "Analista de Procesos",
        "Director de Proyectos",
      ],
    },
    "Administración de Empresas": {
      duration: "4 años",
      description: "Desarrolla habilidades gerenciales y estratégicas para liderar organizaciones exitosas.",
      areas: ["Finanzas", "Marketing", "Recursos Humanos", "Estrategia Empresarial"],
      opportunities: ["Gerente General", "Director Financiero", "Consultor Empresarial", "Emprendedor"],
    },
    Medicina: {
      duration: "7 años",
      description: "Forma médicos con excelencia académica, ética profesional y compromiso social.",
      areas: ["Ciencias Básicas", "Clínica Médica", "Cirugía", "Medicina Preventiva"],
      opportunities: ["Médico General", "Especialista", "Investigador Médico", "Docente"],
    },
    Arquitectura: {
      duration: "5 años",
      description: "Crea profesionales capaces de diseñar espacios funcionales, estéticos y sostenibles.",
      areas: ["Diseño Arquitectónico", "Urbanismo", "Construcción", "Sostenibilidad"],
      opportunities: ["Arquitecto", "Diseñador Urbano", "Gerente de Proyectos", "Consultor"],
    },
    Psicología: {
      duration: "5 años",
      description: "Forma psicólogos con sólida preparación científica y compromiso con el bienestar humano.",
      areas: ["Psicología Clínica", "Organizacional", "Educativa", "Social"],
      opportunities: ["Psicólogo Clínico", "Consultor Organizacional", "Investigador", "Terapeuta"],
    },
  }

  const admissionProcess = [
    {
      step: "1",
      title: "Solicitud en Línea",
      description: "Completa el formulario de admisión en nuestro portal web",
    },
    {
      step: "2",
      title: "Examen de Admisión",
      description: "Presenta las pruebas de conocimientos y aptitudes",
    },
    {
      step: "3",
      title: "Entrevista Personal",
      description: "Participa en una entrevista con el comité de admisiones",
    },
    {
      step: "4",
      title: "Documentación",
      description: "Entrega los documentos requeridos certificados",
    },
    {
      step: "5",
      title: "Matrícula",
      description: "Completa tu inscripción y comienza tu carrera",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-green-700 text-white py-2 px-4 md:py-3 md:px-8 shadow-lg">
        <p className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-green-50 to-white shadow-xl border-b border-green-100">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-8 gap-4 md:gap-0">
          <Link href="/" className="flex items-center space-x-3 md:space-x-6 hover:opacity-80 transition-opacity">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-16 h-16 md:w-28 md:h-28 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </Link>
          <div className="text-center md:text-right">
            <h1 className="text-xl md:text-3xl font-bold text-green-700">Programas de Pregrado</h1>
            <p className="text-gray-600 font-medium mt-1 text-sm md:text-base">Tu futuro comienza aquí</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-lg">
        <div className="px-4 md:px-8 py-3 md:py-4">
          <Link
            href="/#admisiones"
            className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold transition-colors text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Admisiones
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-8 md:py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-50 to-green-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Descubre tu Carrera Ideal</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            En UVG ofrecemos programas de pregrado de excelencia que combinan teoría y práctica para formar
            profesionales líderes en sus campos.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4 md:gap-4 px-4">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl font-bold text-green-700">15+</div>
              <div className="text-gray-600 mt-2 text-sm md:text-base">Carreras</div>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl font-bold text-blue-700">95%</div>
              <div className="text-gray-600 mt-2 text-sm md:text-base">Empleabilidad</div>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-700">5,000+</div>
              <div className="text-gray-600 mt-2 text-sm md:text-base">Estudiantes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Grid */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">Nuestras Carreras</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {Object.entries(careers).map(([career, details]) => (
              <div
                key={career}
                onClick={() => setSelectedCareer(selectedCareer === career ? null : career)}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 md:p-6 text-white">
                  <h4 className="text-lg md:text-xl font-bold mb-2">{career}</h4>
                  <div className="flex items-center text-green-100">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs md:text-sm">{details.duration}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{details.description}</p>
                  <button className="text-green-700 font-semibold hover:text-green-800 transition-colors flex items-center">
                    {selectedCareer === career ? "Ver menos" : "Ver más"}
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform ${selectedCareer === career ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {selectedCareer === career && (
                    <div className="mt-6 space-y-4 animate-in fade-in duration-300">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Áreas de Estudio:</h5>
                        <div className="space-y-2">
                          {details.areas.map((area, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {area}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Oportunidades Laborales:</h5>
                        <div className="space-y-2">
                          {details.opportunities.map((opp, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {opp}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gradient-to-br from-green-50 to-blue-50" id="admisiones">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Proceso de Admisión</h3>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4">
            Sigue estos pasos para formar parte de la comunidad UVG y comenzar tu camino hacia el éxito profesional.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {admissionProcess.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                </div>
                {idx < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">¿Listo para Comenzar?</h3>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-green-100 px-4">
            Únete a miles de estudiantes que han elegido UVG para construir su futuro profesional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <button className="bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              Solicitar Admisión
            </button>
            <button className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white text-sm md:text-base">
              Agendar Visita
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
