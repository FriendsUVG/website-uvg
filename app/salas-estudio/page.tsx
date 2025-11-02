"use client"

import Link from "next/link"
import { Users, Wifi, Coffee, Clock } from "lucide-react"

export default function SalasEstudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="bg-teal-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-teal-50 to-white shadow-xl border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-teal-800 mb-2">Salas de Estudio</h1>
          <p className="text-teal-600 text-lg">Espacios diseñados para tu éxito académico</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Salas Grupales</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Espacios colaborativos equipados con tecnología para trabajo en equipo y proyectos grupales.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Capacidad: 4-8 personas</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Pantallas de proyección</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Pizarras interactivas</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Conexión HDMI y USB-C</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Reserva en línea disponible</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-600">
            <Clock className="w-12 h-12 text-emerald-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Salas Individuales</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Espacios privados y silenciosos para estudio concentrado y preparación de exámenes.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Capacidad: 1-2 personas</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Escritorio ergonómico</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Iluminación ajustable</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Tomas de corriente múltiples</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Ambiente silencioso garantizado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <Wifi className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Servicios Incluidos</h2>
          <p className="text-teal-100 mb-6 leading-relaxed">
            Todas nuestras salas de estudio cuentan con servicios de primera calidad para tu comodidad.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Tecnología</h3>
              <ul className="space-y-2 text-teal-100">
                <li>• WiFi de alta velocidad</li>
                <li>• Enchufes y puertos USB</li>
                <li>• Equipos de videoconferencia</li>
                <li>• Impresión y escaneo</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Comodidades</h3>
              <ul className="space-y-2 text-teal-100">
                <li>• Aire acondicionado</li>
                <li>• Mobiliario ergonómico</li>
                <li>• Acceso a cafetería cercana</li>
                <li>• Casilleros de seguridad</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <Coffee className="w-12 h-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sistema de Reservas</h2>
          <div className="space-y-6">
            <div className="p-6 bg-teal-50 rounded-xl">
              <h3 className="font-bold text-teal-800 mb-3 text-lg">Cómo reservar:</h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 mr-3">1.</span>
                  <span>Ingresa al portal de biblioteca con tu carnet</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 mr-3">2.</span>
                  <span>Selecciona "Reservar Sala de Estudio"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 mr-3">3.</span>
                  <span>Elige fecha, hora y tipo de sala</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 mr-3">4.</span>
                  <span>Confirma tu reserva y recibe código de acceso</span>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl text-center">
                <p className="font-bold text-emerald-800 text-2xl mb-1">2 horas</p>
                <p className="text-gray-600 text-sm">Tiempo máximo por reserva</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-xl text-center">
                <p className="font-bold text-teal-800 text-2xl mb-1">7 días</p>
                <p className="text-gray-600 text-sm">Anticipación máxima</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-xl text-center">
                <p className="font-bold text-cyan-800 text-2xl mb-1">24/7</p>
                <p className="text-gray-600 text-sm">Disponibilidad en época de exámenes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-teal-800 mb-2">¿Puedo cancelar mi reserva?</h3>
              <p className="text-gray-700">
                Sí, puedes cancelar hasta 1 hora antes del inicio. Cancelaciones tardías pueden resultar en
                restricciones temporales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-800 mb-2">¿Qué pasa si llego tarde?</h3>
              <p className="text-gray-700">
                Tienes 15 minutos de tolerancia. Después de ese tiempo, la sala puede ser asignada a otro usuario.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-800 mb-2">¿Puedo consumir alimentos en las salas?</h3>
              <p className="text-gray-700">
                Solo se permiten bebidas en recipientes cerrados. Los alimentos deben consumirse en las áreas
                designadas.
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
