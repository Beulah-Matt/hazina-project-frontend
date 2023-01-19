import React from "react";
//import '../App.css'

function StoragesCard({ product, addToCart }) {

  return (
    <div
      className="max-w-sm overflow-hidden shadow-lg m-4 bg-main-blue-color rounded-2xl md:w-[24%]"
      key={product.id}>
      <img
        className="rounded w-full h-[350px]"
        src={product.photo_url}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="text-custom-gold-color font-bold text-xl mb-2">
          {product.name}
        </div>
        <p className="text-white text-base">{product.description}</p> <br />
        <p className="text-white text-base">{product.location}</p>
        <p className="text-white capitalize text-xs">{product.size}</p>
        <p className="text-white text-semibold text-custom-gold-color">
          Ksh. {product.rental_rate}
        </p>
      </div>
      <div className="px-6 py-2">
        <button
          className="border-[0px] rounded-full text-main-blue-color primary px-8 py-2 mb-2 text-sm font-semibold bg-custom-gold-color transition duration-300 ease-in-out"
          onClick={() => addToCart(product)}>
          BOOK STORAGE
        </button>
      </div>
    </div>
  );
}

export default StoragesCard;
