import React from 'react'
import "./History.css"
import BookTrainCard from '../../Components/BookTrainCard/BookTrainCard'

export default function History() {
  return (
    <div className='history'>
        <div className='w-11/12 flex-col m-auto'>
            {/* <BookTrainCard 
                        train_name = {train_name}
                        train_number = {train_number}
                        train_date = {train_date}
                        from_station_name = {from_station_name}
                        from = {from}
                        from_std = {from_std}
                        distance = {distance}
                        duration = {duration}
                        date = {date}
                        to_station_name = {to_station_name}
                        to = {to}
                        to_sta = {to_sta}
            /> */}
            <div className='border-2 rounded-xl pb-4 px-4 my-5'>
                <BookTrainCard 
                            train_name = {'Mangala Lakshawadeep SF Express'}
                            train_number = {'12345'}
                            train_date = {'07-12-2023'}
                            from_station_name = {"Kozhikode Jn"}
                            from = {"CLT"}
                            from_std = {"17:45"}
                            distance = {"2026"}
                            duration = {"44"}
                            date = {"07-12-2023"}
                            to_station_name = {"Hazarat Nizamuddin"}
                            to = {"NZM"}
                            to_sta = {"10:30"}
                />
                <div className='history-meta-detail flex justify-between p-3'>

                        <div className='pnr'>
                            PNR: 1234567890
                        </div>
                        <div className='history-class'>
                            2A
                        </div>
                        <div className='history-phone'>
                            Phone: 8921969412
                        </div>    
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2'>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-xl pb-4 px-4 my-5'>
                <BookTrainCard 
                            train_name = {'Mangala Lakshawadeep SF Express'}
                            train_number = {'12345'}
                            train_date = {'07-12-2023'}
                            from_station_name = {"Kozhikode Jn"}
                            from = {"CLT"}
                            from_std = {"17:45"}
                            distance = {"2026"}
                            duration = {"44"}
                            date = {"07-12-2023"}
                            to_station_name = {"Hazarat Nizamuddin"}
                            to = {"NZM"}
                            to_sta = {"10:30"}
                />
                <div className='history-meta-detail flex justify-between p-3'>

                        <div className='pnr'>
                            PNR: 1234567890
                        </div>
                        <div className='history-class'>
                            2A
                        </div>
                        <div className='history-phone'>
                            Phone: 8921969412
                        </div>    
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2'>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-xl pb-4 px-4 my-5'>
                <BookTrainCard 
                            train_name = {'Mangala Lakshawadeep SF Express'}
                            train_number = {'12345'}
                            train_date = {'07-12-2023'}
                            from_station_name = {"Kozhikode Jn"}
                            from = {"CLT"}
                            from_std = {"17:45"}
                            distance = {"2026"}
                            duration = {"44"}
                            date = {"07-12-2023"}
                            to_station_name = {"Hazarat Nizamuddin"}
                            to = {"NZM"}
                            to_sta = {"10:30"}
                />
                <div className='history-meta-detail flex justify-between p-3'>

                        <div className='pnr'>
                            PNR: 1234567890
                        </div>
                        <div className='history-class'>
                            2A
                        </div>
                        <div className='history-phone'>
                            Phone: 8921969412
                        </div>    
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2'>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                        <div className='flex justify-between w-full pl-3'>
                            <div>
                                Mayank Gupta
                            </div>
                            <div>
                                Sex: M
                            </div>
                            <div>
                                Age: 19
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
