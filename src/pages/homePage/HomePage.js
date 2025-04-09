import { useEffect, useRef, useState } from 'react';

function Home() {
  const [currentSlider, SetCurrentSlider] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    { id: 1, text: 'Slider 1', link: '/slide-1' },
    { id: 2, text: 'Slider 2', link: '/slide-2' },
    { id: 3, text: 'Slider 3', link: '/slide-3' },
  ];

  useEffect(() => {
    console.log('intervalRef', intervalRef);

    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        SetCurrentSlider((prev) => (prev + 1) % slides.length);
      }, 2000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen pt-20">
      {/*  slider discount */}
      <div className="w-full font-[sans-serif] flex">
        <div className="w-full justify-center text-center flex px-4 py-4 width-full border-t border-gray">
          <div>
            {slides.map((slide, index) => {
              return (
                <a
                  className={`text-lg font-medium px-4 py-2 rounded transition-all duration-300 ${
                    index === currentSlider ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                  key={slide.id}
                  href={slide.link}
                >
                  {slide.text}
                </a>
              );
            })}
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
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
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* short video about New soft sculpt is here */}
    </div>
  );
}

export default Home;
