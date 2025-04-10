import React from 'react';

function ShortVideo({ src, poster, autoPlay, loop, muted, controls, width, className, text }) {
  return (
    <div className="relative  w-full ">
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        className={`rounded-none shadow-md ${className}`}
        style={{ width }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ShortVideo;
