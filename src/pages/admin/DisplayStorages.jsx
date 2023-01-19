import React from "react";
import Topbar from "./adminComponents/Topbar";
import AdminStorageList from "./AdminStorageList";

export default function DisplayStorages() {
  return (
    <>
      {/* <div className="md:ml-[5%] my-6 lg:w-[95%] xl:w-[80%] 2xl:w-[85%] bg-main-blue-color"> */}
      <div className="md:ml-[5%] my-6">
        <AdminStorageList />
      </div>
    </>
  );
}
