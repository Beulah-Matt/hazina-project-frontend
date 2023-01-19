import React from 'react';
//import '../App.css'

function HomeDisplayCard({product, addToCart}) {
    return (
        <>
        <div className="w-(1/3) p-2">
            <div className="max-w-sm h-[99%] rounded overflow-hidden shadow-lg">
              <div className="h-[69%]">
                <img className="w-full h-full" src={product.photo_url} alt={product.name} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {product.name}
                </div>
                <p className="text-gray-700 text-base">
                    {product.location}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="hover:bg-custom-gold-color cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{product.size}
                </span>
              </div>
            </div>
        </div>
        </>
    );
}
export default HomeDisplayCard;


