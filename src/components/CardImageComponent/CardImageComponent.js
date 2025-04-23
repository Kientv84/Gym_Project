function CardImage({ url, name, ig_url }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded">
      <img className="w-full h-full object-cover" src={url} alt={name} />
      <div className="absolute bottom-0 left-0 w-full px-4 py-3 flex flex-col items-start">
        <h1 className="text-2xl md:text-3xl text-white uppercase font-montserrat font-bold">{name}</h1>
        <a
          href={ig_url}
          className="mt-2 text-xl md:text-2xl inline-block bg-gray-300 text-black font-montserrat px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          👁️ GET THE LOOK
        </a>
      </div>
    </div>
  );
}

export default CardImage;
