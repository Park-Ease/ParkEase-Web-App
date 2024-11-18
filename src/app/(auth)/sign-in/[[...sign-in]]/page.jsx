import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center md:justify-end items-center h-screen w-screen">
      {/* Background Banner */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/parkease-banner.png"
          layout="fill"
          objectFit="cover"
          alt="Parkease Logo"
        />
      </div>

      {/* SignIn Section */}
      <div className="w-full md:w-[40%] h-auto md:h-full  p-4 flex items-center justify-center">
        <SignIn
          appearance={{
            elements:
            {
              headerTitle: 'text-2xl font-funnel-display font-bold',
              headerSubtitle: 'text-md',
              formFieldLabel: 'text-[1rem] mt-4',
              formFieldInput: 'text-[1rem]',
              formButtonPrimary: 'bg-black text-white text-[1rem]',
              socialButtonsBlockButtonText: 'text-[0.9rem]',
              footerActionText: 'text-[0.9rem]',
              footerActionLink: 'text-[0.9rem]'
            }
          }} />
      </div>
    </div>
  );
}
