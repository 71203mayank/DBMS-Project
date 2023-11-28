import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import moment from 'moment-timezone';
import moment from 'moment';
import 'moment-timezone'
import "./History.css"
import BookTrainCard from '../../Components/BookTrainCard/BookTrainCard'

export default function History() {
    const {id} = useParams();
    const [tickets, setTickets] = useState([]);

    useEffect(()=>{

        const fetchTickets = async () => {
            try {
                console.log(id);
                const response = await axios.get(`http://192.168.1.55:5000/history?user_id=${id}`);
                console.log(response.data);
                setTickets(response.data.tickets); // Assuming setTickets is a state setter from useState
            } catch (err) {
                console.error('Fetching Ticket error', err);
            }
        };

        fetchTickets();
    }, [id]);


    const handleOnSubmit = async (ticket_id) =>{
        try{
            // const ticket_id = 2;
            console.log(ticket_id);
            const response = await axios.delete(`http://192.168.1.55:5000/cancel?ticket_id=${ticket_id}`);
            console.log(response);
            window.location.reload();
        }
        catch(err){
            console.error('Cancel Ticket error',err);
        }

        // console.log("cancled clicke");
    }

    // const isTicketInPast = (ticket) => {
    //     // Check if the route is /admin/:userid/history
    //     const isAdminHistoryRoute = window.location.pathname.includes(`/admin/${id}/history`);
    //     if (isAdminHistoryRoute) {
    //         return false;
    //     }


    //     const ticketDateTime = moment.tz(`${ticket.train_date} ${ticket.dept_time}`, 'DD-MM-YYYY HH:mm', "Asia/Kolkata");
    //     const currentDateTime = moment().tz("Asia/Kolkata");
    //     return ticketDateTime.isBefore(currentDateTime);
    // }

    const isTicketInPast = (ticket) => {
        // Check if the route is /admin/:userid/history
        const isAdminHistoryRoute = window.location.pathname.includes(`/admin/${id}/history`);
        if (isAdminHistoryRoute) {
            return false;
        }
    
        const ticketDateTime = moment.tz(`${ticket.train_date} ${ticket.dept_time}`, 'DD-MM-YYYY HH:mm', 'Asia/Kolkata');
        const currentDateTime = moment().tz('Asia/Kolkata');
        return ticketDateTime.isBefore(currentDateTime);
    };
    
  return (
    <div className='history'>
        <div className='w-11/12 flex-col m-auto'>

            { tickets.map((ticket, index)=>( 
                <div key={index} className='border-2 rounded-xl pb-4 px-4 my-5'>
                    <BookTrainCard 
                            train_name = {ticket.train_name}
                            train_number = {ticket.train_number}
                            train_date = {ticket.train_date}
                            from_station_name = {ticket.from_station}
                            from = {ticket.from_station_code}
                            from_std = {ticket.dept_time}
                            distance = {ticket.distance}
                            duration = {ticket.time}
                            date = {ticket.train_date}
                            to_station_name = {ticket.to_station}
                            to = {ticket.to_station_code}
                            to_sta = {ticket.arr_time}
                    />
                    <div className='history-meta-detail flex justify-between p-3'>

                        <div className='pnr'>
                            Ticket ID: {ticket.id}
                        </div>
                        <div className='history-class'>
                            {ticket.class_booked}
                        </div>
                        <div className='history-phone'>
                            Phone: {ticket.mobile}
                        </div>    
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-1/2'>
                            { ticket.passengers.map((passenger,indx)=>(
                                <div key ={indx} className='history-passenger-detail-container flex justify-between w-full pl-3'>
                                <div className='history-passenger-detail history-passenger-name'>
                                    {passenger.passenger_name}
                                </div>
                                <div className='history-passenger-detail history-passenger-sex'>
                                    {passenger.passenger_sex}
                                </div>
                                <div className='history-passenger-detail history-passenger-age'>
                                    {passenger.passenger_age}
                                    
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className='history-cancel-button-container w-1/4'>
                            {/* <button className={`history-cancel-button ${isTicketInPast(ticket) ? 'disabled' : ''}`} 
                            onClick={() => handleOnSubmit(ticket.id)} 
                            disabled={isTicketInPast(ticket)}
                            >
                                Cancel
                            </button> */}
                            <button
                                className={`history-cancel-button ${isTicketInPast(ticket) ? 'disabled' : ''}`}
                                onClick={() => handleOnSubmit(ticket.id)}
                                disabled={isTicketInPast(ticket)}
                            >
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}
