import Link from "next/link"

export default function CreditosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="bg-blue-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl border-b border-blue-100">
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
            <h1 className="text-3xl font-bold text-blue-700">Créditos Educativos</h1>
            <p className="text-gray-600 font-medium mt-1">Financiamiento • Flexibilidad • Accesibilidad</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold mb-8 group"
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
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
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Programa de Créditos Educativos</h2>
              <p className="text-gray-600 text-lg">Financia tu educación con planes flexibles</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-lg">
              UVG ofrece opciones de crédito educativo en alianza con instituciones financieras para que puedas
              financiar tus estudios con tasas preferenciales y plazos flexibles.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Beneficios del Crédito
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Tasas preferenciales:</span>
                  <span className="text-gray-600"> Mejores condiciones que créditos comerciales</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Plazos flexibles:</span>
                  <span className="text-gray-600"> Hasta 10 años para pagar</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Período de gracia:</span>
                  <span className="text-gray-600"> Opciones de pago después de graduarte</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Sin penalización:</span>
                  <span className="text-gray-600"> Por pagos anticipados</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              Requisitos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Ser estudiante activo</span>
                  <span className="text-gray-600"> de UVG</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Fiador solidario</span>
                  <span className="text-gray-600"> con capacidad de pago</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Documentación completa</span>
                  <span className="text-gray-600"> según banco</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800">Buen historial crediticio</span>
                  <span className="text-gray-600"> del solicitante y fiador</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6">Instituciones Financieras Aliadas</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">Banco A</div>
              <p className="text-sm">Tasa desde 8.5% anual</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">Banco B</div>
              <p className="text-sm">Tasa desde 9.0% anual</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">Banco C</div>
              <p className="text-sm">Tasa desde 8.75% anual</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Solicitar Crédito Educativo
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Cuánto puedo solicitar en crédito?</h4>
              <p className="text-gray-600">
                Puedes solicitar hasta el 100% del costo de tu carrera, incluyendo matrícula, colegiaturas y gastos
                relacionados.
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Cuándo empiezo a pagar?</h4>
              <p className="text-gray-600">
                Dependiendo del banco, puedes tener un período de gracia de hasta 6 meses después de graduarte antes de
                comenzar a pagar.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-bold text-gray-800 mb-2">¿Qué pasa si no puedo pagar una cuota?</h4>
              <p className="text-gray-600">
                Contacta inmediatamente al banco para explorar opciones de reestructuración o refinanciamiento antes de
                caer en mora.
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
