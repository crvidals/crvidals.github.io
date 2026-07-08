export interface CaseStudy {
  id: string;
  projectName: string;
  problem: string;
  solution: string;
  result: string;
  technologies?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    projectName: "Executive Dashboard",
    problem:
      "Se necesitaba una aplicación capaz de visualizar métricas ejecutivas provenientes de múltiples conjuntos de datos de manera clara, rápida y orientada a la toma de decisiones.",
    solution:
      "Desarrollo de un dashboard en React utilizando TypeScript, Tailwind CSS y Vite, incorporando visualizaciones, indicadores, resumen ejecutivo y una arquitectura basada en componentes reutilizables.",
    result:
      "Se obtuvo una aplicación moderna, rápida y mantenible, con una interfaz intuitiva y preparada para incorporar nuevas fuentes de datos.",
  },
  {
    id: "cs-2",
    projectName: "CRM Veterinario",
    problem:
      "La clínica necesitaba centralizar la administración de pacientes, propietarios, fichas clínicas, agenda y procesos administrativos en una única plataforma.",
    solution:
      "Desarrollo de un sistema web utilizando Laravel y MySQL, implementando módulos independientes para la gestión clínica y administrativa.",
    result:
      "Se logró centralizar la información del negocio, facilitando la administración diaria y permitiendo un crecimiento modular del sistema.",
  },
  {
    id: "cs-3",
    projectName: "APIUX Backend",
    problem:
      "Se requería construir una API REST moderna, escalable y desacoplada para servir como backend de distintas aplicaciones.",
    solution:
      "Implementación de una API utilizando FastAPI, PostgreSQL y Docker, siguiendo una arquitectura limpia y preparada para futuras integraciones.",
    result:
      "Se obtuvo una API de alto rendimiento, fácilmente desplegable y preparada para crecer mediante nuevos servicios.",
  },
  {
    id: "cs-4",
    projectName: "Remediación de Vulnerabilidades Cotizador Móvil",
    problem:
      "La aplicación Cotizador Móvil presentaba más de 3.000 vulnerabilidades detectadas mediante Veracode, representando un riesgo de seguridad y una brecha respecto a los estándares internos de calidad. El desafío era resolverlas en un plazo aproximado de un mes.",
    solution:
      "Análisis y corrección progresiva de vulnerabilidades reportadas por Veracode, aplicando mejoras de seguridad en el código, validaciones, manejo de datos y buenas prácticas de desarrollo seguro. Se realizó un seguimiento continuo mediante nuevos análisis hasta lograr la remediación completa.",
    result:
      "En menos de tres semanas se logró eliminar la totalidad de vulnerabilidades reportadas por Veracode, dejando la aplicación sin hallazgos críticos y cumpliendo con los estándares de seguridad definidos por la organización.",
    technologies: [
      "Veracode",
      "PHP",
      "Seguridad Aplicacional",
      "Secure Coding",
      "SAST",
    ],
  },
  {
    id: "cs-5",
    projectName: "Optimización de Plataforma Empresarial en Producción",
    problem:
      "Una aplicación productiva presentaba problemas de rendimiento, errores recurrentes y degradación de tiempos de respuesta, afectando la experiencia de los usuarios finales.",
    solution:
      "Análisis de logs, revisión de procesos backend, optimización de consultas SQL, ajustes de configuración y corrección de problemas detectados en ambientes productivos. Se aplicaron mejoras enfocadas en estabilidad, rendimiento y mantenibilidad.",
    result:
      "Se mejoró la estabilidad de la plataforma, reduciendo problemas operacionales y optimizando el rendimiento general del sistema.",
    technologies: ["PHP", "Laravel", "MySQL", "Optimización SQL", "Linux"],
  },
];
