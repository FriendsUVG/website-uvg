"use client"

import Link from "next/link"
import { UserCheck, Key, Shield, Settings } from "lucide-react"

export default function RegistroSistemaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="bg-purple-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link
            href="/#biblioteca"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Biblioteca
          </Link>
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Registro en Sistema</h1>
          <p className="text-purple-600 text-lg">Activa tu cuenta para acceder a servicios digitales</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-purple-600">
          <UserCheck className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Por Qué Necesitas Registrarte?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El registro en el sistema de biblioteca es esencial para acceder a recursos digitales, renovar préstamos en
            línea, reservar salas de estudio y gestionar tu cuenta desde cualquier lugar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Este proceso de registro único te da acceso completo a todos los servicios digitales de la biblioteca las 24
            horas del día, los 7 días de la semana.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Proceso de Registro</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Accede al Portal</h3>
                  <p className="text-purple-100">
                    Visita el portal de biblioteca en biblioteca.uvg.edu.gt y haz clic en "Crear Cuenta"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Ingresa tus Datos</h3>
                  <p className="text-purple-100">
                    Completa el formulario con tu número de carnet, correo institucional y datos personales
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Verifica tu Correo</h3>
                  <p className="text-purple-100">
                    Recibirás un correo de verificación. Haz clic en el enlace para activar tu cuenta
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Crea tu Contraseña</h3>
                  <p className="text-purple-100">
                    Establece una contraseña segura siguiendo los requisitos de seguridad del sistema
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-600">
            <Key className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requisitos de Contraseña</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Mínimo 8 caracteres</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Al menos una letra mayúscula</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Al menos una letra minúscula</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Al menos un número</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Al menos un carácter especial (@, #, $, etc.)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-600">
            <Shield className="w-12 h-12 text-pink-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seguridad de tu Cuenta</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>No compartas tu contraseña</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Cambia tu contraseña periódicamente</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Cierra sesión en computadoras públicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Reporta actividad sospechosa</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Usa autenticación de dos factores si está disponible</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <Settings className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Servicios Disponibles con tu Cuenta</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="font-bold text-purple-800 mb-2">Gestión de Préstamos</h3>
              <p className="text-gray-700 text-sm">Consulta, renueva y gestiona tus préstamos activos</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-pink-800 mb-2">Reservas en Línea</h3>
              <p className="text-gray-700 text-sm">Reserva materiales y salas de estudio desde cualquier lugar</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-bold text-indigo-800 mb-2">Recursos Digitales</h3>
              <p className="text-gray-700 text-sm">Acceso remoto a bases de datos y bibliotecas virtuales</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="font-bold text-purple-800 mb-2">Historial Personal</h3>
              <p className="text-gray-700 text-sm">Consulta tu historial de préstamos y favoritos</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-pink-800 mb-2">Notificaciones</h3>
              <p className="text-gray-700 text-sm">Recibe alertas de vencimientos y nuevos recursos</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-bold text-indigo-800 mb-2">Perfil Personalizado</h3>
              <p className="text-gray-700 text-sm">Guarda búsquedas y crea listas de lectura</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-800 mb-2">¿Qué hago si olvidé mi contraseña?</h3>
              <p className="text-gray-700">
                Haz clic en "Olvidé mi contraseña" en la página de inicio de sesión. Recibirás un enlace para
                restablecerla en tu correo institucional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800 mb-2">¿Puedo cambiar mi correo electrónico registrado?</h3>
              <p className="text-gray-700">
                Sí, puedes actualizar tu correo desde la configuración de tu perfil. Deberás verificar el nuevo correo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800 mb-2">¿El registro tiene algún costo?</h3>
              <p className="text-gray-700">
                No, el registro en el sistema de biblioteca es completamente gratuito para todos los estudiantes
                activos.
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
