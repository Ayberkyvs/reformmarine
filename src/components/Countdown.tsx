import { useEffect, useState } from 'react';
import PageHeading from './PageHeading';

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
        <section className='bg-gray-100'>
            <PageHeading title='We are coming soon!' backgroundImage='https://images.pexels.com/photos/1544372/pexels-photo-1544372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <div className='flex justify-evenly lg:justify-between max-w-screen-xl w-full h-full m-auto py-20 flex-wrap'>
            {Object.entries(timeRemaining).map(([unit, value]) => (
                <div key={unit} className="flex flex-col justify-center items-center bg-white w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] gap-2 rounded-xl shadow-md m-2">
                    <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500">{value}</div>
                    <div className="text-sm md:text-lg lg:text-2xl uppercase text-blue-800 font-semibold">{unit}</div>
                </div>
            ))}
            </div>
        </section>
    );
}
// {Object.entries(timeRemaining).map(([unit, value]) => (
//     <div key={unit} className="flex flex-col justify-center items-center bg-white w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] gap-2 rounded-xl shadow-md m-2">
//         <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500">{value}</div>
//         <div className="text-sm md:text-lg lg:text-2xl uppercase text-blue-800 font-semibold">{unit}</div>
//     </div>
// ))}