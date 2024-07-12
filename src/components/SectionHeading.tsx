

export default function SectionHeading({title, subtitle, align}: {title: string, subtitle: string, align: "left" | "center" | "right"}) {
  return (
    <div className={`text-${align} flex flex-col h-fit w-fit`}>
        <h3 className="text-base lg:text-xl font-bold tracking-[2px] uppercase text-primary">{subtitle}</h3>
        <h1 className="text-2xl lg:text-3xl font-bold text-black">{title}</h1>
    </div>
  )
}

