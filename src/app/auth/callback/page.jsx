import React from 'react';
import checkUserAndCreate from '@/actions/checkUserAndCreate';
import ToastHandler from '@/components/global/ToastHandler';
import { redirect } from "next/navigation"

const AuthCallback = async () => {
  const { status, message } = await checkUserAndCreate();

  console.log("Auth callback status:",status)
  
  if (status == 200 || status == 201) {
    redirect("/");
  }
  else if(status==500) {
    redirect("/sign-in");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-6xl font-semibold font-funnel-display">Authenticating...</h1>
      <ToastHandler message={message} isError={status !== 200 || status!== 201} />
    </div>
  )
}
export default AuthCallback;