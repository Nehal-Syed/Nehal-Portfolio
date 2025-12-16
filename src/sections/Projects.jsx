export default function Projects() {
  const projects = [
    {
      title: "CDNS Bank Management APIs",
      description: "Developed backend APIs for National Savings Bank using Go and Oracle DB. Implemented secure CRUD operations and deployed on production servers.",
      tech: ["Go", "Oracle DB", "OpenAPI/Swagger", "Production Deployment"],
      icon: "fas fa-network-wired",
      gradient: "from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600",
      featured: true,
      period: "Oct 2025 – Present",
      role: "Application Developer - DTC"
    },
    {
      title: "Book Reading Website",
      description: "Online book reading platform with secure backend services using .NET Core, C#, and SQL Server. Implemented authentication and optimized database schemas.",
      tech: [".NET Core", "C#", "SQL Server", "EF Core", "Serilog"],
      icon: "fas fa-book-reader",
      gradient: "from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600",
      featured: true,
      period: "2023 – 2024",
      role: "Intern - Air University"
    },
    {
      title: "Attendance Portal",
      description: "Role-based access system with session-based authentication and encrypted passwords. Built with .NET 8 and Blazor.",
      tech: [".NET 8", "Blazor", "Authentication", "Role-Based Access"],
      icon: "fas fa-clipboard-check",
      gradient: "from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600",
      featured: false,
      period: "Jul 2024 – Aug 2024"
    },
    {
      title: "Chatting Web App",
      description: "Real-time messaging application with AI chatbot integration using MERN stack and MongoDB.",
      tech: ["MERN Stack", "MongoDB", "Real-time", "AI Chatbot"],
      icon: "fas fa-comments",
      gradient: "from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600",
      featured: false,
      period: "Aug 2024 – Sep 2024"
    },
    {
      title: "CareConnect - Virtual Assistant",
      description: "Voice-controlled virtual assistant with eye-tracking cursor control built with Python.",
      tech: ["Python", "Voice Control", "Eye-tracking", "AI"],
      icon: "fas fa-robot",
      gradient: "from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600",
      featured: false,
      period: "2025 – Present"
    },
    {
      title: "Freelance Backend Services",
      description: "Scalable backend services in Go and .NET for production systems. RESTful APIs using OpenAPI standards with Postman testing.",
      tech: ["Go", ".NET", "REST APIs", "OpenAPI", "Postman"],
      icon: "fas fa-laptop-code",
      gradient: "from-rose-500 to-pink-500 dark:from-rose-600 dark:to-pink-600",
      featured: false,
      period: "Freelance",
      role: "Backend Developer"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-blue-400 rounded-full mb-4">
            Backend Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built with <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Precision</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Production-ready backend systems and APIs with focus on security, scalability, and performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Project Period */}
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">
                  {project.period}
                </span>
              </div>

              {/* Icon */}
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${project.gradient} w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${project.icon} text-white text-3xl`}></i>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Role if exists */}
              {project.role && (
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-briefcase text-xs text-gray-500"></i>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.role}</span>
                </div>
              )}

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <i className="fas fa-tools"></i>
                  <span>Built with:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-cyan-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Simple Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            More projects and detailed technical documentation available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}