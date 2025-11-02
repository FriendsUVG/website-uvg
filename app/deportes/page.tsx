import Link from "next/link"

export default function DeportesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="bg-orange-600 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-orange-50 to-white shadow-xl border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Servicios
          </Link>
          <h1 className="text-4xl font-bold text-orange-700 mb-2">Deportes y Recreación</h1>
          <p className="text-gray-600 text-lg">Desarrolla tu potencial físico y espíritu deportivo</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Fútbol</h2>
            <p className="text-gray-600">Equipos masculinos y femeninos. Entrenamientos lunes, miércoles y viernes.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Baloncesto</h2>
            <p className="text-gray-600">Ligas internas y representación en torneos interuniversitarios.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Voleibol</h2>
            <p className="text-gray-600">Equipos competitivos y recreativos. Entrenamientos martes y jueves.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Instalaciones Deportivas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Gimnasio Equipado</h3>
              <ul className="space-y-2 text-orange-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Máquinas de cardio y pesas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Área de entrenamiento funcional
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Instructores certificados
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Canchas y Espacios</h3>
              <ul className="space-y-2 text-orange-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Cancha de fútbol con césped sintético
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Canchas de baloncesto techadas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Pista de atletismo
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Horarios de Gimnasio</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                <span className="text-orange-600 font-bold">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-50 rounded-xl">
                <span className="font-semibold text-gray-700">Sábados</span>
                <span className="text-amber-600 font-bold">8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700">Domingos</span>
                <span className="text-gray-600 font-bold">Cerrado</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Inscripciones</h2>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-xl">
                <h3 className="font-bold text-orange-700 mb-2">Equipos Representativos</h3>
                <p className="text-gray-600 text-sm">Pruebas de selección al inicio de cada semestre</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl">
                <h3 className="font-bold text-amber-700 mb-2">Ligas Recreativas</h3>
                <p className="text-gray-600 text-sm">Inscripciones abiertas todo el año</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-bold text-green-700 mb-2">Clases Grupales</h3>
                <p className="text-gray-600 text-sm">Yoga, spinning, zumba y más</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Necesito experiencia previa para unirme a un equipo?
              </summary>
              <p className="mt-4 text-gray-600">
                No necesariamente. Tenemos equipos recreativos para principiantes y equipos competitivos para jugadores
                con experiencia.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿El uso del gimnasio tiene costo adicional?
              </summary>
              <p className="mt-4 text-gray-600">
                No, el acceso al gimnasio y todas las instalaciones deportivas está incluido en tu matrícula.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Puedo reservar canchas para uso personal?
              </summary>
              <p className="mt-4 text-gray-600">
                Sí, puedes reservar canchas a través del portal estudiantil con hasta 48 horas de anticipación.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
