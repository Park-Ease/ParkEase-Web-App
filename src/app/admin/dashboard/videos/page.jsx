import React from 'react'

const AdminVideosPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black/90 px-16">
      <h1 className="text-[#fcd904] text-5xl text-center font-funnel-sans font-bold mt-10">
        Videos
      </h1>
      <p className="w-full h-full text-white text-2xl font-funnel-sans font-bold mt-10">
        No videos found
      </p>
    </div>
  );
}

export default AdminVideosPage