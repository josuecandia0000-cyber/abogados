import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDownRight, ArrowRight, CheckCircle2, ChevronDown, Calendar } from 'lucide-react';

// BASE DE DATOS CENTRALIZADA DE SERVICIOS
const servicesDatabase = {
  'licencias-de-alcohol': {
    id: '01',
    title: 'Gestoría Legal para Licencias de Venta de Bebidas Alcohólicas',
    tagline: 'Obtén los permisos para vender alcohol y abre tu negocio con respaldo jurídico y seguridad administrativa.',
    heroTitle: ['Licencias de', 'Bebidas Alcohólicas'],
    image: '/licen.jpeg',
    intro: 'En Gestoría Jurídica Abogados brindamos servicios integrales de asesoría, gestoría legal y acompañamiento administrativo para personas físicas, empresas y comerciantes que requieren obtener, regularizar, modificar o renovar las licencias y autorizaciones necesarias para la venta de bebidas alcohólicas.',
    target: 'Nuestro servicio está dirigido a restaurantes, bares, cantinas, vinaterías, tiendas de conveniencia, establecimientos de alimentos y bebidas, y otros negocios que, de acuerdo con su actividad comercial, requieren autorización para comercializar bebidas alcohólicas.',
    diagnostic: 'Analizamos las características del establecimiento, el giro comercial, la ubicación del inmueble y la documentación disponible para identificar los requisitos aplicables y establecer una ruta de gestión conforme a la legislación estatal y municipal correspondiente.',
    gestiones: [
      { title: 'Asesoría para la obtención de licencias de alcohol', desc: 'Identificación de la modalidad de autorización que corresponde al establecimiento, conforme al tipo de negocio y a la forma de comercialización de las bebidas alcohólicas.' },
      { title: 'Revisión de compatibilidad de uso de suelo y giro', desc: 'Análisis de los requisitos urbanísticos y administrativos necesarios para determinar la viabilidad del establecimiento.' },
      { title: 'Gestión de autorizaciones municipales', desc: 'Acompañamiento en los trámites relacionados con la apertura y operación del negocio ante las dependencias competentes.' },
      { title: 'Licencia de funcionamiento municipal', desc: 'Gestión de esta autorización cuando resulte necesaria para la operación del establecimiento.' },
      { title: 'Visto Bueno de Protección Civil', desc: 'Orientación y seguimiento de los requisitos de seguridad y protección civil aplicables al inmueble y a su actividad.' },
      { title: 'Visto Bueno Ecológico y requisitos ambientales', desc: 'Gestión de las autorizaciones o evaluaciones ambientales que correspondan según el giro y las características del establecimiento.' },
      { title: 'Integración y revisión del expediente', desc: 'Recopilación, análisis y preparación de los documentos requeridos por las autoridades competentes.' },
      { title: 'Regularización de establecimientos', desc: 'Evaluación y gestión de alternativas para atender observaciones, requisitos pendientes o inconsistencias administrativas.' },
      { title: 'Modificación, actualización o renovación de autorizaciones', desc: 'Acompañamiento en los trámites correspondientes cuando la normativa aplicable contemple estas opciones.' }
    ],
    benefits: [
      'Orientación sobre la licencia adecuada: identificamos la modalidad de autorización que puede corresponder a tu giro comercial.',
      'Ahorro de tiempo: coordinamos las gestiones y damos seguimiento a los trámites comprendidos en el servicio contratado.',
      'Prevención de contratiempos: revisamos previamente la documentación para identificar requisitos pendientes e inconsistencias que puedan afectar el procedimiento.',
      'Gestión integral de permisos relacionados: coordinamos los trámites municipales, urbanísticos, ambientales y de protección civil que resulten aplicables.',
      'Claridad en costos y requisitos: te informamos sobre los honorarios profesionales, los derechos gubernamentales y los gastos estimados.',
      'Seguimiento personalizado: te mantenemos informado sobre los avances, las observaciones y los requerimientos de las autoridades.',
      'Acompañamiento durante el procedimiento: te orientamos para atender las solicitudes y observaciones administrativas que surjan durante la gestión.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría y diagnóstico inicial', desc: 'Analizamos el giro comercial, la ubicación del establecimiento y la modalidad de venta de bebidas alcohólicas que deseas desarrollar. Revisamos la información disponible para identificar los requisitos generales, las posibles limitaciones y las gestiones necesarias.' },
      { step: 'Paso 2', title: 'Propuesta de servicio y contratación', desc: 'Presentamos una propuesta que especifica los trámites incluidos, los honorarios profesionales, las condiciones de pago y los derechos o gastos gubernamentales previstos. Una vez aceptada, formalizamos la contratación y establecemos la ruta de trabajo.' },
      { step: 'Paso 3', title: 'Integración y revisión documental', desc: 'Recopilamos y revisamos los documentos del negocio y del inmueble, identificamos los requisitos pendientes y preparamos los expedientes y solicitudes necesarios para cada trámite.' },
      { step: 'Paso 4', title: 'Gestión y seguimiento ante las autoridades', desc: 'Damos seguimiento a las solicitudes presentadas ante las dependencias competentes, atendemos los requerimientos comprendidos en el servicio y mantenemos comunicación contigo sobre el avance del procedimiento.' },
      { step: 'Paso 5', title: 'Resolución y entrega de documentación', desc: 'Te informamos sobre el resultado de las gestiones y, cuando las autoridades emiten las autorizaciones correspondientes, realizamos la entrega de los documentos obtenidos. También te orientamos sobre sus condiciones de vigencia, las obligaciones aplicables y los trámites posteriores que puedan ser necesarios.' }
    ]
  },
  'licencias-de-funcionamiento': {
    id: '02',
    title: 'Gestoría Legal para Licencias de Funcionamiento y Regularización de Establecimientos Comerciales',
    tagline: 'Abre y regulariza tu negocio con respaldo jurídico, permisos en regla y tranquilidad para operar.',
    heroTitle: ['Licencias de', 'Funcionamiento'],
    image: '/funcio.jpg',
    intro: 'En Gestoría Jurídica Abogados brindamos servicios integrales de gestoría legal y administrativa para personas físicas, empresas, comerciantes y emprendedores que requieren obtener, regularizar, actualizar o renovar las licencias y autorizaciones necesarias para la apertura y operación de establecimientos comerciales y de servicios, sin venta de bebidas alcohólicas.',
    target: 'Nuestro servicio comprende el análisis jurídico y administrativo de cada establecimiento para identificar los requisitos aplicables según el giro comercial, la ubicación del inmueble, sus características físicas y la normativa municipal, estatal y federal que corresponda.',
    diagnostic: 'A través de una revisión preliminar, identificamos los trámites necesarios, posibles inconsistencias documentales y requisitos pendientes, con el propósito de establecer una ruta de gestión adecuada para cada negocio. Antes de iniciar cada trámite, revisamos la documentación del negocio y del inmueble, los antecedentes administrativos disponibles y los requisitos de las autoridades competentes.',
    gestiones: [
      { title: 'Licencia de Funcionamiento Municipal', desc: 'Gestión de la autorización necesaria para operar establecimientos comerciales y de servicios, conforme a los requisitos del municipio correspondiente.' },
      { title: 'Dictamen o autorización de uso de suelo', desc: 'Revisión y gestión de los trámites necesarios para verificar la compatibilidad entre la actividad comercial y el uso permitido del inmueble.' },
      { title: 'Factibilidad de giro comercial', desc: 'Análisis de la viabilidad administrativa del establecimiento conforme a su actividad y ubicación.' },
      { title: 'Visto Bueno de Protección Civil', desc: 'Gestión y seguimiento de los requisitos de seguridad, prevención de riesgos y protección civil aplicables al negocio.' },
      { title: 'Visto Bueno Ecológico y trámites ambientales', desc: 'Acompañamiento en la obtención de autorizaciones o dictámenes ambientales cuando sean exigibles según el giro y las características del establecimiento.' },
      { title: 'Licencias y autorizaciones complementarias', desc: 'Identificación y gestión de otros permisos que puedan resultar necesarios para la operación legal del negocio.' },
      { title: 'Regularización de establecimientos', desc: 'Revisión de situaciones administrativas pendientes, atención de observaciones y gestión de alternativas para subsanar incumplimientos documentales.' },
      { title: 'Actualización y renovación de licencias', desc: 'Acompañamiento en los procedimientos correspondientes para mantener vigentes las autorizaciones, cuando así lo establezca la normativa aplicable.' }
    ],
    benefits: [
      'Ahorro de tiempo: coordinamos los trámites y damos seguimiento a las gestiones contratadas ante las dependencias correspondientes.',
      'Orientación jurídica personalizada: identificamos los requisitos aplicables a tu giro comercial y te explicamos las principales obligaciones.',
      'Prevención de riesgos: detectamos inconsistencias documentales o impedimentos urbanísticos antes de presentar los expedientes.',
      'Seguimiento puntual: te mantenemos informado sobre el estatus de tus trámites y la resolución de las autoridades competentes.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría y diagnóstico inicial', desc: 'Analizamos las características del negocio, la ubicación del inmueble y el giro comercial deseado para identificar la factibilidad urbana y la normativa aplicable.' },
      { step: 'Paso 2', title: 'Propuesta de servicio y contratación', desc: 'Definimos el alcance exacto de las gestiones necesarias, desglosando los honorarios y gastos administrativos para formalizar el plan de trabajo.' },
      { step: 'Paso 3', title: 'Integración y revisión documental', desc: 'Recopilamos la documentación legal del inmueble y del comerciante, solucionando observaciones preliminares de Protección Civil y Ecología.' },
      { step: 'Paso 4', title: 'Gestión e ingreso de trámites', desc: 'Ingresamos la documentación ante el municipio y dependencias involucradas, monitoreando continuamente la respuesta y desahogando requerimientos.' },
      { step: 'Paso 5', title: 'Resolución y entrega de Licencia', desc: 'Entregamos la Licencia de Funcionamiento oficial y sus vistos buenos vigentes, indicándote las fechas de renovación posterior.' }
    ]
  },
  'derecho-familiar': {
    id: '03',
    title: 'Derecho Familiar y Protección Patrimonial',
    tagline: 'Defendemos tus derechos y te acompañamos para proteger a tu familia y tu patrimonio.', // 13 palabras (Cumple regla de máx 15)
    heroTitle: ['Derecho', 'Familiar'],
    image: '/patri.jpg',
    intro: 'Brindamos asesoría, acompañamiento y representación jurídica en asuntos de derecho familiar, atendiendo cada caso de manera personalizada y con sensibilidad ante las circunstancias personales y familiares de nuestros clientes.',
    target: 'Nuestro objetivo es ayudar a las personas a comprender sus derechos, conocer sus alternativas legales y tomar decisiones informadas para resolver sus conflictos familiares, procurando proteger el bienestar de los menores de edad y los intereses legítimos de nuestros representados.',
    diagnostic: 'Cada asunto comienza con una evaluación jurídica de los antecedentes, las pruebas disponibles y las necesidades de la persona. A partir de ese análisis, definimos las alternativas de solución, ya sea mediante un convenio, cuando resulte viable y legalmente procedente, o a través de un procedimiento ante la autoridad judicial competente.',
    gestiones: [
      { title: 'Pensión alimenticia', desc: 'Asesoría para solicitar, fijar, modificar o exigir el cumplimiento de las obligaciones alimentarias, conforme a las circunstancias y disposiciones legales aplicables.' },
      { title: 'Guarda y custodia', desc: 'Representación en procedimientos relacionados con el cuidado y la custodia de niñas, niños y adolescentes, atendiendo primordialmente a su interés superior.' },
      { title: 'Régimen de convivencia', desc: 'Asesoría y gestión de acuerdos o procedimientos para establecer o modificar las convivencias entre menores y sus progenitores.' },
      { title: 'Divorcio', desc: 'Orientación y representación en procedimientos de divorcio, incluyendo las cuestiones familiares y patrimoniales que deban resolverse.' },
      { title: 'Liquidación de la sociedad conyugal y división patrimonial', desc: 'Asesoría en la determinación y distribución de los bienes y derechos que correspondan conforme al régimen patrimonial aplicable.' },
      { title: 'Convenios familiares y mediación', desc: 'Cuando el asunto lo permite, exploramos alternativas de diálogo y mecanismos de solución de controversias para alcanzar acuerdos legalmente procedentes.' },
      { title: 'Cumplimiento de convenios y resoluciones', desc: 'Asesoría para exigir el cumplimiento de las obligaciones establecidas en convenios aprobados o resoluciones judiciales.' },
      { title: 'Controversias familiares', desc: 'Representación y defensa de los derechos de nuestros clientes en los procedimientos que correspondan.' }
    ],
    benefits: [
      'Claridad y honestidad: explicamos la situación jurídica, las alternativas disponibles, los posibles obstáculos y los alcances reales.',
      'Estrategia jurídica personalizada: analizamos las particularidades de cada caso para determinar la vía legal más adecuada.',
      'Protección de los derechos familiares: atención a obligaciones alimentarias, custodia y convivencias conforme al interés superior de la niñez.',
      'Atención cercana y confidencial: un espacio profesional para exponer tu situación y conocer cómo será atendido tu asunto.',
      'Alternativas de solución: exploramos la mediación y los convenios para resolver controversias sin prolongar innecesariamente el conflicto.',
      'Representación y seguimiento: acompañamiento constante durante las etapas del procedimiento e información sobre los avances.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Escuchamos tu situación, revisamos los antecedentes y te explicamos los derechos y obligaciones involucrados, así como las alternativas legales.' },
      { step: 'Paso 2', title: 'Evaluación y presupuesto', desc: 'Analizamos la complejidad del asunto, la documentación y las actuaciones necesarias para presentar una propuesta de honorarios transparente.' },
      { step: 'Paso 3', title: 'Dictamen y estrategia jurídica', desc: 'Integramos un análisis con antecedentes, identificación de la problemática, pruebas, riesgos y vías de solución viables.' },
      { step: 'Paso 4', title: 'Negociación, convenio o procedimiento judicial', desc: 'Exploramos acuerdos mediante mediación; de no ser posible o requerir ley, promovemos las actuaciones judiciales correspondientes.' },
      { step: 'Paso 5', title: 'Seguimiento del procedimiento', desc: 'Damos seguimiento puntual a las etapas del juicio (demanda, pruebas, alegatos y resolución), manteniéndote informado en todo momento.' },
      { step: 'Paso 6', title: 'Resolución y cumplimiento', desc: 'Explicamos los alcances de la sentencia o convenio y orientamos al cliente sobre las acciones para su cumplimiento o vías de impugnación.' }
    ]
  },
  'defensa-civil-patrimonial': {
    id: '04',
    title: 'Defensa Civil y Protección del Patrimonio Inmobiliario',
    tagline: 'Defendemos tus derechos, exigimos el cumplimiento de tus contratos y protegemos tu patrimonio.', // 13 palabras
    heroTitle: ['Defensa Civil y', 'Patrimonio'],
    image: '/contra.jpeg',
    intro: 'El servicio consiste en brindar asesoría, representación y defensa jurídica en controversias civiles derivadas del incumplimiento de contratos de arrendamiento, compraventa de bienes inmuebles y otras obligaciones contractuales que puedan afectar el patrimonio de nuestros clientes.',
    target: 'En Gestoría Jurídica Abogados analizamos cada caso para determinar las acciones legales procedentes y ejercer los mecanismos jurídicos necesarios para exigir el cumplimiento de las obligaciones contractuales, defender los derechos de propiedad y, cuando corresponda, reclamar la entrega o restitución de un inmueble.',
    diagnostic: 'Asimismo, cuando las condiciones del asunto lo permitan, gestionamos acercamientos con la contraparte para buscar una solución mediante la negociación y la celebración de convenios que otorguen certeza jurídica a las partes.',
    gestiones: [
      { title: 'Asesoría y análisis jurídico', desc: 'Revisión del contrato, documentación y antecedentes para determinar la viabilidad de las acciones legales.' },
      { title: 'Demanda y contestación', desc: 'Presentación de la demanda correspondiente o defensa frente a las reclamaciones de la contraparte.' },
      { title: 'Reconvención', desc: 'Formulación de pretensiones propias contra la parte actora, cuando legalmente proceda.' },
      { title: 'Etapa probatoria', desc: 'Ofrecimiento, preparación y desahogo de pruebas para acreditar los hechos y sustentar las pretensiones de nuestro cliente.' },
      { title: 'Sentencia', desc: 'Seguimiento del procedimiento hasta la resolución judicial.' },
      { title: 'Ejecución de sentencia', desc: 'Promoción de las actuaciones necesarias para procurar el cumplimiento de la resolución favorable.' },
      { title: 'Apelación y amparo', desc: 'Análisis y, en su caso, promoción de los medios de impugnación procedentes conforme a la legislación aplicable.' }
    ],
    benefits: [
      'Protección de tu patrimonio: defensa jurídica de tus intereses relacionados con casas, terrenos y otros bienes inmuebles.',
      'Cumplimiento contractual: acciones legales encaminadas a exigir que las partes cumplan las obligaciones que asumieron.',
      'Defensa de tus derechos: representación frente a incumplimientos y controversias contractuales.',
      'Recuperación de inmuebles: gestión de las acciones legales que correspondan para procurar la restitución o entrega de una propiedad.',
      'Acompañamiento jurídico integral: seguimiento del procedimiento durante las etapas que requiera tu asunto.',
      'Alternativas de solución: negociación y formalización de convenios cuando exista viabilidad jurídica.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Evaluamos tu situación, identificamos el incumplimiento contractual y escuchamos los antecedentes para conocer la problemática que afecta tus derechos o tu patrimonio.' },
      { step: 'Paso 2', title: 'Revisión documental y diagnóstico legal', desc: 'Analizamos el contrato, los documentos disponibles y los medios de prueba para determinar las acciones legales procedentes y establecer una estrategia de defensa.' },
      { step: 'Paso 3', title: 'Negociación o inicio del procedimiento judicial', desc: 'Cuando existe una posibilidad viable de solución, buscamos un acercamiento con la contraparte para negociar y, en su caso, celebrar un convenio. Si no se alcanza un acuerdo, valoramos la presentación de la demanda.' },
      { step: 'Paso 4', title: 'Representación y seguimiento del juicio', desc: 'Damos seguimiento a las actuaciones judiciales, incluyendo las etapas de demanda, contestación, pruebas y sentencia, así como los recursos y medios de impugnación procedentes.' },
      { step: 'Paso 5', title: 'Ejecución y cumplimiento', desc: 'Cuando se obtiene una resolución favorable, promovemos las actuaciones legales correspondientes para procurar su cumplimiento y hacer efectivos los derechos reconocidos a nuestro cliente.' }
    ]
  },
  'derecho-mercantil-cobranza': {
    id: '05',
    title: 'Cobranza Judicial, Recuperación de Adeudos y Defensa Mercantil',
    tagline: 'Hacemos valer tus derechos comerciales y exigimos legalmente el pago de tus adeudos.', // 13 palabras
    heroTitle: ['Cobranza y Defensa', 'Mercantil'],
    image: '/cobra.jpg',
    intro: 'El servicio consiste en brindar asesoría, representación y defensa jurídica en controversias derivadas de actos de comercio, incumplimientos de obligaciones mercantiles y recuperación de créditos, con el objetivo de proteger los intereses económicos y jurídicos de nuestros clientes.',
    target: 'En Gestoría Jurídica Abogados representamos a personas físicas y morales que necesitan exigir el pago de deudas, hacer efectivos títulos de crédito o defenderse frente a reclamaciones mercantiles. Analizamos cada operación, los documentos que acreditan la obligación y las circunstancias del incumplimiento para determinar la vía legal procedente.',
    diagnostic: 'Asimismo, procuramos identificar oportunidades de negociación y celebrar convenios de pago que permitan recuperar los adeudos bajo condiciones jurídicamente claras y exigibles.',
    gestiones: [
      { title: 'Asesoría y análisis jurídico', desc: 'Revisión de pagarés, contratos, facturas, convenios, reconocimientos de adeudo y demás documentos relacionados con la obligación.' },
      { title: 'Gestión de cobranza extrajudicial', desc: 'Requerimientos formales de pago y negociación con el deudor para procurar una solución sin necesidad de acudir a juicio.' },
      { title: 'Presentación de demandas mercantiles', desc: 'Promoción de las acciones judiciales correspondientes para reclamar el pago de capital, intereses pactados y demás conceptos legalmente procedentes.' },
      { title: 'Juicio ejecutivo mercantil', desc: 'Ejercicio de esta vía cuando se cuenta con un documento que trae aparejada ejecución y se cumplen los requisitos legales, como pagarés.' },
      { title: 'Contestación y defensa mercantil', desc: 'Representación frente a demandas, excepciones y reclamaciones relacionadas con obligaciones comerciales.' },
      { title: 'Etapa probatoria', desc: 'Ofrecimiento y desahogo de pruebas para acreditar la existencia de la obligación, el incumplimiento y las defensas planteadas.' },
      { title: 'Sentencia y ejecución', desc: 'Seguimiento del procedimiento y promoción de las actuaciones necesarias para procurar el cumplimiento de la resolución judicial, incluyendo medidas de ejecución.' },
      { title: 'Recursos y medios de impugnación', desc: 'Análisis y, cuando proceda, interposición o contestación de los recursos y mecanismos de defensa previstos por la legislación.' }
    ],
    benefits: [
      'Recuperación de adeudos: acciones legales encaminadas a obtener el pago de cantidades pendientes.',
      'Cobranza estratégica: evaluación de alternativas extrajudiciales y judiciales de acuerdo con las características del adeudo.',
      'Protección de tus intereses económicos: defensa de tus derechos derivados de contratos, pagarés y otras operaciones mercantiles.',
      'Reclamación de intereses: exigencia de intereses ordinarios o moratorios cuando hayan sido válidamente pactados o procedan conforme a derecho.',
      'Defensa ante reclamaciones: representación jurídica frente a demandas y controversias mercantiles.',
      'Negociación de convenios: búsqueda de acuerdos de pago que establezcan obligaciones, plazos y condiciones claras.',
      'Seguimiento judicial: acompañamiento durante las etapas procesales correspondientes hasta la resolución y, en su caso, su ejecución.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Escuchamos tu situación, identificamos el origen del adeudo o de la controversia mercantil y evaluamos las alternativas legales disponibles.' },
      { step: 'Paso 2', title: 'Revisión documental y diagnóstico legal', desc: 'Analizamos los pagarés, contratos, facturas, convenios, comprobantes de pago y demás documentos para determinar la existencia de la obligación, su exigibilidad y la vía jurídica procedente.' },
      { step: 'Paso 3', title: 'Cobranza extrajudicial o inicio del juicio', desc: 'Cuando resulta viable, gestionamos un requerimiento formal de pago y buscamos una solución mediante la negociación. Si no se alcanza un acuerdo, valoramos la presentación de la demanda mercantil.' },
      { step: 'Paso 4', title: 'Representación y seguimiento del procedimiento', desc: 'Ejercemos la representación jurídica durante las etapas del juicio, incluyendo escritos, desahogo de pruebas, atención de defensas y seguimiento hasta la resolución judicial.' },
      { step: 'Paso 5', title: 'Ejecución y recuperación del adeudo', desc: 'Cuando se obtiene una resolución favorable, promovemos las actuaciones legalmente procedentes para procurar el pago de las cantidades reconocidas y la ejecución sobre bienes susceptibles de embargo.' }
    ]
  },
  'derecho-penal-defensa': {
    id: '06',
    title: 'Asesoría en Responsabilidad Legal y Protección de Derechos',
    tagline: 'Protegemos tu tranquilidad y representación jurídica con una estrategia legal sólida.',
    heroTitle: ['Protección Legal y', 'Derechos'],
    image: '/penal.jpeg',
    intro: 'El servicio consiste en brindar asesoría, representación y orientación en procedimientos ante autoridades correspondientes, tanto para la atención de contingencias legales como para el seguimiento de actuaciones y la protección de derechos patrimoniales o personales.',
    target: 'En Gestoría Jurídica Abogados analizamos las circunstancias de cada caso, las pruebas disponibles y las disposiciones aplicables para establecer una estrategia de actuación orientada a proteger los intereses de nuestros representados.',
    diagnostic: 'Cada asunto requiere un análisis particular para determinar la estrategia adecuada, las actuaciones necesarias y las posibilidades legales reales.',
    gestiones: [
      { title: 'Asesoría y diagnóstico jurídico', desc: 'Análisis de los hechos, revisión de documentos y evaluación de implicaciones legales.' },
      { title: 'Presentación de trámites y solicitudes', desc: 'Orientación y acompañamiento para hacer del conocimiento de la autoridad competente las situaciones pertinentes.' },
      { title: 'Representación de partes interesadas', desc: 'Seguimiento de diligencias, aportación de elementos de prueba y solicitud de trámites oportunos.' },
      { title: 'Acompañamiento en investigaciones', desc: 'Asistencia legal a personas representadas, preparación de la estrategia y protección de garantías en las actuaciones.' },
      { title: 'Audiencias ante autoridades', desc: 'Representación técnica en las comparecencias y audiencias correspondientes.' },
      { title: 'Mecanismos de solución de controversias', desc: 'Evaluación de alternativas legales procedentes y acuerdos conforme a los requisitos de ley.' },
      { title: 'Impugnaciones y medios de defensa', desc: 'Análisis y promoción de recursos contra resoluciones conforme a la normatividad aplicable.' },
      { title: 'Restablecimiento de derechos', desc: 'Gestión de acciones procedentes para el resguardo e indemnización de derechos afectados.' }
    ],
    benefits: [
      'Protección de tus derechos fundamentales y debido proceso.',
      'Representación legal estratégica conforme a los antecedentes disponibles.',
      'Acompañamiento integral durante las distintas etapas del procedimiento.',
      'Atención especializada para el seguimiento de actuaciones formales.',
      'Evaluación de alternativas y mecanismos legales viables.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Escuchamos tu situación y determinamos la estrategia de representación necesaria.' },
      { step: 'Paso 2', title: 'Análisis de antecedentes', desc: 'Revisamos citatorios, expedientes y documentación para identificar los escenarios legales.' },
      { step: 'Paso 3', title: 'Definición de la estrategia', desc: 'Establecemos un plan de actuación acorde con tu situación y objetivos.' },
      { step: 'Paso 4', title: 'Representación y seguimiento', desc: 'Brindamos acompañamiento en las actuaciones correspondientes preparando argumentos y pruebas.' },
      { step: 'Paso 5', title: 'Seguimiento de resoluciones', desc: 'Analizamos las respuestas emitidas por las autoridades para determinar acciones posteriores.' }
    ]
  },
  'derecho-laboral-integral': {
    id: '07',
    title: 'Defensa Laboral Integral para Trabajadores y Empresas',
    tagline: 'Defendemos tus derechos laborales y protegemos los intereses de trabajadores y empleadores.', // 13 palabras
    heroTitle: ['Defensa Laboral y', 'Empresarial'],
    image: '/laboral.jpeg',
    intro: 'El servicio consiste en brindar asesoría, representación y defensa jurídica en materia laboral, tanto a trabajadores que buscan hacer valer sus derechos como a patrones y empresas que requieren prevenir, atender o resolver controversias derivadas de las relaciones de trabajo.',
    target: 'En Gestoría Jurídica Abogados intervenimos en conflictos relacionados con despidos injustificados, rescisión de la relación laboral, pago de salarios y prestaciones, finiquitos, liquidaciones, indemnizaciones, incumplimiento de obligaciones laborales y elaboración o revisión de contratos individuales de trabajo.',
    diagnostic: 'Asimismo, ofrecemos orientación preventiva a empleadores para fortalecer sus prácticas de contratación, documentar adecuadamente las relaciones laborales y reducir riesgos derivados del incumplimiento de las obligaciones legales.',
    gestiones: [
      { title: 'Asesoría y diagnóstico laboral', desc: 'Análisis de la relación de trabajo, antigüedad, salario, prestaciones, condiciones laborales y documentación disponible.' },
      { title: 'Despidos y terminación laboral', desc: 'Asesoría y representación en controversias relacionadas con despidos, renuncias, rescisión y terminación de la relación de trabajo.' },
      { title: 'Cálculo y reclamación de prestaciones', desc: 'Revisión de salarios pendientes, aguinaldo, vacaciones, prima vacacional, prima de antigüedad, indemnizaciones y demás conceptos.' },
      { title: 'Elaboración y revisión de contratos', desc: 'Preparación y análisis de contratos individuales de trabajo, convenios de terminación, recibos y demás documentos laborales.' },
      { title: 'Representación de trabajadores', desc: 'Defensa de los derechos laborales y reclamación de prestaciones e indemnizaciones que resulten procedentes.' },
      { title: 'Asesoría y defensa patronal', desc: 'Representación de empleadores y empresas frente a reclamaciones laborales, análisis de contingencias y cumplimiento de obligaciones.' },
      { title: 'Conciliación prejudicial', desc: 'Preparación y representación en el procedimiento de conciliación ante el Centro de Conciliación Laboral competente.' },
      { title: 'Juicio laboral', desc: 'Presentación o contestación de demandas, ofrecimiento y desahogo de pruebas, formulación de argumentos y seguimiento ante tribunales.' },
      { title: 'Convenios, ejecución y amparo', desc: 'Negociación de acuerdos, cumplimiento de sentencias y promoción de medios de impugnación conforme a la legislación.' }
    ],
    benefits: [
      'Para trabajadores: Defensa de derechos frente a despidos, reclamación de prestaciones, cálculo de finiquito y representación en conciliación o juicio.',
      'Para patrones y empresas: Prevención de contingencias, contratación adecuada, defensa frente a reclamaciones, terminaciones ordenadas y estrategias de conciliación.',
      'Acompañamiento especializado: Adaptado a tu posición dentro de la relación laboral, garantizando seguridad y claridad jurídica.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Escuchamos tu situación e identificamos la problemática laboral, determinando si requieres defender tus derechos como trabajador o proteger los intereses de tu empresa.' },
      { step: 'Paso 2', title: 'Revisión documental y diagnóstico legal', desc: 'Analizamos contratos, recibos de nómina, comprobantes de pago, avisos de rescisión, comunicaciones y registros de asistencia para evaluar riesgos y derechos.' },
      { step: 'Paso 3', title: 'Definición de la estrategia laboral', desc: 'Establecemos las alternativas de actuación (reclamación, negociación de convenio, atención patronal o preparación de demanda y contestación).' },
      { step: 'Paso 4', title: 'Conciliación y representación jurídica', desc: 'Gestionamos la etapa de conciliación prejudicial. Si no hay acuerdo y procede la vía judicial, brindamos representación durante el juicio laboral.' },
      { step: 'Paso 5', title: 'Formalización y cumplimiento de acuerdos', desc: 'Damos seguimiento a la formalización y cumplimiento de los convenios celebrados o resoluciones emitidas para proteger los derechos del cliente.' }
    ]
  },
  'derecho-condominal': {
    id: '08',
    title: 'Asesoría Jurídica y Defensa de los Derechos Condominales',
    tagline: 'Defendemos tus derechos condominales, fortalecemos la gestión legal y protegemos el patrimonio de tu comunidad.', // 13 palabras
    heroTitle: ['Derecho', 'Condominal'],
    image: '/condo.jpeg',
    intro: 'En Gestoría Jurídica Abogados brindamos asesoría, acompañamiento y representación jurídica especializada en materia condominal, dirigida a condóminos, mesas directivas y administraciones de condominios que requieren certeza jurídica en el ejercicio de sus funciones, la defensa de sus derechos y el cumplimiento de las obligaciones establecidas en la legislación aplicable, la escritura constitutiva y el reglamento interno.',
    target: 'Nuestro servicio tiene como finalidad proporcionar respaldo legal en la toma de decisiones, prevenir controversias, atender conflictos entre condóminos y fortalecer el funcionamiento jurídico de la organización condominal, sin sustituir las funciones propias de la administración del inmueble.',
    diagnostic: 'Nuestro acompañamiento se adapta a las necesidades de cada condominio y se desarrolla conforme a la legislación aplicable en la entidad donde se encuentra el inmueble, así como a las disposiciones que regulan su régimen de propiedad.',
    gestiones: [
      { title: 'Defensa de los derechos condominales', desc: 'Asesoría y representación jurídica para proteger los derechos e intereses de los propietarios, condóminos y órganos de representación.' },
      { title: 'Asesoramiento a mesas directivas y administraciones', desc: 'Orientación legal para el ejercicio de sus facultades, cumplimiento de obligaciones y atención de situaciones normativas.' },
      { title: 'Acompañamiento jurídico en asambleas', desc: 'Asistencia legal durante asambleas ordinarias y extraordinarias para orientar sobre el desarrollo, acuerdos y observancia legal.' },
      { title: 'Elaboración y emisión de convocatorias', desc: 'Preparación y revisión de convocatorias, órdenes del día y documentación relacionada conforme a los requisitos aplicables.' },
      { title: 'Revisión y formalización de actas y acuerdos', desc: 'Asesoría en la elaboración de actas de asamblea, revisión de acuerdos y documentación de decisiones adoptadas.' },
      { title: 'Recuperación de cartera vencida', desc: 'Gestión extrajudicial de cobro y ejercicio de acciones legales para reclamar cuotas ordinarias, extraordinarias y adeudos.' },
      { title: 'Atención de controversias condominales', desc: 'Intervención jurídica en conflictos de reglamento interno, áreas comunes, obligaciones económicas y acuerdos.' },
      { title: 'Revisión de instrumentos jurídicos', desc: 'Análisis de la escritura constitutiva, reglamento interno, convenios y requerimientos de pago.' },
      { title: 'Negociación y representación ante autoridades', desc: 'Celebración de convenios viables y atención de procedimientos administrativos o juicios ante instancias competentes.' }
    ],
    benefits: [
      'Seguridad jurídica en la toma de decisiones: orientación legal para que actuaciones y acuerdos se ajusten a la normativa.',
      'Respaldo para mesas directivas y administraciones: acompañamiento jurídico en el ejercicio de sus funciones.',
      'Recuperación de adeudos: estrategias de cobranza orientadas a recuperar la cartera vencida.',
      'Asambleas jurídicamente respaldadas: apoyo en la preparación de convocatorias y acompañamiento durante sesiones.',
      'Prevención de controversias: identificación de riesgos legales y reducción de conflictos internos.',
      'Protección de los derechos de los condóminos: defensa de los intereses legítimos de los propietarios.',
      'Atención profesional de conflictos y mayor certeza documental.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Identificamos las necesidades del condominio y conocemos la situación planteada por la administración, mesa directiva o condóminos.' },
      { step: 'Paso 2', title: 'Revisión documental y diagnóstico jurídico', desc: 'Analizamos la escritura constitutiva, reglamento interno, actas, convocatorias y estados de cuenta relevantes.' },
      { step: 'Paso 3', title: 'Definición del plan de actuación', desc: 'Establecemos acciones jurídicas como asesoría, convocatorias, revisión de acuerdos, requerimientos o cobranza.' },
      { step: 'Paso 4', title: 'Acompañamiento y ejecución de acciones', desc: 'Brindamos asistencia en actuaciones acordadas y evaluamos alternativas de negociación, conciliación o representación.' },
      { step: 'Paso 5', title: 'Seguimiento y cumplimiento', desc: 'Damos seguimiento a los acuerdos, compromisos de pago y actuaciones jurídicas para mantener la certeza del régimen.' }
    ]
  },
  'derecho-agrario-regularizacion': {
    id: '09',
    title: 'Regularización de Predios, Seguridad Jurídica y Certeza Patrimonial',
    tagline: 'Regularizamos tu propiedad para que tengas certeza jurídica y seguridad sobre el patrimonio que te pertenece.', // 13 palabras
    heroTitle: ['Regularización de', 'Predios'],
    image: '/predio.jpeg',
    intro: 'En Gestoría Jurídica Abogados brindamos asesoría, gestión y acompañamiento jurídico en materia agraria e inmobiliaria, orientados a la regularización de predios, la formalización de derechos sobre la tierra y la obtención de certeza jurídica respecto de la propiedad.',
    target: 'Nuestro servicio está dirigido a personas que poseen terrenos con documentación irregular, predios de origen ejidal o comunal, propiedades sin escrituración o inmuebles cuyos antecedentes jurídicos requieren revisión para determinar la vía legal que permita regularizar su situación.',
    diagnostic: 'Analizamos los antecedentes registrales, documentales y agrarios de cada inmueble para identificar su régimen jurídico y establecer el procedimiento que corresponda. Cuando legalmente resulta viable, gestionamos las actuaciones necesarias para formalizar la propiedad privada, obtener el instrumento jurídico correspondiente y tramitar su inscripción.',
    gestiones: [
      { title: 'Diagnóstico jurídico del predio', desc: 'Análisis de antecedentes, contratos, certificados, títulos y constancias de posesión para identificar la situación jurídica.' },
      { title: 'Investigación de antecedentes registrales y agrarios', desc: 'Revisión de información ante el Registro Público de la Propiedad, el Registro Agrario Nacional y autoridades competentes.' },
      { title: 'Regularización de predios con documentación irregular', desc: 'Evaluación y gestión de alternativas legales para formalizar derechos sobre terrenos con inconsistencias.' },
      { title: 'Asesoría en materia ejidal y comunal', desc: 'Orientación sobre derechos parcelarios, certificados, sucesiones agrarias, transmisión de derechos y tenencia de la tierra.' },
      { title: 'Gestión para la adopción del dominio pleno', desc: 'Acompañamiento en procedimientos cuando se trata de parcelas ejidales y se cumplen requisitos para adquirir el dominio pleno.' },
      { title: 'Formalización y escrituración', desc: 'Gestión y acompañamiento ante instancias competentes y notario público para formalizar la transmisión o reconocimiento.' },
      { title: 'Inscripción ante el Registro Público de la Propiedad', desc: 'Seguimiento del trámite registral para procurar que el título o instrumento se inscriba y produzca efectos legales.' },
      { title: 'Corrección de inconsistencias documentales', desc: 'Asesoría para atender discrepancias en datos, antecedentes o documentos mediante procedimientos legalmente disponibles.' }
    ],
    benefits: [
      'Certeza jurídica sobre tu propiedad: identificación del régimen legal del predio y acciones necesarias para regularizarlo.',
      'Regularización y escrituración: acompañamiento en los procedimientos para formalizar legalmente la propiedad.',
      'Acceso al Registro Público de la Propiedad: gestión de la inscripción del título o instrumento correspondiente.',
      'Transición legal a propiedad privada: orientación para incorporar terrenos de origen ejidal al régimen de propiedad privada.',
      'Protección patrimonial: reducción de riesgos asociados con la falta de documentación adecuada o antecedentes inciertos.',
      'Prevención de conflictos y mayor seguridad para futuras operaciones (compraventas, donaciones o sucesiones).'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría jurídica inicial', desc: 'Conocemos los antecedentes de tu terreno, la forma de adquisición y la documentación con la que cuentas.' },
      { step: 'Paso 2', title: 'Investigación y diagnóstico jurídico', desc: 'Revisamos documentos y consultamos antecedentes en el Registro Público y RAN para determinar el régimen jurídico.' },
      { step: 'Paso 3', title: 'Determinación de la vía de regularización', desc: 'Definimos la estrategia aplicable (corrección, formalización, trámites agrarios o adopción de dominio pleno).' },
      { step: 'Paso 4', title: 'Gestión, formalización y escrituración', desc: 'Damos seguimiento ante autoridades y coordinamos la formalización mediante instrumento notarial o documental.' },
      { step: 'Paso 5', title: 'Inscripción registral y seguimiento', desc: 'Gestionamos la presentación ante el Registro Público de la Propiedad para procurar su inscripción definitiva.' }
    ]
  },
  'gestion-notarial': {
    id: '10',
    title: 'Gestión Notarial, Formalización de Actos Jurídicos y Seguridad Patrimonial',
    tagline: 'Simplificamos tus trámites notariales y te acompañamos para dar certeza jurídica a tus actos y negocios.', // 13 palabras
    heroTitle: ['Gestión Notarial y', 'Formalización'],
    image: '/notarial.jpeg',
    intro: 'En Gestoría Jurídica Abogados brindamos servicios de gestión, asesoría y acompañamiento jurídico en trámites notariales, desde el análisis preliminar de documentos hasta la integración de expedientes, coordinación con la notaría y seguimiento de los procedimientos necesarios para formalizar actos jurídicos.',
    target: 'Nuestro servicio está dirigido a personas físicas, empresas, inversionistas, propietarios y emprendedores que requieren formalizar operaciones inmobiliarias, constituir sociedades mercantiles, protocolizar documentos o realizar actos que requieran intervención notarial.',
    diagnostic: 'La intervención del notario público es independiente de nuestros servicios de gestión y asesoría. La autorización de instrumentos, la fe pública y la determinación de los requisitos notariales corresponden exclusivamente al fedatario competente. Nuestro acompañamiento tiene como finalidad facilitar la preparación del trámite y dar seguimiento a las gestiones necesarias.',
    gestiones: [
      { title: 'Escrituración de bienes inmuebles', desc: 'Revisión preliminar de contratos, títulos, antecedentes registrales y documentación para compraventas y actos traslativos.' },
      { title: 'Análisis documental previo', desc: 'Identificación de inconsistencias, revisión de antecedentes y elaboración de observaciones solicitadas por la notaría.' },
      { title: 'Integración de expedientes notariales', desc: 'Recopilación, organización y revisión de identificaciones, poderes, actas y certificados registrales.' },
      { title: 'Constitución de sociedades mercantiles', desc: 'Gestión y acompañamiento en preparación de documentación para sociedades anónimas, S. de R.L. y su formalización.' },
      { title: 'Protocolización de actas y documentos', desc: 'Incorporación formal al protocolo notarial de actas, acuerdos e instrumentos legalmente procedentes.' },
      { title: 'Poderes notariales y fe de hechos', desc: 'Preparación documental para otorgamiento, modificación o revocación de poderes, así como coordinación de fe de hechos.' },
      { title: 'Sucesiones y trámites hereditarios', desc: 'Acompañamiento documental en procedimientos sucesorios tramitados ante notario cuando proceda.' },
      { title: 'Ratificación de firmas e inscripción', desc: 'Gestión de actuaciones notariales para documentos privados y seguimiento registral posterior ante el Registro Público.' }
    ],
    benefits: [
      'Acompañamiento personalizado: orientación durante las distintas etapas de tu trámite, desde la revisión inicial hasta el seguimiento.',
      'Revisión documental preventiva: identificación oportuna de inconsistencias antes de presentar el expediente ante la notaría.',
      'Integración ordenada del expediente: recopilación y organización de documentos para facilitar su revisión por el notario.',
      'Ahorro de tiempo y gestión eficiente: coordinación de solicitudes y seguimiento de trámites ante las instancias correspondientes.',
      'Seguridad jurídica documental: apoyo en la preparación de instrumentos conforme a la naturaleza del acto a formalizar.',
      'Formalización inmobiliaria y corporativa: apoyo integral para escrituración de inmuebles y constitución de empresas.'
    ],
    pasos: [
      { step: 'Paso 1', title: 'Asesoría inicial y definición del trámite', desc: 'Identificamos el acto jurídico que necesitas formalizar (escrituración, constitución de sociedad, protocolización, poder o sucesión).' },
      { step: 'Paso 2', title: 'Análisis jurídico y documental', desc: 'Revisamos la documentación disponible, identificamos requisitos pendientes y determinamos las gestiones para integrar el expediente.' },
      { step: 'Paso 3', title: 'Integración del expediente y coordinación con la notaría', desc: 'Organizamos los documentos y coordinamos su presentación ante la notaría correspondiente para su valoración.' },
      { step: 'Paso 4', title: 'Seguimiento y formalización del acto jurídico', desc: 'Damos seguimiento a observaciones y gestiones hasta que el trámite llegue a la etapa de firma y autorización notarial.' },
      { step: 'Paso 5', title: 'Entrega de documentos y seguimiento registral', desc: 'Seguimos la entrega del instrumento y su presentación e inscripción ante el registro público competente.' }
    ]
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const location = useLocation();
  
  // Determinamos los datos priorizando el slug de la URL o el state pasado por la navegación
  const serviceKey = slug || location.state?.serviceData?.slug || 'licencias-de-alcohol';
  const currentService = servicesDatabase[serviceKey] || servicesDatabase['licencias-de-alcohol'];

  const [openGestion, setOpenGestion] = useState(null);
  const [openPaso, setOpenPaso] = useState(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  // Control del scroll para mostrar u ocultar la barra flotante de conversión
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Ocultar al estar a 450px del final (cerca del CTA monumental)
      if (scrollPosition > 400 && scrollPosition < totalHeight - 450) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!currentService) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. BARRA FLOTANTE ESTRATÉGICA ("AGENDAR ASESORÍA") */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-[#D4AF37]/30 py-4 px-6 transition-all duration-500 transform ${
        showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">{currentService.heroTitle.join(' ')}</span>
            <span className="text-sm text-gray-300 font-light">¿Listo para iniciar su trámite con seguridad jurídica?</span>
          </div>
          
          <Link 
            to="/contacto"
            state={{ subject: `Gestión de ${currentService.title}` }}
            className="w-full sm:w-auto bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.25em] px-8 py-3.5 hover:bg-white transition-colors text-center flex items-center justify-center gap-2 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>AGENDAR ASESORÍA</span>
          </Link>
        </div>
      </div>

      {/* 2. HERO CINEMÁTICO RESPONSIVO */}
      <section ref={heroRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end pb-16 md:pb-24 px-6 md:px-24">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <img 
            src={currentService.image} 
            alt={currentService.title} 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent"></div>
        </motion.div>

        <motion.div style={{ opacity: opacityHero }} className="relative z-10 w-full max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] md:text-xs font-mono text-[#D4AF37] tracking-[0.4em]">PRÁCTICA {currentService.id}</span>
              <div className="w-12 md:w-24 h-[1px] bg-[#D4AF37]"></div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[90px] font-serif leading-[1.05] md:leading-[0.95] tracking-tight mb-6 uppercase">
              {currentService.heroTitle[0]} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
                {currentService.heroTitle[1]}
              </span>
            </h1>
            
            <div className="p-4 md:p-6 bg-[#080808]/90 backdrop-blur-md border-l-2 border-[#D4AF37] max-w-2xl">
              <p className="text-sm md:text-xl font-light text-[#D4AF37] italic">
                "{currentService.tagline}"
              </p>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* 3. CONTENIDO PRINCIPAL Y ACORDEONES */}
      <section className="relative w-full px-6 md:px-24 py-16 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="sticky top-40">
              <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase block mb-4">
                Resumen Ejecutivo
              </span>
              <h3 className="text-3xl font-serif text-white mb-6">
                Estrategia y Trámite
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium border-l-2 border-[#D4AF37] pl-4 leading-relaxed">
                Gestoría Legal <br/> & Acompañamiento
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            
            <FadeIn>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-200 mb-6">
                {currentService.intro}
              </p>
              <div className="p-6 md:p-8 bg-[#080808] border border-white/5 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                <strong className="text-white block font-serif text-lg mb-2">Alcance del Servicio:</strong>
                {currentService.target}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-xl md:text-2xl font-serif text-[#D4AF37] mb-4">Diagnóstico y Ruta de Gestión</h3>
              <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
                {currentService.diagnostic}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-6">Principales gestiones que realizamos:</h3>
              <div className="flex flex-col gap-3">
                {currentService.gestiones.map((item, idx) => {
                  const isOpen = openGestion === idx;
                  return (
                    <div key={idx} className="bg-[#050505] border border-white/10 transition-colors">
                      <button 
                        onClick={() => setOpenGestion(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3 pr-4">
                          <span className="text-xs font-mono text-[#D4AF37]">0{idx + 1}</span>
                          <span className="text-base md:text-lg font-serif text-white">{item.title}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-gray-400 font-light text-sm leading-relaxed border-t border-white/5 mt-2">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 md:p-10 bg-[#080808] border border-white/10">
                <h3 className="text-xl md:text-2xl font-serif text-[#D4AF37] mb-6">Beneficios para el cliente</h3>
                <div className="space-y-4">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-6">Proceso de Atención</h3>
              <div className="flex flex-col gap-3">
                {currentService.pasos.map((paso, idx) => {
                  const isOpenPaso = openPaso === idx;
                  return (
                    <div key={idx} className="bg-[#050505] border border-white/10">
                      <button 
                        onClick={() => setOpenPaso(isOpenPaso ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-4 pr-4">
                          <span className="w-8 h-8 rounded-full bg-[#030303] border border-[#D4AF37] text-[#D4AF37] font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            0{idx + 1}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">{paso.step}</span>
                            <span className="text-base md:text-lg font-serif text-white">{paso.title}</span>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpenPaso ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpenPaso && (
                        <div className="px-5 pb-5 pt-0 text-gray-400 font-light text-sm leading-relaxed border-t border-white/5 mt-2 pl-16">
                          {paso.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. CTA MONUMENTAL FINAL */}
      <section className="relative w-full border-t border-white/5">
        <Link 
          to="/contacto"
          state={{ subject: `Gestión de ${currentService.title}` }}
          className="group block w-full relative overflow-hidden bg-[#030303] hover:bg-[#D4AF37] transition-colors duration-700 ease-in-out py-20 md:py-36 px-6 md:px-24"
        >
          <div className="relative z-10 flex flex-col items-start max-w-[1400px] mx-auto">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 group-hover:text-black/60 transition-colors duration-700 font-bold mb-6">
              Inicie su trámite con seguridad jurídica
            </span>
            
            <div className="flex items-center justify-between w-full">
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[85px] font-serif text-white group-hover:text-black transition-colors duration-700 leading-none tracking-tight">
                AGENDAR <br/> ASESORÍA
              </h2>
              
              <div className="hidden md:flex w-28 h-28 rounded-full border border-white/20 group-hover:border-black items-center justify-center group-hover:bg-black transition-all duration-700 transform group-hover:rotate-[-45deg]">
                <ArrowRight className="w-10 h-10 text-white group-hover:text-[#D4AF37]" />
              </div>
            </div>
          </div>
        </Link>
      </section>

    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}