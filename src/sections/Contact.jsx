export default function Contact() {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "nehalllshah7@gmail.com",
      link: "mailto:nehalllshah7@gmail.com",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-600 to-pink-600",
      description: "For project inquiries and collaborations"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+92 331 7771801",
      link: "tel:+923317771801",
      color: "from-green-500 to-emerald-500",
      darkColor: "from-green-600 to-emerald-600",
      description: "Available for voice calls"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Remote • Worldwide",
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-600 to-cyan-600",
      description: "Working remotely across timezones"
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      value: "Within 24 hours",
      color: "from-orange-500 to-yellow-500",
      darkColor: "from-orange-600 to-yellow-600",
      description: "Typically respond same day"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Nehal-Syed",
      username: "@Nehal-Syed",
      color: "from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black",
      iconColor: "text-white",
      buttonColor: "hover:bg-gray-900 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/nehal-syed-0a9b39230",
      username: "Nehal Syed",
      color: "from-blue-700 to-blue-800 dark:from-blue-800 dark:to-blue-900",
      iconColor: "text-white",
      buttonColor: "hover:bg-blue-700",
    },
    {
      name: "Stack Overflow",
      icon: "fab fa-stack-overflow",
      url: "https://stackoverflow.com/users/yourid",
      username: "Nehal Syed",
      color: "from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700",
      iconColor: "text-white",
      buttonColor: "hover:bg-orange-600",
    }
  ];

  const availability = {
    status: "Available for Opportunities",
    icon: "fas fa-bolt",
    color: "from-green-400 to-emerald-500",
    darkColor: "from-green-500 to-emerald-600",
    description: "Open to freelance projects, collaborations, and full-time roles"
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Glow Effect */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-600 dark:to-purple-600 text-white rounded-full mb-6 shadow-lg">
            Let's Connect
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 bg-clip-text text-transparent animate-gradient">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a backend project or technical challenge? Let's discuss how we can build something amazing together.
          </p>
        </div>

        {/* Availability Banner */}
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${availability.color} dark:${availability.darkColor} p-8 mb-12 shadow-2xl`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <i className={`${availability.icon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{availability.status}</h3>
                <p className="text-white/90">{availability.description}</p>
              </div>
            </div>
            <a 
              href="mailto:nehalllshah7@gmail.com"
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Start Conversation
            </a>
          </div>
        </div>

        {/* Contact Information - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link || "#"}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${info.color} dark:${info.darkColor} p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <i className="fas fa-arrow-right text-white/50 text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
                
                <h3 className="text-lg font-semibold text-white/90 mb-2">{info.title}</h3>
                <div className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {info.value}
                </div>
                <p className="text-white/70 text-sm">{info.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media - Attractive Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Connect on <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Social Media</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow for tech insights, project updates, and backend development content
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${social.color} p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Icon with Glow */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                    <div className={`relative p-5 rounded-2xl ${social.buttonColor} transition-colors duration-300`}>
                      <i className={`${social.icon} ${social.iconColor} text-3xl`}></i>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{social.name}</h4>
                  <div className="text-white/80 mb-3 font-medium">{social.username}</div>
                  <div className="text-white/60 text-sm">{social.stats}</div>
                  
                  {/* Follow Button */}
                  <div className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold group-hover:bg-white/30 transition-all duration-300">
                    <span>Follow</span>
                    <i className="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA - Glowing Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black p-12 text-center border border-gray-800 shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm mb-8">
              <i className="fas fa-rocket text-white text-4xl"></i>
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h3>
            
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Let's collaborate to build secure, scalable backend solutions that power exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:nehalllshah7@gmail.com"
                className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg"
              >
                <i className="fas fa-envelope group-hover:scale-110 transition-transform"></i>
                Email Now
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
              </a>
              
              <div className="text-white/60 text-sm font-medium px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <i className="fas fa-clock mr-2"></i>
                24-hour response guarantee
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Looking forward to discussing backend architecture, APIs, and system design with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}