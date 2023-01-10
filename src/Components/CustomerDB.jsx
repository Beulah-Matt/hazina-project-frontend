import {
  HiTruck,
  HiArchive,
  HiSearch,
  HiLogout,
  HiOutlineUser,
  HiCalendar,
} from "react-icons/hi";

const CustomerDB = () => {
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
        <div>
            <HiArchive />
            <input 
            type="text"
            placeholder="What are you Storing"
            />
        </div>
        <div>
            <HiCalendar />
            <input 
            type="text"
            placeholder="from date to date"
            />
        </div>
        <div>
            <HiCalendar />
            <input 
            type="text"
            placeholder="units"
            />
        </div>
      </div>
    </div>
  );
};

export default CustomerDB;

// className="h-[30px] bg-white border-4 border-white flex items-center content-around p-[16px] rounded absolute bottom-[-25px] w-full max-w-5xl"
