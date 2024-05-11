import React from "react";
import axios from "axios";

// ceate payment intent
export const createPaymentIntent = async(price) =>{
    const {data} = await axios.post('/create-payment-intent', price)
    return data;
}


// save booking info in db
export const saveBookingInfo = async(paymentInfo) => {
    const {data} = await axios.post('/bookings', paymentInfo)
    return data;
}


// update room status after booking in db
export const updateStatus = async (id, status) => {
    const {data} = await axios.patch(`/rooms/status/${id}`, {status})
    return data;
}


// get all bookings for a guest by email
export const getBookings = async (email)=>{
    const {data} = await axios(`/bookings?email=${email}`)
    return data;
}


// get all bookings for a host by email
export const getHostBookings = async (email)=>{
    const {data} = await axios(`/bookings/host?email=${email}`)
    return data;
}


