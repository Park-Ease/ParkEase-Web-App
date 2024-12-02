"use client"; // Ensure client-side rendering

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ToastHandler from '@/components/global/ToastHandler';

const AuthCallback = () => {
  const [actionMessage, setActionMessage] = useState('');
  const [status, setStatus] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const response = await axios.get('/api/auth/callback');  // Using axios here
        const { status, message } = response.data;

        setActionMessage(message);
        setStatus(status);

        if (status === 200 || status === 201) {
          router.push('/');  // Redirect to home page
        } else {
          router.push('/sign-in');  // Redirect to sign-in page
        }
      } catch (error) {
        console.error("Error in authentication:", error);
        setActionMessage('Something went wrong.');
      }
    };

    authenticateUser();
  }, [router]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-6xl font-semibold font-funnel-display">Authenticating...</h1>
      <ToastHandler message={actionMessage} isError={status !== 200 && status !== 201} />
    </div>
  );
};

export default AuthCallback;
