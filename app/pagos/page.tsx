import Link from "next/link"

export default function PagosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
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
            <h1 className="text-3xl font-bold text-emerald-700">Sistema de Pagos</h1>
            <p className="text-gray-600 font-medium mt-1">Gestión Financiera • Transparencia • Facilidad</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold mb-8 group"
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
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Sistema de Pagos UVG</h2>
              <p className="text-gray-600 text-lg">Múltiples opciones para facilitar tus transacciones</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-lg">
              El sistema de pagos de UVG ofrece múltiples canales seguros y convenientes para realizar tus pagos de
              matrícula, colegiaturas y otros servicios universitarios.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              Métodos de Pago
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Pago en línea:</span>
                  <span className="text-gray-600"> Tarjetas de crédito/débito, transferencias bancarias</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Bancos autorizados:</span>
                  <span className="text-gray-600"> Depósitos y transferencias en sucursales</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Caja universitaria:</span>
                  <span className="text-gray-600"> Efectivo, cheques y tarjetas</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Planes de pago:</span>
                  <span className="text-gray-600"> Opciones de financiamiento disponibles</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Fechas Importantes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Matrícula:</span>
                  <span className="text-gray-600"> Según calendario académico</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Colegiaturas:</span>
                  <span className="text-gray-600"> Primeros 10 días de cada mes</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Recargos:</span>
                  <span className="text-gray-600"> Aplicables después de la fecha límite</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Descuentos:</span>
                  <span className="text-gray-600"> Por pronto pago disponibles</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Portal de Pagos en Línea</h3>
          <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
            Accede a nuestro portal seguro para realizar pagos, consultar estados de cuenta y descargar recibos las 24
            horas del día.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ir al Portal de Pagos
            </button>
            <button className="bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all duration-300 border-2 border-white/30">
              Ver Estado de Cuenta
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Cómo puedo realizar un pago en línea?</h4>
              <p className="text-gray-600">
                Ingresa al portal de pagos con tu usuario y contraseña, selecciona el concepto a pagar y elige tu método
                de pago preferido.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Qué hago si mi pago no se refleja?</h4>
              <p className="text-gray-600">
                Los pagos en línea se reflejan inmediatamente. Si realizaste un depósito bancario, puede tardar hasta 24
                horas hábiles.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Puedo solicitar un plan de pagos?</h4>
              <p className="text-gray-600">
                Sí, puedes solicitar un plan de pagos en el departamento financiero presentando tu situación y
                documentación requerida.
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
