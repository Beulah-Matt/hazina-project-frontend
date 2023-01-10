import {
  HiTruck,
  HiArchive,
  //HiSearch,
  //HiLogout,
  //HiUserCircle,
  HiOutlineArchive,
  HiCalendar,
} from "react-icons/hi";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
//import { format } from "date-fns";

const CustomerDB = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="bg-sky-800 text-yellow-50 flex justify-center relative">
      <div className="w-100 max-w-5xl mt-[20px] mb-[100px]">
        <div className="flex gap-[40px] mb-[50px]">
          <div className="flex items-center gap-[10px]">
            <HiTruck className="h-10 w-10" />
            <span className="text-2xl">Deliveries</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <HiArchive className="h-10 w-10" />
            <span className="text-2xl">Storage</span>
          </div>
        </div>
      </div>
      <div className="h-[30px] bg-white border-4 border-white flex items-center content-around p-[16px] px-0 rounded absolute bottom-[-25px] w-full max-w-5xl ">
        <div className="flex items-center gap-[10px]">
          <HiArchive className="h-10 w-10 fill-gray-300" />
          <input
            className="text-gray-300 cursor-pointer"
            type="text"
            placeholder="What are you Storing"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <HiCalendar className="h-10 w-10 fill-gray-300" />
          <span className="text-gray-300 cursor-pointer">
            From date to date"
          </span>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-[50px]"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <HiOutlineArchive className="h-10 w-10 fill-gray-300" />
          <span className="text-gray-300 cursor-pointer">Units</span>
          <div
            className="z-2 absolute top-[50px] bg-white fill-gray-300 rounded-md
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);"
          >
            <div className="w-[200px] flex content-between m-2.5">
              <div className="flex items-center gap-2.5 text-xs text-black ">
                <button className="w-[30px] h-[30px] border-solid  ">-</button>
                <span>1</span>
                <button className="w-[30px] h-[30px] border-solid cursor-pointer bg-white ">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDB;

// className="h-[30px] bg-white border-4 border-white flex items-center content-around p-[16px] rounded absolute bottom-[-25px] w-full max-w-5xl"
