import { useState, useEffect } from "react";

function Admins() {
  // const dispatch = useDispatch()
  // const {admins} = useSelector(state => state.storages)

  const [admins, setAdmins] = useState([]);
  const baseUrl = "https://hazina-backend.up.railway.app/admins";

  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((items) => {
        setAdmins(items);
      });
  }, []);

  console.log("admins", admins);

  return (
    <>
      <div className="bg-white  sm:ml-[25%] md:mt-[5%] mt-[14%] capitalize">
        <h1 className="text-bold text-3xl pt-10 text-main-blue-color pl-[25%]">
          Admins
        </h1>
        <div className="m-5 overflow-hidden shadow-lg md:ml-5 bg-main-blue-color rounded-2xl">
          <table className="w-full md:text-base text-[12px] text-white my-[2rem]">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Admins Id</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Name</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Played">Email</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Won">Action</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((user) => (
                <tr className="bg-gray-200 bg-opacity-30" key={user.id}>
                  <td className="text-center p-1">{user.id}</td>
                  <td className="text-center p-1 w-[35%]">
                    <img
                      src={user.photo_url}
                      alt={user.name}
                      className="text-center p-1"
                    />
                  </td>
                  <td className="text-center p-1">
                    <span className="hidden md:inline">{user.email}</span>
                    <span className="md:hidden">{user.email}</span>
                  </td>
                  <td className="text-center p-1">
                    <div className="bg-custom-gold-color rounded-full text-red-900 hover:bg-white border-b-2 border-zinc-300 w-full transition duration-300 ease-in-out cursor-pointer px-2 py-1 hover:text-main-blue-color">
                      Remove Admin
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

export default Admins;
