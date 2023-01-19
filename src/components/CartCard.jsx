import React from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  decrementCartItem,
  incrementCartItem,
} from "../redux/reducers/storageSlice";
import { useSelector, useDispatch } from "react-redux";

function CartCard({ product }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.storages);

  const addItemToCart = (product) => {
    dispatch(incrementCartItem(product));
  };

  const removeItemFromCart = (product) => {
    dispatch(decrementCartItem(product));
  };

  return (
    <>
    <div
      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
      key={product.id}>
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={product.photo_url} alt={product.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <span className="text-red-500 text-xs">{product.size}</span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs py-2"
            type="button"
            onClick={() => dispatch(removeFromCart(product))}>
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
      <button
          className="bg-transparent border-transparent"
          onClick={() => removeItemFromCart(product)}>
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        </button>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={product.quantity}
        />

        <button
          className="bg-transparent border-transparent"
          onClick={() => addItemToCart(product)}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {product.rental_rate}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {product.rental_rate * product.quantity}
      </span>
    </div>
    </>
  );
}

export default CartCard;
