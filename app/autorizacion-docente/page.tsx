import Link from "next/link"
import { ArrowLeft, CheckCircle, FileText, Users, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AutorizacionDocentePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#laboratorios">
            <Button variant="ghost" className="mb-4 hover:bg-amber-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar a Servicios
            </Button>
          </Link>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-2">Autorización Docente</h1>
            <p className="text-xl text-amber-50">Requisito para acceso a laboratorios</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-amber-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <FileText className="h-5 w-5" />
                ¿Qué es la Autorización Docente?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Es el permiso oficial otorgado por un profesor para que los estudiantes puedan acceder y utilizar los
                laboratorios de la universidad.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Válida para el curso específico</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Incluye horarios autorizados</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Especifica equipos permitidos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Users className="h-5 w-5" />
                ¿Quién puede autorizar?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-1">Profesores del curso</h4>
                  <p className="text-sm text-muted-foreground">
                    Autorizan para prácticas de laboratorio relacionadas con su materia
                  </p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-1">Coordinadores de laboratorio</h4>
                  <p className="text-sm text-muted-foreground">Gestionan el acceso general y proyectos especiales</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-1">Directores de carrera</h4>
                  <p className="text-sm text-muted-foreground">Autorizan proyectos de investigación y tesis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Section */}
        <Card className="mb-8 border-amber-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Clock className="h-5 w-5" />
              Proceso de Autorización
            </CardTitle>
            <CardDescription>Pasos para obtener tu autorización</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Solicitud al docente</h4>
                  <p className="text-sm text-muted-foreground">
                    Contacta a tu profesor para solicitar acceso al laboratorio, indicando el propósito y horarios
                    necesarios.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Registro en el sistema</h4>
                  <p className="text-sm text-muted-foreground">
                    El docente registra tu autorización en el sistema de gestión de laboratorios.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confirmación</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibes un correo de confirmación con los detalles de tu autorización y horarios permitidos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Acceso al laboratorio</h4>
                  <p className="text-sm text-muted-foreground">
                    Presenta tu carnet estudiantil en el laboratorio durante los horarios autorizados.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="border-orange-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <AlertCircle className="h-5 w-5" />
              Información Importante
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Vigencia:</strong> La autorización es válida únicamente para el semestre actual
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Horarios:</strong> Debes respetar estrictamente los horarios autorizados
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Responsabilidad:</strong> Eres responsable del equipo utilizado durante tu sesión
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Cancelación:</strong> Si no puedes asistir, notifica con anticipación para liberar el espacio
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2 text-amber-900">¿Necesitas autorización?</h3>
              <p className="text-muted-foreground mb-4">Contacta a tu profesor o al coordinador del laboratorio</p>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Contactar Coordinación
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
