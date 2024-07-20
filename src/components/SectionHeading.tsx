

export default function SectionHeading({title, subtitle, align, className}: {title: string, subtitle: string, align: "left" | "center" | "right", className: string}) {
  return (
    <div className={`text-${align} flex flex-col h-fit w-fit ${className}`}>
        <h3 className="text-base lg:text-xl font-semibold text-primary">{subtitle}</h3>
        <h1 className="text-2xl lg:text-3xl font-bold text-black">{title}</h1>
    </div>
  )
}

