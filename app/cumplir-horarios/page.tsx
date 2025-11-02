"use client"

import Link from "next/link"
import { Clock, Calendar, Bell, Info } from "lucide-react"

export default function CumplirHorariosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="bg-green-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-green-50 to-white shadow-xl border-b border-green-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-green-800 mb-2">Cumplir Horarios</h1>
          <p className="text-green-600 text-lg">Respeta los horarios para un mejor servicio para todos</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-green-600">
          <Clock className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Importancia de Cumplir Horarios</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cumplimiento de horarios es fundamental para garantizar que todos los usuarios puedan acceder a los
            servicios de biblioteca de manera equitativa y eficiente. Respetar los horarios de préstamo, devolución y
            uso de instalaciones asegura una experiencia positiva para toda la comunidad universitaria.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Los horarios establecidos permiten una gestión adecuada de recursos, mantenimiento de instalaciones y
            atención de calidad a todos los usuarios.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <Calendar className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-6">Horarios de Biblioteca</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Horario Regular</h3>
              <div className="space-y-3 text-green-100">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-semibold">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">Época de Exámenes</h3>
              <div className="space-y-3 text-green-100">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-semibold">24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold">24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-semibold">8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Horarios de Préstamo</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Préstamo a Domicilio</h3>
                <p className="text-gray-700 text-sm mb-2">Plazo: 15 días calendario</p>
                <p className="text-gray-600 text-sm">Devolución antes de las 9:00 PM del día de vencimiento</p>
              </div>

              <div className="p-4 bg-teal-50 rounded-xl">
                <h3 className="font-semibold text-teal-800 mb-2">Préstamo Corto</h3>
                <p className="text-gray-700 text-sm mb-2">Plazo: 2-4 horas</p>
                <p className="text-gray-600 text-sm">Devolución exacta a la hora indicada en el comprobante</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl">
                <h3 className="font-semibold text-emerald-800 mb-2">Préstamo en Sala</h3>
                <p className="text-gray-700 text-sm mb-2">Durante horario de biblioteca</p>
                <p className="text-gray-600 text-sm">Devolución 30 minutos antes del cierre</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Horarios de Salas de Estudio</h2>
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 rounded-xl">
                <h3 className="font-semibold text-teal-800 mb-2">Salas Grupales</h3>
                <p className="text-gray-700 text-sm mb-2">Reserva: Bloques de 2 horas</p>
                <p className="text-gray-600 text-sm">Tolerancia de llegada: 15 minutos</p>
              </div>

              <div className="p-4 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Salas Individuales</h3>
                <p className="text-gray-700 text-sm mb-2">Reserva: Bloques de 2 horas</p>
                <p className="text-gray-600 text-sm">Tolerancia de llegada: 10 minutos</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl">
                <h3 className="font-semibold text-emerald-800 mb-2">Desalojo</h3>
                <p className="text-gray-700 text-sm mb-2">15 minutos antes del cierre</p>
                <p className="text-gray-600 text-sm">Tiempo para recoger pertenencias y salir</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <Bell className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Consecuencias del Incumplimiento</h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h3 className="font-semibold text-red-700 mb-1">Retrasos en Devoluciones</h3>
                  <p>Multa de Q5.00 por día de retraso por cada material prestado.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-1">No Presentarse a Reserva de Sala</h3>
                  <p>
                    Después de 15 minutos de tolerancia, la sala se libera. Tres ausencias resultan en suspensión
                    temporal del servicio de reservas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-1">Permanencia Fuera de Horario</h3>
                  <p>
                    Permanecer en instalaciones fuera del horario establecido puede resultar en sanciones
                    disciplinarias.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-1">Acumulación de Multas</h3>
                  <p>
                    Multas acumuladas superiores a Q100.00 resultan en suspensión de servicios hasta su liquidación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <Info className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consejos para Cumplir Horarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Configura Recordatorios</h3>
                  <p className="text-gray-600 text-sm">
                    Usa alarmas en tu teléfono para fechas de devolución y reservas
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Revisa tu Correo</h3>
                  <p className="text-gray-600 text-sm">
                    Biblioteca envía recordatorios automáticos 2 días antes del vencimiento
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Planifica con Anticipación</h3>
                  <p className="text-gray-600 text-sm">Renueva préstamos antes de que venzan si necesitas más tiempo</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Usa el Buzón 24/7</h3>
                  <p className="text-gray-600 text-sm">
                    Si no puedes devolver en horario, usa el buzón de devolución disponible siempre
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Consulta el Portal</h3>
                  <p className="text-gray-600 text-sm">
                    Verifica tus préstamos activos y fechas de vencimiento en línea
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Comunícate</h3>
                  <p className="text-gray-600 text-sm">
                    Si tienes un problema, contacta a biblioteca antes de que venza el plazo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-2">¿Qué pasa si la biblioteca cierra por emergencia?</h3>
              <p className="text-gray-700">
                En caso de cierre inesperado, las fechas de vencimiento se extienden automáticamente. Recibirás
                notificación por correo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">¿Puedo devolver materiales en otra biblioteca UVG?</h3>
              <p className="text-gray-700">
                Sí, puedes devolver en cualquier biblioteca del sistema UVG. El material se registrará automáticamente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">¿Cómo sé si la biblioteca tiene horario especial?</h3>
              <p className="text-gray-700">
                Los horarios especiales se publican en el portal de biblioteca y se envían notificaciones por correo con
                al menos una semana de anticipación.
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
