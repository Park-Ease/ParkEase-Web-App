import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen bg-[#fcd904]/80">
      {/* Banner Section */}
      <div className="relative w-full md:w-[60%] h-[40%] md:h-full bg-black/90">
        <Image
          src="/parkease-adcard.png"
          className='object-cover object-center'
          fill
          alt="Parkease Logo"
        />
      </div>

      {/* SignUp Form Section */}
      <div className="w-full md:w-[40%] h-[60%] md:h-full flex items-center justify-center p-4">
        <SignUp 
        appearance={{
          elements:
          {
            headerTitle: 'text-2xl font-funnel-display font-bold',
            headerSubtitle: 'text-md',
            formFieldLabel: 'text-[1rem]',
            formFieldInput: 'text-[1rem]',
            formButtonPrimary: 'bg-black text-white text-[1rem]',
            socialButtonsBlockButtonText: 'text-[0.9rem]',
            footerActionText: 'text-[0.9rem]',
            footerActionLink: 'text-[0.9rem]'
          }
        }}
         />
      </div>
    </div>
  );
}
