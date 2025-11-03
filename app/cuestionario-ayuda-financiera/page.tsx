import Link from "next/link"

export default function CuestionarioAyudaFinancieraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="bg-amber-700 text-white py-3 px-8 shadow-lg">
        <p className="text-center text-sm font-semibold tracking-wide uppercase">
          Universidad del Valle Campus Altiplano
        </p>
      </div>

      <header className="bg-gradient-to-r from-white via-amber-50 to-white shadow-xl border-b border-amber-100">
        <div className="flex items-center justify-between px-8 py-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-czfwJkJ5H6d01rYjF5qaFS89cvErti.png"
                alt="UVG Logo"
                className="w-28 h-28 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-amber-700">Cuestionario Ayudas Financieras</h1>
            <p className="text-gray-600 font-medium mt-1">Requisitos • Proceso • Información</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/#financiero"
          className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Regresar a Financiero
        </Link>

        {/* Información General */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cuestionario Ayudas Financieras</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-gray-600 font-semibold mb-1">Departamento:</p>
                <p className="text-gray-800 text-lg">Ayudas Financieras</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold mb-1">Institución:</p>
                <p className="text-gray-800 text-lg">UVG Campus Altiplano</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold mb-1">Fecha de recopilación:</p>
                <p className="text-gray-800 text-lg">2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pregunta 1: Consultas más frecuentes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-amber-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-amber-700 font-bold text-lg">1</span>
            </div>
            Consultas más frecuentes
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            <span className="font-semibold">Pregunta:</span> ¿Cuáles son las consultas más frecuentes que reciben de los estudiantes?
          </p>
          <p className="text-gray-700 mb-8 text-lg">
            <span className="font-semibold">Respuesta:</span> Se preguntan mucho sobre los requisitos de una beca
          </p>

          {/* Requisitos de Beca */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Requisitos de Beca</h4>
            
            {/* Inscripción */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                <h5 className="text-lg font-bold text-gray-800">Inscripción</h5>
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Obligatorio</span>
              </div>
              <p className="text-gray-700 ml-6">Estudiante tiene que estar inscrito para tener acceso e ingresar a la plataforma</p>
            </div>

            {/* Formulario en línea */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                <h5 className="text-lg font-bold text-gray-800">Formulario en línea</h5>
                <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Frecuencia: Anual</span>
              </div>
              <p className="text-gray-700 ml-6 mb-4">Llenar un formulario en línea cada año</p>
              
              <div className="ml-6 grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-3">Primer Ingreso</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">Se le da una inducción</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">Es más supervisado</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">Se facilita una guía del paso a paso</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">Se proporciona un enlace para llenarlo</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-3">Reingreso</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">Pueden preguntar</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm">No se presenta que sea tan recurrente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Documentos requeridos */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                <h5 className="text-lg font-bold text-gray-800">Documentos requeridos</h5>
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Formato: PDF</span>
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Obligatorio</span>
              </div>
              <p className="text-gray-700 ml-6 mb-4 italic">Todo esto se envía y es obligatorio darlo</p>
              
              <div className="ml-6 space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Personal
                  </h6>
                  <ul className="ml-4 space-y-1">
                    <li className="text-gray-700 text-sm">• Documentos de identificación del estudiante</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Económica
                  </h6>
                  <ul className="ml-4 space-y-1">
                    <li className="text-gray-700 text-sm">• Información económica</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Identificación de padres o encargados
                  </h6>
                  <p className="text-gray-600 text-xs mb-2 ml-4 italic">No importando si el estudiante es mayor o menor de edad</p>
                  <ul className="ml-4 space-y-1">
                    <li className="text-gray-700 text-sm">• Documentos de identificación de padres o encargados</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-2 border-pink-300">
                  <h6 className="font-bold text-gray-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    Estudiante casado/a
                  </h6>
                  <p className="text-gray-600 text-xs mb-2 ml-4 italic">Si está casado/a</p>
                  <ul className="ml-4 space-y-1">
                    <li className="text-gray-700 text-sm">• Documento de identificación del o la cónyuge</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2 ml-4 italic font-semibold">Nota: Ya no es necesario el de los padres</p>
                </div>
              </div>
            </div>

            {/* Mantenimiento de beca */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                <h5 className="text-lg font-bold text-gray-800">Mantenimiento de beca</h5>
              </div>
              <div className="ml-6 space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="font-bold text-gray-800">Promedio académico:</span>
                    <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">Mínimo 75</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-4">Mantener el promedio que exige la Universidad</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="font-bold text-gray-800">Aprobación de cursos:</span>
                    <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Obligatorio</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-4">Obligatoriamente se tiene que aprobar todos los cursos</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="font-bold text-gray-800">Horas de beca:</span>
                    <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">10 horas por ciclo</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-4">Cumplir 10 horas de beca por ciclo</p>
                </div>
              </div>
            </div>

            {/* Contrato */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                <h5 className="text-lg font-bold text-gray-800">Contrato</h5>
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">Obligatorio</span>
              </div>
              <p className="text-gray-700 ml-6">Se firma el contrato de beca</p>
            </div>
          </div>
        </div>

        {/* Pregunta 2: Actividad que lleva más tiempo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-orange-700 font-bold text-lg">2</span>
            </div>
            ¿Qué le lleva más tiempo hacer?
          </h3>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
            <p className="font-bold text-gray-800 text-lg mb-4">Actividad: Revisar los formularios</p>
            <p className="text-gray-700 mb-4">Revisar los formularios para que los datos estén bien y que esté toda la documentación</p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <h5 className="font-bold text-gray-800 mb-3">Proceso:</h5>
              <ol className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">1.</span>
                  <span className="text-gray-700">Si no está bien se reenvía con las correcciones correspondientes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">2.</span>
                  <span className="text-gray-700">Estudiante realiza las correcciones</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">3.</span>
                  <span className="text-gray-700">Se vuelven a enviar</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">4.</span>
                  <span className="text-gray-700">Se verifica si está bien</span>
                </li>
              </ol>
            </div>
            <p className="text-gray-700 italic">Impacto: Esto quita tiempo al personal de ayuda financiera</p>
          </div>
        </div>

        {/* Pregunta 3: Errores comunes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-red-700 font-bold text-lg">3</span>
            </div>
            ¿Errores que se cometen?
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <span className="text-gray-800 font-semibold">No ingresan correctamente datos financieros de ellos o de los padres</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <span className="text-gray-800 font-semibold">Ingreso de información personal económica o identificación incompleto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pregunta 4: Tipo de información */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold text-lg">4</span>
            </div>
            ¿Qué tipo de información debería estar?
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h5 className="font-bold text-gray-800 text-lg">Guía</h5>
              </div>
              <p className="text-gray-700 ml-6">La guía del proceso</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h5 className="font-bold text-gray-800 text-lg">Fechas</h5>
              </div>
              <p className="text-gray-700 ml-6 mb-3">Fechas en la que se puede realizar esto</p>
              <p className="text-gray-600 text-sm ml-6 mb-3">
                <span className="font-semibold">Disponibilidad:</span> Por lo regular se puede tener la información durante todo el año
              </p>
              <div className="ml-6">
                <p className="text-gray-700 font-semibold mb-2">Periodos intensivos:</p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></div>
                    <span className="text-gray-700 text-sm">Al principio del año</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></div>
                    <span className="text-gray-700 text-sm">Al final del año</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pregunta 5: FAQ */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-purple-700 font-bold text-lg">5</span>
            </div>
            ¿Preguntas frecuentes (FAQ)?
          </h3>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Descripción:</span> Las preguntas son casi sobre los requisitos
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Especificidad:</span> No hay una en específico
            </p>
          </div>
        </div>

        {/* Pregunta 6: Canal más utilizado */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-green-700 font-bold text-lg">6</span>
            </div>
            ¿Canal más utilizado?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h5 className="font-bold text-gray-800 text-lg mb-2 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                WhatsApp
              </h5>
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Uso:</span> Si es pregunta
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Ventaja:</span> Es más fácil
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
              <h5 className="font-bold text-gray-800 text-lg mb-2 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Correo electrónico
              </h5>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Uso:</span> Documentos formales se envían por correo
              </p>
            </div>
          </div>
        </div>

        {/* Requisitos de Documentos - Imagen */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">AYUDAS FINANCIERAS - UVG CAMPUS ALTIPLANO</h3>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Requisitos</h4>
            <p className="text-gray-700 mb-6">
              Llenar formulario de ayuda financiera en línea, después de estar inscrito en UVG
            </p>
            
            <h5 className="font-bold text-gray-800 mb-4">Subir imágenes de los siguientes documentos:</h5>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h6 className="font-bold text-gray-800 mb-3 text-lg">Solicitante (Estudiante)</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">DPI de ambos lados o partida de nacimiento si es menor de edad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Recibo de energía eléctrica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Constancia de ingreso</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Constancia de ISR</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h6 className="font-bold text-gray-800 mb-3 text-lg">Padre/Madre/Encargado</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">DPI de ambos lados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Recibo de energía eléctrica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Constancia de ingreso de madre y/o padre</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-sm">Constancia de ISR</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cuotas Mensuales */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-emerald-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Cuotas Mensuales</h3>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
            <p className="text-gray-700 font-semibold mb-4">Carrera Grado: Básico</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h5 className="font-bold text-gray-800 mb-3">Sin Ayuda Financiera</h5>
                <p className="text-3xl font-bold text-gray-800 mb-2">Q1,000.00</p>
                <p className="text-gray-600 text-sm">Colegiatura mensual sin Ayuda Financiera</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-2 border-emerald-300">
                <h5 className="font-bold text-gray-800 mb-3">Con Ayuda Financiera</h5>
                <p className="text-3xl font-bold text-emerald-700 mb-2">Q575.00</p>
                <p className="text-gray-600 text-sm mb-2">Colegiatura mensual con Ayuda Financiera</p>
                <p className="text-xs text-emerald-600 font-semibold italic">
                  Realizar inscripción antes del 10/12/2025
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h5 className="font-bold text-gray-800 mb-3">Inscripción</h5>
                <p className="text-3xl font-bold text-gray-800 mb-2">Q1,080.00</p>
                <p className="text-gray-600 text-sm">GTQ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notas Adicionales */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Notas Adicionales</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6">
              <h5 className="font-bold text-gray-800 mb-3">Confidencialidad</h5>
              <p className="text-gray-700 text-sm italic">
                Hubo preguntas donde ya se entraba en cantidades de dinero, por eso no las coloque y ella no vio prudente decírmelas
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6">
              <h5 className="font-bold text-gray-800 mb-4">Información Importante</h5>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-2">Cuota o porcentaje de beca</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    Cualquier cuota o porcentaje de beca que tiene cada estudiante varía por el curso ya que se paga el porcentaje por curso
                  </p>
                  <p className="text-gray-600 text-xs italic mb-2">Implicación: Unos pagan más y otro menos</p>
                  <p className="text-gray-700 text-sm font-semibold">
                    El porcentaje de beca se otorga por curso
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h6 className="font-bold text-gray-800 mb-2">Enlaces del formulario</h6>
                  <p className="text-gray-700 text-sm">
                    Los enlaces del formulario son diferentes para el primer ingreso y para los de reingreso
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-2 border-yellow-400">
                  <h6 className="font-bold text-gray-800 mb-2">Prioridad en la página</h6>
                  <p className="text-gray-700 text-sm font-semibold">
                    Lo más importante es que se vea los requisitos en la página
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center mt-12">
        <p className="text-gray-600">© 2025 Universidad del Valle de Guatemala - Campus Altiplano</p>
      </footer>
    </div>
  )
}

