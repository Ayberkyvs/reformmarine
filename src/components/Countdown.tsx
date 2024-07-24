import { useEffect, useState } from 'react';

interface CountdownProps {
    children: React.ReactNode;
    startTime: string;
    endTime: string;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ children, startTime, endTime }: CountdownProps) {
    const [isMaintenance, setIsMaintenance] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const getCurrentDate = (): boolean => {
        const currentDate: Date = new Date();
        const startDate: Date = new Date(startTime);
        const endDate: Date = new Date(endTime);
        const isInMaintenance: boolean = currentDate >= startDate && currentDate < endDate;

        if (isInMaintenance) {
            const timeDiff = endDate.getTime() - currentDate.getTime();
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

    if (!isMaintenance) {
        return <>{children}</>;
    }

    return (
        <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-300 text-white gap-6 p-4">
            <div className="flex justify-between w-full h-fit max-w-screen-xl flex-wrap">
                {Object.entries(timeRemaining).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col justify-center items-center bg-white w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] gap-2 rounded-xl shadow-md m-2">
                        <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500">{value}</div>
                        <div className="text-sm md:text-lg lg:text-2xl uppercase text-blue-800 font-semibold">{unit}</div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col max-w-screen-xl w-full'>
                <div className='flex flex-col gap-2 max-w-[100%] md:max-w-[75%] lg:max-w-[50%] text-black'>
                    <h1 className='text-base md:text-lg lg:text-2xl uppercase font-bold'>We are coming soon!</h1>
                    <p className='text-xs md:text-base lg:text-lg'>This website is currently under construction and development. It will open within the specified time. Please try again later.</p>
                </div>
            </div>
        </section>
    );
}
