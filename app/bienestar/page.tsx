import Link from "next/link"

export default function BienestarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="bg-pink-600 text-white py-2 px-4 md:py-3 md:px-8 shadow-lg">
        <p className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-pink-50 to-white shadow-xl border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold mb-3 md:mb-4 transition-colors text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Servicios
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-pink-700 mb-2">Bienestar Estudiantil</h1>
          <p className="text-gray-600 text-base md:text-lg">Tu salud física, mental y emocional es nuestra prioridad</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border-t-4 border-pink-500">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Salud Integral</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ofrecemos servicios de atención médica, psicológica y nutricional para garantizar tu bienestar completo
              durante tu vida universitaria.
            </p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border-t-4 border-rose-500">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apoyo Emocional</h2>
            <p className="text-gray-600 leading-relaxed">
              Contamos con profesionales en psicología que brindan orientación y apoyo para enfrentar los desafíos
              académicos y personales.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Servicios de Bienestar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Atención Médica</h3>
              <p className="text-pink-100">Consultas médicas generales y primeros auxilios</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Psicología</h3>
              <p className="text-pink-100">Orientación psicológica y manejo del estrés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Nutrición</h3>
              <p className="text-pink-100">Asesoría nutricional y planes alimenticios</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Horarios de Atención</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
              <span className="font-semibold text-gray-700">Lunes a Viernes</span>
              <span className="text-pink-600 font-bold">8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-rose-50 rounded-xl">
              <span className="font-semibold text-gray-700">Sábados</span>
              <span className="text-rose-600 font-bold">9:00 AM - 1:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="font-semibold text-gray-700">Emergencias</span>
              <span className="text-red-600 font-bold">24/7 - Ext. 911</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">¿Cómo puedo agendar una cita?</summary>
              <p className="mt-4 text-gray-600">
                Puedes agendar tu cita a través del portal estudiantil, por teléfono o directamente en nuestras oficinas
                de Bienestar Estudiantil.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Los servicios tienen algún costo?
              </summary>
              <p className="mt-4 text-gray-600">
                Todos los servicios de bienestar están incluidos en tu matrícula y son completamente gratuitos para
                estudiantes activos.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Qué debo llevar a mi primera consulta?
              </summary>
              <p className="mt-4 text-gray-600">
                Solo necesitas tu carnet estudiantil vigente. Si tienes historial médico previo, es recomendable
                traerlo.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
