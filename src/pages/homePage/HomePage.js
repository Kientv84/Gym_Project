import CardImage from '../../components/CardImageComponent/CardImageComponent';
import ShortVideo from '../../components/ShortVideoComponent/ShortVideoComponent';
import Slider from '../../components/Slider/SliderComponent';

function Home() {
  return (
    <div className="pt-20 h-full">
      {/*  slider discount */}
      <section className="w-full">
        <Slider />
      </section>

      {/* short video about New soft sculpt is here */}
      <section className="relative h-full">
        <ShortVideo
          autoPlay
          loop
          muted
          playsInline
          poster="https://assets.gymshark.com/wl6q2in9o7k3/34KwjL1IhggjZ7K9iFmTxN/81fd6455aeeab4c68fd26cc22d775d7a/image-1920x720__1_.jpg"
          src="https://assets.gymshark.com/wl6q2in9o7k3/6RPjIkERo5UAfV66YGavus/346c0806aa0659042c045ef8d55a4ff3/SOFT_SCULPT__WEB_BANNER.mp4"
        />
        {/* Overlay content */}
        <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center px-10 md:px-20 bg-gradient-to-r ">
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
              New Soft
              <br />
              Sculpt is here
            </h1>
            <p className="text-md md:text-lg">
              Soft, stretchy, barely there fabrics and subtle contouring in all the places you want it...you’ll wear
              this everywhere.
            </p>
            <a
              href="https://www.gymshark.com/collections/new-releases/womens?banner_id=hp-softsculpt"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/*Get the Look */}
      <section className="py-6 bg-gray-100">
        <div className="text-4xl md:text-5xl w-full">
          <h2 className="text-xl md:text-2xl py-3 font-bold font-[sans-serif] uppercase md:px-20">Get the Look</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Các item sẽ được map vào đây */}
            <li className="bg-white rounded shadow">
              <CardImage
                url="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F66Rt1ZPvdpW1TJD48nLYYq%2Fb8e0ab3d0d0f2294691d74f6a037d3ed%2Fgymsharkwomen_1743618604_3602056361550750680.jpg&w=828&q=90"
                name="@isabelllewis"
              />
            </li>
            <li className="bg-white rounded shadow p-4">
              <CardImage
                url="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F1W1FdpFZSbT2IZtNSWv1el%2F2503f5a783fef6c3b62ae7bf29aab000%2FHeadless_Cards_-_22487539.png&w=828&q=90"
                name="@whatemwore"
              />
            </li>
            <li className="bg-white rounded shadow p-4">
              <CardImage
                url="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F266aVlUDuTBRhPRwI6R3Tz%2F90fd069bf8b9a679268e1dc678833835%2FHeadless_Cards_-_22559642.png&w=828&q=90"
                name="@erikaholguinn"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
