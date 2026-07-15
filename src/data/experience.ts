export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  context: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior .NET Software Engineer",
    company: "Solbeg",
    location: "Remote",
    period: "Sep 2025 – Jun 2026",
    context:
      "High-throughput, event-driven transaction-processing platform integrating with external hosts over a domain-specific binary protocol under strict time-window and settlement guarantees.",
    highlights: [
      "Owned 1 of ~8 core microservices end-to-end (external host integration, connection lifecycle, domain modelling, and persistence) on an event-driven platform built with .NET, Apache Kafka, and EF Core.",
      "Shortened incident-detection time by instrumenting structured logging, Prometheus metrics, and health checks.",
      "Safeguarded critical paths with unit and integration tests (xUnit).",
      "Accelerated day-to-day development and code review by configuring Claude Code with a project MCP server to automate boilerplate generation, refactoring, and PR quality checks.",
    ],
    stack: [
      ".NET",
      "ASP.NET Core",
      "C#",
      "Apache Kafka",
      "EF Core",
      "PostgreSQL",
      "gRPC",
      "Docker",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "MediatR",
      "xUnit",
      "Claude Code",
      "MCP",
    ],
  },
  {
    role: "Senior Software Engineer / Tech Lead",
    company: "WM Reply",
    location: "Kraków, Poland (Remote)",
    period: "Apr 2022 – Jul 2025",
    context:
      "Enterprise applications and internal tools for e-commerce and transport-sector clients on Microsoft Azure. Selected clients: British Airways, Transport for London, British American Tobacco, Nisbets.",
    highlights: [
      "Led architecture and delivery of enterprise applications and internal tools as a hands-on Tech Lead, owning architecture decisions, code review, and mentoring.",
      "Designed and shipped scalable Azure-based .NET solutions with React and Angular front ends for enterprise clients.",
      "Cut manual internal-process effort by building and deploying AI-powered Microsoft 365 Copilot agents for Microsoft Teams (SPFx, Teams API, Power Automate).",
      "Accelerated and stabilized releases by streamlining CI/CD pipelines in Azure DevOps.",
    ],
    stack: [
      ".NET",
      "ASP.NET Core",
      "C#",
      "React",
      "Angular",
      "TypeScript",
      "Azure",
      "Microsoft 365",
      "Microsoft Teams API",
      "Microsoft 365 Copilot",
      "SPFx",
      "Power Automate",
      "SQL Server",
      "Azure DevOps",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Axiom Connected",
    location: "Minsk, Belarus (Hybrid)",
    period: "Feb 2021 – Apr 2022",
    context: "Consumer-lending / financial-data platform covering the full credit lifecycle.",
    highlights: [
      "Built REST and GraphQL APIs in .NET powering financial data processing across the full credit lifecycle.",
      "Reduced customer-support load by developing Angular components for loan management, application tracking, and a customer self-service portal.",
      "Ensured reliable credit decisioning by integrating credit bureaus and third-party financial APIs, covering calculation logic with unit and integration tests.",
    ],
    stack: [".NET", "ASP.NET Web API", "C#", "Angular", "TypeScript", "GraphQL", "Azure", "SQL Server"],
  },
  {
    role: "Full Stack Software Engineer",
    company: "TulaCo",
    location: "Minsk, Belarus (Hybrid)",
    period: "May 2019 – Feb 2021",
    context: "Modular web platform enhancing clients' marketing-execution capabilities.",
    highlights: [
      "Improved system scalability and performance by migrating legacy ASP.NET MVC applications to a microservices architecture on Azure.",
      "Designed and developed features for the modular marketing-execution platform in .NET and React.",
      "Streamlined and accelerated deployments by building CI/CD pipelines in Azure DevOps.",
    ],
    stack: [".NET", "ASP.NET Core", "C#", "React", "TypeScript", "Azure", "SQL Server", "Azure DevOps"],
  },
  {
    role: "Full Stack Software Engineer",
    company: "EPAM Systems",
    location: "Minsk, Belarus (On-site)",
    period: "Dec 2016 – May 2019",
    context: "Long-term platform development and maintenance for an enterprise client.",
    highlights: [
      "Developed full-stack web applications using ASP.NET MVC, ASP.NET Web API, React, TypeScript, and SCSS.",
      "Improved API performance by designing and optimizing REST and GraphQL endpoints and tuning PostgreSQL schemas and queries.",
      "Integrated AWS cloud services and sustained the platform long-term through feature development, bug fixes, and performance optimization.",
    ],
    stack: [
      ".NET",
      "ASP.NET MVC",
      "ASP.NET Web API",
      "C#",
      "React",
      "TypeScript",
      "SCSS",
      "GraphQL",
      "PostgreSQL",
      "SQL Server",
      "AWS",
    ],
  },
];
