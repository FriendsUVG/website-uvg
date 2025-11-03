"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: { areas: boolean; requisitos: boolean }
  }>({})
  const [showContactModal, setShowContactModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleSection = (service: string, section: "areas" | "requisitos") => {
    setExpandedSections((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        [section]: !prev[service]?.[section],
      },
    }))
  }

  const services = {
    Admisiones: {
      areas: ["Pregrado", "Postgrado", "Educación Continua"],
      requisitos: [
        "Certificado de bachillerato",
        "Examen de admisión",
        "Documentos de identidad",
        "Fotografías tamaño carnet",
      ],
    },
    Académico: {
      areas: ["Facultades", "Programas", "Biblioteca", "Recursos"],
      requisitos: ["Matrícula vigente", "Cumplimiento académico", "Evaluaciones al día"],
    },
    Estudiantes: {
      areas: ["Bienestar", "Deportes", "Cultura", "Becas"],
      requisitos: ["Carnet estudiantil", "Estar matriculado", "Cumplir reglamentos"],
    },
    Financiero: {
      areas: ["Pagos", "Becas", "Créditos", "Facturación"],
      requisitos: ["Documentos financieros", "Comprobantes de pago", "Solicitudes formales", "Cuestionario ayuda financiera"],
    },
    Biblioteca: {
      areas: ["Catálogo", "Recursos digitales", "Salas de estudio", "Préstamos"],
      requisitos: ["Carnet vigente", "Registro en sistema", "Cumplir horarios"],
    },
    Laboratorios: {
      areas: ["Ciencias", "Computación", "Ingeniería", "Investigación"],
      requisitos: ["Autorización docente", "Normas de seguridad", "Horarios asignados"],
    },
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#admisiones") {
      setExpandedService("Admisiones")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (hash === "#academico") {
      setExpandedService("Académico")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (hash === "#estudiantes") {
      setExpandedService("Estudiantes")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (hash === "#financiero") {
      setExpandedService("Financiero")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (hash === "#biblioteca") {
      setExpandedService("Biblioteca")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (hash === "#laboratorios") {
      setExpandedService("Laboratorios")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const getEstudiantesAreaLinkColor = (area: string) => {
    if (area === "Bienestar") {
      return {
        bg: "from-pink-50 to-pink-100",
        border: "border-pink-700",
        text: "text-pink-800",
        hover: "hover:from-pink-100 hover:to-pink-200",
        icon: "text-pink-700",
      }
    } else if (area === "Deportes") {
      return {
        bg: "from-orange-50 to-orange-100",
        border: "border-orange-700",
        text: "text-orange-800",
        hover: "hover:from-orange-100 hover:to-orange-200",
        icon: "text-orange-700",
      }
    } else if (area === "Cultura") {
      return {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-700",
        text: "text-purple-800",
        hover: "hover:from-purple-100 hover:to-purple-200",
        icon: "text-purple-700",
      }
    } else if (area === "Becas") {
      return {
        bg: "from-emerald-50 to-emerald-100",
        border: "border-emerald-700",
        text: "text-emerald-800",
        hover: "hover:from-emerald-100 hover:to-emerald-200",
        icon: "text-emerald-700",
      }
    }
    return null
  }

  const getEstudiantesAreaHref = (area: string) => {
    if (area === "Bienestar") return "/bienestar"
    if (area === "Deportes") return "/deportes"
    if (area === "Cultura") return "/cultura"
    if (area === "Becas") return "/becas-estudiantes"
    return null
  }

  const getEstudiantesRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Carnet estudiantil") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (requisito === "Estar matriculado") {
      return {
        bg: "from-green-50 to-green-100",
        border: "border-green-700",
        text: "text-green-800",
        hover: "hover:from-green-100 hover:to-green-200",
        icon: "text-green-700",
      }
    } else if (requisito === "Cumplir reglamentos") {
      return {
        bg: "from-slate-50 to-slate-100",
        border: "border-slate-700",
        text: "text-slate-800",
        hover: "hover:from-slate-100 hover:to-slate-200",
        icon: "text-slate-700",
      }
    }
    return null
  }

  const getEstudiantesRequisitoHref = (requisito: string) => {
    if (requisito === "Carnet estudiantil") return "/carnet-estudiantil"
    if (requisito === "Estar matriculado") return "/estar-matriculado"
    if (requisito === "Cumplir reglamentos") return "/cumplir-reglamentos"
    return null
  }

  const getAcademicoAreaLinkColor = (area: string) => {
    if (area === "Facultades") {
      return {
        bg: "from-emerald-50 to-emerald-100",
        border: "border-emerald-700",
        text: "text-emerald-800",
        hover: "hover:from-emerald-100 hover:to-emerald-200",
        icon: "text-emerald-700",
      }
    } else if (area === "Programas") {
      return {
        bg: "from-teal-50 to-teal-100",
        border: "border-teal-700",
        text: "text-teal-800",
        hover: "hover:from-teal-100 hover:to-teal-200",
        icon: "text-teal-700",
      }
    } else if (area === "Biblioteca") {
      return {
        bg: "from-cyan-50 to-cyan-100",
        border: "border-cyan-700",
        text: "text-cyan-800",
        hover: "hover:from-cyan-100 hover:to-cyan-200",
        icon: "text-cyan-700",
      }
    } else if (area === "Recursos") {
      return {
        bg: "from-sky-50 to-sky-100",
        border: "border-sky-700",
        text: "text-sky-800",
        hover: "hover:from-sky-100 hover:to-sky-200",
        icon: "text-sky-700",
      }
    }
    return null
  }

  const getAcademicoAreaHref = (area: string) => {
    if (area === "Facultades") return "/facultades"
    if (area === "Programas") return "/programas"
    if (area === "Biblioteca") return "/biblioteca-academica"
    if (area === "Recursos") return "/recursos-academicos"
    return null
  }

  const getAcademicoRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Matrícula vigente") {
      return {
        bg: "from-emerald-50 to-emerald-100",
        border: "border-emerald-700",
        text: "text-emerald-800",
        hover: "hover:from-emerald-100 hover:to-emerald-200",
        icon: "text-emerald-700",
      }
    } else if (requisito === "Cumplimiento académico") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (requisito === "Evaluaciones al día") {
      return {
        bg: "from-violet-50 to-violet-100",
        border: "border-violet-700",
        text: "text-violet-800",
        hover: "hover:from-violet-100 hover:to-violet-200",
        icon: "text-violet-700",
      }
    }
    return null
  }

  const getAcademicoRequisitoHref = (requisito: string) => {
    if (requisito === "Matrícula vigente") return "/matricula-vigente"
    if (requisito === "Cumplimiento académico") return "/cumplimiento-academico"
    if (requisito === "Evaluaciones al día") return "/evaluaciones-al-dia"
    return null
  }

  const getRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Certificado de bachillerato") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (requisito === "Examen de admisión") {
      return {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-700",
        text: "text-purple-800",
        hover: "hover:from-purple-100 hover:to-purple-200",
        icon: "text-purple-700",
      }
    } else if (requisito === "Documentos de identidad") {
      return {
        bg: "from-teal-50 to-teal-100",
        border: "border-teal-700",
        text: "text-teal-800",
        hover: "hover:from-teal-100 hover:to-teal-200",
        icon: "text-teal-700",
      }
    } else if (requisito === "Fotografías tamaño carnet") {
      return {
        bg: "from-pink-50 to-pink-100",
        border: "border-pink-700",
        text: "text-pink-800",
        hover: "hover:from-pink-100 hover:to-pink-200",
        icon: "text-pink-700",
      }
    }
    return null
  }

  const getRequisitoHref = (requisito: string) => {
    if (requisito === "Certificado de bachillerato") return "/certificado-bachillerato"
    if (requisito === "Examen de admisión") return "/examen-admision"
    if (requisito === "Documentos de identidad") return "/documentos-identidad"
    if (requisito === "Fotografías tamaño carnet") return "/fotografias-carnet"
    return null
  }

  const getFinancieroAreaLinkColor = (area: string) => {
    if (area === "Pagos") {
      return {
        bg: "from-emerald-50 to-emerald-100",
        border: "border-emerald-700",
        text: "text-emerald-800",
        hover: "hover:from-emerald-100 hover:to-emerald-200",
        icon: "text-emerald-700",
      }
    } else if (area === "Becas") {
      return {
        bg: "from-amber-50 to-amber-100",
        border: "border-amber-700",
        text: "text-amber-800",
        hover: "hover:from-amber-100 hover:to-amber-200",
        icon: "text-amber-700",
      }
    } else if (area === "Créditos") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (area === "Facturación") {
      return {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-700",
        text: "text-purple-800",
        hover: "hover:from-purple-100 hover:to-purple-200",
        icon: "text-purple-700",
      }
    }
    return null
  }

  const getFinancieroAreaHref = (area: string) => {
    if (area === "Pagos") return "/pagos"
    if (area === "Becas") return "/becas-financiero"
    if (area === "Créditos") return "/creditos"
    if (area === "Facturación") return "/facturacion"
    return null
  }

  const getFinancieroRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Documentos financieros") {
      return {
        bg: "from-teal-50 to-teal-100",
        border: "border-teal-700",
        text: "text-teal-800",
        hover: "hover:from-teal-100 hover:to-teal-200",
        icon: "text-teal-700",
      }
    } else if (requisito === "Comprobantes de pago") {
      return {
        bg: "from-green-50 to-green-100",
        border: "border-green-700",
        text: "text-green-800",
        hover: "hover:from-green-100 hover:to-green-200",
        icon: "text-green-700",
      }
    } else if (requisito === "Solicitudes formales") {
      return {
        bg: "from-slate-50 to-slate-100",
        border: "border-slate-700",
        text: "text-slate-800",
        hover: "hover:from-slate-100 hover:to-slate-200",
        icon: "text-slate-700",
      }
    } else if (requisito === "Cuestionario ayuda financiera") {
      return {
        bg: "from-amber-50 to-amber-100",
        border: "border-amber-700",
        text: "text-amber-800",
        hover: "hover:from-amber-100 hover:to-amber-200",
        icon: "text-amber-700",
      }
    }
    return null
  }

  const getFinancieroRequisitoHref = (requisito: string) => {
    if (requisito === "Documentos financieros") return "/documentos-financieros"
    if (requisito === "Comprobantes de pago") return "/comprobantes-pago"
    if (requisito === "Solicitudes formales") return "/solicitudes-formales"
    if (requisito === "Cuestionario ayuda financiera") return "/cuestionario-ayuda-financiera"
    return null
  }

  const getBibliotecaAreaLinkColor = (area: string) => {
    if (area === "Catálogo") {
      return {
        bg: "from-indigo-50 to-indigo-100",
        border: "border-indigo-700",
        text: "text-indigo-800",
        hover: "hover:from-indigo-100 hover:to-indigo-200",
        icon: "text-indigo-700",
      }
    } else if (area === "Recursos digitales") {
      return {
        bg: "from-cyan-50 to-cyan-100",
        border: "border-cyan-700",
        text: "text-cyan-800",
        hover: "hover:from-cyan-100 hover:to-cyan-200",
        icon: "text-cyan-700",
      }
    } else if (area === "Salas de estudio") {
      return {
        bg: "from-teal-50 to-teal-100",
        border: "border-teal-700",
        text: "text-teal-800",
        hover: "hover:from-teal-100 hover:to-teal-200",
        icon: "text-teal-700",
      }
    } else if (area === "Préstamos") {
      return {
        bg: "from-amber-50 to-amber-100",
        border: "border-amber-700",
        text: "text-amber-800",
        hover: "hover:from-amber-100 hover:to-amber-200",
        icon: "text-amber-700",
      }
    }
    return null
  }

  const getBibliotecaAreaHref = (area: string) => {
    if (area === "Catálogo") return "/catalogo"
    if (area === "Recursos digitales") return "/recursos-digitales"
    if (area === "Salas de estudio") return "/salas-estudio"
    if (area === "Préstamos") return "/prestamos"
    return null
  }

  const getBibliotecaRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Carnet vigente") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (requisito === "Registro en sistema") {
      return {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-700",
        text: "text-purple-800",
        hover: "hover:from-purple-100 hover:to-purple-200",
        icon: "text-purple-700",
      }
    } else if (requisito === "Cumplir horarios") {
      return {
        bg: "from-green-50 to-green-100",
        border: "border-green-700",
        text: "text-green-800",
        hover: "hover:from-green-100 hover:to-green-200",
        icon: "text-green-700",
      }
    }
    return null
  }

  const getBibliotecaRequisitoHref = (requisito: string) => {
    if (requisito === "Carnet vigente") return "/carnet-vigente"
    if (requisito === "Registro en sistema") return "/registro-sistema"
    if (requisito === "Cumplir horarios") return "/cumplir-horarios"
    return null
  }

  const getLaboratoriosAreaLinkColor = (area: string) => {
    if (area === "Ciencias") {
      return {
        bg: "from-green-50 to-green-100",
        border: "border-green-700",
        text: "text-green-800",
        hover: "hover:from-green-100 hover:to-green-200",
        icon: "text-green-700",
      }
    } else if (area === "Computación") {
      return {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-700",
        text: "text-blue-800",
        hover: "hover:from-blue-100 hover:to-blue-200",
        icon: "text-blue-700",
      }
    } else if (area === "Ingeniería") {
      return {
        bg: "from-orange-50 to-orange-100",
        border: "border-orange-700",
        text: "text-orange-800",
        hover: "hover:from-orange-100 hover:to-orange-200",
        icon: "text-orange-700",
      }
    } else if (area === "Investigación") {
      return {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-700",
        text: "text-purple-800",
        hover: "hover:from-purple-100 hover:to-purple-200",
        icon: "text-purple-700",
      }
    }
    return null
  }

  const getLaboratoriosAreaHref = (area: string) => {
    if (area === "Ciencias") return "/laboratorios-ciencias"
    if (area === "Computación") return "/laboratorios-computacion"
    if (area === "Ingeniería") return "/laboratorios-ingenieria"
    if (area === "Investigación") return "/laboratorios-investigacion"
    return null
  }

  const getLaboratoriosRequisitoLinkColor = (requisito: string) => {
    if (requisito === "Autorización docente") {
      return {
        bg: "from-amber-50 to-amber-100",
        border: "border-amber-700",
        text: "text-amber-800",
        hover: "hover:from-amber-100 hover:to-amber-200",
        icon: "text-amber-700",
      }
    } else if (requisito === "Normas de seguridad") {
      return {
        bg: "from-red-50 to-red-100",
        border: "border-red-700",
        text: "text-red-800",
        hover: "hover:from-red-100 hover:to-red-200",
        icon: "text-red-700",
      }
    } else if (requisito === "Horarios asignados") {
      return {
        bg: "from-indigo-50 to-indigo-100",
        border: "border-indigo-700",
        text: "text-indigo-800",
        hover: "hover:from-indigo-100 hover:to-indigo-200",
        icon: "text-indigo-700",
      }
    }
    return null
  }

  const getLaboratoriosRequisitoHref = (requisito: string) => {
    if (requisito === "Autorización docente") return "/autorizacion-docente"
    if (requisito === "Normas de seguridad") return "/normas-seguridad"
    if (requisito === "Horarios asignados") return "/horarios-asignados"
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="bg-green-700 text-white py-2 px-4 md:py-3 md:px-8 shadow-lg">
        <p className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-green-50 to-white shadow-xl border-b border-green-100">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-8 gap-4 md:gap-0">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-16 h-16 md:w-28 md:h-28 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h1 className="text-xl md:text-3xl font-bold text-green-700">Bienvenidos a UVG</h1>
            <p className="text-gray-600 font-medium mt-1 text-sm md:text-base">Excelencia Académica • Innovación • Futuro</p>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-50"></div>
        <div className="relative flex items-center px-4 md:px-8 py-3 md:py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 mr-3"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-white transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="flex items-center space-x-2 md:space-x-3 md:mr-8">
            <div className="hidden md:block w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-5 h-0.5 bg-white rounded-full"></div>
              <div className="w-5 h-0.5 bg-white rounded-full absolute rotate-90"></div>
            </div>
            <span className="text-base md:text-xl font-bold text-gray-800 tracking-wide">SERVICIOS</span>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        <aside
          className={`${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static inset-y-0 left-0 w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl min-h-screen border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out md:transition-none`}
        >
          <div className="p-4 md:p-8 h-full overflow-y-auto">
            <div className="mb-4 md:mb-6 flex items-center justify-between md:block">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Servicios</h2>
                <div className="w-16 h-1 bg-green-500 rounded-full"></div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden text-gray-500 hover:text-gray-700 text-2xl font-light w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              {Object.keys(services).map((service, index) => {
                const serviceData = services[service as keyof typeof services]
                const isExpanded = expandedService === service

                return (
                  <div key={service} className="space-y-2">
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service)}
                      className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl bg-green-700 text-white font-semibold hover:bg-green-800 transition-all duration-300 text-left shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group ${isExpanded ? "ring-4 ring-green-300 ring-opacity-50" : ""
                        }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative flex items-center justify-between">
                        <span className="text-base md:text-lg font-semibold">{service}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="ml-4 space-y-3 pb-4 border-l-2 border-green-300 pl-4">
                        {/* Áreas Disponibles Dropdown */}
                        <div>
                          <button
                            onClick={() => toggleSection(service, "areas")}
                            className="w-full text-left flex items-center justify-between p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                          >
                            <span className="font-semibold text-green-800 flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              Áreas Disponibles
                            </span>
                            <svg
                              className={`w-4 h-4 text-green-700 transition-transform duration-300 ${expandedSections[service]?.areas ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedSections[service]?.areas && (
                            <div className="mt-2 space-y-1">
                              {serviceData.areas.map((area, areaIndex) => {
                                let href = null
                                if (service === "Admisiones") {
                                  if (area === "Pregrado") href = "/pregrado"
                                  else if (area === "Postgrado") href = "/postgrado"
                                  else if (area === "Educación Continua") href = "/educacion-continua"
                                } else if (service === "Académico") {
                                  href = getAcademicoAreaHref(area)
                                } else if (service === "Estudiantes") {
                                  href = getEstudiantesAreaHref(area)
                                } else if (service === "Financiero") {
                                  href = getFinancieroAreaHref(area)
                                } else if (service === "Biblioteca") {
                                  href = getBibliotecaAreaHref(area)
                                } else if (service === "Laboratorios") {
                                  href = getLaboratoriosAreaHref(area)
                                }

                                return href ? (
                                  <Link
                                    key={areaIndex}
                                    href={href}
                                    className="block p-2 rounded-md bg-white hover:bg-green-50 text-sm text-gray-700 hover:text-green-700 transition-colors"
                                  >
                                    {area}
                                  </Link>
                                ) : (
                                  <div key={areaIndex} className="block p-2 rounded-md bg-white text-sm text-gray-700">
                                    {area}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>

                        {/* Requisitos Dropdown */}
                        <div>
                          <button
                            onClick={() => toggleSection(service, "requisitos")}
                            className="w-full text-left flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                          >
                            <span className="font-semibold text-blue-800 flex items-center">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                              Requisitos
                            </span>
                            <svg
                              className={`w-4 h-4 text-blue-700 transition-transform duration-300 ${expandedSections[service]?.requisitos ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedSections[service]?.requisitos && (
                            <div className="mt-2 space-y-1">
                              {serviceData.requisitos.map((requisito, reqIndex) => {
                                let href = null
                                if (service === "Admisiones") {
                                  href = getRequisitoHref(requisito)
                                } else if (service === "Académico") {
                                  href = getAcademicoRequisitoHref(requisito)
                                } else if (service === "Estudiantes") {
                                  href = getEstudiantesRequisitoHref(requisito)
                                } else if (service === "Financiero") {
                                  href = getFinancieroRequisitoHref(requisito)
                                } else if (service === "Biblioteca") {
                                  href = getBibliotecaRequisitoHref(requisito)
                                } else if (service === "Laboratorios") {
                                  href = getLaboratoriosRequisitoHref(requisito)
                                }

                                return href ? (
                                  <Link
                                    key={reqIndex}
                                    href={href}
                                    className="block p-2 rounded-md bg-white hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-700 transition-colors"
                                  >
                                    {requisito}
                                  </Link>
                                ) : (
                                  <div key={reqIndex} className="block p-2 rounded-md bg-white text-sm text-gray-700">
                                    {requisito}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>

                        {/* Necesitas ayuda */}
                        <button
                          onClick={() => setShowContactModal(true)}
                          className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                        >
                          ¿Necesitas ayuda?
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </aside>

        <main className="flex-1 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-green-50 opacity-30"></div>

          <section className="relative p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uvg_altiplano_cover.jpg-2jCq9cl4bFFCAKV8gT1hbD94AlmhMx.jpeg"
                  alt="UVG Laboratorio - Excelencia Académica"
                  className="w-full h-auto rounded-xl md:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl md:rounded-3xl"></div>
                <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="hidden md:block absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
              </div>

              <div className="mt-4 md:mt-8 text-center">
                <blockquote className="text-lg md:text-2xl font-light text-gray-700 italic px-4">
                  "Formando líderes para transformar el mundo"
                </blockquote>
                <div className="mt-3 md:mt-4 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600 px-4">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <span>Innovación</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                    <span>Excelencia</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full"></div>
                    <span>Compromiso</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Panel lateral removido - ahora se usa dropdowns en línea */}

        {showContactModal && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
              onClick={() => setShowContactModal(false)}
            ></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-xl md:rounded-3xl shadow-2xl max-w-md w-full p-4 md:p-8 transform transition-all my-auto">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Contactar Soporte</h3>
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl md:text-3xl font-light w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert("Formulario enviado. Nos pondremos en contacto pronto.")
                    setShowContactModal(false)
                  }}
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      defaultValue={expandedService || ""}
                    >
                      <option value="">Selecciona un servicio</option>
                      {Object.keys(services).map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe tu consulta..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>

      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}
