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
      description: '¿Tienes un proyecto en mente para hacer realidad?',
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
      description: 'Have a project in mind or just want to say hi?',
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
    role: 'Web App Developer & Designer',
    folder: null, 
    image: null,
    links: [
      { text: 'Ver Proyecto Las Achiras', url: 'https://las-achiras-mapa.vercel.app/' },
      { text: 'Ver Proyecto San Luis', url: 'https://san-luis-mapa.vercel.app/' }
    ],
    description: {
      es: 'Aplicaciones web con mapas interactivos para loteos. Digitalización de cartografía, base de datos en Supabase y despliegue en Vercel con IA.',
      en: 'Web apps with interactive maps for real estate. Cartography digitization, Supabase DB and Vercel deployment with AI agents.'
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
    }
  },
  {
    id: 'control-stock',
    title: 'Control de Stock Mercado Libre',
    category: 'web',
    folder: 'inventario_mercado_libre',
    role: 'UX/UI Designer',
    image: null,
    description: {
      es: 'Herramienta de gestión de stock responsiva (Desktop/Mobile) para optimizar la logística de depósito.',
      en: 'Responsive stock management tool (Desktop/Mobile) to optimize warehouse logistics.'
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
    }
  },
  {
    id: 'hot-travel',
    title: 'Hot Travel',
    category: 'web',
    folder: 'Hot Travel',
    role: 'Diseñadora Gráfica & UX',
    description: {
      es: 'Identidad Visual y Email Marketing de alta conversión para agencias (Barceló, Riu, Hard Rock).',
      en: 'Visual Identity and high-conversion Email Marketing for agencies (Barceló, Riu, Hard Rock).'
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
    }
  },
  {
    id: 'notiexpress',
    title: 'Noti Express',
    category: 'web',
    folder: 'notiexpress',
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
    }
  },
  {
    id: 'sportmetric',
    title: 'Sportmetric',
    category: 'web',
    folder: 'sportmetric - web app',
    role: 'UI Designer',
    description: {
      es: 'Plataforma de eventos deportivos. Creación de Design System e incorporación de engagement social.',
      en: 'Sports events platform. Creation of Design System and incorporation of social engagement.'
    },
    details: {
      es: [
        'Creación de un Design System propio escalable asegurando consistencia visual future-proof.',
        'Gestión de migración fluida de bocetos y flujos de Photoshop hacia Figma.',
        'Implementación de dinámicas UX sociales (likes, eventos, follows, inscripciones).'
      ],
      en: [
        'Creation of a proprietary scalable Design System ensuring future-proof visual consistency.',
        'Management of seamless sketch and flow migration from Photoshop to Figma.',
        'Implementation of social UX dynamics (likes, events, follows, sign-ups).'
      ]
    }
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
    }
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
    }
  },
  {
    id: 'whisfy',
    title: 'Whisfy',
    category: 'app',
    folder: 'WHISFY', 
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
    }
  },
  {
    id: 'app-estetica',
    title: 'App Estetica',
    category: 'social',
    folder: 'app estetica', 
    role: 'UI/UX & Branding',
    description: {
      es: 'Diseño de logotipos e interfaces UI para aplicaciones móviles.',
      en: 'Design of logos and UI interfaces for mobile applications.'
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
    }
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
    }
  }
];

export const experience = [
  {
    id: 1,
    company: 'Proyecto Norte',
    role: 'Web App Developer & Designer (Freelance)',
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
