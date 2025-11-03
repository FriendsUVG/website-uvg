"use client"

import { useState } from "react"
import Link from "next/link"

type Requisito = {
  nombre: string
  descripcion: string
  obligatorio?: boolean
  tiempo?: string
  proceso?: string
  tiempo_requerido?: string
  finalidades?: string[]
}

type Tema = {
  tema: string
  pregunta: string
  requisitos?: Requisito[]
  proceso?: any
  tiempo_minimo_aviso?: any
}

const data = {
  documento: "Asuntos Estudiantiles",
  departamento: "Asuntos Estudiantiles",
  institucion: "UVG Campus Altiplano",
  fecha_recopilacion: "2024",
  descripcion_departamento:
    "Este departamento tiene todo lo relacionado a la experiencia del estudiante, organiza dinámica para que el estudiante tenga una mejor estadía. Con clubes y actividades",
  cuestionario: {
    pregunta_1: {
      pregunta: "¿Preguntas que realizan?",
      respuestas: [
        {
          tema: "Organización de clubes",
          pregunta: "Cómo se organizan los clubes",
          requisitos: [
            { nombre: "Grupo organizado", descripcion: "Se necesita un grupo bien organizado", obligatorio: true },
            { nombre: "Definición del fin", descripcion: "Cuál es el fin del club", obligatorio: true },
            { nombre: "Días de reunión", descripcion: "Qué días se van a reunir", obligatorio: true },
            { nombre: "Cronograma", descripcion: "Un cronograma completo", obligatorio: true },
            {
              nombre: "Actividades por reunión",
              descripcion: "Las actividades que realizarán en cada día de reunión",
              obligatorio: true,
            },
          ],
          proceso: {
            supervision: {
              responsable: "La encargada de este departamento",
              accion: "Llevará un monitoreo para ver si se está cumpliendo sus metas",
              consecuencias: [
                { nivel: 1, accion: "Se les llamará la atención" },
                { nivel: 2, condicion: "Si no se hace caso", accion: "Ya no se tomará en cuenta ese club" },
              ],
            },
            duracion: {
              tiempo_estimado: "Alrededor de un mes aproximado",
              variabilidad: "O menos dependiendo del grupo de estudiantes",
            },
            aspectos_organizacion: [
              "Cuántos participantes se necesitan",
              "Cuántos tienen que reclutar",
              "Sugerencias de actividades para que el club sea muy productivo",
            ],
          },
        },
        {
          tema: "Organización de actividades",
          pregunta: "Cómo se organiza una actividad",
          requisitos: [
            { nombre: "Organización del grupo", descripcion: "El grupo de estudiantes debe organizarla bien", obligatorio: true },
            { nombre: "Motivo de realización", descripcion: "Dar el motivo de su realización", obligatorio: true },
            {
              nombre: "Aviso anticipado",
              tiempo: "Un mes de anticipación",
              descripcion: "Debe ser avisada con un mes de anticipación",
              obligatorio: true,
              finalidades: ["Solicitar salones", "Solicitar espacios", "Solicitar premios que se necesiten en la actividad"],
            },
            {
              nombre: "Permisos",
              descripcion: "Realizar permisos de las personas que participen en la actividad",
              proceso: "Dándosela a conocer a los directores de las facultades",
              tiempo_requerido: "Un mes de anticipación o antes",
            },
          ],
          tiempo_minimo_aviso: {
            valor: 1,
            unidad: "mes",
            flexibilidad: "O antes",
            obligatorio: true,
            nota: "Cualquier evento tiene que ser avisado con este tiempo de anticipación o antes",
          },
        },
      ] as Tema[],
      resolucion_conflictos: {
        descripcion:
          "En estos dos puntos si se llega a tener un inconveniente se llega a solucionar de la mejor manera hablando civilizadamente",
        metodo: "Diálogo civilizado",
      },
    },
    pregunta_2: {
      pregunta: "¿Canal usado?",
      respuesta: {
        canal_principal: "WhatsApp",
        descripcion: "La mayor parte se trabaja por WhatsApp",
        uso_clubes: {
          proceso: "Al crear un club la encargada del departamento se agrega al grupo",
          comunicacion: "Monitoreo y seguimiento por WhatsApp",
        },
        uso_actividades: {
          proceso: "Para las actividades se pueden arreglar los detalles por ese medio",
        },
      },
    },
  },
}

export default function AsuntosEstudiantilesPage() {
  const temas: Tema[] = data.cuestionario.pregunta_1.respuestas
  const [temaSeleccionado, setTemaSeleccionado] = useState<string>(temas[0]?.tema || "")
  const tema = temas.find((t) => t.tema === temaSeleccionado)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-slate-900 dark:to-emerald-950">
      <header className="bg-gradient-to-r from-emerald-700 to-green-700 text-white py-14 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link href="/#academico" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Académico
          </Link>
          <h1 className="text-5xl font-bold mb-2">{data.documento}</h1>
          <p className="text-emerald-100">{data.descripcion_departamento}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 space-y-2">
            {temas.map((t) => (
              <button
                key={t.tema}
                onClick={() => setTemaSeleccionado(t.tema)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                  temaSeleccionado === t.tema
                    ? "bg-emerald-600 text-white border-emerald-700"
                    : "bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50 dark:bg-slate-900 dark:text-emerald-100 dark:border-emerald-900/40 dark:hover:bg-slate-800"
                }`}
              >
                {t.tema}
              </button>
            ))}
          </aside>

          <section className="md:col-span-3">
            {tema && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-1">{tema.tema}</h2>
                  <p className="text-emerald-100">{tema.pregunta}</p>
                </div>
                <div className="p-6 space-y-8">
                  {tema.requisitos && (
                    <div>
                      <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-3">Requisitos</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {tema.requisitos.map((r, idx) => (
                          <li key={idx} className="p-4 rounded-lg border border-emerald-200 bg-emerald-50 dark:bg-slate-800/60 dark:border-emerald-900/40">
                            <p className="font-semibold text-emerald-900 dark:text-emerald-200">{r.nombre}</p>
                            <p className="text-emerald-800 dark:text-emerald-100 text-sm">{r.descripcion}</p>
                            {r.tiempo && <p className="text-emerald-700 text-xs mt-1">Tiempo: {r.tiempo}</p>}
                            {r.tiempo_requerido && (
                              <p className="text-emerald-700 text-xs mt-1">Tiempo requerido: {r.tiempo_requerido}</p>
                            )}
                            {r.finalidades && r.finalidades.length > 0 && (
                              <ul className="list-disc list-inside text-emerald-800 dark:text-emerald-100 text-sm mt-1">
                                {r.finalidades.map((f, i) => (
                                  <li key={i}>{f}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tema.proceso && (
                    <div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-3">Proceso</h3>
                      <div className="space-y-2 text-emerald-900">
                        {tema.tema === "Organización de clubes" && (
                          <div className="space-y-2">
                            <p className="font-semibold">Supervisión</p>
                            <p className="text-sm text-emerald-800">
                              Responsable: {tema.proceso.supervision.responsable}. {tema.proceso.supervision.accion}.
                            </p>
                            <ul className="list-disc list-inside text-sm text-emerald-800">
                              {tema.proceso.supervision.consecuencias.map((c: any, i: number) => (
                                <li key={i}>{c.accion}</li>
                              ))}
                            </ul>
                            <p className="font-semibold mt-3">Duración</p>
                            <p className="text-sm text-emerald-800">
                              {tema.proceso.duracion.tiempo_estimado}. {tema.proceso.duracion.variabilidad}.
                            </p>
                            <p className="font-semibold mt-3">Aspectos de organización</p>
                            <ul className="list-disc list-inside text-sm text-emerald-800">
                              {tema.proceso.aspectos_organizacion.map((a: string, i: number) => (
                                <li key={i}>{a}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {tema.tema === "Organización de actividades" && (
                          <div className="space-y-2">
                            {tema.tiempo_minimo_aviso && (
                              <p className="text-sm text-emerald-800">
                                Aviso mínimo: {tema.tiempo_minimo_aviso.valor} {tema.tiempo_minimo_aviso.unidad} ({
                                  tema.tiempo_minimo_aviso.flexibilidad
                                }). {tema.tiempo_minimo_aviso.nota}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>

        <div className="mt-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Canal de comunicación</h3>
            <p className="text-emerald-900">Principal: WhatsApp</p>
            <p className="text-emerald-800 text-sm">{data.cuestionario.pregunta_2.respuesta.descripcion}</p>
          </div>
        </div>
      </main>
    </div>
  )
}


