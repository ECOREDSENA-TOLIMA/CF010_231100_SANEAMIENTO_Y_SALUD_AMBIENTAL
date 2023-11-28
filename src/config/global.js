export default {
  global: {
    componenteFormativo: 'Contaminación atmosférica y cambio climático',
    descripcionCurso:
      'Con el estudio y desarrollo del presente componente formativo, el aprendiz contará con la capacidad de analizar los efectos de la contaminación atmosférica en la salud humana y en el ambiente y las acciones de mejora al cambio climático.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cambio climático',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antecedentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Causas e incidencias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Adaptación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mitigación',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad del cambio climático',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Políticas internacionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Políticas nacionales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Capa de ozono',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Efectos a la salud humana de la contaminación atmosférica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_010_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cambio climático',
      referencia:
        'BBC News Mundo. (2021). 5 <em>revelaciones del informe de la ONU sobre cambio climático y qué dice sobre América Latina</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4QEW0DHWIlg',
    },
    {
      tema: 'Cambio climático',
      referencia:
        'DW Español. (2021). <em>Cambio climático en Latinoamérica: ¿Cuáles serán sus efectos?</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_PguOSdRcOg',
    },
    {
      tema: 'Desarrollo sostenible',
      referencia:
        'UNESCO en español. (2017). <em>Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MCKH5xk8X-g&t=0s',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'conjunto de cambios comportamentales que deben hacer los seres vivos ante los nuevos eventos del cambio climático para sobrevivir.',
    },
    {
      termino: 'Antropogénico',
      significado:
        'relativo a las actividades humanas o que pueden generar de estas.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'variaciones de temperatura y patrones climáticos que han ocurrido a lo largo del tiempo, de origen natural o producto de las actividades humanas.',
    },
    {
      termino: 'Capa de ozono',
      significado:
        'es una de las capas que envuelve la Tierra y la protege de los rayos directos del sol.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'cambios, avances, crecimiento o progreso entorno al mejoramiento, que sea capaz de satisfacer las necesidades de la sociedad sin poner en riesgo a las futuras generaciones.',
    },
    {
      termino: 'Gases de efecto invernadero',
      significado:
        'gases producidos comúnmente en las actividades humanas y que absorben los rayos del sol y se retienen en la atmósfera, generando un “invernadero”.',
    },
    {
      termino: 'Mitigación',
      significado:
        'acciones necesarias para disminuir, prevenir o evitar las emisiones de gases de efecto invernadero.',
    },
    {
      termino: 'Sumideros',
      significado:
        'procesos, actividades, zonas o ecosistemas con la particularidad de absorber gases de efecto invernadero.',
    },
  ],
  referencias: [
    {
      referencia:
        'Global Climate Change. (2022). ¿Cómo sabemos que el cambio climático es real?.',
      link: 'https://climate.nasa.gov/evidencia/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Estrategia Colombiana de Desarrollo Bajo en Carbono (ECDBC).',
      link: 'https://www.car.gov.co/uploads/files/5ade3a8222934.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política Nacional de Cambio Climático.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/01/9.-Politica-Nacional-de-Cambio-Climatico.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). Tratados Internacionales.',
      link:
        'https://www.minambiente.gov.co/asuntos-internacionales/tratados-internacionales',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Convención Marco de las Naciones Unidas sobre el cambio climático.',
      link:
        'https://observatoriop10.cepal.org/sites/default/files/documents/treaties/unfccc_sp.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (1998). Protocolo de Kyoto de la Convención Marco de las Naciones Unidas sobre el Cambio Climático. ',
      link: 'https://unfccc.int/resource/docs/convkp/kpspan.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2021). La Agenda para el Desarrollo Sostenible- Desarrollo Sostenible.',
      link: 'https://www.un.org/sustainabledevelopment/es/development-agenda',
    },
    {
      referencia: 'Naciones Unidas. (2022). ¿Qué es el cambio climático?.',
      link: 'https://www.un.org/es/climatechange/what-is-climate-change ',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2005). Guías de calidad del aire de la OMS relativas al material particulado, el ozono, el dióxido de Nitrógeno y el dióxido de Azufre.',
      link:
        'http://apps.who.int/iris/bitstream/handle/10665/69478/WHO_SDE_PHE_OEH_06.02_spa.pdf;jsessionid=A663DBF3E94ACE5F12A0B16B0023D016?sequence=1 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Sánchez Rodríguez',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital  - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova',
          cargo: 'Experta Temática',
          centro: 'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carolina Gómez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
