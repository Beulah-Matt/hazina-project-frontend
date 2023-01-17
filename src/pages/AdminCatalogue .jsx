import { useEffect, useState } from "react";
import NewStorageForm from "../Components/NewStorageForm";
import Search from "../Components/Search";
import StorageList from "../Components/StorageList";
// import NewStorageForm from "./NewStorageForm";
// import Search from "./Search";


function Catalogue() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const demoData = [
    {
      "id": 1,
      "name": "Storage Bay",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    },
    {
      "id": 2,
      "name": "Storage Bay",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    },
    {
      "id": 3,
      "name": "Storage Bay",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    }
  ]
  
  const [storages, setStorages] = useState(demoData);
  const [data, setData] = useState(demoData)
  const baseUrl = "https://art-data.glitch.me/data"
  
  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((storagesArray) => {
        setStorages(storagesArray);
      });
  }, []);

  function handleAddStorage(newStorage) {
    const updatedStoragesArray = [...storages, newStorage];
    setStorages(updatedStoragesArray);
  }

  const displayedStorages = storages.filter((storage) => {
    return storage.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div id="catalogue" className="sm:py-[10vh] py-[8vh]">
      {/* <Search data={data} setData={setData} /> */}
      <NewStorageForm onAddStorage={handleAddStorage} />
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      <StorageList storages={displayedStorages} />
    </div>
  );
}

export default Catalogue;