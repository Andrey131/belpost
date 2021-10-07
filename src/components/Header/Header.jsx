import s from "./Header.module.css"
import React, { useState,  useEffect} from 'react';

const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const Header = () =>{

    const [date, setDate] = useState({
        currTime: new Date().toLocaleTimeString().slice(0, -3),
        dayNumber: (new Date().getUTCDate()),
        year: (new Date().getUTCFullYear()),
        monthName: monthNames[(new Date().getMonth())]
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(prevDate => {
                return{
                    ...prevDate,
                    currTime: new Date().toLocaleTimeString().slice(0, -3),
                    dayNumber: (new Date().getUTCDate()),
                    monthNumber: (new Date().getMonth()),
                    year: (new Date().getUTCFullYear())
                }
            });   
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className={s.headLine}>
            <a className={s.time}>{date.currTime}</a>
            <a className={s.wether}>16°C</a>
            <a className={s.date}>{date.dayNumber} {date.monthName} {date.year}</a>
            
        </div>
    )
}

export default Header