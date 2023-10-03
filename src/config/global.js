export default {
  global: {
    componenteFormativo: 'Planificación de un sistema silvopastoril',
    descripcionCurso:
      'Un sistema silvopastoril es el compendio de dos actividades agrícolas, como son la producción silvícola (producción de madera) y la producción pastoril (producción de pastos). Estos sistemas buscan maximizar la producción, disminuyendo los impactos generados en los ecosistemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Sistemas silvopastoriles trópico bajo y trópico alto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos agroecológicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Buenas prácticas agrícolas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de sistemas silvopastoriles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clases y técnicas de asociación silvopastoril',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arreglos espaciales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos de arreglo espacial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cercas vivas y cortinas rompevientos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Manejo de estratos del sistema silvopastoril',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Características de las especies vegetales más comunes',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Capacidad de carga',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Tipos de pastoreo',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Períodos de ocupación y descanso',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Establecimiento de sistemas silvopastoriles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elección de sistemas silvopastoriles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Definición del arreglo espacial de acuerdo con condiciones agroecológica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Preparación del suelo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de semilla y material vegetal',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Métodos de siembra',
            hash: 't_3_5',
          },
        ],
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
        download: 'downloads/CFA_08_722200.zip',
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
      tema: '1. Sistemas silvopastoriles trópico bajo y trópico alto',
      referencia:
        'La finca de hoy. (s.f.). ¿Sabe cómo implementar los diferentes tipos de sistemas silvopastoriles? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TTQAI5sisck',
    },
    {
      tema: '1. Sistemas silvopastoriles trópico bajo y trópico alto',
      referencia:
        'AGROSAVIA TV. (2020). Sistemas silvopastoriles para una ganadería sostenible del trópico alto [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mf7QsXizDx0',
    },
  ],
  glosario: [
    {
      termino: 'Arvenses',
      significado:
        'Son aquellas especies vegetales presentes en los ecosistemas agrícolas que compiten por agua y nutrientes con las plantas del cultivo.',
    },
    {
      termino: 'Cercas vivas',
      significado:
        'Están compuestas por árboles, son plantaciones lineales de una o varias especies que conforman una barrera alrededor de lotes finqueros.',
    },
    {
      termino: 'Forraje',
      significado:
        'Hierba verde o seca que se le da al ganado para alimentarlo.',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'Entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones (Norma Técnica Colombiana NTC - ISO 14001, 2004).',
    },
    {
      termino: 'Pastoreo',
      significado:
        'Acción o actividad consistente en el cuidado y la alimentación del ganado en pastizales.',
    },
    {
      termino: 'Pradera',
      significado:
        'Terreno llano y con hierba de mayor extensión que el prado.',
    },
    {
      termino: 'Residuo',
      significado:
        'Material o subproducto industrial considerado, por su cantidad, composición o de naturaleza particular, para ser reintegrado a los ciclos, flujos y procesos de la misma u otras cadenas productivas (Guía de buenas prácticas ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Silvopastoril',
      significado:
        'Sistemas que tienen como objeto la producción silvícola (madera) y pastoril (pasto).',
    },
  ],
  referencias: [
    {
      referencia:
        'Apráez, E., Gálvez, A. & Apráez, J. (2019). Factores edafoclimáticos en la producción y calidad del pasto saboya (Holcus lanatus L.) en el Altiplano de Nariño. Revista de Ciencias Agrícolas. 36(1), p. 16-32.',
      link: '',
    },
    {
      referencia:
        'Cardona, L. (2021). Presentación _ Potencial nutricional en especies arbustivas forrajeras del trópico alto colombiano. Seminario Sistemas silvopastoriles sustentables para trópico alto, medio y bajo. Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA).',
      link: '',
    },
    {
      referencia:
        'Carvajal T, (s,f). Del escritorio al potrero: ¿Cómo establecer un sistema silvopastoril multipropósito de trópico bajo? Corporación colombiana de investigación agropecuaria (AGROSAVIA).',
      link: '',
    },
    {
      referencia:
        'Carvajal, T, (s,f). El arte del ramoneo: Hacia una aplicación del balance nutricional para el diseño de SSP de trópico bajo. Corporación colombiana de investigación agropecuaria (AGROSAVIA).',
      link: '',
    },
    {
      referencia:
        'Chamorro, D. (2020). Experiencias exitosas en el establecimiento de SSP trópico alto. Universidad Nacional Abierta y a Distancia Pasto - Nariño.',
      link: '',
    },
    {
      referencia:
        'CONtextoganadero. (2015). 3 especies ideales para establecer SSPi en el trópico alto.',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/3-especies-ideales-para-establecer-sspi-en-el-tropico-alto',
    },
    {
      referencia:
        'Libreros, H. (2015). Sistemas silvopastoriles: opción para la mitigación y adecuación al cambio climático en bosque seco tropical. Revista Semillas.',
      link: 'https://www.semillas.org.co/es/sistemas-silvopastoriles-opci',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2015). Guía metodológica para la implementación de escuelas de campo para agricultores (ECA) en sistemas silvopastoriles agroecológicos. Organización de las Naciones Unidas para la Alimentación y la Agricultura Convenio FAO.',
      link: '',
    },
    {
      referencia:
        'Navas, A. (2016). Sistemas silvopastoriles. Tropenbas Internacional Colombia & Fondo Patrimonio Natural.',
      link: '',
    },
    {
      referencia:
        'Westreicher, G. (2020). Ganadería extensiva. Economipedia.com',
      link: '',
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
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
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
