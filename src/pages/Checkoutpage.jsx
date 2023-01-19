import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import '../css/checkoutpage.css';

const CheckoutPage = () => {
  const { cart, total } = useSelector((state) => state.storages);
  console.log("cart", cart[1]);
  return (
    <>
      <div className="container p-12 mx-auto mt-12">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Your Bookings
            </h2>
            <form
              className="justify-center w-full mx-auto"
              method="post"
              action>
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="city"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500">
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span className="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    className="block mb-3 text-sm font-semibold text-gray-500">
                    {" "}
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"></textarea>
                </div>
                <div className="mt-4">
                  <button className="w-full px-6 py-2 text-white bg-main-blue-color hover:bg-blue-400">
                    <Link to="/thankyou">Process</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-2 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Booking Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <h2 className="text-xl font-bold">Location</h2>
                      <table className="md:w-[36vw] w-[85vw] text-base border-main-blue-color border-2">
                        <thead>
                          <tr className="flex justify-between text-center p-1 border-b border-gray-600">
                            <th className="text-center py-2">
                              <abbr title="Games Won">Location</abbr>
                            </th>
                            <th className="text-center py-2">
                              <abbr title="Games Drawn">Rate</abbr>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="w-full">
                          {cart.map((item) => (
                            <div className="flex p-1 pb-2 w-full">
                              <tr
                                className="bg-gray-900 bg-opacity-30 py-1 w-full"
                                key={"user.id"}>
                                <td className="p-1 pb-2 w-full">
                                  {item.location}
                                </td>
                                <td className="p-1 pb-2 w-full">
                                  {item.rental_rate}
                                </td>
                              </tr>
                            </div>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2"><span>Ksh. {total}</span></span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2"><span>Ksh. {total}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
