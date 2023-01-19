import { useState } from "react";
//import { useSelector, useDispatch } from "react-redux";

function SingleStorageCard(allStorages) {
  //const { allStorages, total } = useSelector((state) => state.allStorages);

  //console.log("products", allStorages[1]);


  return (
    <div className="overflow-hidden shadow-lg m-5 bg-main-blue-color rounded-2xl">
      <div className="text-white h-full bg-gray-800">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold pt-8 px-2 text-center w-full">All Storages</h1>
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
                {
                  allStorages.map(item => 
                    <div className="flex p-1 pb-2 w-full">
                      <tr className="bg-gray-900 bg-opacity-30" key={item.id}>
                          <td className="text-center p-1">{item.id}</td>
                          <td className="text-center p-1 w-[35%]"><img src={item.photo_url} alt={item.name} className="text-center p-1" /></td>
                          <td className="text-center p-1"><span className="hidden md:inline">{item.name}</span><span className="md:hidden">{item.name}</span></td>
                          <td className="text-center p-1">{item.price}</td>
                          <td className="text-center p-1">{item.location}</td>
                        </tr>
                    </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
  );
}

export default SingleStorageCard;
