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
//import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const CustomerDB = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  //const navigate = useNavigate;

  // const handleSearch = () => {
  //   navigate("/dashboard");
  // };

  const [option, setOption] = useState({
    unit: 1
  })
  const [openOptions, setOpenOptions] = useState(false);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

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
      <div className="h-[30px] bg-white border-4 border-gray-400 border-solid flex items-center content-around p-[16px] px-0 rounded absolute bottom-[-25px] w-full max-w-5xl ">
        <div className="flex items-center gap-[10px]">
          <HiArchive className="h-10 w-10 fill-gray-300" />
          <input
            className="text-gray-300 cursor-pointer outline-0"
            type="text"
            placeholder="What are you Storing"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <HiCalendar className="h-10 w-10 fill-gray-300" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="text-gray-400 cursor-pointer  "
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-[50px] z-[2]"
            />
          )}
        </div>
        <div className="flex items-center gap-[10px]">
          <HiOutlineArchive className="h-10 w-10 fill-gray-300" />
          <span 
          onClick={() => setOpenOptions(!openOptions)}
          className="text-gray-300 cursor-pointer">Units</span>
          <div
            className="z-[2] absolute top-[50px] bg-white fill-gray-300 rounded
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);"
          >
            <div className="w-[200px] flex content-between m-2.5">
            <div className="flex items-center gap-2.5 text-xs text-black ">
                <button className="w-[30px] h-[30px] border-solid cursor-pointer bg-white text-black"
                disabled={option.unit <= 1}
                onClick={()=> handleOption("unit", "d")}
                >
                  -
                </button>
                <span>{option.unit}</span>
                <button 
                className="w-[30px] h-[30px] border-solid cursor-pointer bg-white text-black"
                onClick={()=> handleOption("unit", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center gap-[10px]">
        <button
          className="bg-gradient-to-r from-blue-500 to-sky-800 text-white font-medium p-2.5 rounded-md cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default CustomerDB;

