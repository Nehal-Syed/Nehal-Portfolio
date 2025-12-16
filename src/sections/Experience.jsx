export default function Experience() {
  const experiences = [
    {
      title: "Application Developer",
      company: "DTC (D-Tech & Consultancy)",
      period: "2021 – 2025",
      location: "Islamabad, Pakistan",
      description: "Developed backend APIs for CDN systems and deployed production services.",
      achievements: [
        "Developed backend APIs for CDN systems using Go and Oracle DB",
        "Uploaded and deployed APIs on DTC-managed production servers",
        "Built complete CRUD operations with PostgreSQL, MySQL, Oracle, SQL Server, and MongoDB",
        "Integrated Keycloak authentication for secure identity and role-based access management",
        "Implemented secure CRUD operations and integrated with client systems"
      ],
      tech: ["Go", "Oracle DB", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Keycloak", "Production Deployment"],
      icon: "fas fa-server",
      color: "from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600",
      current: true
    },
    {
      title: "Freelancer",
      company: "Backend Developer",
      period: "2020 – 2021",
      location: "Remote",
      description: "Developed scalable backend services in Go and .NET for production systems.",
      achievements: [
        "Developed scalable backend services in Go and .NET for production systems",
        "Designed and implemented RESTful APIs using OpenAPI (Swagger) standards",
        "Tested and validated APIs using Postman for correctness and performance"
      ],
      tech: ["Go", ".NET", "REST APIs", "OpenAPI", "Swagger", "Postman", "Production Systems"],
      icon: "fas fa-laptop-code",
      color: "from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600",
      current: false
    },
    {
      title: "Intern",
      company: "Air University",
      period: "2019 – 2020",
      location: "Islamabad, Pakistan",
      description: "Developed an online book reading platform with secure backend services.",
      achievements: [
        "Developed an online book reading platform with secure backend services",
        "Utilized .NET Core, C#, and SQL Server for data persistence and performance",
        "Built RESTful APIs and optimized database schemas",
        "Implemented authentication, logging via Serilog, and EF Core for data access",
        "Created stored procedures to improve query efficiency"
      ],
      tech: [".NET Core", "C#", "SQL Server", "REST APIs", "EF Core", "Serilog", "Stored Procedures"],
      icon: "fas fa-book-open",
      color: "from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600",
      current: false
    },
    {
      title: "Intern",
      company: "AKSA-Solutions Development Services",
      period: "2018 – 2019",
      location: "Islamabad, Pakistan",
      description: "Assisted in backend development tasks and SQL database management.",
      achievements: [
        "Assisted in backend development tasks and SQL database management",
        "Gained exposure to enterprise-level .NET architecture and workflows"
      ],
      tech: [".NET", "SQL", "Database Management", "Enterprise Architecture"],
      icon: "fas fa-building",
      color: "from-orange-500 to-yellow-500 dark:from-orange-600 dark:to-yellow-600",
      current: false
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Air University",
      period: "2021 – 2025",
      description: "Specializing in backend development, database systems, and software engineering",
      icon: "fas fa-graduation-cap",
      color: "from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Kips College",
      period: "2020 – 2021",
      description: "Grade: A",
      icon: "fas fa-school",
      color: "from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600",
      grade: "Grade A"
    },
    {
      degree: "Matriculation (Science)",
      institution: "Capital Education System (C.E.S)",
      period: "2018 – 2019",
      description: "Grade: A+",
      icon: "fas fa-award",
      color: "from-orange-500 to-yellow-500 dark:from-orange-600 dark:to-yellow-600",
      grade: "Grade A+"
    }
  ];

  const certifications = [
    {
      name: "Relational Database Design",
      issuer: "Coursera",
      year: "2023",
      icon: "fas fa-database",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Python Essentials",
      issuer: "Cisco",
      year: "2023",
      icon: "fab fa-python",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      year: "2024",
      icon: "fab fa-google",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Introduction to DevOps",
      issuer: "IBM",
      year: "2024",
      icon: "fas fa-cogs",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-600 dark:text-blue-400 rounded-full mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Backend-focused developer with hands-on experience in Go, .NET, and modern database technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800 transform md:-translate-x-1/2"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'}`}>
              {/* Timeline Dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 md:left-1/2 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-r ${exp.color} z-10`}>
                {exp.current && (
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Experience Card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <div className={`group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} flex-shrink-0`}>
                      <i className={`${exp.icon} text-white text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <i className="fas fa-building text-xs"></i>
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-xs"></i>
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className={`p-0.5 rounded-full bg-gradient-to-r ${exp.color} mt-1 flex-shrink-0`}>
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} flex-shrink-0`}>
                    <i className={`${edu.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <i className="fas fa-university"></i>
                      <span>{edu.institution}</span>
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {edu.description}
                    </p>
                    {edu.grade && (
                      <div className="mt-2">
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Professional Certifications
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} flex-shrink-0`}>
                      <i className={`${cert.icon} text-white text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">{cert.name}</h5>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                        <span className="text-xs text-gray-500">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mb-12">
          <h4 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Technical Skills Overview
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <h5 className="font-semibold text-blue-600 dark:text-cyan-400 mb-2 text-center">Languages</h5>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Go</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">C#</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">JavaScript</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
              <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2 text-center">Databases</h5>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">MySQL</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Oracle</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">MongoDB</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl border border-green-100 dark:border-green-800/30">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2 text-center">Frameworks</h5>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">.NET Core</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">MERN Stack</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Blazor</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Next.js</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30">
              <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2 text-center">Tools</h5>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">OpenAPI</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Keycloak</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">Postman</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded">EF Core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-100 dark:border-blue-800/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Database Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                8+
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                4
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Certifications</div>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="text-center">
          <a 
            href="/Syed-Nehal-Salman-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            download
          >
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}