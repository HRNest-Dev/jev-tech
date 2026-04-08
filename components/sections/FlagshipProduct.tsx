"use client";

import { Container } from "../ui";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Smart Payroll & Disbursement",
    description:
      "Automate salary calculations, tax deductions, and instant salary disbursement to employee bank accounts through our integrated payment gateway.",
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Employee Management",
    description:
      "Centralized employee profiles, onboarding workflows, document management, and organizational hierarchy all in one place.",
    color: "bg-blue-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Leave & Attendance",
    description:
      "Streamlined leave requests, approval workflows, attendance tracking, and real-time availability overview for managers.",
    color: "bg-violet-500",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & Reports",
    description:
      "Powerful dashboards with workforce insights, payroll summaries, headcount trends, and exportable reports for informed decision-making.",
    color: "bg-amber-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

export default function FlagshipProduct() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-blue-100 text-blue-600 border border-blue-200">
            Our Flagship Product
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Meet{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              StaffDemHR
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Built and powered by Jev Technology, StaffDemHR is an all-in-one human resource
            management platform designed to simplify workforce operations for businesses across Africa.
          </p>
        </div>

        {/* Product Highlight Card */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 shadow-2xl shadow-slate-900/20 border border-slate-700/50">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">StaffDemHR</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  By Jev Technology
                </span>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                From onboarding new hires to processing payroll and disbursing salaries directly
                to employee bank accounts, StaffDemHR handles the full employee lifecycle so
                you can focus on growing your business.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["HR Management", "Payroll", "Salary Disbursement", "Leave Tracking", "Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right - Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center text-white mb-3`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            StaffDemHR is a product of Jev Technology Ltd. &mdash; proudly built in Africa for the world.
          </p>
        </div>
      </Container>
    </section>
  );
}
