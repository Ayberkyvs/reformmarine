import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../assets/couplephoto.png"
import { motion } from "framer-motion"
export default function AboutUs() {
  return (
    <div className="flex justify-center items-center w-full h-fit lg:h-[650px] p-4 mt-[150px]">
        <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col h-full bg-gray-100 rounded-xl gap-2 p-8 shadow-sm">
                <h6 className="text-orange-500 text-sm md:text-base font-bold uppercase">About Us</h6>
                <h1 className="text-black text-2xl md:text-4xl font-bold">Our Dream is Global Learning Transformation</h1>
                <p className="text-sm md:text-base text-black/70 mt-12">Lorem ipsum dolor sit amet consectetur. Erat nulla quam ante aenean volutpat eget. Tincidunt amet turpis consectetur venenatis imperdiet vitae est. Velit tortor arcu mauris vel phasellus sagittis quis enim. Mauris mi vulputate leo mi. Urna integer vulputate nisi praesent tellus sit tempor. Eu integer aliquam mauris amet tempor quis. Posuere libero eleifend massa mauris imperdiet ut id elementum. Ut amet duis lacus lectus ultrices. Pharetra massa sapien suspendisse lectus vulputate id semper.
                Vitae molestie vel bibendum praesent mi. Quis nibh morbi ipsum neque eros tortor. At justo interdum sem mauris.</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-col gap-4 justify-between min-h-[250px] lg:h-full">
                <div className="block h-1/2 bg-gray-100 rounded-xl"> 
                    <LazyLoadImage src={Banner} alt="wrfasda" className="w-full h-full rounded-xl object-cover object-top"/>
                </div>
                <div className="h-full lg:h-1/2 bg-gray-100 rounded-xl grid grid-cols-2 grid-rows-2 gap-4 p-8 shadow-sm">
                    <motion.div className="bg-gray-200 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "#b8deff",
                            boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.10)",
                        }}
                        transition={{duration: 0.1}}
                    >
                        <span className="text-2xl lg:text-3xl font-semibold">3.5</span>
                        <span>Years Experience</span>
                    </motion.div>
                    <motion.div className="bg-gray-200 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "#f8e1bf",
                            boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.10)",
                        }}
                        transition={{duration: 0.1}}
                    >
                        <span className="text-2xl lg:text-3xl font-semibold">23</span>
                        <span>Project Challenge</span>
                    </motion.div>
                    <motion.div className="bg-gray-200 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "#c4f3d7",
                            boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.10)",
                        }}
                        transition={{duration: 0.1}}
                    >
                        <span className="text-2xl lg:text-3xl font-semibold">830+</span>
                        <span>Positive Reviews</span>
                    </motion.div>
                    <motion.div className="bg-gray-200 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "#f8bebe",
                            boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.10)",
                        }}
                        transition={{duration: 0.1}}
                    >
                        <span className="text-2xl lg:text-3xl font-semibold">100K</span>
                        <span>Trusted Students</span>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  );
}
