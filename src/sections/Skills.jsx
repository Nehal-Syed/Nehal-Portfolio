export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Go", level: 90, color: "bg-cyan-500 dark:bg-cyan-400" },
        { name: "C#", level: 88, color: "bg-purple-500 dark:bg-purple-400" },
        { name: "Python", level: 85, color: "bg-yellow-500 dark:bg-yellow-400" },
        { name: "JavaScript", level: 82, color: "bg-green-500 dark:bg-green-400" },
        { name: "C++", level: 75, color: "bg-blue-500 dark:bg-blue-400" },
      ],
      gradient: "from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400"
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "PostgreSQL", level: 92, color: "bg-blue-500 dark:bg-blue-400" },
        { name: "MySQL", level: 90, color: "bg-blue-500 dark:bg-blue-400" },
        { name: "Oracle", level: 88, color: "bg-red-500 dark:bg-red-400" },
        { name: "SQL Server", level: 87, color: "bg-blue-600 dark:bg-blue-500" },
        { name: "MongoDB", level: 85, color: "bg-green-500 dark:bg-green-400" },
      ],
      gradient: "from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
    },
    {
      title: "Backend Technologies",
      icon: "fas fa-server",
      skills: [
        { name: "REST APIs", level: 94, color: "bg-blue-500 dark:bg-blue-400" },
        { name: "OpenAPI/Swagger", level: 90, color: "bg-green-500 dark:bg-green-400" },
        { name: "Keycloak Auth", level: 88, color: "bg-orange-500 dark:bg-orange-400" },
        { name: "ASP.NET Core", level: 86, color: "bg-purple-500 dark:bg-purple-400" },
        { name: "EF Core", level: 85, color: "bg-purple-600 dark:bg-purple-500" },
      ],
      gradient: "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-cyan-400 rounded-full mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Backend-focused developer skilled in Go, .NET, and MERN stack with expertise in database design and API development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect Elements */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-cyan-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 dark:from-cyan-600 dark:to-green-600 rounded-full opacity-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Tools */}
        <div className="mt-20">
          <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Frameworks & Tools
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: ".NET Core", icon: "fas fa-code", color: "text-purple-500" },
              { name: "MERN Stack", icon: "fab fa-react", color: "text-cyan-500" },
              { name: "Blazor", icon: "fas fa-window-maximize", color: "text-blue-500" },
              { name: "Next.js", icon: "fab fa-js", color: "text-gray-800 dark:text-white" },
              { name: "Postman", icon: "fas fa-paper-plane", color: "text-orange-400" },
              { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
              { name: "Swagger", icon: "fas fa-book", color: "text-green-500" },
              { name: "Linux", icon: "fab fa-linux", color: "text-yellow-500" },
              { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
              { name: "AWS", icon: "fab fa-aws", color: "text-yellow-600" },
              { name: "Serilog", icon: "fas fa-stream", color: "text-blue-400" },
              { name: "VS Code", icon: "fas fa-code", color: "text-blue-400" },
            ].map((tool, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`text-3xl mb-3 ${tool.color} group-hover:scale-125 transition-transform duration-300`}>
                  <i className={tool.icon}></i>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 rounded-lg">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Certifications</h4>
                <p className="text-gray-600 dark:text-gray-400">Relational DB Design (Coursera), Python Essentials (Cisco), Google Data, IBM DevOps</p>
              </div>
            </div>
            <div className="flex gap-4">
              {["PostgreSQL", "Python", "Data", "DevOps"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}