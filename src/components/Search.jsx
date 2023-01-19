import { addToCart, addToStorages } from "../redux/reducers/storageSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

function Search(  ) {
  

  const dispatch = useDispatch()
  const {storages, allStorages} = useSelector(state => state.storages)
  const addItemToCard = (product) => dispatch(addToCart(product))

<<<<<<< HEAD:src/Components/Search.jsx
  useEffect(() => {
    const filteredStorages = data.filter(data => {
      const lowerStorage = data.name.toLowerCase()
      return lowerStorage.includes(searchValue.toLowerCase())
      })
      setData(filteredStorages)
  }, []);
=======
  const handleSearchChange = (e) => {
    const { value } = e.target
    const lowerValue = value.toLowerCase()
    let filteredStorages = allStorages.filter(storage => {
      return storage.location.toLowerCase().includes(lowerValue)
    })
    dispatch(addToStorages(filteredStorages))
}
>>>>>>> 98ce9ec969a2ca92c96f7af1fad67498a4775422:src/components/Search.jsx


  return (
    <div className="flex w-screen items-center justify-center mt-5">
      <div className="w-full rounded-lg md:bg-gray-200 p-5 md:w-2/4">
        <div className="flex border-gray-200 border-[1px] border-rounded rounded-lg">
          <input
              type="text"
              placeholder="Search for a storage"
              id="searchInput"
              onChange={handleSearchChange}
            />
            <div className="flex w-10 border-[1px] items-center ml-[1px] justify-center rounded-tr-lg rounded-br-lg border-r border-gray-200 bg-white p-5">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-main-blue-color transition">
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
