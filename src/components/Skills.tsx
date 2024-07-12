import { Typography } from "antd";
import Photo1 from "../assets/skill/success-man.png";
import Photo2 from "../assets/skill/cost-effective-productive.png";
import Photo3 from "../assets/skill/service-setting.png";
import Photo4 from "../assets/skill/products.png";
import Photo5 from "../assets/skill/customer-support.png";

const { Title,Text } = Typography;
const data = [
    {
        title: "Reliable Service Quality",
        icon: Photo1,
    },
    {
        title: "Cost-Effective Solutions",
        icon: Photo2,
    },
    {
        title: "Expertise in Ship Supply",
        icon: Photo3,
    },
    {
        title: "Innovative Products",
        icon: Photo4,
    },
    {
        title: "7/24 Customer Support",
        icon: Photo5,
    },
]
const Skill = ({data}: {data:any})=> {
    return <div className="flex flex-wrap justify-center gap-10 w-full">
      {data.map((x: any, index: number) => (
        <div key={index} className="flex flex-col justify-center items-center w-fit max-w-[150px] lg:max-w-[200px] h-fit text-center gap-3">
          <div className="flex justify-center items-center w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-xl bg-blue-50 text-blue-800">
            <img src={x.icon} alt={x.title} className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]"/>
          </div>
          <h4 className="text-blue-800 text-center text-base md:text-xl font-semibold w-full">{x.title}</h4>
        </div>
      ))}
    </div>
}
export default function Skills() {
  return (
    <section className="flex items-center justify-center w-full h-fit md:max-h-[650px] px-4 lg:p-0">
        <div className="flex flex-col w-full max-w-screen-xl h-full gap-[71px]">
            <div className="flex flex-col text-center w-full h-fit gap-3">
                <Text className="text-black/80 font-normal text-sm md:text-base">We stand by everyone voyaging on the seas.</Text>
                <h1 className="text-blue-800 font-bold text-2xl md:text-4xl">We Care About Your <span className="text-orange-500">Vessels.</span></h1>
            </div>
            <div className="w-full">
                <Skill data={data}/>
            </div>
        </div>
    </section>
  )
}