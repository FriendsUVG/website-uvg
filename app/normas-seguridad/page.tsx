import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle, FileWarning } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NormasSeguridadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#laboratorios">
            <Button variant="ghost" className="mb-4 hover:bg-red-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar a Servicios
            </Button>
          </Link>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-2">Normas de Seguridad</h1>
            <p className="text-xl text-red-50">Requisitos obligatorios para el uso de laboratorios</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="flex items-center gap-2 text-red-900">
                <Shield className="h-5 w-5" />
                Normas Generales
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Usar bata de laboratorio en todo momento</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Utilizar gafas de seguridad cuando sea necesario</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Mantener el área de trabajo limpia y ordenada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Conocer la ubicación de equipos de emergencia</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reportar inmediatamente cualquier incidente</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <XCircle className="h-5 w-5" />
                Prohibiciones
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consumir alimentos o bebidas en el laboratorio</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Usar dispositivos móviles durante prácticas</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Manipular equipos sin autorización</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Trabajar solo sin supervisión</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Bloquear salidas de emergencia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Equipment */}
        <Card className="mb-8 border-red-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
            <CardTitle className="flex items-center gap-2 text-red-900">
              <FileWarning className="h-5 w-5" />
              Equipo de Protección Personal (EPP)
            </CardTitle>
            <CardDescription>Equipo obligatorio según el tipo de laboratorio</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Laboratorios de Química</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Bata de laboratorio</li>
                  <li>• Gafas de seguridad</li>
                  <li>• Guantes de nitrilo</li>
                  <li>• Zapatos cerrados</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Laboratorios de Física</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Bata de laboratorio</li>
                  <li>• Gafas de protección</li>
                  <li>• Zapatos cerrados</li>
                  <li>• Guantes (según práctica)</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Laboratorios de Biología</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Bata de laboratorio</li>
                  <li>• Guantes desechables</li>
                  <li>• Mascarilla (si necesario)</li>
                  <li>• Zapatos cerrados</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Procedures */}
        <Card className="mb-8 border-orange-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <AlertTriangle className="h-5 w-5" />
              Procedimientos de Emergencia
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-red-600 bg-red-50">
                <h4 className="font-semibold text-red-900 mb-2">En caso de incendio</h4>
                <p className="text-sm text-muted-foreground">
                  Activar la alarma, evacuar ordenadamente, usar extintores solo si es seguro, y reunirse en el punto de
                  encuentro designado.
                </p>
              </div>
              <div className="p-4 border-l-4 border-orange-600 bg-orange-50">
                <h4 className="font-semibold text-orange-900 mb-2">Derrame de químicos</h4>
                <p className="text-sm text-muted-foreground">
                  Alertar al personal, aislar el área, usar kit de derrames, ventilar el espacio y reportar al
                  coordinador.
                </p>
              </div>
              <div className="p-4 border-l-4 border-red-600 bg-red-50">
                <h4 className="font-semibold text-red-900 mb-2">Lesiones personales</h4>
                <p className="text-sm text-muted-foreground">
                  Notificar inmediatamente, usar estación de lavado de ojos si es necesario, aplicar primeros auxilios y
                  contactar servicios médicos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-red-200 shadow-md">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
            <CardTitle className="text-red-900">Compromiso de Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Al utilizar los laboratorios de la universidad, te comprometes a:
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Cumplir todas las normas de seguridad establecidas</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Participar en las capacitaciones de seguridad obligatorias</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Reportar cualquier condición insegura o incidente</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Respetar las instrucciones del personal de laboratorio</p>
              </div>
            </div>
            <div className="bg-red-100 border border-red-300 rounded-lg p-4">
              <p className="text-sm text-red-900 font-semibold">
                ⚠️ El incumplimiento de las normas de seguridad puede resultar en la suspensión del acceso a los
                laboratorios.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2 text-red-900">¿Dudas sobre seguridad?</h3>
              <p className="text-muted-foreground mb-4">Consulta con el coordinador de seguridad del laboratorio</p>
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Contactar Seguridad
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
