import { useState } from "react";
//import '../../css/admin/pages.css'

function NewProduct() {
  const [photo_url, setImage] = useState();
  const [name, setName] = useState();
  const [spaceLocation, setSpaceLocation] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [size, setSizes] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();

  const Product = {
    photo_url,
    name,
    price,
    size,
    spaceLocation,
    quantity,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://localhost:3000/storage_units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    }).then((response) => response.json());
  }

  return (
    <form
      className="md:ml-[35%] md:mr-[15%] md:mx-[1%] mx-[5%] md:mt-[15%] mt-[45%] mb-20"
      onSubmit={handleSubmit}>
      <h5 className="underline">Fill Storage Details</h5>
      <div className="relative z-0 w-full my-6 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Storage name
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="number"
          name="price"
          id="Price"
          autoComplete="on"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          for="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Price
        </label>
      </div>

      <h5 className="underline">Select Sizes</h5>
      <div className="text-main-blue-color sizes">
        <input type="checkbox" id="small" name="small" value="small" />
        <label for="small">Small</label>
        <input type="checkbox" id="small" name="small" value="small" />
        <label for="medium">Medium</label>
        <input type="checkbox" id="small" name="small" value="small" />
        <label for="large">Large</label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6 mt-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="spaceLocation"
            id="spaceLocation"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Storage location
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Quantity
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
}

export default NewProduct;
