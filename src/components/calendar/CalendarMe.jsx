import 'react-calendar/dist/Calendar.css';
import {RiCloseFill} from 'react-icons/ri';
import { useContext, useState } from 'react';
import './calendar.css';
import { Context } from '../../context/context';
import { Calendar } from 'react-calendar';

const CalendarMe = () => {

    const toggle = useContext(Context);

    const [calendar, setCalendar] = useState(new Date());

  return (
    <div className={toggle.toggle2 ? "calendar calendar-active" : "calendar"}>
        <div className="close-calendar" onClick={()=>toggle.setToggle2(false)}>
            <RiCloseFill/>
        </div>
        <div className="calendar-header">
            Delivery time
        </div>
        <div className="calendar-main">
            <Calendar 
                onChange={setCalendar} 
                value={calendar} 
                className="calendar-table" />
        </div>
        <div className="calendar-plans">
        <div className="calendar-plan">
                <p>10 October</p>
                <p>8:00 AM - 9:00 AM</p>
            </div>
            <div className="calendar-plan">
                <p>10 October</p>
                <p>9:00 AM - 10:00 AM</p>
            </div>
            <div className="calendar-plan">
                <p>10 October</p>
                <p>10:00 AM - 11:00 AM</p>
            </div>
            <div className="calendar-plan">
                <p>10 October</p>
                <p>11:00 AM - 12:00 AM</p>
            </div>
            <div className="calendar-plan">
                <p>10 October</p>
                <p>12:00 AM - 13:00 AM</p>
            </div>
            <div className="calendar-plan">
                <p>10 October</p>
                <p>13:00 AM - 14:00 AM</p>
            </div>
        </div>
    </div>
  )
}

export default CalendarMe;