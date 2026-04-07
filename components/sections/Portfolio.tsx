"use client";

import { Container } from "../ui";

const projects = [
  {
    title: "StaffDemHR",
    category: "HR & Payroll",
    description: "A comprehensive HR management system serving 50+ organizations across Africa with payroll, leave management, and employee engagement features.",
    tags: ["React", "Laravel", "MySQL", "AWS"],
    gradient: "from-blue-600 to-cyan-500",
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-100",
  },
  {
    title: "FinFlow Mobile App",
    category: "Mobile Application",
    description: "Cross-platform mobile banking application with secure transactions, budget tracking, and financial insights for over 100,000 users.",
    tags: ["React Native", "TypeScript", "Firebase"],
    gradient: "from-purple-600 to-pink-500",
    accentColor: "text-purple-600",
    bgAccent: "bg-purple-100",
  },
  {
    title: "LogiTrack Enterprise",
    category: "Web Application",
    description: "Real-time logistics and fleet management platform helping companies optimize delivery routes and track shipments efficiently.",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    gradient: "from-emerald-600 to-teal-500",
    accentColor: "text-emerald-600",
    bgAccent: "bg-emerald-100",
  },
  {
    title: "EduConnect LMS",
    category: "Education Platform",
    description: "Learning management system connecting students and educators with interactive courses, assessments, and progress tracking.",
    tags: ["Vue.js", "Django", "Redis"],
    gradient: "from-orange-500 to-amber-500",
    accentColor: "text-orange-600",
    bgAccent: "bg-orange-100",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-orange-100 text-orange-600 border border-orange-200">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Projects That Make Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore some of our recent projects that have helped businesses transform and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/10" />
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>

                {/* Category Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 ${project.accentColor}`}>
                  {project.category}
                </span>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${project.bgAccent} ${project.accentColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
