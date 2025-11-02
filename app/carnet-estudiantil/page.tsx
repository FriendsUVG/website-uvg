import Link from "next/link"

export default function CarnetEstudiantilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="bg-blue-600 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Servicios
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Carnet Estudiantil</h1>
          <p className="text-gray-600 text-lg">Tu identificación oficial como estudiante de UVG</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Importancia del Carnet</h2>
            <p className="text-gray-600 leading-relaxed">
              El carnet estudiantil es tu identificación oficial en el campus. Te permite acceder a instalaciones,
              servicios y beneficios exclusivos para estudiantes de UVG.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-500">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seguridad y Validez</h2>
            <p className="text-gray-600 leading-relaxed">
              Tu carnet incluye tecnología de seguridad avanzada y debe renovarse cada año académico. Es personal e
              intransferible.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Beneficios del Carnet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Acceso a Instalaciones</h3>
              <p className="text-blue-100">Biblioteca, laboratorios, gimnasio y más</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Descuentos</h3>
              <p className="text-blue-100">En cafetería, librería y comercios afiliados</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Eventos</h3>
              <p className="text-blue-100">Entrada a actividades culturales y deportivas</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cómo Obtener tu Carnet</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Completa tu Matrícula</h3>
                <p className="text-gray-600">
                  Asegúrate de haber completado tu proceso de matrícula y pago de inscripción.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Fotografía</h3>
                <p className="text-gray-600">
                  Dirígete al área de fotografía con tu DPI. La foto es gratuita y se toma en el momento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Recoge tu Carnet</h3>
                <p className="text-gray-600">
                  Tu carnet estará listo en 48 horas. Recógelo en la oficina de Registro Académico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Renovación Anual</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                El carnet debe renovarse al inicio de cada ciclo académico para mantener su validez.
              </p>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-2">Proceso de Renovación</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Verifica tu matrícula activa
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Actualiza tu fotografía si es necesario
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Recibe tu nuevo carnet con fecha actualizada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pérdida o Daño</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Si pierdes o dañas tu carnet, debes reportarlo inmediatamente.</p>
              <div className="p-4 bg-red-50 rounded-xl">
                <h3 className="font-bold text-red-700 mb-2">Reposición</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Reporta la pérdida en Registro Académico
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Paga la tarifa de reposición (Q50)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Recibe tu nuevo carnet en 48 horas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Puedo usar mi carnet fuera del campus?
              </summary>
              <p className="mt-4 text-gray-600">
                Sí, muchos comercios y servicios en la ciudad ofrecen descuentos a estudiantes universitarios. Presenta
                tu carnet vigente para acceder a estos beneficios.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Qué hago si mi carnet no funciona en los lectores?
              </summary>
              <p className="mt-4 text-gray-600">
                Dirígete a la oficina de Registro Académico para verificar el estado de tu carnet. Puede necesitar
                reactivación o reemplazo si el chip está dañado.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Puedo prestar mi carnet a otro estudiante?
              </summary>
              <p className="mt-4 text-gray-600">
                No, el carnet es personal e intransferible. El uso indebido puede resultar en sanciones disciplinarias y
                la suspensión de tu carnet.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
