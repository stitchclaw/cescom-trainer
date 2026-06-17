function fact(id, module, priority, topic, sourcePages, stem, correct, distractors, explanation) {
  return { id, module, priority, topic, sourcePages, stem, correct, distractors, explanation };
}

const FACTS = [
  fact('m1-f1', 'M1', 'P1', 'Origen', 'pp. 11-18', 'el origen moderno de la función de Compliance', 'se explica como reacción a escándalos corporativos, corrupción y mayor presión regulatoria sobre las empresas', ['se presenta como una evolución espontánea de la auditoría interna sin impulso regulatorio relevante', 'se describe como un mecanismo pensado ante todo para concentrar toda la función jurídica en una sola unidad', 'se sitúa primero como una obligación propia de pequeñas empresas familiares sin proyección sectorial'], 'El módulo sitúa el arranque moderno de Compliance en la reacción a desmanes corporativos y a la respuesta legislativa posterior.'),
  fact('m1-f2', 'M1', 'P1', 'Objetivos', 'pp. 30-37', 'los objetivos básicos de Compliance', 'asegurar cumplimiento, gestionar riesgos de incumplimiento y fomentar cultura ética', ['sustituir la discrecionalidad directiva por automatismos de control absoluto', 'maximizar ventas internacionales mediante protocolos homogéneos', 'reducir la función jurídica a un soporte documental residual'], 'CESCOM presenta Compliance como una función orientada a cumplimiento, riesgo y cultura, no como una herramienta comercial ni puramente jurídica.'),
  fact('m1-f3', 'M1', 'P1', 'Alcance', 'pp. 32-39', 'el alcance actual de Compliance', 'abarca requisitos obligatorios, compromisos asumidos y cultura de cumplimiento', ['queda restringido a delitos penales cometidos por empleados con poder de representación', 'se agota en la revisión de contratos y litigios de la organización', 'solo cubre normas externas y excluye políticas y códigos internos'], 'El manual insiste en que Compliance va más allá del puro deber legal estricto.'),
  fact('m1-f4', 'M1', 'P1', 'Programa eficaz', 'pp. 39-45', 'un programa de Compliance eficaz', 'requiere liderazgo, recursos, controles, formación, supervisión y mejora continua', ['basta con un código ético publicado si el consejo lo aprobó formalmente', 'depende sobre todo de externalizar la función a un despacho con prestigio', 'se acredita únicamente con sanciones disciplinarias severas'], 'La eficacia del programa depende de una combinación de elementos, no de una sola pieza documental.'),

  fact('m2-f1', 'M2', 'P3', 'Ética empresarial', 'pp. 46-55', 'la relación entre ética empresarial y Compliance', 'la ética empresarial refuerza el sistema formal porque orienta decisiones donde la norma no agota el juicio necesario', ['la ética empresarial sustituye a la normativa positiva cuando la organización adopta un código ético', 'la ética empresarial solo importa para memorias reputacionales sin impacto operativo', 'la ética empresarial elimina la necesidad de controles y monitorización'], 'El módulo vincula ética y Compliance como planos complementarios, no sustitutivos.'),
  fact('m2-f2', 'M2', 'P3', 'Ética aplicada', 'pp. 55-64', 'la ética aplicada en la empresa', 'consiste en trasladar marcos éticos a decisiones concretas del contexto organizativo', ['se limita a debates filosóficos sin conexión con riesgos, incentivos o gobierno', 'equivale a la responsabilidad social entendida solo como acción benéfica', 'desplaza por completo la función de liderazgo en materia de cumplimiento'], 'CESCOM usa la ética aplicada para conectar principios con decisiones reales de negocio.'),
  fact('m2-f3', 'M2', 'P3', 'Función de la ética', 'pp. 64-78', 'la función práctica de la ética en un sistema de Compliance', 'evitar que el sistema se reduzca a formalismo documental y promover coherencia conductual', ['garantizar que toda decisión empresarial tenga una única respuesta jurídicamente indiscutible', 'desplazar al órgano de gobierno en la fijación de objetivos y tolerancias', 'convertir todo incumplimiento en un problema exclusivamente reputacional'], 'El módulo insiste en que la ética aporta sustancia y criterio al sistema.'),
  fact('m2-f4', 'M2', 'P3', 'Norma y ética', 'pp. 78-90', 'la relación entre norma y ética en la empresa', 'la norma marca mínimos y la ética ayuda a elevar y orientar la conducta más allá de ese umbral', ['la norma vuelve irrelevante cualquier consideración ética si existe política interna', 'la ética solo opera cuando no existe regulación sectorial alguna', 'la ética es un sinónimo técnico de procedimiento disciplinario'], 'El temario presenta norma y ética como capas distintas pero conectadas.'),

  fact('m3-f1', 'M3', 'P1', 'ISO 37301', 'pp. 91-94', 'la naturaleza de ISO 37301', 'es un estándar certificable de sistemas de gestión de Compliance que sustituye a ISO 19600', ['es una guía no certificable dedicada únicamente a canales de denuncia', 'es un estándar penal español centrado en personas jurídicas', 'es un marco europeo exclusivo para protección de datos'], 'El módulo subraya la diferencia entre ISO 37301 e ISO 19600.'),
  fact('m3-f2', 'M3', 'P1', 'Política', 'pp. 94-97', 'la política de Compliance en ISO 37301', 'debe ser adecuada al propósito de la organización y servir de marco a los objetivos, al cumplimiento y a la mejora continua', ['debe limitarse a sanciones y al catálogo de infracciones internas', 'debe reemplazar procedimientos y controles operativos de detalle', 'debe fijarse una vez y permanecer inmutable aunque cambie el contexto'], 'La política funciona como marco general y compromiso del sistema.'),
  fact('m3-f3', 'M3', 'P1', 'Objetivos', 'pp. 97-99', 'los objetivos de Compliance en clave ISO 37301', 'han de ser coherentes con la política, monitorizables, actualizables y documentados', ['deben ser siempre financieros para poder medirse con rigor', 'han de permanecer estables aunque cambien riesgos y obligaciones', 'solo necesitan aprobación del responsable de Compliance sin trazabilidad adicional'], 'Los objetivos no son arbitrarios: se conectan con política, seguimiento y contexto.'),
  fact('m3-f4', 'M3', 'P1', 'Estructura', 'pp. 91-102', 'la lógica estructural de ISO 37301', 'sigue un ciclo de contexto, liderazgo, planificación, apoyo, operación, evaluación del desempeño y mejora', ['organiza el sistema solo en investigación, sanción, archivo y reporte', 'se apoya exclusivamente en formación, auditoría y medidas disciplinarias', 'ordena el CMS en ventas, compras, finanzas y litigios'], 'CESCOM resume la norma con el enfoque típico de sistema de gestión y mejora continua.'),

  fact('m4-f1', 'M4', 'P1', 'Tres líneas', 'pp. 108-118', 'la primera línea del modelo de tres líneas', 'la forman las áreas de negocio y operativas que gestionan riesgos y controles en la actividad diaria', ['la forman auditoría interna y revisores externos con función de aseguramiento independiente', 'la forma el regulador junto a la fiscalía como vigilancia exógena', 'la integra en exclusiva el comité disciplinario por su potestad decisoria'], 'El módulo usa las tres líneas para repartir responsabilidades, no para concentrarlas en Compliance.'),
  fact('m4-f2', 'M4', 'P1', 'Tone at the top', 'pp. 118-126', 'el significado de tone at the top', 'es el ejemplo, compromiso y mensaje creíble que transmite la dirección sobre el cumplimiento', ['es el formato de comunicación descendente empleado en las campañas de formación', 'es la prerrogativa sancionadora del consejo sobre empleados y terceros', 'es la frecuencia mínima con la que deben emitirse informes al órgano de gobierno'], 'La cultura de cumplimiento depende en gran medida de la conducta visible de la dirección.'),
  fact('m4-f3', 'M4', 'P1', 'Plan anual', 'pp. 132-141', 'el criterio de diseño de un plan anual de Compliance', 'debe basarse en riesgos, prioridades y necesidades reales de la organización', ['debe replicar el plan anterior para preservar comparabilidad histórica', 'debe centrarse en la agenda comercial de las unidades con mayor peso económico', 'debe definirse por intuición del responsable de Compliance sin requerir evidencia adicional'], 'CESCOM insiste en el carácter risk-based del plan anual.'),
  fact('m4-f4', 'M4', 'P1', 'Informes', 'pp. 141-147', 'la función principal de los informes de Compliance', 'apoyar la toma de decisiones y demostrar actividad útil para supervisión y control', ['acreditar por sí solos la eficacia material de todos los controles implantados', 'sustituir la aprobación del plan anual por parte de la alta dirección', 'convertir la segunda línea en responsable de la ejecución operativa'], 'Los informes son instrumentos de gobierno y supervisión, no prueba automática de eficacia total.'),

  fact('m5-f1', 'M5', 'P2', 'RSC', 'pp. 148-166', 'la relación entre responsabilidad social corporativa y Compliance', 'es de solapamiento parcial, porque la RSC es más amplia y Compliance se centra en riesgo de incumplimiento y control', ['es de identidad plena, ya que ambos conceptos tienen el mismo objeto y técnicas', 'es de exclusión mutua, porque la RSC trata solo de filantropía y Compliance solo de litigios', 'es jerárquica, pues Compliance es un subproceso puramente reputacional de la RSC'], 'El manual distingue ambos conceptos aunque reconozca puntos de contacto.'),
  fact('m5-f2', 'M5', 'P2', 'Buen gobierno', 'pp. 166-188', 'el objetivo del buen gobierno corporativo', 'reforzar transparencia, rendición de cuentas, control y calidad de la toma de decisiones', ['reducir el peso del órgano de administración a funciones ceremoniales', 'priorizar el crecimiento comercial sobre cualquier control independiente', 'desplazar el análisis de riesgos a una revisión externa anual'], 'El buen gobierno trata de dirigir y controlar mejor la organización.'),
  fact('m5-f3', 'M5', 'P2', 'GRC', 'pp. 188-213', 'la lógica del enfoque GRC', 'integrar governance, risk y compliance para evitar silos y mejorar coherencia organizativa', ['subordinar el gobierno corporativo a las decisiones del área jurídica', 'sustituir toda política interna por un único mapa de riesgos', 'concentrar en el Compliance Officer todas las decisiones de negocio críticas'], 'CESCOM usa GRC para conectar gobierno, riesgo y cumplimiento.'),
  fact('m5-f4', 'M5', 'P2', 'Stakeholders', 'pp. 213-240', 'la relevancia de los stakeholders en buen gobierno y RSC', 'obliga a considerar expectativas y efectos más allá del accionista estricto', ['elimina la necesidad de responsabilidad fiduciaria hacia la sociedad', 'vuelve irrelevante la estructura de controles internos', 'se limita a consumidores y excluye empleados, proveedores y financiadores'], 'La gobernanza moderna no se interpreta desde un único interés aislado.'),

  fact('m6-f1', 'M6', 'P2', 'Independencia', 'pp. 241-255', 'la independencia del Compliance Officer', 'supone criterio propio, acceso a información y capacidad de escalado sin interferencias indebidas', ['supone actuar al margen de toda coordinación con negocio y funciones de control', 'supone asumir personalmente toda obligación regulatoria de la empresa', 'supone no rendir cuentas ni informar al órgano de gobierno'], 'La independencia protege la función, pero no la aísla del resto de la organización.'),
  fact('m6-f2', 'M6', 'P2', 'Estructuras', 'pp. 255-268', 'las posibles estructuras de la función de Compliance', 'pueden ir desde una persona o unidad dedicada hasta comités y modelos complejos', ['deben adoptar siempre un comité colegiado para ser válidas', 'han de integrarse necesariamente dentro de auditoría interna', 'solo son aceptables en multinacionales con más de un regulador'], 'El temario reconoce variedad estructural según tamaño y complejidad de la entidad.'),
  fact('m6-f3', 'M6', 'P2', 'Funciones', 'pp. 268-282', 'las funciones típicas del Compliance Officer', 'incluyen asesorar, diseñar normativa interna, monitorizar, formar, reportar y escalar incumplimientos', ['se reducen a revisar contratos una vez cerrada la operación', 'se limitan a reaccionar a denuncias externas y sanciones firmes', 'consisten ante todo en aprobar decisiones comerciales de primera línea'], 'El rol es amplio y transversal, no meramente reactivo.'),
  fact('m6-f4', 'M6', 'P2', 'Competencias', 'pp. 282-294', 'las competencias esperables del responsable de Compliance', 'combinan conocimiento técnico, criterio, comunicación e influencia organizativa', ['exigen especialización penal exclusiva y prescinden de habilidades relacionales', 'se reducen al dominio de herramientas de auditoría financiera', 'consisten principalmente en capacidad disciplinaria directa sobre toda la plantilla'], 'El módulo no lo define solo por conocimiento normativo, sino también por capacidad de interlocución y criterio.'),

  fact('m7-f1', 'M7', 'P1', 'Riesgo de Compliance', 'pp. 295-304', 'el riesgo de Compliance', 'es la posibilidad de sanciones, pérdidas financieras, daños reputacionales o perjuicios por incumplimientos y fallos de control', ['es el coste inevitable de operar en sectores regulados aunque no existan incumplimientos', 'es cualquier desviación presupuestaria generada por una decisión de negocio', 'es solo la probabilidad de litigio penal contra administradores'], 'CESCOM define el riesgo de Compliance de forma amplia, incluyendo efectos financieros y reputacionales.'),
  fact('m7-f2', 'M7', 'P1', 'Riesgo residual', 'pp. 304-311', 'el riesgo residual', 'es la exposición que permanece después de considerar los controles existentes', ['es la exposición inicial antes de valorar controles y mitigantes', 'es la suma global de todos los riesgos sin priorización ni clasificación', 'es el incumplimiento ya consumado tras resolución sancionadora firme'], 'El residual se calcula después del efecto de los controles, no antes.'),
  fact('m7-f3', 'M7', 'P1', 'Controles', 'pp. 311-317', 'un control preventivo', 'busca impedir que el riesgo se materialice o que la conducta irregular llegue a producirse', ['busca identificar a posteriori una irregularidad ya producida', 'busca reparar daños una vez confirmado el incumplimiento', 'busca únicamente documentar decisiones para auditoría futura'], 'La triada preventivo-detectivo-correctivo aparece de forma muy marcada en el módulo.'),
  fact('m7-f4', 'M7', 'P1', 'Mapa de riesgos', 'pp. 317-324', 'la utilidad de un mapa de riesgos de Compliance', 'es ordenar y priorizar riesgos para decidir respuestas, controles y asignación de recursos', ['es eliminar automáticamente la exposición relevante sin necesidad de tratamiento adicional', 'es sustituir el juicio del órgano de gobierno por una matriz cerrada', 'es limitar el análisis a los riesgos penales con trascendencia externa'], 'El mapa visualiza y prioriza; no reemplaza decisión ni tratamiento.'),

  fact('m8-f1', 'M8', 'P3', 'Jerarquía normativa', 'pp. 325-327', 'la jerarquía del sistema normativo interno', 'exige que las normas inferiores se alineen con las de rango superior y desarrollen su contenido', ['permite que cualquier procedimiento contradiga la política si mejora la eficiencia', 'convierte al código ético en documento operativo de máximo detalle', 'elimina la necesidad de revisar consistencia entre normas'], 'El módulo habla de un sistema normativo con estructura y coherencia internas.'),
  fact('m8-f2', 'M8', 'P3', 'Código ético y de conducta', 'pp. 327-328', 'la diferencia entre código ético y código de conducta', 'el primero enfatiza valores y principios; el segundo baja más a reglas de comportamiento', ['el primero regula procesos operativos y el segundo valores abstractos', 'ambos son necesariamente idénticos si la empresa tiene certificación ISO', 'el código de conducta solo aplica a directivos y el ético al resto del personal'], 'CESCOM distingue ambos documentos por enfoque, contenido y uso.'),
  fact('m8-f3', 'M8', 'P3', 'Política y procedimiento', 'pp. 328-329', 'la diferencia entre política y procedimiento', 'la política fija criterios y el procedimiento explica cómo aplicarlos en la práctica', ['la política describe cada paso operativo y el procedimiento solo el marco axiológico', 'el procedimiento sustituye la necesidad de aprobar políticas marco', 'la política solo sirve para archivo y el procedimiento para sancionar'], 'La distinción política/procedimiento es de las más preguntables del módulo.'),
  fact('m8-f4', 'M8', 'P3', 'Soft law', 'pp. 329-330', 'la expresión soft law en el contexto del módulo', 'alude a pautas o normas no vinculantes asumidas voluntariamente', ['alude a infracciones leves sin relevancia disciplinaria', 'alude a normas internas secretas reservadas a alta dirección', 'alude a reglamentos con fuerza coercitiva equivalente a la ley'], 'El módulo usa hard law y soft law para aclarar la idea de normativa vigente y autorregulación.'),

  fact('m9-f1', 'M9', 'P1', 'Marco normativo', 'pp. 331-340', 'la diferencia relevante entre la Directiva 2019/1937 y la Ley 2/2023', 'la ley española amplía el ámbito a infracciones graves o muy graves del Derecho nacional además del de la UE', ['la directiva protege más ámbitos nacionales que la ley española', 'la ley española elimina la necesidad de autoridad independiente de protección del informante', 'la directiva impone anonimato obligatorio universal y la ley española lo prohíbe'], 'El módulo destaca la ampliación española del ámbito objetivo.'),
  fact('m9-f2', 'M9', 'P1', 'Confidencialidad', 'pp. 340-348', 'la relación entre anonimato y confidencialidad en un canal de denuncias', 'no son equivalentes, porque puede existir confidencialidad aunque el informante esté identificado', ['son equivalentes y siempre deben concurrir simultáneamente', 'la confidencialidad solo protege al denunciado y no al informante', 'el anonimato convierte innecesaria cualquier garantía adicional del proceso'], 'La distinción es clásica y aparece de forma expresa en este bloque.'),
  fact('m9-f3', 'M9', 'P1', 'Investigación', 'pp. 348-367', 'una investigación interna bien conducida', 'documenta actuaciones, evidencia y limitaciones, y separa hechos probados de conclusiones basadas en experiencia', ['se apoya principalmente en intuiciones del investigador si el informante parece creíble', 'puede prescindir de documentación si acaba en archivo sin sanción', 'debe comunicar de inmediato todo indicio a toda la plantilla para reforzar la cultura'], 'El módulo es muy claro sobre documentación, evidencia y cautelas metodológicas.'),
  fact('m9-f4', 'M9', 'P1', 'Órgano decisor', 'pp. 367-374', 'la separación entre órgano investigador y órgano decisor', 'busca preservar imparcialidad y evitar conflictos de interés en la adopción de medidas', ['busca acelerar sanciones aunque se reduzcan garantías del proceso', 'permite delegar toda decisión disciplinaria en consultores externos', 'sirve para excluir a alta dirección de cualquier intervención posterior'], 'CESCOM recomienda separar pesquisa y decisión disciplinaria o correctiva.'),

  fact('m10-f1', 'M10', 'P2', 'Comunicación eficaz', 'pp. 375-381', 'una comunicación interna eficaz en Compliance', 'debe ser accesible, identificable, clara, registrable y medible', ['debe priorizar amplitud aunque no pueda saberse a quién llegó', 'debe ser esencialmente descendente y no admitir retorno desde empleados', 'debe limitarse a mensajes generales para evitar matices interpretativos'], 'El módulo baja a características concretas de la comunicación útil.'),
  fact('m10-f2', 'M10', 'P2', 'Flujos', 'pp. 381-386', 'los flujos de comunicación interna', 'incluyen dirección descendente, ascendente y horizontal, cada una con utilidad específica', ['se reducen a la comunicación descendente porque la ascendente distorsiona el mensaje', 'son equivalentes a las tres líneas de defensa y deben coincidir con ellas', 'operan solo en campañas de formación y no en reporting ordinario'], 'CESCOM advierte contra descuidar la comunicación ascendente y horizontal.'),
  fact('m10-f3', 'M10', 'P2', 'Formación', 'pp. 386-394', 'el diseño de la formación en Compliance', 'debe partir de necesidades y riesgos de la organización y adaptarse a colectivos y funciones', ['debe impartirse con el mismo contenido a toda la plantilla para evitar diferencias de trato', 'debe limitarse a personal de control porque el negocio ya conoce sus riesgos', 'debe usarse solo tras incidentes o sanciones para ahorrar recursos'], 'La formación útil es planificada, segmentada y ligada al contexto.'),
  fact('m10-f4', 'M10', 'P2', 'Sensibilización', 'pp. 394-401', 'la sensibilización en materia de Compliance', 'sirve para sostener cultura y atención continua más allá de sesiones formales de formación', ['sustituye los controles preventivos y la revisión periódica del sistema', 'solo tiene sentido para nuevas incorporaciones durante su onboarding', 'equivale a informar de sanciones sin necesidad de explicar objetivos y valores'], 'El manual trata comunicación, formación y sensibilización como herramientas complementarias.'),

  fact('m11-f1', 'M11', 'P2', 'Monitorización', 'pp. 402-408', 'la finalidad de la monitorización de Compliance', 'comprobar si los controles siguen siendo adecuados y efectivos y corregir desviaciones cuando proceda', ['verificar únicamente si el plan anual se ejecutó en plazo aunque el control sea débil', 'sustituir la evaluación de riesgos una vez implantado el sistema', 'demostrar automáticamente la eficacia del programa ante cualquier autoridad'], 'Monitorizar es supervisar funcionamiento y adecuación, no marcar tareas como completadas.'),
  fact('m11-f2', 'M11', 'P2', 'Tipos de monitorización', 'pp. 408-413', 'la diferencia entre monitorización continua y revisiones periódicas', 'la continua acompaña a la operativa ordinaria y la periódica verifica controles en intervalos definidos', ['la continua se reserva a la tercera línea y la periódica al regulador externo', 'la continua sirve solo para riesgos penales y la periódica para riesgos reputacionales', 'no existe diferencia práctica entre ambas si el control está documentado'], 'El módulo usa ambos mecanismos como complementarios.'),
  fact('m11-f3', 'M11', 'P2', 'Fuentes de información', 'pp. 413-418', 'las fuentes útiles para monitorizar controles', 'pueden ser directas o indirectas, incluyendo observación, KRI, KPI, reclamaciones y denuncias', ['deben provenir exclusivamente de auditorías externas anuales', 'solo resultan válidas si están cuantificadas en unidades monetarias', 'se reducen a entrevistas con el responsable funcional del proceso'], 'CESCOM enumera fuentes variadas para verificar efectividad.'),
  fact('m11-f4', 'M11', 'P2', 'Plan de monitorización', 'pp. 418-421', 'el plan de monitorización', 'documenta qué supervisiones se hacen, con qué criterio, periodicidad y responsables', ['equivale al mapa de riesgos y lo reemplaza una vez aprobado', 'solo se activa tras una investigación interna con conclusión sancionadora', 'debe permanecer estable aunque cambien controles o riesgos'], 'Es un documento estructurado para organizar la supervisión.'),

  fact('m12-f1', 'M12', 'P1', 'España 2010/2015', 'pp. 422-438', 'la evolución española de la responsabilidad penal de la persona jurídica', 'comienza con la reforma de 2010 y se refuerza de forma más ambiciosa con la de 2015', ['se introduce plenamente en 2015 sin antecedente normativo previo', 'queda ya cerrada en 2010 sin necesidad de desarrollos interpretativos', 'se limita desde 2010 a delitos de corrupción en el extranjero'], 'El módulo marca con claridad la secuencia 2010-2015.'),
  fact('m12-f2', 'M12', 'P1', 'Circular 1/2016', 'pp. 438-448', 'la utilidad de la Circular 1/2016 de la Fiscalía', 'aporta criterios interpretativos esenciales para valorar la idoneidad de los programas de Compliance penal', ['sustituye por completo el Código Penal en materia de responsabilidad corporativa', 'convierte a UNE 19601 en norma legal obligatoria para toda empresa', 'establece un catálogo cerrado de sanciones disciplinarias internas'], 'La Circular es referencia práctica central para entender eficacia y exoneración.'),
  fact('m12-f3', 'M12', 'P1', 'Modelo eficaz', 'pp. 448-470', 'un modelo penal eficaz', 'debe identificar riesgos, protocolizar decisiones, gestionar recursos financieros, exigir información, articular canal y disciplina, y revisarse', ['queda acreditado con una política general firmada por el consejo aunque no se implante', 'consiste principalmente en externalizar toda investigación y formación a terceros', 'solo exige un mapa de riesgos penal sin controles ni seguimiento asociados'], 'CESCOM presenta varios componentes mínimos de un modelo de organización y gestión.'),
  fact('m12-f4', 'M12', 'P1', 'Órgano de supervisión', 'pp. 470-492', 'el órgano de supervisión del modelo penal', 'debe contar con autonomía, iniciativa y capacidad de control real sobre el sistema', ['debe integrarse operativamente en la primera línea para ganar agilidad', 'puede prescindir de acceso a información si reporta una vez al año', 'solo interviene cuando ya existe proceso penal abierto'], 'La autonomía del órgano supervisor es uno de los puntos más sensibles del módulo.'),

  fact('m13-f1', 'M13', 'P2', 'Programa anticorrupción', 'pp. 493-503', 'un programa anticorrupción razonable', 'combina compromiso de la dirección, responsable claro, prohibiciones, controles, canal y formación', ['se agota en una cláusula contractual anticorrupción para proveedores', 'basta con prohibir regalos sin mapa de riesgos ni revisión posterior', 'consiste ante todo en reportar al regulador toda interacción comercial'], 'El módulo describe varios elementos esenciales del programa anticorrupción.'),
  fact('m13-f2', 'M13', 'P2', 'Terceros', 'pp. 503-512', 'la diligencia debida sobre terceros en corrupción', 'es clave porque agentes e intermediarios pueden trasladar o amplificar riesgo de soborno', ['solo importa cuando el tercero es cotizado en mercado regulado', 'sustituye a los controles internos sobre hospitalidades y pagos', 'únicamente se justifica tras una denuncia formal ya registrada'], 'La exposición a terceros es uno de los focos clásicos del área.'),
  fact('m13-f3', 'M13', 'P2', 'Áreas sensibles', 'pp. 512-521', 'las áreas típicamente sensibles en corrupción', 'incluyen pagos en efectivo, regalos, viajes, patrocinios, donaciones y estructuras retributivas inadecuadas', ['se limitan a campañas políticas y excluyen relaciones comerciales ordinarias', 'afectan solo a operaciones internacionales y no a mercado doméstico', 'quedan neutralizadas automáticamente si existe una política general de integridad'], 'CESCOM destaca varias zonas de riesgo muy concretas.'),
  fact('m13-f4', 'M13', 'P2', 'Revisión', 'pp. 521-527', 'la revisión del programa anticorrupción', 'debe servir para detectar carencias y adaptar controles a cambios de entorno y organización', ['solo procede cuando ya existe sanción administrativa o penal firme', 'es innecesaria si la política se aprobó por el órgano de gobierno', 'debe enfocarse solo en terceros y prescindir de incentivos internos'], 'La lógica de mejora continua vuelve a aparecer también en anticorrupción.'),

  fact('m14-f1', 'M14', 'P1', 'BC y FT', 'pp. 528-545', 'la diferencia central entre blanqueo de capitales y financiación del terrorismo', 'en BC importa ocultar origen ilícito de fondos; en FT puede emplearse dinero lícito o ilícito si el destino financia actividad terrorista', ['en FT siempre debe haberse producido antes una fase completa de blanqueo', 'en BC y FT lo relevante es exclusivamente la cuantía de los fondos', 'en BC el dinero no puede atravesar nunca el sistema financiero formal'], 'El módulo insiste en no confundir origen ilícito con destino ilícito.'),
  fact('m14-f2', 'M14', 'P1', 'Fases BC', 'pp. 545-556', 'las fases clásicas del blanqueo de capitales', 'son colocación, encubrimiento o estratificación e integración', ['son captación, validación, transferencia y consumo', 'son identificación, aceptación, seguimiento y archivo', 'son riesgo inherente, mitigación, residual e incidente'], 'Las tres fases de BC son una de las listas más testables del temario.'),
  fact('m14-f3', 'M14', 'P1', 'Diligencia debida', 'pp. 556-580', 'la diligencia debida en PBC/FT', 'exige identificar y verificar al cliente, conocer titular real, propósito de la relación y aplicar medidas según riesgo', ['se limita a obtener el documento identificativo al inicio y no requiere seguimiento', 'solo opera para personas jurídicas y no para personas físicas', 'desaparece si el cliente opera a través de una entidad financiera conocida'], 'El enfoque es claramente risk-based y no puramente formal.'),
  fact('m14-f4', 'M14', 'P1', 'Sujetos obligados', 'pp. 580-606', 'la obligación principal de un sujeto obligado en PBC/FT', 'desarrollar controles y medidas adecuadas al riesgo, no garantizar resultado cero de forma absoluta', ['asegurar que no exista nunca operación sospechosa en toda su base de clientes', 'reemplazar a la autoridad pública en la persecución del delito precedente', 'comunicar a la plantilla la identidad de todos los clientes de alto riesgo'], 'El módulo distingue con claridad obligación de diligencia y control frente a obligación de resultado.'),

  fact('m15-f1', 'M15', 'P2', 'Normativa', 'pp. 607-617', 'la coexistencia de normativa nacional y europea en competencia', 'se articula de forma coordinada y complementaria, no como una simple jerarquía cerrada', ['implica que el derecho nacional desaparece cuando existe cualquier referencia europea', 'supone que la competencia es una materia exclusivamente doméstica salvo fusiones transfronterizas', 'permite elegir libremente el régimen más conveniente para la empresa'], 'CESCOM recalca la convivencia entre ambos planos normativos.'),
  fact('m15-f2', 'M15', 'P2', 'Doctrina de efectos', 'pp. 617-626', 'la doctrina de los efectos', 'sirve para vincular la normativa o autoridad al mercado donde se producen efectos materiales o potenciales', ['sirve para excluir el derecho europeo cuando la conducta se pactó fuera de la UE', 'sirve para convertir toda infracción en un asunto penal', 'sirve para limitar el análisis a la sede social de la empresa investigada'], 'Es una de las ideas más típicas del módulo de competencia.'),
  fact('m15-f3', 'M15', 'P2', 'Intercambio de información', 'pp. 626-638', 'el riesgo del intercambio de información sensible con competidores', 'puede alterar la competencia y facilitar coordinación indebida incluso sin acuerdo formal explícito', ['solo existe si ya se firmó un cartel escrito entre todas las partes', 'desaparece por completo si la reunión tuvo lugar en una asociación sectorial', 'solo es relevante cuando se comparten datos históricos públicos'], 'El módulo insiste en que no hace falta un contrato cartelizado para generar riesgo.'),
  fact('m15-f4', 'M15', 'P2', 'Conductas', 'pp. 638-648', 'el foco de un programa de Compliance en competencia', 'debe vigilar acuerdos, intercambios de información, abusos y contextos de concentración o colaboración sensibles', ['debe limitarse a revisar cláusulas de confidencialidad con proveedores', 'debe concentrarse únicamente en publicidad y protección al consumidor', 'debe excluir reuniones con competidores si existe asesor jurídico presente'], 'La exposición en competencia es transversal a varias situaciones de mercado.'),

  fact('m16-f1', 'M16', 'P2', 'Finalidad', 'pp. 649-653', 'la finalidad de la normativa de abuso de mercado', 'preservar la integridad de los mercados y la confianza del inversor evitando distorsiones injustas', ['asegurar que todos los activos coticen sin volatilidad significativa', 'proteger solo a emisores frente a prensa económica adversa', 'favorecer ventaja informativa a insiders con funciones estratégicas'], 'El objetivo del régimen es la corrección e integridad del mercado.'),
  fact('m16-f2', 'M16', 'P2', 'Ámbitos', 'pp. 653-658', 'los dos grandes ámbitos del abuso de mercado', 'son la información privilegiada y la manipulación de mercado', ['son el fraude contable y la competencia desleal', 'son el blanqueo de capitales y el soborno transnacional', 'son la publicidad engañosa y la protección al consumidor'], 'CESCOM resume el módulo en esos dos grandes bloques.'),
  fact('m16-f3', 'M16', 'P2', 'Información privilegiada', 'pp. 658-663', 'la información privilegiada', 'debe ser concreta, no pública y apta para influir de forma apreciable en el precio', ['debe ser falsa pero verosímil para generar movimientos de mercado', 'basta con que sea interesante para el inversor aunque sea ya pública', 'requiere necesariamente que la conozcan menos de tres personas'], 'La definición descansa en varios requisitos concurrentes.'),
  fact('m16-f4', 'M16', 'P2', 'Conductas', 'pp. 663-667', 'una conducta típica de abuso vinculada a información privilegiada', 'utilizarla o comunicarla ilícitamente para operar o permitir operar con ventaja indebida', ['archivarla en un registro interno sin difundirla y bloquear acceso', 'escalarla al área jurídica para evaluar obligaciones de divulgación', 'clasificarla como reservada mientras se analiza su carácter'], 'El problema no es la mera existencia de información sensible, sino su uso o comunicación ilícita.'),

  fact('m17-f1', 'M17', 'P1', 'RGPD y LOPDGDD', 'pp. 668-676', 'la arquitectura normativa de privacidad en España', 'se apoya en el RGPD como base europea y en la LOPDGDD como complemento nacional', ['se basa principalmente en MiFID II y en la Ley de Competencia Desleal', 'queda sustituida por políticas internas cuando existe consentimiento contractual', 'se integra solo por normas sectoriales y no por un reglamento general'], 'El módulo presenta el RGPD como referencia central.'),
  fact('m17-f2', 'M17', 'P1', 'Principios', 'pp. 676-686', 'los principios nucleares del RGPD', 'incluyen limitación de finalidad, minimización, exactitud, limitación de conservación, integridad, confidencialidad y responsabilidad proactiva', ['incluyen publicidad, irreversibilidad, monetización y disponibilidad indefinida', 'incluyen secreto absoluto, anonimización universal y ausencia de trazabilidad', 'incluyen proporcionalidad sancionadora, competencia efectiva y neutralidad fiscal'], 'Los principios aparecen como columna vertebral de todo el régimen.'),
  fact('m17-f3', 'M17', 'P1', 'Roles', 'pp. 686-697', 'la diferencia entre responsable y encargado del tratamiento', 'el responsable decide fines y medios esenciales; el encargado trata datos por cuenta del responsable', ['el encargado fija fines y el responsable ejecuta instrucciones técnicas', 'el responsable se limita a custodiar datos y el encargado determina la base jurídica', 'ambos conceptos son equivalentes si existe contrato escrito entre las partes'], 'Es una de las distinciones más repetidas en preguntas tipo test.'),
  fact('m17-f4', 'M17', 'P1', 'DPD y herramientas', 'pp. 697-711', 'el papel del DPD y herramientas como RAT o EIPD', 'el DPD asesora y supervisa, mientras RAT y EIPD ayudan a identificar tratamientos y riesgos elevados', ['el DPD asume personalmente el cumplimiento íntegro de toda la entidad', 'el RAT sustituye a la base jurídica y la EIPD al análisis de legitimación', 'solo las entidades financieras deben documentar actividades de tratamiento'], 'El módulo articula funciones, registros y evaluaciones como piezas del cumplimiento.'),

  fact('m18-f1', 'M18', 'P2', 'Finalidad', 'pp. 712-721', 'la finalidad de la protección al consumidor', 'corregir asimetrías informativas y evitar prácticas o cláusulas que perjudiquen indebidamente al consumidor', ['garantizar que todo contrato sea económicamente ventajoso para ambas partes', 'sustituir la libertad contractual por una fijación pública de precios', 'reducir la protección a consumidores financieros sofisticados'], 'La lógica es de equilibrio y protección frente a abusos o falta de información.'),
  fact('m18-f2', 'M18', 'P2', 'Información precontractual', 'pp. 721-734', 'la información precontractual al consumidor', 'debe facilitarse con antelación suficiente y ser clara, imparcial y no engañosa', ['puede entregarse después de la contratación si luego se ratifica por escrito', 'debe ser completa aunque incomprensible técnicamente para el destinatario medio', 'solo es exigible cuando el importe supera umbrales regulatorios altos'], 'CESCOM subraya forma, tiempo y calidad de la información previa.'),
  fact('m18-f3', 'M18', 'P2', 'Consumo financiero', 'pp. 734-748', 'la intensificación de protección en el ámbito financiero', 'responde a la complejidad del producto y a la asimetría informativa entre entidad e inversor o cliente', ['responde a que los productos financieros no tienen riesgo económico real', 'elimina la necesidad de evaluar conveniencia o idoneidad del cliente', 'se limita a publicidad institucional y no a fase precontractual'], 'La especial protección financiera se explica por complejidad y potencial indefensión.'),
  fact('m18-f4', 'M18', 'P2', 'Carga de la prueba', 'pp. 748-758', 'la carga de la prueba del cumplimiento de ciertas obligaciones de información al consumidor', 'recae en gran medida sobre el comerciante o entidad obligada', ['recae siempre sobre el consumidor por ser quien alega el incumplimiento', 'desaparece si el contrato se formalizó digitalmente', 'solo existe cuando interviene un notario o fedatario público'], 'El módulo recuerda expresamente ese desplazamiento de la carga probatoria.'),

  fact('m19-f1', 'M19', 'P3', 'Utilidad', 'pp. 759-764', 'la utilidad de Compliance en el sector público', 'radica en mejorar integridad, gestión de riesgos y calidad de decisión orientada al interés público', ['radica en replicar sin ajustes todas las prácticas comerciales del sector privado', 'radica en desplazar al derecho administrativo como marco principal de actuación', 'radica en convertir toda incidencia de gestión en responsabilidad penal automática'], 'El manual justifica la función también para entornos públicos.'),
  fact('m19-f2', 'M19', 'P3', 'Ámbito público', 'pp. 764-770', 'la delimitación del sector público a estos efectos', 'incluye administraciones, sector público empresarial y otras entidades que gestionan fondos públicos', ['se restringe a ministerios y excluye empresas públicas y entes instrumentales', 'se limita a administraciones territoriales y excluye organismos autónomos', 'abarca únicamente órganos con potestad sancionadora propia'], 'CESCOM advierte que la delimitación exige atender a la normativa organizativa aplicable.'),
  fact('m19-f3', 'M19', 'P3', 'Adaptación', 'pp. 770-774', 'la necesidad de adaptar Compliance al sector público', 'deriva de finalidades, restricciones y marcos jurídicos distintos respecto del sector privado', ['desaparece porque el sector público carece de riesgos de integridad equiparables', 'solo responde a razones presupuestarias y no funcionales', 'implica renunciar a cultura ética y gestión de riesgos'], 'La lógica se traslada, pero no sin ajustes institucionales.'),
  fact('m19-f4', 'M19', 'P3', 'Integridad', 'pp. 774-777', 'el foco de integridad en el sector público', 'pone especial atención en conflicto de interés, corrupción y priorización del interés general', ['desplaza a segundo plano la legalidad procedimental y la transparencia', 'solo interesa cuando existe contratación pública internacional', 'sustituye toda supervisión por declaraciones de ausencia de conflicto'], 'El módulo conecta Compliance público con integridad institucional.'),

  fact('m20-f1', 'M20', 'P3', 'Datos e información', 'pp. 778-792', 'el papel de datos e información en el Compliance digital', 'son activos críticos cuya gestión y protección explica buena parte de la nueva regulación', ['son relevantes solo para empresas tecnológicas y no para organizaciones tradicionales', 'solo interesan por su valor comercial y no por su dimensión de riesgo', 'reducen la importancia de políticas internas y de clasificación de incidentes'], 'El módulo arranca precisamente desde la centralidad del dato y la información.'),
  fact('m20-f2', 'M20', 'P3', 'Coordinación', 'pp. 792-805', 'la relación entre Compliance y figuras como el CISO o el DPD', 'exige coordinación, porque riesgo digital, seguridad y privacidad se solapan operativamente', ['aconseja separar por completo ambas funciones para preservar independencia absoluta', 'permite que el CISO asuma automáticamente todas las funciones de Compliance', 'convierte al DPD en responsable único de ciberseguridad y resiliencia'], 'CESCOM dibuja un entorno necesariamente coordinado entre roles.'),
  fact('m20-f3', 'M20', 'P3', 'Ciberseguridad', 'pp. 805-821', 'el núcleo de la ciberseguridad en el módulo', 'proteger disponibilidad, integridad y confidencialidad de sistemas e información', ['garantizar que toda la información sea pública y fácilmente compartible', 'asegurar que ningún usuario necesite autenticarse para acceder a sistemas críticos', 'sustituir la seguridad de la información por simples políticas de redes sociales'], 'La tríada clásica vuelve a aparecer con claridad en este bloque.'),
  fact('m20-f4', 'M20', 'P3', 'Incidentes', 'pp. 821-839', 'la utilidad de clasificar incidentes de seguridad', 'ordenar respuesta, coordinación y aprendizaje en un entorno de amenazas diversas', ['evitar documentar incidentes menores para reducir carga administrativa', 'sustituir cualquier análisis posterior de causas y controles', 'limitar el reporte solo a incidentes que causen impacto reputacional público'], 'El módulo insiste en estandarización y clasificación como bases de gestión.'),
];

const GENERIC_QUESTION_TEMPLATES = [
  (factItem) => `¿Cuál de las siguientes afirmaciones es correcta sobre ${factItem.stem}?`,
  (factItem) => `Señale la respuesta correcta sobre ${factItem.stem}.`,
  (factItem) => `En relación con ${factItem.stem}, indique la respuesta correcta.`,
  (factItem) => `¿Qué opción describe mejor ${factItem.stem}?`,
  (factItem) => `Con respecto a ${factItem.stem}, ¿qué afirmación es correcta?`,
  (factItem) => `¿Cuál es la opción correcta en relación con ${factItem.stem}?`,
  (factItem) => `Sobre ${factItem.stem}, señale la afirmación correcta.`
];

function compactOptionText(text) {
  let output = text.trim();

  output = output
    .replace(/^se (explica|presenta|describe|entiende|formula|articula) como\s+/i, '')
    .replace(/^se (explica|presenta|describe|entiende|formula|articula)\s+/i, '')
    .replace(/^consiste en\s+/i, '')
    .replace(/^supone\s+/i, '')
    .replace(/^abarca\s+/i, '')
    .replace(/^incluye\s+/i, '')
    .replace(/^incluyen\s+/i, '')
    .replace(/^busca\s+/i, '')
    .replace(/^sirve para\s+/i, '')
    .replace(/^permite\s+/i, '')
    .replace(/^radica en\s+/i, '')
    .replace(/^se apoya en\s+/i, '')
    .replace(/^se articula de forma\s+/i, '')
    .replace(/^debe ser\s+/i, '')
    .replace(/^debe\s+/i, '')
    .replace(/^deben\s+/i, '')
    .replace(/^es\s+/i, '')
    .replace(/^son\s+/i, '');

  if (!output) {
    return text;
  }

  output = output.charAt(0).toUpperCase() + output.slice(1);

  if (!/[.!?]$/.test(output)) {
    output += '.';
  }

  return output;
}

function compactClauseText(text) {
  let output = text.trim();

  output = output
    .replace(/^(y|e)\s+/i, '')
    .replace(/^mientras\s+/i, '')
    .replace(/^porque\s+/i, '')
    .replace(/^ya que\s+/i, '')
    .replace(/^puesto que\s+/i, '');

  if (!output) {
    return text;
  }

  output = output.charAt(0).toUpperCase() + output.slice(1);

  if (!/[.!?]$/.test(output)) {
    output += '.';
  }

  return output;
}

const STOPWORDS = new Set([
  'a', 'al', 'ante', 'bajo', 'cabe', 'con', 'contra', 'como', 'cual', 'cuáles', 'cuál',
  'de', 'del', 'desde', 'donde', 'dos', 'el', 'ella', 'ellas', 'ellos', 'en', 'entre',
  'es', 'esa', 'ese', 'eso', 'esta', 'este', 'esto', 'ha', 'han', 'hasta', 'la', 'las',
  'lo', 'los', 'más', 'menos', 'muy', 'o', 'otra', 'otro', 'otras', 'otros', 'para',
  'pero', 'por', 'que', 'qué', 'se', 'si', 'sin', 'sobre', 'su', 'sus', 'también', 'todo',
  'tras', 'un', 'una', 'uno', 'unas', 'unos', 'y', 'ya'
]);

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(' ')
    .filter((token) => token && token.length > 2 && !STOPWORDS.has(token));
}

function splitClauses(text) {
  const baseParts = text
    .replace(/\s+/g, ' ')
    .split(/,|;/)
    .map((part) => part.trim())
    .filter(Boolean);

  const expandedParts = baseParts.flatMap((part) => {
    if (/\sy\s/.test(part) && part.length > 35) {
      return part.split(/\sy\s/).map((item) => item.trim()).filter(Boolean);
    }
    return [part];
  });

  return expandedParts
    .map(compactClauseText)
    .filter((part) => normalizeText(part).length > 5);
}

function findIdentifiers(text) {
  const patterns = [
    { type: 'year', regex: /\b(19|20)\d{2}\b/g },
    { type: 'iso', regex: /\bISO\s\d{4,5}\b/gi },
    { type: 'une', regex: /\bUNE\s\d{4,5}\b/gi },
    { type: 'circular', regex: /\bCircular\s\d+\/\d{4}\b/gi },
    { type: 'ley', regex: /\bLey\s\d+\/\d{4}\b/gi },
    { type: 'org', regex: /\b(?:RGPD|LOPDGDD|OCDE|MiFID II|Fiscalía|Código Penal)\b/gi }
  ];

  return patterns.flatMap(({ type, regex }) => {
    const matches = text.match(regex) || [];
    return matches.map((value) => ({ type, value: value.trim() }));
  });
}

function uniqueByNormalized(items) {
  const seen = new Set();
  return items.filter((item) => {
    const normalized = normalizeText(item.text);
    if (!normalized || seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
}

function uniquePrimitive(items) {
  return [...new Set(items)];
}

function sharedTokenCount(tokensA, tokensB) {
  const pool = new Set(tokensB);
  return tokensA.reduce((count, token) => count + (pool.has(token) ? 1 : 0), 0);
}

function enrichFacts() {
  return FACTS.map((factItem) => ({
    ...factItem,
    exactPage: factItem.sourcePages.replace(/^pp?\.\s*(\d+).*/, 'p. $1'),
    compactCorrect: compactOptionText(factItem.correct),
    compactDistractors: factItem.distractors.map(compactOptionText),
    clauses: splitClauses(compactOptionText(factItem.correct)),
    identifiers: uniquePrimitive(
      findIdentifiers(
        [factItem.topic, factItem.stem, factItem.correct, factItem.explanation].join(' ')
      ).map((item) => `${item.type}:${item.value}`)
    ).map((item) => {
      const [type, ...rest] = item.split(':');
      return { type, value: rest.join(':') };
    })
  }));
}

const ENRICHED_FACTS = enrichFacts();
const CLAUSE_POOL = ENRICHED_FACTS.flatMap((factItem) =>
  factItem.clauses.map((clause) => ({
    text: clause,
    module: factItem.module,
    priority: factItem.priority,
    factId: factItem.id
  }))
);
const IDENTIFIER_POOL = ENRICHED_FACTS.flatMap((factItem) =>
  factItem.identifiers.map((identifier) => ({
    ...identifier,
    module: factItem.module,
    priority: factItem.priority,
    factId: factItem.id
  }))
);

function scoreCandidate(factItem, candidate) {
  const correctTokens = tokenize(factItem.compactCorrect);
  const candidateTokens = tokenize(candidate.text);
  const stemTokens = tokenize(factItem.stem);
  const topicTokens = tokenize(factItem.topic);
  const correctOverlap = sharedTokenCount(candidateTokens, correctTokens);
  const stemOverlap = sharedTokenCount(candidateTokens, stemTokens);
  const topicOverlap = sharedTokenCount(candidateTokens, topicTokens);
  const sameModuleBonus = candidate.module === factItem.module ? 2.6 : 0;
  const samePriorityBonus = candidate.priority === factItem.priority ? 1.1 : 0;
  const sourceBonus = candidate.source === 'peer-correct' ? 1.6 : 0.5;
  const lengthPenalty = Math.abs(candidateTokens.length - correctTokens.length) * 0.08;

  return (
    (correctOverlap * 2.1) +
    (stemOverlap * 1.1) +
    (topicOverlap * 0.8) +
    sameModuleBonus +
    samePriorityBonus +
    sourceBonus -
    lengthPenalty
  );
}

function buildDistractorBank(factItem) {
  const ownNormalized = normalizeText(factItem.compactCorrect);
  const pool = [];

  factItem.compactDistractors.forEach((text) => {
    pool.push({
      text,
      module: factItem.module,
      priority: factItem.priority,
      source: 'own-distractor'
    });
  });

  ENRICHED_FACTS.forEach((peerFact) => {
    if (peerFact.id === factItem.id) {
      return;
    }

    pool.push({
      text: peerFact.compactCorrect,
      module: peerFact.module,
      priority: peerFact.priority,
      source: 'peer-correct'
    });

    peerFact.compactDistractors.slice(0, 2).forEach((text) => {
      pool.push({
        text,
        module: peerFact.module,
        priority: peerFact.priority,
        source: 'peer-distractor'
      });
    });
  });

  return uniqueByNormalized(pool)
    .filter((candidate) => normalizeText(candidate.text) !== ownNormalized)
    .map((candidate) => ({
      ...candidate,
      score: scoreCandidate(factItem, candidate)
    }))
    .sort((left, right) => right.score - left.score);
}

function pickSeeded(items, seedValue) {
  return seededShuffle(items, seedValue);
}

function selectDistractors(factItem, variantIndex) {
  const bank = buildDistractorBank(factItem);
  const selected = [];
  const usedModules = new Set();

  const sameModuleFirst = bank.filter((candidate) => candidate.module === factItem.module);
  const samePriorityNext = bank.filter(
    (candidate) => candidate.module !== factItem.module && candidate.priority === factItem.priority
  );
  const remaining = bank.filter(
    (candidate) => candidate.module !== factItem.module && candidate.priority !== factItem.priority
  );

  const orderedPool = [...sameModuleFirst, ...samePriorityNext, ...remaining];
  const offset = variantIndex % 5;

  orderedPool.slice(offset).concat(orderedPool.slice(0, offset)).forEach((candidate) => {
    if (selected.length === 3) {
      return;
    }

    const normalized = normalizeText(candidate.text);
    const alreadyChosen = selected.some((item) => normalizeText(item) === normalized);
    if (alreadyChosen) {
      return;
    }

    if (candidate.module !== factItem.module && usedModules.has(candidate.module)) {
      return;
    }

    if (candidate.module !== factItem.module) {
      usedModules.add(candidate.module);
    }

    selected.push(candidate.text);
  });

  if (selected.length < 3) {
    factItem.compactDistractors.forEach((text) => {
      if (selected.length === 3) {
        return;
      }

      const normalized = normalizeText(text);
      const alreadyChosen = selected.some((item) => normalizeText(item) === normalized);
      if (!alreadyChosen) {
        selected.push(text);
      }
    });
  }

  return selected.slice(0, 3);
}

function selectClauseDistractors(factItem, correctClause, variantIndex) {
  const ownNormalized = normalizeText(correctClause);
  const pool = CLAUSE_POOL
    .filter((candidate) => normalizeText(candidate.text) !== ownNormalized)
    .filter((candidate) => candidate.factId !== factItem.id)
    .sort((left, right) => {
      const sameModuleLeft = left.module === factItem.module ? 1 : 0;
      const sameModuleRight = right.module === factItem.module ? 1 : 0;
      if (sameModuleLeft !== sameModuleRight) {
        return sameModuleRight - sameModuleLeft;
      }
      const samePriorityLeft = left.priority === factItem.priority ? 1 : 0;
      const samePriorityRight = right.priority === factItem.priority ? 1 : 0;
      return samePriorityRight - samePriorityLeft;
    });

  return pickSeeded(pool, `${factItem.id}-clause-${variantIndex}`)
    .filter((candidate, index, array) =>
      array.findIndex((item) => normalizeText(item.text) === normalizeText(candidate.text)) === index
    )
    .slice(0, 3)
    .map((candidate) => candidate.text);
}

function selectForeignClause(factItem, excludedClauses, variantIndex) {
  const excluded = new Set(excludedClauses.map((clause) => normalizeText(clause)));

  return pickSeeded(
    CLAUSE_POOL.filter((candidate) =>
      candidate.factId !== factItem.id && !excluded.has(normalizeText(candidate.text))
    ),
    `${factItem.id}-foreign-clause-${variantIndex}`
  )[0]?.text;
}

function selectIdentifierDistractors(factItem, identifier, variantIndex) {
  return pickSeeded(
    IDENTIFIER_POOL.filter((candidate) =>
      candidate.type === identifier.type &&
      candidate.value !== identifier.value &&
      candidate.factId !== factItem.id
    ),
    `${factItem.id}-identifier-${identifier.value}-${variantIndex}`
  )
    .filter((candidate, index, array) =>
      array.findIndex((item) => item.value === candidate.value) === index
    )
    .slice(0, 3)
    .map((candidate) => candidate.value);
}

function buildGenericQuestion(factItem, templateIndex) {
  const compactCorrect = factItem.compactCorrect;
  const compactDistractors = selectDistractors(factItem, templateIndex);
  const options = seededShuffle(
    [compactCorrect, ...compactDistractors],
    `${factItem.id}-generic-${templateIndex}`
  );

  return {
    prompt: cleanPrompt(GENERIC_QUESTION_TEMPLATES[templateIndex % GENERIC_QUESTION_TEMPLATES.length](factItem)),
    options,
    correctIndex: options.indexOf(compactCorrect),
    difficulty: 'very-hard'
  };
}

function buildClauseMemberQuestion(factItem, variantIndex) {
  if (!factItem.clauses.length) {
    return null;
  }

  const clauses = pickSeeded(factItem.clauses, `${factItem.id}-own-clause-${variantIndex}`);
  const correctClause = clauses[0];
  const distractors = selectClauseDistractors(factItem, correctClause, variantIndex);

  if (distractors.length < 3) {
    return null;
  }

  const options = seededShuffle(
    [correctClause, ...distractors],
    `${factItem.id}-clause-member-${variantIndex}`
  );

  return {
    prompt: cleanPrompt(`En relación con ${factItem.stem}, señale qué elemento aparece expresamente en la formulación correcta.`),
    options,
    correctIndex: options.indexOf(correctClause),
    difficulty: 'memoristic'
  };
}

function buildClauseExclusionQuestion(factItem, variantIndex) {
  if (factItem.clauses.length < 3) {
    return null;
  }

  const ownClauses = pickSeeded(factItem.clauses, `${factItem.id}-own-exclusion-${variantIndex}`).slice(0, 3);
  const foreignClause = selectForeignClause(factItem, ownClauses, variantIndex);

  if (!foreignClause) {
    return null;
  }

  const options = seededShuffle(
    [...ownClauses, foreignClause],
    `${factItem.id}-clause-exclusion-${variantIndex}`
  );

  return {
    prompt: cleanPrompt(`¿Cuál de los siguientes elementos NO forma parte de la formulación correcta sobre ${factItem.stem}?`),
    options,
    correctIndex: options.indexOf(foreignClause),
    difficulty: 'memoristic'
  };
}

function buildIdentifierQuestion(factItem, variantIndex) {
  if (!factItem.identifiers.length) {
    return null;
  }

  const identifier = pickSeeded(factItem.identifiers, `${factItem.id}-identifier-own-${variantIndex}`)[0];
  const distractors = selectIdentifierDistractors(factItem, identifier, variantIndex);

  if (distractors.length < 3) {
    return null;
  }

  const promptByType = {
    year: `¿Qué año aparece vinculado en el temario a ${factItem.stem}?`,
    iso: `¿Qué referencia ISO aparece asociada a ${factItem.stem}?`,
    une: `¿Qué referencia UNE se menciona en relación con ${factItem.stem}?`,
    circular: `¿Qué Circular se vincula a ${factItem.stem}?`,
    ley: `¿Qué Ley se cita en relación con ${factItem.stem}?`,
    org: `¿Qué referencia u organismo aparece expresamente asociado a ${factItem.stem}?`
  };

  const options = seededShuffle(
    [identifier.value, ...distractors],
    `${factItem.id}-identifier-question-${variantIndex}`
  );

  return {
    prompt: cleanPrompt(promptByType[identifier.type] || `¿Qué referencia concreta aparece asociada a ${factItem.stem}?`),
    options,
    correctIndex: options.indexOf(identifier.value),
    difficulty: 'memoristic'
  };
}

function buildQuestionVariants(factItem) {
  const builders = [
    () => buildIdentifierQuestion(factItem, 0),
    () => buildGenericQuestion(factItem, 0),
    () => buildClauseMemberQuestion(factItem, 0),
    () => buildGenericQuestion(factItem, 1),
    () => buildClauseExclusionQuestion(factItem, 0),
    () => buildGenericQuestion(factItem, 2),
    () => buildIdentifierQuestion(factItem, 1),
    () => buildClauseMemberQuestion(factItem, 1),
    () => buildGenericQuestion(factItem, 3),
    () => buildClauseExclusionQuestion(factItem, 1),
    () => buildGenericQuestion(factItem, 4),
    () => buildGenericQuestion(factItem, 5),
    () => buildGenericQuestion(factItem, 6)
  ];

  return builders.map((builder, index) => {
    const built = builder();
    return built || buildGenericQuestion(factItem, index + 7);
  });
}

function cleanPrompt(prompt) {
  return prompt
    .replace(/\ba el\b/gi, 'al')
    .replace(/\bde el\b/gi, 'del');
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededShuffle(items, seedValue) {
  const clone = [...items];
  let seed = hashString(seedValue) || 1;

  for (let index = clone.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    const swapIndex = seed % (index + 1);
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }

  return clone;
}

function buildQuestions() {
  return ENRICHED_FACTS.flatMap((factItem) => {
    return buildQuestionVariants(factItem).map((question, questionIndex) => {
      return {
        id: `${factItem.id}-v${questionIndex + 1}`,
        module: factItem.module,
        priority: factItem.priority,
        topic: factItem.topic,
        prompt: question.prompt,
        options: question.options,
        correctIndex: question.correctIndex,
        explanation: factItem.explanation,
        sourcePages: factItem.exactPage,
        difficulty: question.difficulty
      };
    });
  });
}

const CESCOM_QUESTIONS = buildQuestions();
