import "./customerdb.css"
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
      className="header"
    >
      <div       
        className="headerContainer"
      >
        <div  className="headerList">
          <div  className="headerListItem">
            <HiTruck className="h-14 w-14" />
            <span>Deliveries</span>
          </div>
          <div  className="headerListItem">
            <HiArchive className="h-14 w-14" />
            <span>Storage</span>
          </div>
          <div  className="headerListItem">
            <HiUserCircle className="h-14 w-14" />
            <span>Account</span>
          </div>
        </div>
        <div
          className="headerSearch"
        >
          <div  className="headerSearchItem">
            <HiOutlineArchive className="fill-gray-300 h-6 w-6" />
            <input
              type="text"
              placeholder="Type of Storage"
              className="headerSearchInput"
            />
          </div>
          <div  className="headerSearchItem">
            <HiCalendar className=" fill-gray-300 h-6 w-6" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
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
                className="date"
              />
            )}
          </div>
          <div  className="headerSearchItem">
            <HiOutlineArchive className=" fill-gray-300 h-6 w-6" />
            <span
              className="headerSearchText"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {option.unit} Unit(s)
            </span>
            {openOptions && (
              <div
                className="options"
              >
                <div
                  className="optionItem"
                >
                  <span className="optionText"> Unit </span>
                  <div
                    className="optionCounter"
                  >
                <button className="optionCounterBtn"
                disabled={option.unit <= 1}
                onClick={()=> handleOption("unit", "d")}
                >
                  -
                </button>
                <span>{option.unit}</span>
                <button 
                className="optionCounterBtn"
                onClick={()=> handleOption("unit", "i")}
                >
                  +
                </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div  className="headerSearchItem">
            <button
              className="headerBtn"
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
