"use client";

import React from 'react';


const VideoCard = ({ video }) => {

    const handleVideoClick = (url) => {
      window.open(url, '_blank');
    };

    const formatFileSize = (size) => {
        if (size < 1024) return `${size} bytes`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    };

  return (
    <div className="relative max-w-xs border border-solid border-[#fcd904] rounded-lg transition-all duration-500 hover:shadow-lg">
      {/* Video Thumbnail */}
      <div className="block overflow-hidden rounded-t-lg">
        <video className="w-full h-48 object-cover" controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Video Info */}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-2 transition-all duration-500">
          {video.title || 'Untitled Video'}
        </h4>
        <p className="text-md font-normal text-gray-400">
          Last modified: {new Date(video.lastModified).toLocaleDateString()}
        </p>
        <p className="text-md font-normal text-gray-400 mb-5">
          Size: {formatFileSize(video.size)}
        </p>
        <button onClick={() => handleVideoClick(video.url)} className="bg-[#fcd904] shadow-sm rounded-full py-2 px-5 text-md text-black font-semibold">
          Open Video
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
