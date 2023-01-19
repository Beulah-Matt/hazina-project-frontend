import SingleStorageCard from "./SingleStorageCard";
import { useSelector, useDispatch } from "react-redux";

//const products = [
//    {
//      "id": 1,
//      "name": "Venue Arena",
//      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
//      "price": "434",
//      "location": "this is the description"
//    },
//    {
//      "id": 2,
//      "name": "Venue Arena 2",
//      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
//      "price": "434",
//      "location": "this is the description"
//    },
//    {
//      "id": 3,
//      "name": "Venue Arena 3",
//      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
//      "price": "434",
//      "location": "this is the description"
//    }
//  ]

function CardList (){
  const { allStorages, total } = useSelector((state) => state.storages);
  console.log("allStorages", allStorages[1]);

  return 
    <div className="bg-white pl-3 pt-10">
      <div className="m-5 overflow-hidden shadow-lg ml-5 bg-blue-500 rounded-2xl">
      
        <table className="w-full text-base">
          <SingleStorageCard allStorages={allStorages} />
        </table>
      </div>
    </div>
};

export default CardList