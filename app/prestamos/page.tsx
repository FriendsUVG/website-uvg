"use client"

import Link from "next/link"
import { BookMarked, Calendar, RefreshCw, AlertCircle } from "lucide-react"

export default function PrestamosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="bg-amber-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-amber-50 to-white shadow-xl border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Servicio de Préstamos</h1>
          <p className="text-amber-600 text-lg">Accede a nuestra colección de manera fácil y rápida</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-600">
            <BookMarked className="w-12 h-12 text-amber-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Préstamo a Domicilio</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Lleva materiales a casa para estudio prolongado.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>Hasta 5 libros simultáneos</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>Plazo: 15 días</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>2 renovaciones permitidas</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
            <Calendar className="w-12 h-12 text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Préstamo en Sala</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Consulta materiales dentro de la biblioteca.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Sin límite de materiales</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Durante horario de biblioteca</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Incluye material de referencia</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
            <RefreshCw className="w-12 h-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Préstamo Corto</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Para materiales de alta demanda y reserva.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Plazo: 2-4 horas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Material de curso específico</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>No renovable</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Proceso de Préstamo</h2>
          <p className="text-amber-100 mb-6 leading-relaxed">
            Solicitar un préstamo es rápido y sencillo. Sigue estos pasos:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">En Línea</h3>
              <ol className="space-y-2 text-amber-100">
                <li className="flex items-start">
                  <span className="font-bold mr-3">1.</span>
                  <span>Busca el material en el catálogo</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">2.</span>
                  <span>Verifica disponibilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">3.</span>
                  <span>Haz clic en "Solicitar préstamo"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">4.</span>
                  <span>Recoge en mostrador con tu carnet</span>
                </li>
              </ol>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Presencial</h3>
              <ol className="space-y-2 text-amber-100">
                <li className="flex items-start">
                  <span className="font-bold mr-3">1.</span>
                  <span>Localiza el material en estantería</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">2.</span>
                  <span>Llévalo al mostrador de préstamos</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">3.</span>
                  <span>Presenta tu carnet estudiantil</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">4.</span>
                  <span>Recibe comprobante de préstamo</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Renovaciones y Devoluciones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-amber-800 mb-4 text-lg flex items-center">
                <RefreshCw className="w-6 h-6 mr-2" />
                Renovaciones
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Hasta 2 renovaciones por material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Renovación en línea o presencial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>No disponible si hay reservas pendientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Renovar antes de la fecha de vencimiento</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-800 mb-4 text-lg flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Devoluciones
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Buzón de devolución 24/7 disponible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Devolución en mostrador durante horario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Verifica que el material esté en buen estado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Solicita comprobante de devolución</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <AlertCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Políticas Importantes</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-red-700">Retrasos:</strong> Multa de Q5.00 por día de retraso por cada
                  material.
                </p>
                <p>
                  <strong className="text-red-700">Material dañado:</strong> El usuario es responsable de reparación o
                  reposición.
                </p>
                <p>
                  <strong className="text-red-700">Material perdido:</strong> Debe reponerse con el mismo título o pagar
                  el costo actual.
                </p>
                <p>
                  <strong className="text-red-700">Suspensión:</strong> Acumulación de multas puede resultar en
                  suspensión temporal del servicio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">¿Puedo prestar mi carnet a otra persona?</h3>
              <p className="text-gray-700">
                No, el carnet es personal e intransferible. Solo el titular puede solicitar préstamos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">¿Qué hago si pierdo un libro prestado?</h3>
              <p className="text-gray-700">
                Reporta inmediatamente a biblioteca. Deberás reponer el material con el mismo título o pagar su valor
                actual de mercado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">¿Puedo renovar si tengo multas pendientes?</h3>
              <p className="text-gray-700">
                No, debes estar al día con tus obligaciones financieras para poder renovar o solicitar nuevos préstamos.
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
