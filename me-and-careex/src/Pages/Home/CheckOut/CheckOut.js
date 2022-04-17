import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CheckOut.css'


const CheckOut = () => {

    const serviceName = useParams().serviceName;

    const handleTakeAnAppointment = () => {

        console.log("An Appointment Taken!");
    }

    return (
        <div className='my-20'>

            <div className='flex items-center justify-center'>
                <small className='text-xl'>To take this service </small>
                <h1 className='text-3xl ml-3 my-3 text-yellow-700 font-bold tracking-wider'>
                    {serviceName}
                </h1>
            </div>


            <div className='w-full md:w-10/12 mx-auto mt-3'>

                <form onSubmit={handleTakeAnAppointment}
                    className="  appointment-form flex items-center justify-center flex-col pt-5 pb-16">

                    <h1 className='text-lg text-center text-yellow-400'>Fill up this form </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                        <div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="patientName">Patient</label>
                                <input type="text" name="patientName" id="" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" name="phone" id="" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" />
                            </div >

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="symptoms">Symptoms</label>
                                <input type="text" name="symptoms" id="" />
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="gender">Gender</label>
                                <input type="text" name="gender" id="" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="time">Available Time</label>
                                <input type="time" name="time" id="" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <input className='text-white px-10 py-1 submit-btn' type="submit" value="Make an appointment" />

                    </div>


                </form>
            </div>


        </div>
    );
};

export default CheckOut;