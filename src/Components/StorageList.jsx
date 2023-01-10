import SingleStorageCard from "./SingleStorageCard";

function StorageList({ storages }) {
  return (
    <>
      <h1 className='text-bold text-3xl pl-3 pt-10 text-main-blue-color'>Our Catalogue</h1>
      <ul className="cards">
        {storages.map((storage) => {
          return <SingleStorageCard key={storage.id} storage={storage} />;
        })}
      </ul>
    </>
  );
}

export default StorageList;

