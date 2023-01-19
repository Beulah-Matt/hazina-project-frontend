import { useState, useEffect } from "react";
import Topbar from "./adminComponents/Topbar";

function AdminStorageList() {
  // const dispatch = useDispatch()
  // const {admins} = useSelector(state => state.storages)

  const [allStorages, setAllStorages] = useState([]);
  const baseUrl = "https://hazina-backend.up.railway.app/storage_units";

  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((items) => {
        setAllStorages(items);
      });
  }, []);

  console.log("allStorages", allStorages);

  return (
    <>
      <div className="bg-main-blue-color md:ml-[21%] md:mt-[5%] mt-[14%] capitalize">
      <Topbar />
        <h1 className="text-bold text-3xl pt-10 text-white pl-[25%]">
          Storage List
        </h1>
        <div className="m-5 overflow-hidden shadow-lg md:ml-5 bg-main-blue-color rounded-2xl">
          <table className="w-full md:text-base text-[12px] text-white my-[2rem]">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Storage Id</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Location</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Teams in Competition">Storage Type</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Played">Rate</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Won">Size</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {allStorages.map((item) => (
                <tr className="bg-gray-200 bg-opacity-30" key={item.id}>
                  <td className="text-center p-1">{item.id}</td>
                  <td className="text-center p-1">{item.location}</td>
                  <td className="text-center p-1">{item.storage_type}</td>
                  <td className="text-center p-1">{item.rental_rate}</td>
                  <td className="text-center p-1">{item.size}</td>
                  <td className="text-center p-1">{item.availability}</td>
                  <td className="text-center p-1">{item.availability}</td>
                  <td className="text-center p-1">
                    <div className="bg-custom-gold-color rounded-full text-red-900 hover:bg-white border-b-2 border-zinc-300 w-full transition duration-300 ease-in-out cursor-pointer px-2 py-1 hover:text-main-blue-color">
                      Remove Item
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

export default AdminStorageList;
