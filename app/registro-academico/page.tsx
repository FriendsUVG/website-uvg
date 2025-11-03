"use client"

import { useState } from "react"
import Link from "next/link"

type PreguntaItem = {
  titulo: string
  contenido: JSX.Element
}

export default function RegistroAcademicoPage() {
  const items: PreguntaItem[] = [
    {
      titulo: "¿Consultas más frecuentes?",
      contenido: (
        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
            <h3 className="font-semibold text-blue-900">Recuperación de contraseña</h3>
            <p className="text-blue-800 text-sm">Cómo se hace una recuperación de contraseña</p>
            <ul className="list-disc list-inside text-blue-800 text-sm mt-2">
              <li>Saturación del sistema: puede impedir la recuperación</li>
              <li>Código de verificación no llega: reportar a soporte técnico</li>
            </ul>
          </div>
          <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
            <h3 className="font-semibold text-blue-900">Requisitos para estudiar</h3>
            <ul className="list-disc list-inside text-blue-800 text-sm">
              <li>DPI o Partida de nacimiento (obligatorio)</li>
              <li>Título de primer ingreso (entregar cuando se obtenga; quita estado provisional)</li>
              <li>Correo electrónico personal (obligatorio)</li>
            </ul>
            <div className="text-blue-800 text-sm mt-2">
              <p>Modalidad: En línea</p>
              <p>Duración estimada: 15 minutos</p>
              <p>Niveles: Básico, Bachillerato</p>
            </div>
            <div className="text-blue-800 text-sm mt-2">
              <p>Documentos finales: Compromiso, Comprobante de pago, Documento de responsabilidad</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      titulo: "¿Confusiones más comunes?",
      contenido: (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50">
            <h3 className="font-semibold text-indigo-900">Campos incompletos en formulario</h3>
            <p className="text-indigo-800 text-sm">Hay 4 campos y solo llenan 1; no se puede continuar. Solución: reenviar para completar.</p>
          </div>
          <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50">
            <h3 className="font-semibold text-indigo-900">Selección incorrecta de carrera</h3>
            <p className="text-indigo-800 text-sm">Ejemplo: técnico marcado como licenciatura. Solución: corregir datos.</p>
          </div>
          <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50 sm:col-span-2">
            <h3 className="font-semibold text-indigo-900">Falta de información de contacto</h3>
            <p className="text-indigo-800 text-sm">Dificulta la comunicación. Solicitar datos de contacto.</p>
          </div>
        </div>
      ),
    },
    {
      titulo: "¿Canal más utilizado?",
      contenido: (
        <div className="bg-white rounded-xl border border-blue-200 p-4">
          <p className="text-blue-900 font-semibold">WhatsApp</p>
          <p className="text-blue-800 text-sm">Para identificarse: Número de carnet, Nombre completo y Carrera.</p>
        </div>
      ),
    },
    {
      titulo: "¿Tiempo de inscribirse?",
      contenido: (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-blue-200 p-4">
            <p className="text-blue-900 font-semibold">Periodos abiertos</p>
            <ul className="list-disc list-inside text-blue-800 text-sm mt-1">
              <li>Enero (1-31)</li>
              <li>Julio (1-31)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-blue-200 p-4">
            <p className="text-blue-900 font-semibold">Resto del año</p>
            <p className="text-blue-800 text-sm">Cerrado (febrero, marzo, abril, mayo, junio, agosto, septiembre, octubre, noviembre, diciembre)</p>
          </div>
        </div>
      ),
    },
  ]

  const [seleccion, setSeleccion] = useState<number>(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950">
      <header className="bg-gradient-to-r from-sky-700 to-blue-700 text-white py-14 px-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link href="/#academico" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a Académico
          </Link>
          <h1 className="text-5xl font-bold mb-2">Registro Académico</h1>
          <p className="text-blue-100">Consultas, requisitos y guía de inscripción</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 space-y-2">
            {items.map((it, idx) => (
              <button
                key={idx}
                onClick={() => setSeleccion(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                  seleccion === idx
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-white text-blue-800 border-blue-200 hover:bg-blue-50 dark:bg-slate-900 dark:text-blue-100 dark:border-blue-900/40 dark:hover:bg-slate-800"
                }`}
              >
                {it.titulo}
              </button>
            ))}
          </aside>

          <section className="md:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold">{items[seleccion].titulo}</h2>
              </div>
              <div className="p-6">
                {items[seleccion].contenido}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}


