export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 rounded-full mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <i className="fas fa-code text-blue-600 dark:text-cyan-400"></i>
                </span>
                Backend-Focused Software Developer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building <span className="font-semibold text-blue-600 dark:text-cyan-400">secure, scalable backend systems</span> with 
                hands-on experience in <span className="font-semibold text-purple-600 dark:text-blue-400">Go, .NET, and MERN stack</span>. 
                Skilled in RESTful APIs using OpenAPI (Swagger), implementing CRUD operations, and integrating authentication systems like Keycloak.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <i className="fas fa-rocket text-purple-600 dark:text-blue-400"></i>
                </span>
                My Approach
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I build robust systems with <span className="font-semibold">performance, security, and reliability</span> as top priorities. 
                Every API I design is crafted for <span className="font-semibold">scalability and maintainability</span>, with comprehensive 
                testing and deployment strategies on production servers.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800/30">
                <div className="text-3xl font-bold text-purple-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Production Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Tech Stack Visualization */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Core Technologies
              </h4>
              
              {/* Tech Icons Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: "Go", icon: "fas fa-lang", color: "text-cyan-600 dark:text-cyan-400" },
                  { name: "C#/.NET", icon: "fas fa-code", color: "text-purple-600 dark:text-purple-400" },
                  { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-500 dark:text-blue-300" },
                  { name: "MongoDB", icon: "fas fa-database", color: "text-green-600 dark:text-green-400" },
                  { name: "Oracle", icon: "fas fa-database", color: "text-red-600 dark:text-red-400" },
                  { name: "Keycloak", icon: "fas fa-shield-alt", color: "text-orange-600 dark:text-orange-400" },
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="group flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-200 dark:hover:border-cyan-500"
                  >
                    <div className={`text-4xl mb-3 ${tech.color} transition-transform duration-300 group-hover:rotate-12`}>
                      <i className={tech.icon}></i>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Floating Element */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-10 blur-xl"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-3">
                <i className="fas fa-graduation-cap"></i>
                <span className="font-semibold">BSCS Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            Let's Build Together
            <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}