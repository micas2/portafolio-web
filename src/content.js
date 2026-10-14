export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      work: 'Trabajos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      role: 'Product Designer & Web App Developer',
      description: 'Especialista en transformar sistemas complejos en interfaces intuitivas y escalables, optimizando la experiencia de usuario (UX) y el diseño de interfaz (UI), e integrando tecnologías modernas e Inteligencia Artificial.',
      resume: 'Ver CV',
      contact: 'Contactar'
    },
    work: {
      title: 'Mis Trabajos',
      filters: {
        all: 'Todos',
        web: 'Web, Apps y Landings',
        social: 'Social Media & Branding'
      }
    },
    experience: {
      title: 'Experiencia Laboral'
    },
    contact: {
      title: 'Contacto',
      description: '¿Buscás impulsar un nuevo proyecto, recibir asesoría experta o realizar un diagnóstico estratégico para potenciar tu producto?',
      email: 'micaela.ozor@gmail.com',
      phone: '+54 388 4585019',
      location: 'Salta, Argentina'
    }
  },
  en: {
    nav: {
      home: 'Home',
      work: 'Works',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      role: 'Product Designer & Web App Developer',
      description: 'Specialist in transforming complex systems into intuitive and scalable interfaces, optimizing user experience (UX) and interface design (UI), and integrating modern technologies and Artificial Intelligence.',
      resume: 'View CV',
      contact: 'Contact Me'
    },
    work: {
      title: 'My Works',
      filters: {
        all: 'All',
        web: 'Web, Apps & Landings',
        social: 'Social Media & Branding'
      }
    },
    experience: {
      title: 'Work Experience'
    },
    contact: {
      title: 'Contact',
      description: 'Looking to kickstart a project, get expert consulting, or a strategic diagnosis to boost your product?',
      email: 'micaela.ozor@gmail.com',
      phone: '+54 388 4585019',
      location: 'Salta, Argentina'
    }
  }
};

export const projects = [
  {
    id: 'proyecto-norte',
    title: 'Proyecto Norte (Las Achiras & San Luis)',
    category: 'web',
    role: 'Diseñadora de Producto & Web',
    folder: null, 
    image: null,
    cover: { folder: 'Proyecto Norte', src: 'portada.png' },
    links: [
      { text: 'Ver Proyecto Las Achiras', url: 'https://las-achiras-mapa.vercel.app/' },
      { text: 'Ver Proyecto San Luis', url: 'https://san-luis-mapa.vercel.app/' }
    ],
    description: {
      es: 'Aplicaciones web con mapas interactivos para loteos. Digitalización de cartografía, base de datos en Supabase y despliegue en Vercel.',
      en: 'Web apps with interactive maps for real estate. Cartography digitization, Supabase DB and Vercel deployment.'
    },
    details: {
      es: [
        'Digitalización de cartografía y redibujado de planos para volverlos interactivos.',
        'Implementación Tecnológica: Bases de datos en Supabase y despliegue en Vercel.',
        'Desarrollo acelerado utilizando agentes de IA (Antigravity, OpenCode).'
      ],
      en: [
        'Cartography digitization and plan redrawing to make them interactive.',
        'Technological Implementation: Supabase DB and Vercel deployment.',
        'Accelerated development using AI agents (Antigravity, OpenCode).'
      ]
    },
    areas: { 
      es: ['Arquitectura Web', 'Digitalización de Mapas', 'Diseño UX/UI', 'Prototipo Avanzado'],
      en: ['Web Architecture', 'Map Digitalization', 'UX/UI Design', 'Advanced Prototyping']
    },
    techStack: ['React', 'Supabase', 'Vercel', 'Figma', 'Agentes IA'],
    workflow: [
      { step: 'Digitalización', icon: 'map', es: 'Vectorización de mapas y prototipado avanzado.', en: 'Map vectorization and advanced prototyping.' },
      { step: 'Marca', icon: 'palette', es: 'Aplicación de identidad visual y lineamientos de marca al producto.', en: 'Application of visual identity and brand guidelines to the product.' },
      { step: 'Estructura', es: 'Implementación de DB relacional en Supabase.', en: 'Relational DB implementation in Supabase.' },
      { step: 'Desarrollo', es: 'Codificación con agentes de IA escalables.', en: 'Coding with scalable AI agents.' }
    ]
  },
  {
    id: 'control-stock',
    title: 'Control de Stock Mercado Libre',
    category: 'web',
    folder: 'inventario_mercado_libre',
    role: 'UX/UI Designer',
    image: null,
    description: {
      es: 'Herramienta de gestión de stock responsiva (Desktop/Mobile) para optimizar la logística de depósito y la creación de informes.',
      en: 'Responsive stock management tool (Desktop/Mobile) to optimize warehouse logistics and report creation.'
    },
    details: {
      es: [
        'Creación de una plataforma interna escalable y responsiva (Mobile/Desktop).',
        'Implementación de paneles de informes en tiempo real (Visualización de Datos).',
        'Optimización del UX para grandes volúmenes de inventario y selectores de columnas.'
      ],
      en: [
        'Creation of an internal scalable and responsive platform (Mobile/Desktop).',
        'Implementation of real-time reporting dashboards (Data Visualization).',
        'UX optimization for large inventory volumes and column selectors.'
      ]
    },
    areas: {
      es: ['Diseño UX/UI', 'Responsive'],
      en: ['Diseño UX/UI', 'Responsive']
    },
    techStack: ['Figma'],
    workflow: [
      { step: 'Diagnóstico', icon: 'activity', es: 'Análisis de flujos críticos en depósitos.', en: 'Warehouse critical flow analysis.' },
      { step: 'Estrategia UX', icon: 'target', es: 'Diseño de tablas complejas y selectores dinámicos.', en: 'Complex table design and dynamic selectors.' },
      { step: 'Responsive', icon: 'smartphone', es: 'Adaptación de la interfaz a dispositivos móviles y de escritorio.', en: 'Adaptation of the interface to mobile and desktop devices.' }
    ]
  },
  {
    id: 'hot-travel',
    title: 'Hot Travel',
    category: 'web',
    folder: 'Hot Travel',
    role: 'Diseñadora Gráfica & UX',
    description: {
      es: 'Revectorización de identidad de marca de Hot Travel, ilustraciones y creación de email marketing.',
      en: 'Hot Travel brand identity re-vectorization, illustrations and email marketing creation.'
    },
    details: {
      es: [
        'Identidad Visual: Ilustraciones personalizadas para el ecosistema de marcas corporativas.',
        'Email Marketing: Diseño UX adaptativo (multi-dispositivo) de correos para alta conversión.',
        'Estética moderna aplicada para campañas de promoción de destinos de lujo.'
      ],
      en: [
        'Visual Identity: Custom illustrations for the corporate brand ecosystem.',
        'Email Marketing: Adaptive UX design (multi-device) of high-conversion emails.',
        'Modern aesthetics applied to luxury destination promotional campaigns.'
      ]
    },
    areas: {
      es: ['Ilustraciones', 'Implementación de Marca', 'Email Marketing'],
      en: ['Illustrations', 'Brand Implementation', 'Email Marketing']
    },
    techStack: ['Adobe Suite', 'Figma', 'HTML Email'],
    workflow: [
      { step: 'Auditoría', icon: 'searchCheck', es: 'Análisis de identidad de marcas corporativas.', en: 'Corporate brand identity analysis.' },
      { step: 'Ilustraciones', icon: 'penTool', es: 'Vectorización de elementos de la marca Hot Travel.', en: 'Vectorization of Hot Travel brand elements.' },
      { step: 'Exploración', icon: 'compass', es: 'Investigación de cada marca que engloba Hot Travel (Riu, Hard Rock, Barceló) y moodboarding.', en: 'Research on each brand under Hot Travel (Riu, Hard Rock, Barceló) and moodboarding.' },
      { step: 'Maquetado', icon: 'mail', es: 'Diseño de piezas adaptativas de alta tasa de apertura.', en: 'High open-rate adaptive piece design.' }
    ]
  },
  {
    id: 'notiexpress',
    title: 'Noti Express',
    category: 'web',
    folder: 'notiexpress',
    cover: { folder: 'notiexpress', src: 'logo2.svg' },
    role: 'Product Designer',
    description: {
      es: 'Plataforma de gestión legal escalable utilizada en Justicia Federal. Transformación de MVP y optimización UX.',
      en: 'Scalable legal management platform used in Federal Courts. MVP transformation and UX optimization.'
    },
    details: {
      es: [
        'Lideré la transformación integral de un producto MVP a un sistema maduro.',
        'Optimización y Testeo UX: Abogados y administradores llegan a funciones críticas en menos de 3 clicks.',
        'Plataforma aprobada para su uso vital en la Justicia Federal.'
      ],
      en: [
        'Led the integral transformation of an MVP product to a mature system.',
        'UX Optimization & Testing: Lawyers and admins reach critical functions in under 3 clicks.',
        'Platform approved for vital use within Federal Courts.'
      ]
    },
    caseStudy: {
      tag: { es: 'Producto Legal Tech', en: 'Legal Tech Product' },
      challenge: {
        title: { es: 'El Desafío', en: 'The Challenge' },
        content: { 
          es: 'El sistema original era un Producto Mínimo Viable (MVP) que resultaba confuso y lento para los abogados y administradores de la Justicia Federal. Mi objetivo principal fue reestructurar la información para que cualquier función clave estuviera a menos de 3 clics de distancia.',
          en: 'The original system was an MVP that was confusing and slow for Federal Justice lawyers and administrators. My main goal was to restructure the information so that any key function was less than 3 clicks away.'
        }
      },
      roleInfo: {
        role: { es: 'Product Designer (Lead)', en: 'Product Designer (Lead)' },
        timeline: { es: 'Ago 2022 - Jun 2023', en: 'Aug 2022 - Jun 2023' },
        platform: { es: 'Web App (Desktop / Mobile)', en: 'Web App (Desktop / Mobile)' }
      },
      sections: [
        {
          id: 'process',
          title: { es: 'Arquitectura y Wireframing', en: 'Architecture & Wireframing' },
          description: { es: 'Antes de aplicar estilos, estructuramos el esqueleto funcional optimizando el tiempo de los profesionales.', en: 'Before applying styles, we structured the functional skeleton optimizing the professionals time.' },
          items: [
            { title: { es: 'Auditoría UX', en: 'UX Audit' }, content: { es: 'Identificación de cuellos de botella en el flujo antiguo.', en: 'Identification of bottlenecks in the old flow.' }, border: 'indigo' },
            { title: { es: 'Low-Fidelity', en: 'Low-Fidelity' }, content: { es: 'Bocetado rápido para validar la regla de los 3 clics.', en: 'Quick sketching to validate the 3-click rule.' }, border: 'purple' }
          ],
          image: 'logo1.svg'
        },
        {
          id: 'designSystem',
          title: { es: 'Sistema de Diseño', en: 'Design System' },
          description: { es: 'Creación de un sistema robusto en Figma bajo los principios de Atomic Design.', en: 'Creation of a robust system in Figma under Atomic Design principles.' },
          items: [
            { title: { es: 'Jerarquía', en: 'Hierarchy' }, content: { es: 'Estilos legibles para textos legales largos.', en: 'Readable styles for long legal texts.' }, icon: 'type' },
            { title: { es: 'Componentes', en: 'Components' }, content: { es: 'Librería de botones, inputs y tablas con estados.', en: 'Library of buttons, inputs and tables with states.' }, icon: 'box' }
          ],
          image: 'sistem desing.png',
          dark: true
        },
        {
          id: 'branding',
          title: { es: 'Identidad y Social Media', en: 'Identity & Social Media' },
          description: { es: 'Diseño de piezas estratégicas para acompañar el lanzamiento de la web.', en: 'Design of strategic pieces to accompany the web launch.' },
          items: [
            { title: { es: 'Instagram Feed', en: 'Instagram Feed' }, content: { es: 'Plantillas para cohesión visual.', en: 'Templates for visual cohesion.' }, icon: 'layout' },
            { title: { es: 'Highlights', en: 'Highlights' }, content: { es: 'Banners instructivos para usuarios.', en: 'Instructional banners for users.' }, icon: 'box' },
            { title: { es: 'Campaña de Lanzamiento', en: 'Launch Campaign' }, content: { es: 'Piezas y estrategia para acompañar el lanzamiento de la plataforma.', en: 'Pieces and strategy to accompany the platform launch.' }, icon: 'layout' },
            { title: { es: 'Stories', en: 'Stories' }, content: { es: 'Diseño de historias para mantener la comunicación activa con los usuarios.', en: 'Story design to keep active communication with users.' }, icon: 'box' }
          ],
          image: 'logo 3.jpg'
        }
      ],
    impact: {
        description: { es: 'La plataforma logró optimizar los tiempos de gestión, eliminando la fricción operativa.', en: 'The platform optimized management times, eliminating operational friction.' },
        stats: [
          { value: '< 3', label: { es: 'Clics por función', en: 'Clicks per function' } },
          { value: '100%', label: { es: 'Documentado', en: 'Documented' } }
        ]
      }
    },
    areas: {
      es: ['Diseñadora de Producto', 'Diseño Web', 'Contenido para Redes Sociales', 'Prototipado'],
      en: ['Product Designer', 'Web Design', 'Social Media Content', 'Prototyping']
    },
    techStack: ['Figma', 'Illustrator'],
    workflow: [
      { step: 'Investigación', icon: 'fileSearch', es: 'Inmersión en procesos judiciales complejos.', en: 'Immersion in complex judicial processes.' },
      { step: 'Arquitectura', icon: 'layoutTemplate', es: 'Simplificación de flujos heredados (Legacy).', en: 'Simplification of legacy flows.' },
      { step: 'Sistematización', icon: 'component', es: 'Creación de librerías de componentes escalables.', en: 'Scalable component library creation.' },
      { step: 'Diseño Responsive', icon: 'monitorSmartphone', es: 'Adaptación de la interfaz a dispositivos móviles y de escritorio.', en: 'Interface adaptation to mobile and desktop devices.' },
      { step: 'Lanzamiento en Redes Sociales', icon: 'megaphone', es: 'Lanzamiento de piezas y contenido para redes sociales.', en: 'Launch of pieces and content for social media.' }
    ]
  },
  {
    id: 'sportmetric',
    title: 'Sportmetric',
    category: 'web',
    folder: 'sportmetric - web app',
    role: 'UI Designer',
    description: {
      es: 'Plataforma de eventos deportivos. Creación de Design System, migración de toda la plataforma desde Illustrator a Figma e incorporación de engagement social.',
      en: 'Sports events platform. Design System creation, migration of the entire platform from Illustrator to Figma, and incorporation of social engagement.'
    },
    details: {
      es: [
        'Creación de un Design System propio escalable asegurando consistencia visual future-proof.',
        'Gestión de migración fluida de bocetos y flujos desde Illustrator hacia Figma.',
        'Implementación de dinámicas UX sociales (likes, eventos, follows, inscripciones).'
      ],
      en: [
        'Creation of a proprietary scalable Design System ensuring future-proof visual consistency.',
        'Management of seamless sketch and flow migration from Illustrator to Figma.',
        'Implementation of social UX dynamics (likes, events, follows, sign-ups).'
      ]
    },
    areas: {
      es: ['Wireframing', 'Prototipo', 'Diseño UX/UI', 'Implementación de Marca'],
      en: ['Wireframing', 'Prototype', 'UX/UI Design', 'Brand Implementation']
    },
    techStack: ['Illustrator', 'Figma'],
    workflow: [
      { step: 'Migración a Figma', icon: 'penTool', es: 'Migración de toda la plataforma desde Illustrator hacia Figma.', en: 'Migration of the entire platform from Illustrator to Figma.' },
      { step: 'Desarrollo de Pantallas', icon: 'layoutTemplate', es: 'Desarrollo de nuevas pantallas de la app: vistas de comentarios, eventos, formularios, etc.', en: 'Development of new app screens: comments, events, forms, etc.' },
      { step: 'Pantallas del Sistema', icon: 'appWindow', es: 'Creación de todas las pantallas del sistema.', en: 'Creation of all system screens.' },
      { step: 'Entregable Final', icon: 'packageCheck', es: 'Entrega final del sistema de diseño y las pantallas desarrolladas.', en: 'Final delivery of the design system and developed screens.' }
    ]
  },
  {
    id: 'montiel-seguros',
    title: 'Montiel Seguros',
    category: 'social',
    folder: 'MONTIEL SEGUROS - redes sociales',
    role: 'Diseño Gráfico',
    description: {
      es: 'Rediseño integral de logotipo e identidad visual. Gestión total de redes sociales.',
      en: 'Integral redesign of logo and visual identity. Full social media management.'
    },
    details: {
      es: [
        'Rediseño moderno del logotipo base y paleta de la empresa.',
        'Administración y contenido estético de alto alcance para historias.',
        'Formatos especiales "Highlights" con íconos vectoriales.'
      ],
      en: [
        'Modern redesign of the core logo and corporate palette.',
        'Management and high-reach aesthetic content for stories.',
        'Special "Highlights" formats with vector icons.'
      ]
    },
    areas: {
      es: ['Branding e Identidad Visual', 'Gestión de Redes Sociales'],
      en: ['Branding & Visual Identity', 'Social Media Management']
    },
    techStack: ['Illustrator', 'After Effects'],
    processLabel: { es: 'Proceso Creativo', en: 'Creative Process' },
    workflow: [
      { step: 'Diseño de Marca', icon: 'palette', es: 'Rediseño del logotipo y definición de la identidad visual de la marca.', en: 'Logo redesign and definition of the brand visual identity.' },
      { step: 'Creación de Contenido para Redes', icon: 'megaphone', es: 'Diseño de piezas y contenido para redes sociales.', en: 'Design of pieces and content for social media.' }
    ]
  },
  {
    id: 'f2f',
    title: 'F2F (Skincare)',
    category: 'social',
    folder: 'F2F',
    role: 'Branding',
    description: {
      es: 'Creación de branding para marca personal de Skincare. Organización de eventos y estrategia de contenidos.',
      en: 'Brand creation for personal Skincare brand. Event organization and content strategy.'
    },
    details: {
      es: [
        'Conceptualización de marca personal orientada a la belleza (logo, paleta, mood visual).',
        'Estrategia digital robusta para venta de productos en Instagram.',
        'Confección de fliers para organización de eventos de lanzamiento.'
      ],
      en: [
        'Conceptualization of beauty-oriented personal branding (logo, palette, visual mood).',
        'Robust digital strategy for product sales on Instagram.',
        'Creation of fliers for product launch event organizations.'
      ]
    },
    areas: {
      es: ['Branding', 'Gestión de Redes', 'Creación de Contenido', 'Fotografía', 'Edición', 'Organización de Eventos', 'Venta de Productos'],
      en: ['Branding', 'Social Media Management', 'Content Creation', 'Photography', 'Editing', 'Event Organization', 'Product Sales']
    },
    techStack: ['Illustrator', 'Figma', 'Premiere', 'After Effects'],
    processLabel: { es: 'Proceso Creativo', en: 'Creative Process' },
    workflow: [
      { step: 'Creación de Marca', icon: 'palette', es: 'Definición del branding: logotipo, paleta y mood visual de la marca personal.', en: 'Branding definition: logo, palette and visual mood of the personal brand.' },
      { step: 'Creación de Contenido', icon: 'image', es: 'Diseño de piezas gráficas y contenido para la comunicación de la marca.', en: 'Design of graphic pieces and content for brand communication.' },
      { step: 'Community Manager', icon: 'users', es: 'Gestión de redes sociales, publicación y respuesta a la comunidad.', en: 'Social media management, publishing and community response.' }
    ]
  },
  {
    id: 'whisfy',
    title: 'Whisfy',
    category: 'app',
    folder: 'WHISFY', 
    cover: { folder: 'WHISFY', src: 'LOGO/logo png/logo png_Mesa de trabajo 1.png' },
    coverContain: true,
    role: 'Product Designer',
    description: {
      es: 'Diseño integral de Interfaz de Usuario (UI) y manuales de marca para aplicación social/intereses.',
      en: 'Integral User Interface (UI) design and brand manuals for social/interests application.'
    },
    details: {
      es: [
        'Estructura de arquitectura de información para Home interactivo, mensajería y perfil.',
        'Diseño de Identidad Visual y Manuales de Logo de la marca.',
        'Conceptualización de aplicación enfocada en intereses y conectividad de usuarios.'
      ],
      en: [
        'Information architecture structure for interactive Home, messaging, and profile.',
        'Visual Identity Design and Brand Logo Manuals.',
        'Conceptualization of an app focused on user interests and connectivity.'
      ]
    },
    areas: {
      es: ['Diseño de Marca', 'Diseño UX/UI'],
      en: ['Brand Design', 'UX/UI Design']
    },
    techStack: ['Figma'],
    processLabel: { es: 'Proceso Creativo', en: 'Creative Process' },
    workflow: [
      { step: 'Diseño de Estructura de la App de Audios', icon: 'layoutTemplate', es: 'Definición de la arquitectura de información y estructura de la app de audios.', en: 'Definition of the information architecture and structure of the audio app.' },
      { step: 'Creación de Frames Alta Fidelidad', icon: 'frame', es: 'Desarrollo de los frames de alta fidelidad de todas las pantallas.', en: 'Development of high-fidelity frames for all screens.' },
      { step: 'Modo Oscuro y Claro', icon: 'sunMoon', es: 'Diseño de las variantes en modo oscuro y claro.', en: 'Design of the dark and light mode variants.' }
    ]
  },
  {
    id: 'app-estetica',
    title: 'App Estetica',
    category: 'social',
    folder: 'app estetica', 
    role: 'UI/UX & Branding',
    description: {
      es: 'Diseño de logotipos e interfaces UI para aplicaciones móviles. Primer boceto para una app, donde se eligió un formato diferente para disponer el UI y se creó el diseño de las ilustraciones y pantallas.',
      en: 'Design of logos and UI interfaces for mobile applications. First sketch for an app, where a different format was chosen to lay out the UI, and the design of the illustrations and screens was created.'
    },
    details: {
      es: [
        'Diseño integral del Manual de Marca (Brandbook).',
        'Logotipos modernizados de gran fidelidad vectorial.',
        'Primeros bocetos de perfil de interfaces UI (Componentes y paletas).'
      ],
      en: [
        'Integral design of the Brand Manual (Brandbook).',
        'Modernized logotypes with high vector fidelity.',
        'First sketches of UI interface profiles (Components and palettes).'
      ]
    },
    areas: {
      es: ['Ilustraciones', 'Diseño UX/UI'],
      en: ['Illustrations', 'UX/UI Design']
    },
    techStack: ['Figma'],
    processLabel: { es: 'Proceso Creativo', en: 'Creative Process' },
    workflow: [
      { step: 'Wireframe de la App Mobile', icon: 'layoutTemplate', es: 'Creación del wireframe de la app mobile.', en: 'Creation of the mobile app wireframe.' },
      { step: 'Implementación en Pantallas', icon: 'monitorSmartphone', es: 'Implementación del diseño en las pantallas de la app.', en: 'Implementation of the design on the app screens.' },
      { step: 'Creación de Ilustraciones', icon: 'penTool', es: 'Creación de las ilustraciones de la marca.', en: 'Creation of the brand illustrations.' }
    ]
  },
  {
    id: 'terrae',
    title: 'Terrae',
    category: 'social',
    folder: 'terrae',
    role: 'Diseño Visual',
    description: {
      es: 'Proyecto y conceptualización de identidad visual e inscripciones animadas.',
      en: 'Project and conceptualization of visual identity and animated registrations.'
    },
    details: {
      es: [
        'Flujos de pantallas descriptivas.',
        'Aplicaciones UI para sistemas de inscripciones.',
        'Refinamiento estético y paletas minimalistas.'
      ],
      en: [
        'Descriptive screen flows.',
        'UI applications for registration systems.',
        'Aesthetic refinement and minimalist palettes.'
      ]
    },
    areas: {
      es: ['Diseño Gráfico', 'Diseño UX/UI', 'Responsive'],
      en: ['Graphic Design', 'UX/UI Design', 'Responsive']
    },
    techStack: ['Figma', 'Illustrator'],
    processLabel: { es: 'Proceso Creativo', en: 'Creative Process' },
    workflow: [
      { step: 'Investigación de Conceptos del Juego', icon: 'search', es: 'Investigación de los conceptos y la temática del juego.', en: 'Research of the game concepts and theme.' },
      { step: 'Moodboard de la Temática', icon: 'palette', es: 'Creación del moodboard para definir la dirección visual de la temática.', en: 'Creation of the moodboard to define the visual direction of the theme.' },
      { step: 'Diseño de Pantallas', icon: 'layoutTemplate', es: 'Diseño de las pantallas de la interfaz.', en: 'Design of the interface screens.' },
      { step: 'Implementación del Diseño', icon: 'appWindow', es: 'Implementación del diseño en las pantallas del sistema.', en: 'Implementation of the design on the system screens.' },
      { step: 'Diseño Responsive', icon: 'monitorSmartphone', es: 'Adaptación del diseño a distintos dispositivos (responsive).', en: 'Adaptation of the design to different devices (responsive).' },
      { step: 'Modo Oscuro y Modo Claro', icon: 'sunMoon', es: 'Diseño de las variantes en modo oscuro y modo claro.', en: 'Design of the dark mode and light mode variants.' }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: 'Proyecto Norte',
    role: 'Diseñadora de Producto & Web (Freelance)',
    date: 'Abril 2026'
  },
  {
    id: 2,
    company: 'Control de Stock (Mercado Libre)',
    role: 'UX/UI Designer',
    date: 'Ene 2025 – Feb 2025'
  },
  {
    id: 3,
    company: 'Kripton',
    role: 'Web Designer & Platform Specialist',
    date: 'Oct 2025 – Presente' // Kept exactly as CV
  },
  {
    id: 4,
    company: 'Hot Travel',
    role: 'Diseñadora Gráfica & UX',
    date: 'Nov 2024 – Dic 2024'
  },
  {
    id: 5,
    company: 'Noti Express',
    role: 'Product Designer',
    date: 'Ago 2022 – Jun 2023'
  },
  {
    id: 6,
    company: 'Sportmetric',
    role: 'UI Designer',
    date: 'Oct 2022 – Jul 2023'
  },
  {
    id: 7,
    company: 'TopShop',
    role: 'UI Designer & Web Developer',
    date: 'Ago 2020 – Jul 2021'
  },
  {
    id: 8,
    company: 'Sumagool (Openix)',
    role: 'UX/UI Designer',
    date: 'Ene 2020 – May 2020'
  }
];
