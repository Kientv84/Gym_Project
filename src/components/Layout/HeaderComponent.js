import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <div className="font-[sans-serif]">
      <div className="fixed top-0 left-0 right-0 w-full gap-20 min-h-20 flex items-center justify-center">
        <a className="fixed left-8 flex items-center cusor-pointer" href="http://localhost:3001/">
          <img src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg" />
        </a>
        <div className="flex gap-3">
          <span className="px-3 py-3 font-bold text-md hover:underline">MEN</span>
          <span className="px-3 py-3 font-bold text-md hover:underline">WOMAN</span>
          <span className="px-3 py-3 font-bold text-md hover:underline">ACCESORIES</span>
        </div>
        <div className=" flex gap-3">
          <input
            className="px-4 py-2 w-full  placeholder-gray-500 hover:bg-gray-100"
            placeholder="What are you looking for today"
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          />
          <button className="px-1 py-1">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-6 fixed right-12">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a className=" cursor-pointer" href="http://localhost:3001/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
