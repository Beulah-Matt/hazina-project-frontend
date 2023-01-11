import { useEffect, useState } from "react";
import StorageList from "./StorageList";
// import NewStorageForm from "./NewStorageForm";
// import Search from "./Search";


function StoragePage() {
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
  const baseUrl = "https://storage-data.glitch.me/data"
  
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
    <main>
      {/* <NewStorageForm onAddStorage={handleAddStorage} /> */}
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      <StorageList storages={displayedStorages} />
    </main>
  );
}

export default StoragePage;

