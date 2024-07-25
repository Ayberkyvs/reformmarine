import { motion } from "framer-motion"
export default function AboutUs({className}: {className?:string}) {
  return (
    <section className={`flex justify-center items-center w-full h-fit p-4 bg-blue-50 py-20 ${className}`}>
        <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col h-fit lg:h-[550px] bg-white rounded-xl gap-2 p-8 shadow-sm">
                <h6 className="text-orange-500 text-sm md:text-base font-bold">About Us</h6>
                <h1 className="text-black text-2xl lg:text-3xl font-bold">Our Dream is Global Learning Transformation</h1>
                <p className="text-sm md:text-base text-black/70 mt-12">Lorem ipsum dolor sit amet consectetur. Erat nulla quam ante aenean volutpat eget. Tincidunt amet turpis consectetur venenatis imperdiet vitae est. Velit tortor arcu mauris vel phasellus sagittis quis enim. Mauris mi vulputate leo mi. Urna integer vulputate nisi praesent tellus sit tempor. Eu integer aliquam mauris amet tempor quis. Posuere libero eleifend massa mauris imperdiet ut id elementum. Ut amet duis lacus lectus ultrices. Pharetra massa sapien suspendisse lectus vulputate id semper.
                Vitae molestie vel bibendum praesent mi. Quis nibh morbi ipsum neque eros tortor. At justo interdum sem mauris.</p>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
                <div className="block h-1/2 bg-white rounded-xl w-full"> 
                    {/* <LazyLoadImage src={Banner} alt="wrfasda" className="w-full h-full rounded-xl object-cover object-top"/> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.438175771282!2d29.296018000000004!3d40.8183382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd7659685b97%3A0x9f8ad867e6e6cc0e!2sReform%20Marine!5e0!3m2!1str!2str!4v1721827020248!5m2!1str!2str" width="100%" height="100%" 
                    loading="lazy" className="rounded-xl"></iframe>
                </div>
                <div className="h-full lg:h-1/2 bg-white rounded-xl grid grid-cols-2 grid-rows-2 gap-4 p-8 shadow-sm">
                    <motion.div className="bg-gray-50 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
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
                    <motion.div className="bg-gray-50 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
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
                    <motion.div className="bg-gray-50 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
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
                    <motion.div className="bg-gray-50 flex flex-col items-left justify-center rounded-xl p-4 gap-1"
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
            {/* <div className="w-full h-[300px] bg-white lg:col-span-2 rounded-xl">

            </div> */}
        </div>
    </section>
  );
}
