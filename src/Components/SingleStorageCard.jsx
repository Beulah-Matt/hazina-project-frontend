import { useState } from "react";

function SingleStorageCard({ storage }) {
  const { name, image, price, description } = storage;

  const [isAvailable, setAvailable] = useState(true);

  function handleBooked() {
    setAvailable((isAvailable) => !isAvailable);
  }

  return (
    <div className="max-w-sm overflow-hidden shadow-lg m-5 bg-main-blue-color rounded-2xl">
      <img className="rounded w-full h-[350px]" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="text-custom-gold-color font-bold text-xl mb-2">{name}</div>
        <p className="text-white text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="border-[0px] rounded-full text-main-blue-color primary px-8 py-2 mb-2 text-sm font-semibold bg-custom-gold-color" onClick={handleBooked}>
          BOOK STORAGE
        </button>
      </div>
    </div>
  );
}

export default SingleStorageCard;
