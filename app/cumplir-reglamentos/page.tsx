import Link from "next/link"

export default function CumplirReglamentosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="bg-slate-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-slate-50 to-white shadow-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center text-slate-600 hover:text-slate-700 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Servicios
          </Link>
          <h1 className="text-4xl font-bold text-slate-700 mb-2">Cumplir Reglamentos</h1>
          <p className="text-gray-600 text-lg">Normas y responsabilidades de la comunidad estudiantil</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-slate-600">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reglamento Estudiantil</h2>
            <p className="text-gray-600 leading-relaxed">
              El reglamento estudiantil establece las normas de convivencia, derechos y responsabilidades que todos los
              estudiantes deben conocer y cumplir.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-gray-600">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Convivencia Universitaria</h2>
            <p className="text-gray-600 leading-relaxed">
              El respeto mutuo, la integridad académica y el comportamiento ético son fundamentales para una comunidad
              universitaria sana y productiva.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-gray-700 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Áreas Principales del Reglamento</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Conducta Académica</h3>
              <ul className="space-y-2 text-slate-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Asistencia y puntualidad a clases
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Integridad en exámenes y trabajos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Respeto a la propiedad intelectual
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Cumplimiento de plazos de entrega
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Conducta General</h3>
              <ul className="space-y-2 text-slate-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Respeto a compañeros y personal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Cuidado de instalaciones y equipos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Prohibición de sustancias ilícitas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Uso apropiado de recursos universitarios
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Faltas y Sanciones</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">Faltas Leves</h3>
              <p className="text-gray-700 mb-3">
                Retrasos frecuentes, incumplimiento de normas de vestimenta, uso inadecuado de dispositivos móviles.
              </p>
              <p className="text-sm text-yellow-700 font-semibold">Sanción: Amonestación verbal o escrita</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-xl">
              <h3 className="font-bold text-orange-800 mb-2">Faltas Moderadas</h3>
              <p className="text-gray-700 mb-3">
                Plagio parcial, alteración de documentos, comportamiento irrespetuoso, daño menor a propiedad.
              </p>
              <p className="text-sm text-orange-700 font-semibold">
                Sanción: Suspensión temporal (1-5 días) y/o trabajo comunitario
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-xl">
              <h3 className="font-bold text-red-800 mb-2">Faltas Graves</h3>
              <p className="text-gray-700 mb-3">
                Plagio total, fraude académico, violencia física o verbal, posesión de sustancias ilícitas, daño
                intencional grave.
              </p>
              <p className="text-sm text-red-700 font-semibold">
                Sanción: Suspensión prolongada o expulsión definitiva
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Derechos del Estudiante</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Debido Proceso</h3>
                  <p className="text-gray-600 text-sm">Derecho a ser escuchado antes de cualquier sanción</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Apelación</h3>
                  <p className="text-gray-600 text-sm">Posibilidad de apelar decisiones disciplinarias</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Confidencialidad</h3>
                  <p className="text-gray-600 text-sm">Protección de tu información personal y académica</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Representación</h3>
                  <p className="text-gray-600 text-sm">Derecho a tener un representante en procesos disciplinarios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cómo Reportar Infracciones</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Si observas una violación al reglamento, puedes reportarla de manera confidencial:
              </p>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-700 mb-2">Oficina de Asuntos Estudiantiles</h3>
                <p className="text-gray-600 text-sm mb-2">Edificio Administrativo, 2do piso</p>
                <p className="text-gray-600 text-sm">Lunes a viernes: 8:00 AM - 5:00 PM</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-700 mb-2">Correo Electrónico</h3>
                <p className="text-gray-600 text-sm">asuntos.estudiantiles@uvg.edu.gt</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-700 mb-2">Línea de Denuncia Anónima</h3>
                <p className="text-gray-600 text-sm">Tel: 7832-1234 ext. 500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Dónde puedo consultar el reglamento completo?
              </summary>
              <p className="mt-4 text-gray-600">
                El reglamento estudiantil completo está disponible en el portal estudiantil, en la biblioteca y en la
                oficina de Asuntos Estudiantiles. También se entrega una copia digital a todos los estudiantes nuevos
                durante la orientación.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Qué pasa si no estoy de acuerdo con una sanción?
              </summary>
              <p className="mt-4 text-gray-600">
                Tienes derecho a apelar cualquier sanción disciplinaria dentro de los 5 días hábiles siguientes a la
                notificación. Debes presentar tu apelación por escrito en la oficina de Asuntos Estudiantiles,
                explicando tus razones y aportando evidencia si la tienes.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm">
              <summary className="font-semibold text-gray-800 cursor-pointer">
                ¿Las sanciones quedan en mi expediente permanente?
              </summary>
              <p className="mt-4 text-gray-600">
                Las amonestaciones leves generalmente no quedan en tu expediente permanente. Las sanciones moderadas y
                graves sí se registran, pero algunas pueden ser removidas después de un período de buena conducta. Las
                expulsiones son permanentes.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#estudiantes"
            className="inline-flex items-center bg-gradient-to-r from-slate-700 to-gray-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-slate-800 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
