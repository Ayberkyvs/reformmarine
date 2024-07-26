type AboutUsProps = {
    children?: React.ReactNode;
    className?: string;
    mainVisualContent?: React.ReactNode;
    visualContent?: React.ReactNode;
    subtitle?: string;
    title: string;
    description: string;
};

export default function ContentGrid({
    children,
    className = "",
    mainVisualContent,
    visualContent,
    subtitle,
    title,
    description,
}: AboutUsProps) {
    return (
        <section className={`flex justify-center items-center w-full h-fit p-4 py-20 ${className}`}>
            <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                <div className="flex flex-col h-full bg-white rounded-xl gap-2 p-8 shadow-sm">
                    <h6 className="text-orange-500 text-sm md:text-base font-bold">{subtitle}</h6>
                    <h1 className="text-black text-2xl lg:text-3xl font-bold">{title}</h1>
                    <p className="text-sm md:text-base text-black/70 mt-12">{description}</p>
                </div>
                <div className="flex flex-col gap-4 justify-between h-full grid-cols-1 lg:grid-cols-2">
                    {mainVisualContent && (
                        <div className="rounded-xl w-full h-fit">
                            {mainVisualContent}
                        </div>
                    )}
                    {visualContent && (
                        <div className="rounded-xl w-full h-fit">
                            {visualContent}
                        </div>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
}
