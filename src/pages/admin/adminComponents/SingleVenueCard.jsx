import { useState } from "react";

function SingleVenueCard({ products }) {
  const { name, photo_url, price, location } = products;

  const [isAvailable, setAvailable] = useState(true);

  function handleBooked() {
    setAvailable((isAvailable) => !isAvailable);
  }

  return (
    <div className="max-w-sm overflow-hidden shadow-lg m-5 bg-main-blue-color rounded-2xl">
      <div className="text-white h-full bg-gray-800">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold pt-8 px-2 text-center w-full">Tailwind CSS Premier League Table #1</h1>
        <div className="py-8">
          <div className="max-w-screen-xl px-2 mx-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-1 pb-2">&nbsp;</th>
                  <th className="text-left p-1 pb-2"><abbr title="Teams in Competition">IMAGE</abbr></th>
                  <th className="text-center p-1 pb-2"><abbr title="Games Played">NAME</abbr></th>
                  <th className="text-center p-1 pb-2"><abbr title="Games Won">PRICE</abbr></th>
                  <th className="text-center p-1 pb-2"><abbr title="Games Drawn">LOCATION</abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900 bg-opacity-30">
                  <td className="text-left p-1">1</td>
                  <td className="text-center p-1"><img src={photo_url} alt={name} className="text-center p-1" /></td>
                  <td className="text-left p-1"><span className="hidden md:inline">Manchester City</span><span className="md:hidden">Man City</span></td>
                  <td className="text-center p-1">{price}</td>
                  <td className="text-center p-1">{location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
  );
}

export default SingleVenueCard;
