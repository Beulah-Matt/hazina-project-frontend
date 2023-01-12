import {
    HiTruck,
    HiArchive,
    //HiSearch,
    //HiLogout,
    HiUserCircle,
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
    // //const navigate = useNavigate;
  
    // // const handleSearch = () => {
    // //   navigate("/dashboard");
    // // };
  
    const [option, setOption] = useState({
      unit: 1,
    });
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
      <div
        id="header"
        className="bg-sky-800 text-yellow-50 flex content-center relative"
      >
        <div
          id="headerContainer"
          className="w-full max-w-5xl mt-5 mb-0 ml-[100px] mr-0"
        >
          <div id="headerList" className="flex gap-2.5">
            <div id="headerListItem" className="flex items-center gap-2.5">
              <HiTruck className="h-10 w-10" />
              <span>Deliveries</span>
            </div>
            <div id="headerListItem" className="flex items-center gap-2.5">
              <HiArchive className="h-10 w-10" />
              <span>Storage</span>
            </div>
            <div id="headerListItem" className="flex items-center gap-2.5">
              <HiUserCircle className="h-10 w-10" />
              <span>Account</span>
            </div>
          </div>
          <div
            id="headerSearch"
            className="h-[30px] bg-white border-solid border-[3px] border-yellow-200 flex items-center content-around p-2.5 px-0 rounded absolute bottom-[-25px] w-full max-w-5xl "
          >
            <div id="headerSearchItem" className="flex items-center gap-2.5">
              <HiOutlineArchive className="fill-gray-300 h-6 w-6" />
              <input
                type="text"
                placeholder="What are you Storing"
                id="headerSearchInput"
                className="border-none outline-none h-6"
              />
            </div>
            <div id="headerSearchItem" className="flex items-center gap-2.5">
              <HiCalendar className=" fill-gray-300 h-6 w-6" />
              <span
                onClick={() => setOpenDate(!openDate)}
                id="headerSearchText"
                className="text-gray-200 cursor-pointer"
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
                  id="date"
                  className="absolute top-[24px] z-[2]"
                />
              )}
            </div>
            <div id="headerSearchItem" className="flex items-center gap-2.5">
              <HiOutlineArchive className=" fill-gray-300 h-6 w-6" />
              <span
                id="headerSearchText"
                className="text-gray-200 cursor-pointer"
                onClick={() => setOpenOptions(!openOptions)}
              >
                {option.unit} unit
              </span>
              {openOptions && (
                <div
                  id="options"
                  className="absolute top-[24px] bg-white text-gray-400 rounded-md shadow-md "
                >
                  <div
                    id="optionItem"
                    className="w-[200px] flex content-between m-2.5"
                  >
                    <span className="optionText"> Unit </span>
                    <div
                      id="optionCounter"
                      className="flex items-center gap-2.5 text-xs text-black"
                    >
                      <button
                        disabled={option.unit <= 1}
                        onClick={() => handleOption("unit", "d")}
                        id="optionCounterBtn"
                        className="h-7 w-7 border-solid text-sky-600 cursor-pointer bg-white"
                      >
                        -
                      </button>
                      <span className="optionCounterNo">{option.unit}</span>
                      <button
                        disabled={option.unit <= 1}
                        onClick={() => handleOption("unit", "d")}
                        id="optionCounterBtn"
                        className="h-7 w-7 border-solid text-sky-600 cursor-pointer bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div id="headerSearchItem" className="flex items-center gap-2.5">
              <button
                id="headerBtn"
                className="bg-sky-800 text-yellow-50 font-medium border-none p-2.5 cursor-pointer h-6"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerDB;