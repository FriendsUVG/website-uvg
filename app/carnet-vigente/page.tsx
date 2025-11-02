"use client"

import Link from "next/link"
import { CreditCard, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function CarnetVigentePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="bg-blue-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Carnet Vigente</h1>
          <p className="text-blue-600 text-lg">Requisito esencial para acceder a servicios de biblioteca</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-blue-600">
          <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es el Carnet Vigente?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El carnet estudiantil vigente es tu identificación oficial como miembro de la comunidad UVG. Debe estar
            activo y actualizado para acceder a todos los servicios de biblioteca, incluyendo préstamos, salas de
            estudio y recursos digitales.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La vigencia del carnet está vinculada a tu matrícula activa y debe renovarse cada ciclo académico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Carnet Válido</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Matrícula activa del ciclo actual</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Fotografía y datos actualizados</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Sin multas o sanciones pendientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Código de barras legible</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Tarjeta en buen estado físico</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
            <XCircle className="w-12 h-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Carnet No Válido</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Matrícula vencida o inactiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Carnet dañado o ilegible</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Suspensión por multas acumuladas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Código de barras no funcional</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Carnet reportado como perdido</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicios que Requieren Carnet Vigente</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Servicios Presenciales</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Préstamo de libros a domicilio</li>
                <li>• Préstamo de material en sala</li>
                <li>• Reserva de salas de estudio</li>
                <li>• Acceso a instalaciones</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Servicios Digitales</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Acceso a bases de datos</li>
                <li>• Recursos digitales remotos</li>
                <li>• Renovaciones en línea</li>
                <li>• Reservas virtuales</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-600 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">¿Qué Hacer si tu Carnet No Está Vigente?</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">1. Verifica tu matrícula</h3>
                  <p>Asegúrate de estar matriculado en el ciclo actual. Contacta a Registro Académico si hay dudas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">2. Resuelve multas pendientes</h3>
                  <p>Paga cualquier multa acumulada en el departamento financiero o en línea.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">3. Solicita reposición si está dañado</h3>
                  <p>Acude a la oficina de carnets con una fotografía reciente y comprobante de pago.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">4. Reporta pérdida inmediatamente</h3>
                  <p>Si perdiste tu carnet, repórtalo de inmediato para evitar uso indebido y solicita uno nuevo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">¿Puedo usar una copia de mi carnet?</h3>
              <p className="text-gray-700">
                No, solo se acepta el carnet original con código de barras funcional. Las copias no son válidas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">¿Cuánto tiempo tarda la reposición?</h3>
              <p className="text-gray-700">
                La reposición toma aproximadamente 3-5 días hábiles. Puedes solicitar un carnet temporal mientras tanto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">¿El carnet de ciclos anteriores sirve?</h3>
              <p className="text-gray-700">
                No, el carnet debe corresponder al ciclo académico actual. Debes renovarlo cada ciclo.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
