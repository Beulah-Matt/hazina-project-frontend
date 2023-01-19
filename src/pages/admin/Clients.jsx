import { useState, useEffect } from "react";

function Clients() {
  const [clients, setClients] = useState([]);
  const baseUrl = "https://hazina-backend.up.railway.app/customers";

  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((items) => {
        setClients(items);
      });
  }, []);

  return (
    <>
      <div className="bg-white  sm:ml-[25%] md:mt-[5%] mt-[14%] capitalize">
        <h1 className="text-bold text-3xl pt-10 text-main-blue-color pl-[25%]">
          User Profiles
        </h1>
        <div className="m-5 overflow-hidden shadow-lg md:ml-5 bg-main-blue-color rounded-2xl">
          <table className="w-full md:text-base text-[12px] text-white my-[2rem]">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">User Id</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Name</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Played">Email</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Won">Tel</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Drawn">Location</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((user) => (
                <tr className="bg-gray-200 bg-opacity-30" key={user.id}>
                  <td className="text-center p-1">{user.id}</td>
                  <td className="text-center p-1 w-[15%] h-[10%]">
                    <img
                      src={user.photo_url}
                      alt={user.name}
                      className="text-center p-1"
                    />
                  </td>
                  <td className="text-center p-1">
                    <span className="hidden md:inline">{user.name}</span>
                    <span className="md:hidden">{user.name}</span>
                  </td>
                  <td className="text-center p-1">+ {user.phone_number}</td>
                  <td className="text-center p-1">{user.location}</td>
                  <td className="text-center p-1">
                    <div className="bg-custom-gold-color rounded-full px-2 py-1 text-red-900 hover:bg-white border-b-2 border-zinc-300 w-full transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color">
                      Remove client
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Clients;
