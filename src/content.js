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
          image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'designSystem',
          title: { es: 'Sistema de Diseño', en: 'Design System' },
          description: { es: 'Creación de un sistema robusto en Figma bajo los principios de Atomic Design.', en: 'Creation of a robust system in Figma under Atomic Design principles.' },
          items: [
            { title: { es: 'Jerarquía', en: 'Hierarchy' }, content: { es: 'Estilos legibles para textos legales largos.', en: 'Readable styles for long legal texts.' }, icon: 'type' },
            { title: { es: 'Componentes', en: 'Components' }, content: { es: 'Librería de botones, inputs y tablas con estados.', en: 'Library of buttons, inputs and tables with states.' }, icon: 'box' }
          ],
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
          dark: true
        },
        {
          id: 'branding',
          title: { es: 'Identidad y Social Media', en: 'Identity & Social Media' },
          description: { es: 'Diseño de piezas estratégicas para acompañar el lanzamiento de la web.', en: 'Design of strategic pieces to accompany the web launch.' },
          items: [
            { title: { es: 'Instagram Feed', en: 'Instagram Feed' }, content: { es: 'Plantillas para cohesión visual.', en: 'Templates for visual cohesion.' }, icon: 'layout' },
            { title: { es: 'Highlights', en: 'Highlights' }, content: { es: 'Banners instructivos para usuarios.', en: 'Instructional banners for users.' }, icon: 'box' }
          ],
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
        }
      ],
      impact: {
        description: { es: 'La plataforma logró optimizar los tiempos de gestión, eliminando la fricción operativa.', en: 'The platform optimized management times, eliminating operational friction.' },
        stats: [
          { value: '< 3', label: { es: 'Clics por función', en: 'Clicks per function' } },
          { value: '100%', label: { es: 'Documentado', en: 'Documented' } }
        ]
      }
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
