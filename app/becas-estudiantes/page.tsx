import Link from "next/link"

export default function BecasEstudiantesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="bg-emerald-600 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-emerald-50 to-white shadow-xl border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Servicios
          </Link>
          <h1 className="text-4xl font-bold text-emerald-700 mb-2">Becas y Ayuda Financiera</h1>
          <p className="text-gray-600 text-lg">Oportunidades para financiar tu educación universitaria</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Becas Académicas</h2>
            <p className="text-gray-600 mb-4">Hasta 100% de cobertura para estudiantes con excelencia académica.</p>
            <div className="text-emerald-600 font-bold text-2xl">25% - 100%</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Becas Socioeconómicas</h2>
            <p className="text-gray-600 mb-4">Apoyo financiero basado en necesidad económica familiar.</p>
            <div className="text-teal-600 font-bold text-2xl">30% - 75%</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Becas por Mérito</h2>
            <p className="text-gray-600 mb-4">Reconocimiento a logros deportivos, culturales y de liderazgo.</p>
            <div className="text-cyan-600 font-bold text-2xl">20% - 50%</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Proceso de Solicitud</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Registro</h3>
              <p className="text-emerald-100 text-sm">Completa el formulario en línea</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Documentación</h3>
              <p className="text-emerald-100 text-sm">Adjunta los documentos requeridos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Evaluación</h3>
              <p className="text-emerald-100 text-sm">Comité revisa tu solicitud</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Resultado</h3>
              <p className="text-emerald-100 text-sm">Recibe notificación en 2 semanas</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Requisitos Generales</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Ser estudiante activo de UVG</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Promedio mínimo de 75 puntos</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Documentación financiera completa</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Carta de motivación</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Dos cartas de recomendación</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Fechas Importantes</h2>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-emerald-700">Convocatoria</h3>
                  <span className="text-sm text-emerald-600">Enero - Febrero</span>
                </div>
                <p className="text-gray-600 text-sm">Apertura de solicitudes para el ciclo académico</p>
              </div>

              <div className="p-4 bg-teal-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-teal-700">Evaluación</h3>
                  <span className="text-sm text-teal-600">Marzo</span>
                </div>
                <p className="text-gray-600 text-sm">Revisión de solicitudes y entrevistas</p>
              </div>

              <div className="p-4 bg-cyan-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-cyan-700">Resultados</h3>
                  <span className="text-sm text-cyan-600">Abril</span>
                </div>
                <p className="text-gray-600 text-sm">Publicación de becas otorgadas</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-blue-700">Renovación</h3>
                  <span className="text-sm text-blue-600">Semestral</span>
                </div>
                <p className="text-gray-600 text-sm">Evaluación de continuidad de becas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Puedo solicitar más de un tipo de beca?
              </summary>
              <p className="mt-4 text-gray-600">
                Sí, puedes aplicar a múltiples tipos de becas. El comité evaluará tu elegibilidad para cada una y
                otorgará la que mejor se ajuste a tu perfil.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Las becas se renuevan automáticamente?
              </summary>
              <p className="mt-4 text-gray-600">
                No, debes mantener el promedio requerido y presentar una solicitud de renovación cada semestre. El
                proceso es más simple que la solicitud inicial.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Qué pasa si mi situación económica cambia durante el semestre?
              </summary>
              <p className="mt-4 text-gray-600">
                Puedes solicitar una revisión de tu caso en cualquier momento. Contáctanos para evaluar opciones de
                apoyo adicional o ajustes a tu beca actual.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Servicios Estudiantiles
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
