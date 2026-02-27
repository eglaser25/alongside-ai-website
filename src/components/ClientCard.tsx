interface ClientCardProps {
  name: string
  description: string
  industry: string
}

export default function ClientCard({ name, description, industry }: ClientCardProps) {
  return (
    <div className="p-8 rounded-xl border border-white/10 border-l-2 border-l-brand bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:-translate-y-1 hover:border-white/20 transition-all duration-200">
      <span className="eyebrow text-brand-subtle/70">
        {industry}
      </span>
      <h3 className="text-lg font-bold text-white mt-2 mb-2">
        {name}
      </h3>
      <p className="text-sm text-white/75 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
