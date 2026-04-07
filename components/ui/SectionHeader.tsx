interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
