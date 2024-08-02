import DynamicBreadcrumbs from "./DynamicBreadcrumbs";

function PageHeading({title, backgroundImage, backgroundPosition="center"}: {title:string, backgroundImage: string, backgroundPosition?: string}) {
  return (
    <div 
        className="relative min-h-[350px] flex flex-col items-center justify-center pt-[100px]"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: `${backgroundPosition}`}}
    >
        <div className="absolute top-0 w-full h-full bg-black inset-0 opacity-50 z-[1]" />
        <h1 className="text-white text-center text-2xl lg:text-4xl font-bold z-[2]">{title}</h1>
        <DynamicBreadcrumbs className="mt-2 z-[2]" />
    </div>
  )
}

export default PageHeading