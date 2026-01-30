interface Industry {
  name: string
  chips: string[]
}

interface IndustryListProps {
  industries: Industry[]
}

export default function IndustryList({ industries }: IndustryListProps) {
  return (
    <div className="flex flex-col">
      {industries.map((industry) => (
        <div
          key={industry.name}
          className="grid grid-cols-[1fr_auto] md:grid-cols-[140px_1fr] lg:grid-cols-[160px_1fr] gap-3 md:gap-4 py-3 border-b border-midnight/10 last:border-b-0 items-center"
        >
          <span className="text-sm font-semibold text-midnight">{industry.name}</span>
          <div className="flex flex-wrap gap-2 justify-end md:justify-start">
            {industry.chips.map((chip) => (
              <span
                key={chip}
                className="inline-block px-2.5 py-1 text-xs text-midnight/60 bg-midnight/5 rounded select-none"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
