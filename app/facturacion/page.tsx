import Link from "next/link"

export default function FacturacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="bg-purple-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-100">
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
            <h1 className="text-3xl font-bold text-purple-700">Facturación Electrónica</h1>
            <p className="text-gray-600 font-medium mt-1">Digital • Rápido • Seguro</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-purple-700 hover:text-purple-800 font-semibold mb-8 group"
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Sistema de Facturación UVG</h2>
              <p className="text-gray-600 text-lg">Gestiona tus facturas de forma digital y eficiente</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-lg">
              UVG ofrece un sistema de facturación electrónica que te permite solicitar, descargar y gestionar todas tus
              facturas de forma rápida y segura desde cualquier dispositivo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              Servicios Facturables
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Matrícula y colegiaturas:</span>
                  <span className="text-gray-600"> Pagos de inscripción y mensualidades</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Servicios adicionales:</span>
                  <span className="text-gray-600"> Laboratorios, materiales, eventos</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Certificaciones:</span>
                  <span className="text-gray-600"> Diplomas, constancias, transcripciones</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Otros servicios:</span>
                  <span className="text-gray-600"> Biblioteca, estacionamiento, cafetería</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              Cómo Solicitar Factura
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold">1</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ingresa al portal:</span>
                  <span className="text-gray-600"> Con tu usuario y contraseña</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold">2</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Selecciona el pago:</span>
                  <span className="text-gray-600"> Elige la transacción a facturar</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Completa datos:</span>
                  <span className="text-gray-600"> NIT, nombre o razón social</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold">4</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Descarga:</span>
                  <span className="text-gray-600"> Recibe tu factura en formato PDF</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Portal de Facturación Electrónica</h3>
          <p className="text-purple-50 text-lg mb-8 leading-relaxed">
            Accede a tu historial completo de facturas, solicita nuevas facturas y descarga documentos en cualquier
            momento.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ir al Portal de Facturación
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-900 transition-all duration-300 border-2 border-white/30">
              Ver Historial de Facturas
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Cuánto tiempo tengo para solicitar una factura?</h4>
              <p className="text-gray-600">
                Puedes solicitar tu factura hasta 3 meses después de realizado el pago. Después de este período, debes
                contactar al departamento financiero.
              </p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Puedo modificar una factura ya emitida?</h4>
              <p className="text-gray-600">
                No, las facturas electrónicas no pueden modificarse una vez emitidas. Debes solicitar una nota de
                crédito y generar una nueva factura.
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Las facturas electrónicas son válidas fiscalmente?</h4>
              <p className="text-gray-600">
                Sí, todas nuestras facturas electrónicas cumplen con los requisitos de la SAT y son completamente
                válidas para efectos fiscales.
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
