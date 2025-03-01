import ImgNotfound from '../../images/ImgNotfound.png';

function FooterComponent() {
  return (
    <div className="pl-3 pr-3 font-montserrat">
      <section>
        <h1 className="text-xl font-bold uppercase pt-3 pb-3">Workout Clothes & Gym Clothes</h1>
        <p className="font-[sans-serif] text-sm text-gray-600">
          Workout Clothes designed to help you become your personal best. Because when it comes to performing at your
          max, there should be no obstacles – least of all your workout clothes.
        </p>
        <p className="font-[sans-serif] text-sm text-gray-600 pt-3">
          Functional and comfortable, we create workout clothing you'll sweat in. Since 2012, we've designed and created
          the workout clothes we want to wear, because training and its people are what we know best.
        </p>
        <h2 className="text-xl font-bold uppercase pt-3">Gym Clothes built in the weight room</h2>
        <p className="text-sm text-gray-600 pt-3 font-[sans-serif]">
          Our legacy was built in the weight room. Gymshark was founded with a love for training and that passion
          continues into all our gym clothes today. You'll find the latest innovation in gym clothing and accessories to
          help you perform at your best and recover in style.
        </p>
        <p className="text-sm text-gray-600 pt-3 font-[sans-serif]">
          Our
          <a className="text-sm font-bold" href="https://row.gymshark.com/pages/shop-men">
            {' '}
            Men's Workout Clothes{' '}
          </a>
          feature sweat wicking
          <a
            className="text-sm font-bold font-[sans-serif]"
            href="https://row.gymshark.com/collections/t-shirts-tops/mens"
          >
            {' '}
            workout shirts{' '}
          </a>
          and tank tops, gym shorts, sweatpants and more. Whilst our
          <a
            className="text-sm font-bold font-[sans-serif]"
            href="https://row.gymshark.com/collections/leggings/womens"
          >
            {' '}
            Women's Workout Clothes{' '}
          </a>
          are designed for a range of movements and feature sophisticated seamless technology, clever contouring and
          durable, quick-dry sweat wicking fabrics on leggings, sports bras and more.
        </p>
        <p className="text-sm text-gray-600 pt-3 font-[sans-serif]">
          An obsession with lifting is what started this brand, and we haven't forgotten our roots. Our Women's and
          <a
            href="https://row.gymshark.com/collections/bodybuilding/mens"
            className="font-[sans-serif] text-sm font-bold"
          >
            {' '}
            Men's Bodybuilding clothes{' '}
          </a>
          feature classic styles, with modern cuts and innovative fabrics to help you raise the bar.
        </p>
        <h3 className=" text-xl uppercase font-bold pt-3">Activewear & Athleisure</h3>
        <p className="text-gray-600 font-[sans-serif]">
          We create the tools that help everyone become their personal best – no matter the sport. Our range of
          Activewear is designed to give you the support you need to perform at your best, whether that's on the track,
          on the gym floor or in the studio.
        </p>
        <p className="text-gray-600 font-[sans-serif] pt-3">
          Whilst our men's and
          <a
            className="font-bold font-[sans-serif]  text-sm"
            href="https://row.gymshark.com/collections/athleisure/womens"
          >
            {' '}
            women's athleisure{' '}
          </a>
          elevates your workouts with the most comfortable gym hoodies, the most supportive gym leggings and the most
          innovatively designed workout shirts that are made to move when it matters most.
        </p>
        <h4 className="text-xl font-bold uppercase pt-3">More than your best workout clothing</h4>
        <p className="text-gray-600 font-[sans-serif] pt-3">
          The Gymshark community is devoted to unlocking potential through conditioning and the things we do today to
          prepare for tomorrow. It's every setback, step-up and milestone along the way. Game-changing workout clothing,
          running clothes and loungewear essentials. It's not just in the designs, it's in the people who wear them.
        </p>
        <p className="text-gray-600 font-[sans-serif] pt-3">
          Looking for more inspiration? Discover our latest tips, stories, and training insights
          <a href="https://row.gymshark.com/blog" className="font-bold font-[sans-serif] text-sm">
            {' '}
            Gymshark Central{' '}
          </a>
          your next step towards becoming your personal best.
        </p>
      </section>
      <div className="flex justify-center items-center min-h-20">
        <a className="flex text-sm font-montserrat items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          <i>Back to top</i>
        </a>
      </div>
      <div className="w-full border-t border-gray">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 pt-10">
            <div>
              <h3 className="font-bold uppercase mb-4">Help</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Make A Return
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Submit a Fake
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-4">My Account</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Log in
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-4">Page</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Gymshark Central
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Student Discount
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="font-[sans-serif] text-sm hover:text-gray-500">
                    Factory List
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold uppercase text-xl">more about gymshark</h2>
              <div className="flex gap-3">
                <a className="text-center">
                  <img className="w-30 h-30" src={ImgNotfound} />
                  <i className="text-sm uppercase font-bold">Blog</i>
                </a>
                <a className="text-center">
                  <img className="w-30 h-30" src={ImgNotfound} />
                  <i className="text-sm uppercase font-bold">Email sign up</i>
                </a>

                <a className="text-center">
                  <img className="w-30 h-30" src={ImgNotfound} />
                  <i className="text-sm uppercase font-bold">Training gymshark</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
