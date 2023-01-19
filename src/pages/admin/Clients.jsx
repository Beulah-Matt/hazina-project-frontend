import React from 'react'

function Clients() {
  return (
    <>
    <div className="bg-white  ml-[25%] mt-[5%]">
    <h1 className="text-bold text-3xl pt-10 text-blue-500 pl-[25%]">Users</h1>
    <div className="m-5 overflow-hidden shadow-lg ml-5 bg-blue-500 rounded-2xl">
    <table className="w-full text-base">
      <thead>
        <tr className="border-b border-gray-600">
          <th className="text-center p-1 pb-2"><abbr title="Teams in Competition">User Id</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Teams in Competition">Name</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Played">Email</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Won">Address</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Drawn">Location</abbr></th>
        </tr>
      </thead>
      <tbody>
          <tr className="bg-gray-900 bg-opacity-30" key={"user.id"}>
            <td className="text-center p-1">{"user.id"}</td>
            <td className="text-center p-1 w-[35%]"><img src={"user.photo_url"} alt={"user.name"} className="text-center p-1" /></td>
            <td className="text-center p-1"><span className="hidden md:inline">{"user.name"}</span><span className="md:hidden">{"user.name"}</span></td>
            <td className="text-center p-1">{"user.address"}</td>
            <td className="text-center p-1">{"user.location"}</td>
            <td className="text-center p-1"><div className="bg-custom-gold-color rounded-full text-red-900 hover:bg-white cursor-pointer">remove user</div></td>
          </tr>
      </tbody>
      </table>
    </div>
  </div>
  </>
  )
}

export default Clients