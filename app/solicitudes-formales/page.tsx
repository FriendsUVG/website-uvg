import Link from "next/link"

export default function SolicitudesFormalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="bg-slate-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-slate-50 to-white shadow-xl border-b border-slate-100">
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
            <h1 className="text-3xl font-bold text-slate-700">Solicitudes Formales</h1>
            <p className="text-gray-600 font-medium mt-1">Procedimientos • Requisitos • Seguimiento</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-slate-700 hover:text-slate-800 font-semibold mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Regresar a Financiero
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Solicitudes Formales Financieras</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ciertos trámites financieros requieren una solicitud formal por escrito. Conoce los procedimientos y
            requisitos para cada tipo de solicitud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-slate-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Tipos de Solicitudes</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Planes de pago:</span>
                  <span className="text-gray-600"> Solicitud de financiamiento especial</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Devoluciones:</span>
                  <span className="text-gray-600"> Reembolsos por retiro o pagos duplicados</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Condonaciones:</span>
                  <span className="text-gray-600"> Solicitud de perdón de deuda por casos especiales</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Aclaraciones:</span>
                  <span className="text-gray-600"> Corrección de estados de cuenta</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-gray-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Requisitos Generales</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Carta formal dirigida al Director Financiero</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Copia de DPI o carnet estudiantil</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Documentación de respaldo según el caso</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Formulario de solicitud completado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Proceso de Solicitud</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <p className="font-semibold">Prepara documentación</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <p className="font-semibold">Presenta en ventanilla</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <p className="font-semibold">Espera evaluación (5-10 días)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <p className="font-semibold">Recibe respuesta oficial</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-slate-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Cuánto tiempo tarda una solicitud?</h4>
              <p className="text-gray-600">
                El tiempo de respuesta varía según el tipo de solicitud, pero generalmente es de 5 a 10 días hábiles.
              </p>
            </div>
            <div className="border-l-4 border-gray-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Puedo hacer seguimiento a mi solicitud?</h4>
              <p className="text-gray-600">
                Sí, puedes consultar el estado de tu solicitud en el departamento financiero con tu número de
                expediente.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Qué hago si mi solicitud es rechazada?</h4>
              <p className="text-gray-600">
                Recibirás una notificación con las razones del rechazo. Puedes presentar una apelación con documentación
                adicional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
