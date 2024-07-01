import { useEffect, useState } from 'react'
export default function Countdown({ children, startTime, endTime }: {children: any, startTime: any, endTime: any}) {
    const [isMaintenance, setIsMaintenance] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const getCurrentDate = () => {
        const currentDate: any = new Date();
        const startDate: Date = new Date(startTime);
        const endDate: any = new Date(endTime);
        const isInMaintenance = currentDate >= startDate && currentDate < endDate;

        if (isInMaintenance) {
        const timeDiff = endDate - currentDate;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
        } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }

        return isInMaintenance;
    };

    useEffect(() => {
        setIsMaintenance(getCurrentDate());
        const intervalId = setInterval(() => {
        setIsMaintenance(getCurrentDate());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [startTime, endTime]);

    if (!isMaintenance){
        return (<>{children}</>)
    }
  return (
    <div className='countdown flex justify-center items-center w-full min-h-[100vh] h-fit pt-[100px] lg:pt-[130px]'>
        <div className='flex flex-col justify-center items-center w-full max-w-screen-xl h-fit'>
            <h1 className='flex text-[24px] md:text-[32px] lg:text-[40px] uppercase tracking-[20px] font-bold mb-[88px] text-center text-white'>we are comıng soon</h1>
            <div className='flex justify-evenly items-center flex-wrap h-auto w-full gap-[15px] lg:gap-[160px]'>
                <div className='flex flex-col w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-primary border border-blue-100 rounded-2xl items-center justify-center text-white'>
                    <h1 className='font-bold text-[24px] md:text-[36px] lg:text-[48px] drop-shadow-lg'>{timeRemaining.days}</h1>
                    <span className='font-bold text-base md:text-2xl'>DAYS</span>
                </div>
                <div className='flex flex-col w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-primary border border-blue-100 rounded-2xl items-center justify-center text-white'>
                    <h1 className='font-bold text-[24px] md:text-[36px] lg:text-[48px] drop-shadow-lg'>{timeRemaining.hours}</h1>
                    <span className='font-bold text-base md:text-2xl'>HOURS</span>
                </div>
                <div className='flex flex-col w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-primary border border-blue-100 rounded-2xl items-center justify-center text-white'>
                    <h1 className='font-bold text-[24px] md:text-[36px] lg:text-[48px] drop-shadow-lg'>{timeRemaining.minutes}</h1>
                    <span className='font-bold text-base md:text-2xl'>MINUTES</span>
                </div>
                <div className='flex flex-col w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-primary border border-blue-100 rounded-2xl items-center justify-center text-white'>
                    <h1 className='font-bold text-[24px] md:text-[36px] lg:text-[48px] drop-shadow-lg'>{timeRemaining.seconds}</h1>
                    <span className='font-bold text-base md:text-2xl'>SECONDS</span>
                </div>
            </div>
        </div>
    </div>
  )
}

