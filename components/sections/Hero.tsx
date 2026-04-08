"use client";

import { Container } from "../ui";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background - Darker for better contrast */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] border border-[#27272a] text-sm text-[#d4d4d8] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Building the Future of Technology
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-200">
            Transforming Ideas into{" "}
            <span className="gradient-text">Digital Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#d4d4d8] max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-400">
            We build powerful web apps, mobile solutions, and custom software that help businesses grow. From concept to launch, we're your trusted partner in digital transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Start Your Project
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          {/* Stats - With clear, visible colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 pb-8 border-t border-[#27272a]">
            {[
              { value: "6", label: "Projects Delivered" },
              { value: "7", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#60a5fa] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#a1a1aa]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#27272a] flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[#3b82f6]" />
        </div>
      </div>
    </section>
  );
}
