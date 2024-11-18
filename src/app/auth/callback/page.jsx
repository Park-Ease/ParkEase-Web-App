import React from 'react';
import checkUserAndCreate from '@/actions/checkUserAndCreate';
import ToastHandler from '@/components/global/ToastHandler';

const AuthCallback = async () => {
    const {status,message} = await checkUserAndCreate();

    if(status === 200 || status === 201){
        toast.success(message);
        redirect("/");
    }

    else{
        toast.error(message);
        redirect("/sign-in");
    }


  return (
    <div className="flex justify-center items-center">
        <h1 className="text-6xl font-semibold font-funnel-display">Authenticating...</h1>
        <ToastHandler message={message} isError={status !== 200} />
    </div>
  )
}

export default AuthCallback;