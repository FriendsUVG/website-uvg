import Link from "next/link"

export default function DocumentosFinancierosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="bg-teal-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-teal-50 to-white shadow-xl border-b border-teal-100">
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
            <h1 className="text-3xl font-bold text-teal-700">Documentos Financieros</h1>
            <p className="text-gray-600 font-medium mt-1">Requisitos • Documentación • Trámites</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mb-8 group"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Documentos Financieros Requeridos</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Para realizar trámites financieros en UVG, es necesario presentar la documentación correspondiente según el
            tipo de servicio solicitado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Documentos para Becas</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Constancia de ingresos familiares</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Declaración de impuestos (SAT)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Recibos de servicios básicos</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Carta de solicitud de beca</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Documentos para Créditos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">DPI del solicitante y fiador</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Constancia de ingresos</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Estados de cuenta bancarios</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Carta de aceptación UVG</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Importante</h3>
          <p className="text-teal-50 text-lg leading-relaxed">
            Todos los documentos deben ser originales o copias legalizadas. La documentación incompleta puede retrasar
            el procesamiento de tu solicitud.
          </p>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
