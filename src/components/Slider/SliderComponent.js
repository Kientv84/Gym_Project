import { useEffect, useRef, useState } from 'react';

function Slider() {
  const [currentSlider, SetCurrentSlider] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const slideDuration = 3000;

  const slides = [
    { id: 1, text: '15% Student Discount ‍🎓', link: '/slide-1' },
    { id: 2, text: 'Free standard shipping over $75 🚚 ', link: '/slide-2' },
    { id: 3, text: 'REFER A FRIEND TO EARN $10 OFF YOUR NEXT PURCHASE OF $50+ 👭 ', link: '/slide-3' },
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        SetCurrentSlider((prev) => (prev + 1) % slides.length);
      }, slideDuration);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, slideDuration]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full font-[sans-serif] flex h-10 ">
      <div className=" bg-gray-200 w-full overflow-hidden items-center justify-center text-center flex px-4 py-4 width-full border-t border-gray-400 relative">
        <div className="h-full flex items-center justify-center">
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`absolute lowercase text-md font-bold font-[sans-serif] px-4 py-2 rounded duration-700 ease-in-out 
            ${index === currentSlider ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 '}
            text-black h-full flex items-center`}
            >
              {slide.text}
            </a>
          ))}
        </div>
        {/* button play/ pause*/}
        <button className="fixed right-12 px-2 py-2" onClick={togglePlay}>
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Slider;
