import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Users, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HorariosAsignadosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#laboratorios">
            <Button variant="ghost" className="mb-4 hover:bg-indigo-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar a Servicios
            </Button>
          </Link>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-2">Horarios Asignados</h1>
            <p className="text-xl text-indigo-50">Sistema de reservación y gestión de horarios</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-indigo-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle className="flex items-center gap-2 text-indigo-900">
                <Clock className="h-5 w-5" />
                Sistema de Horarios
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Los laboratorios operan con un sistema de horarios asignados para garantizar el acceso equitativo y
                organizado a todos los estudiantes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reservación anticipada requerida</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Bloques de tiempo de 2-4 horas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Confirmación automática por correo</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2 text-purple-900">
                <Calendar className="h-5 w-5" />
                Horarios Disponibles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-1">Lunes a Viernes</h4>
                  <p className="text-sm text-muted-foreground">7:00 AM - 9:00 PM</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-1">Sábados</h4>
                  <p className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-1">Domingos</h4>
                  <p className="text-sm text-muted-foreground">Cerrado (excepto proyectos especiales)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservation Process */}
        <Card className="mb-8 border-indigo-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="flex items-center gap-2 text-indigo-900">
              <Users className="h-5 w-5" />
              Proceso de Reservación
            </CardTitle>
            <CardDescription>Cómo reservar tu horario en el laboratorio</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Accede al sistema de reservaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Ingresa al portal estudiantil con tus credenciales y selecciona "Reservar Laboratorio".
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Selecciona laboratorio y horario</h4>
                  <p className="text-sm text-muted-foreground">
                    Elige el laboratorio que necesitas y revisa los horarios disponibles en el calendario.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Completa la información</h4>
                  <p className="text-sm text-muted-foreground">
                    Indica el propósito de uso, curso relacionado y número de participantes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confirmación</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibirás un correo de confirmación con los detalles de tu reservación y un código QR de acceso.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types of Reservations */}
        <Card className="mb-8 border-purple-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardTitle className="text-purple-900">Tipos de Reservación</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">Práctica de Curso</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Reservaciones para prácticas programadas de cursos regulares.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Prioridad alta</li>
                  <li>• Hasta 4 horas</li>
                  <li>• Grupos de 2-5 personas</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Proyecto Personal</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Para trabajos individuales o proyectos de investigación.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Prioridad media</li>
                  <li>• Hasta 3 horas</li>
                  <li>• Individual o parejas</li>
                </ul>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">Estudio Libre</h4>
                <p className="text-sm text-muted-foreground mb-3">Acceso para estudio y práctica adicional.</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Prioridad baja</li>
                  <li>• Hasta 2 horas</li>
                  <li>• Sujeto a disponibilidad</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Rules */}
        <Card className="border-indigo-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="flex items-center gap-2 text-indigo-900">
              <AlertCircle className="h-5 w-5" />
              Políticas de Horarios
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Puntualidad:</strong> Debes llegar dentro de los primeros 15 minutos o perderás tu reservación
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Cancelaciones:</strong> Cancela con al menos 2 horas de anticipación para evitar
                  penalizaciones
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Extensiones:</strong> Puedes solicitar extensión si hay disponibilidad, máximo 1 hora
                  adicional
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Límite semanal:</strong> Máximo 12 horas de reservación por estudiante por semana
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>No-shows:</strong> Tres ausencias sin cancelación resultan en suspensión temporal del servicio
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-900">¿Listo para reservar?</h3>
              <p className="text-muted-foreground mb-4">Accede al sistema de reservaciones y asegura tu horario</p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Ir a Reservaciones
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
