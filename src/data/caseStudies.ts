export interface CaseStudy {
  id: string;
  projectName: string;
  problem: string;
  solution: string;
  result: string;
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
];
