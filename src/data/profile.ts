export interface Profile {
  name: string;
  title: string;
  description: string;
  biography: string;
  specialties: string[];
  mainTechnologies: string[];
  yearsOfExperience: number;
  location: {
    city: string;
    region: string;
    country: string;
  };
  email: string;
  github: string;
  githubPages: string;
  cvUrl: string;
}

export const profile: Profile = {
  name: "Cristian Rodrigo Vidal Sanhueza",
  title: "Desarrollador Fullstack Senior",
  description:
    "Desarrollador Fullstack con más de 12 años de experiencia en el desarrollo de aplicaciones web, APIs REST e integración de sistemas. Especializado en PHP, Laravel, Java, Spring Boot, React, Vue, Node.js y bases de datos relacionales. Enfocado en crear soluciones escalables, mantenibles y orientadas a resultados.",
  biography:
    "Soy Desarrollador Fullstack con más de 10 años de experiencia desarrollando soluciones web para empresas de distintos rubros. A lo largo de mi carrera he participado en el desarrollo de aplicaciones empresariales, plataformas de pago, sistemas internos, sitios web corporativos y APIs REST, desempeñándome tanto en proyectos nuevos como en la evolución y mantención de sistemas existentes.\n\nMi experiencia abarca el desarrollo backend y frontend, integración de servicios, diseño de bases de datos, optimización de consultas, automatización de procesos e implementación de arquitecturas modernas. He trabajado con equipos multidisciplinarios bajo metodologías ágiles y también liderando el desarrollo de proyectos de manera independiente.\n\nMe interesa desarrollar software de calidad, escalable y mantenible, aplicando buenas prácticas de ingeniería, clean code y arquitectura, siempre buscando entregar soluciones que aporten valor al negocio.",
  specialties: [
    "Desarrollo Fullstack",
    "Desarrollo Backend",
    "Desarrollo Frontend",
    "Diseño e implementación de APIs REST",
    "Integración de sistemas",
    "Arquitectura de aplicaciones web",
    "Diseño y optimización de bases de datos",
    "Optimización de consultas SQL",
    "Microservicios",
    "Automatización de procesos ETL",
    "Integración de servicios SOAP y REST",
    "Desarrollo de aplicaciones empresariales",
  ],
  mainTechnologies: [
    "PHP",
    "Laravel",
    "Symfony",
    "Java",
    "Spring Boot",
    "Node.js",
    "NestJS",
    "React",
    "Vue",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "Docker",
    "AWS",
    "Git",
  ],
  yearsOfExperience: 12,
  location: {
    city: "San Joaquín",
    region: "Región Metropolitana",
    country: "Chile",
  },
  email: "crvidals@gmail.com",
  github: "https://github.com/crvidals",
  githubPages: "https://crvidals.github.io",
  cvUrl: "/cv/Cristian_Rodrigo_Vidal_Sanhueza_CV.pdf",
};
