"use client"

import Link from "next/link"

const data = {
  documento: "Registro Academico",
  departamento: "Registro Académico",
  institucion: "UVG Campus Altiplano",
  fecha_recopilacion: "2024",
  cuestionario: {
    pregunta_1: {
      pregunta: "¿Consultas más frecuentes?",
      respuestas: [
        {
          tipo: "Recuperación de contraseña",
          descripcion: "Cómo se hace una recuperación de contraseña",
          inconvenientes_posibles: [
            { problema: "Saturación del sistema", descripcion: "La saturación del sistema puede impedir la recuperación" },
            {
              problema: "Código de verificación no llega",
              causa: "Por la saturación del sistema",
              solucion: "El estudiante tiene que reportar al soporte técnico",
            },
          ],
        },
        {
          tipo: "Requisitos para estudiar",
          requisitos: [
            { nombre: "DPI o Partida de nacimiento", descripcion: "DPI o Partida de nacimiento del estudiante", obligatorio: true, momento: "Inicio del proceso" },
            {
              nombre: "Título",
              descripcion: "Título al ser primer ingreso",
              momento_solicitud: "Al iniciar el proceso de inscripción no se tiene",
              cuando_entregar: "Se debe dar cuando ya se tenga",
              plazo_maximo: "Si no se pide a medio año",
              importancia: "Es necesario para cuando intente solicitar un documento en el portal",
              finalidad: "Esto para quitar el estudiante provisional",
              obligatorio: true,
            },
            { nombre: "Correo electrónico personal", descripcion: "El estudiante debe tener un Correo electrónico personal", obligatorio: true },
          ],
          proceso_inscripcion: {
            modalidad: "En línea",
            seguimiento: "Se brinda un seguimiento para que todo se realiza bien",
            manejo_errores:
              "Cualquier error que se tenga se avisa y el estudiante que hacer los cambios y luego se verifica que esté bien",
            niveles_aplicables: ["Básico", "Bachillerato"],
            duracion_estimada: "15 minutos",
          },
          documentos_finales: {
            descripcion: "Después se firma un compromiso comprobante de pago y de responsabilidad",
            documentos: ["Compromiso", "Comprobante de pago", "Documento de responsabilidad"],
          },
        },
      ],
    },
    pregunta_2: {
      pregunta: "¿Confusiones más comunes?",
      respuestas: [
        {
          error: "Campos incompletos en formulario",
          descripcion:
            "En el formulario se tiene 4 campos, pero solo llenan un campo y dejan los demás campos vacíos",
          consecuencia: "Así no se puede seguir con la inscripción",
          solucion: "Se le reenvía para que lo termine de llenar",
          campos_totales: 4,
        },
        {
          error: "Selección incorrecta de carrera",
          descripcion: "A veces, se saltan sus carreras",
          ejemplo: "Si es técnico le colocan licenciatura",
          solucion: "Se avisan que llene bien sus datos",
        },
        {
          error: "Falta de información de contacto",
          descripcion: "No dejan su contacto para estar comunicados con ellas",
          impacto: "Dificulta la comunicación",
        },
      ],
    },
    pregunta_3: {
      pregunta: "¿Canal más utilizado?",
      respuesta: {
        canal_principal: "WhatsApp",
        requisitos_comunicacion: {
          informacion_requerida: ["Número de carnet", "Nombre", "Carrera"],
          finalidad: "Para saber qué estudiante es",
          formato_presentacion:
            "Tienen que presentarse brindando su número de carnet, nombre y carrera",
        },
      },
    },
    pregunta_4: {
      pregunta: "¿Tiempo de inscribirse?",
      respuesta: {
        descripcion: "Está dividido en 2 periodos",
        periodos: [
          { periodo: 1, fecha_inicio: "1 de enero", fecha_fin: "31 de enero", meses: ["enero"] },
          { periodo: 2, fecha_inicio: "1 de julio", fecha_fin: "31 de julio", meses: ["julio"] },
        ],
        estado_otros_meses: "Los demás meses del año está cerrado",
        meses_cerrados: [
          "febrero",
          "marzo",
          "abril",
          "mayo",
          "junio",
          "agosto",
          "septiembre",
          "octubre",
          "noviembre",
          "diciembre",
        ],
      },
    },
  },
}

export default function RegistroAcademicoPreguntasFrecuentesPage() {
  const consultas = data.cuestionario.pregunta_1.respuestas
  const confusiones = data.cuestionario.pregunta_2.respuestas

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-14 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link href="/registro-academico" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Registro Académico
          </Link>
          <h1 className="text-5xl font-bold mb-2">Preguntas frecuentes</h1>
          <p className="text-blue-100">Departamento de Registro Académico</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12 space-y-10">
        <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Consultas más frecuentes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {consultas.map((c: any, idx: number) => (
              <div key={idx} className="border border-blue-200 dark:border-blue-900/40 rounded-xl p-4 bg-blue-50 dark:bg-slate-800/60">
                <h3 className="font-semibold text-blue-900">{c.tipo}</h3>
                {c.descripcion && <p className="text-blue-800 dark:text-blue-100 text-sm">{c.descripcion}</p>}
                {c.inconvenientes_posibles && (
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-100 text-sm mt-2">
                    {c.inconvenientes_posibles.map((i: any, j: number) => (
                      <li key={j}>{i.problema}: {i.descripcion || i.solucion}</li>
                    ))}
                  </ul>
                )}
                {c.requisitos && (
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-100 text-sm mt-2">
                    {c.requisitos.map((r: any, j: number) => (
                      <li key={j}>{r.nombre} - {r.descripcion}</li>
                    ))}
                  </ul>
                )}
                {c.proceso_inscripcion && (
                  <div className="text-blue-800 dark:text-blue-100 text-sm mt-2">
                    <p>Modalidad: {c.proceso_inscripcion.modalidad}</p>
                    <p>Duración estimada: {c.proceso_inscripcion.duracion_estimada}</p>
                    <p>Niveles: {c.proceso_inscripcion.niveles_aplicables.join(", ")}</p>
                  </div>
                )}
                {c.documentos_finales && (
                  <div className="text-blue-800 dark:text-blue-100 text-sm mt-2">
                    <p>{c.documentos_finales.descripcion}</p>
                    <p>Documentos: {c.documentos_finales.documentos.join(", ")}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Confusiones comunes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {confusiones.map((c: any, idx: number) => (
              <div key={idx} className="border border-indigo-200 dark:border-indigo-900/40 rounded-xl p-4 bg-indigo-50 dark:bg-slate-800/60">
                <h3 className="font-semibold text-indigo-900">{c.error}</h3>
                <p className="text-indigo-800 dark:text-indigo-100 text-sm">{c.descripcion}</p>
                {c.consecuencia && <p className="text-indigo-700 dark:text-indigo-200 text-xs mt-1">Consecuencia: {c.consecuencia}</p>}
                {c.solucion && <p className="text-indigo-700 dark:text-indigo-200 text-xs">Solución: {c.solucion}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Canal más utilizado</h2>
            <p className="text-blue-900 dark:text-blue-200">WhatsApp</p>
            <p className="text-blue-800 dark:text-blue-100 text-sm">Identificación requerida: Número de carnet, nombre y carrera.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Tiempo de inscribirse</h2>
            <p className="text-blue-900 dark:text-blue-200">Dos periodos: Enero y Julio</p>
            <p className="text-blue-800 dark:text-blue-100 text-sm">Resto del año: Cerrado</p>
          </div>
        </section>
      </main>
    </div>
  )
}


