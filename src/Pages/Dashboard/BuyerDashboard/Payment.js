import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const moId = useParams();
    const myOrderId = moId.id;

    const {data: order} = useQuery({
        queryKey: ['order'],
        queryFn: async ()=> {
            const res = await fetch(`https://12-book-shop-server.vercel.app/buyer-orders/${myOrderId}`);
            const data = await res.json();

            return data;
        }
    });

    console.log(order);

    return (
        <div>
            <h1 className='text-4xl font-semibold my-5'>Payment for: <strong>{order?.book}</strong></h1>
            <p>
                Please Pay <strong>${order?.price} </strong>
                for Book: '{order?.book}'.
            </p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm myOrderId={myOrderId}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;