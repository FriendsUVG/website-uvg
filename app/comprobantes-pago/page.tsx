import Link from "next/link"

export default function ComprobantesPagoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="bg-green-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-green-50 to-white shadow-xl border-b border-green-100">
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
            <h1 className="text-3xl font-bold text-green-700">Comprobantes de Pago</h1>
            <p className="text-gray-600 font-medium mt-1">Verificación • Respaldo • Transparencia</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold mb-8 group"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Comprobantes de Pago</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Es fundamental conservar todos los comprobantes de pago para verificar transacciones, solicitar facturas y
            resolver cualquier discrepancia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recibos Oficiales</h3>
            <p className="text-gray-600 mb-4">Emitidos por caja universitaria</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Válidos para trámites internos
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Incluyen número de transacción
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Comprobantes Bancarios</h3>
            <p className="text-gray-600 mb-4">Depósitos y transferencias</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Conservar por 6 meses
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Necesarios para aclaraciones
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Confirmaciones en Línea</h3>
            <p className="text-gray-600 mb-4">Pagos por portal web</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                Descargables en PDF
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                Enviados por correo
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Recomendaciones</h3>
          <ul className="space-y-4 text-green-50">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Guarda copias digitales de todos tus comprobantes</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Verifica que el monto y concepto sean correctos</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Reporta inmediatamente cualquier discrepancia</span>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
