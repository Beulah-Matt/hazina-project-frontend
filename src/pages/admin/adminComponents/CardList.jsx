import SingleVenueCard from "./SingleVenueCard.jsx";

const products = [
    {
      "id": 1,
      "name": "Venue Arena",
      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "location": "this is the description"
    },
    {
      "id": 2,
      "name": "Venue Arena 2",
      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "location": "this is the description"
    },
    {
      "id": 3,
      "name": "Venue Arena 3",
      "photo_url": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "location": "this is the description"
    }
  ]

const CardList = () => (
    <div className="bg-white">
    <h1 className='text-bold text-3xl pl-3 pt-10 text-blue-500'>All Storages</h1>
    <div className="m-5 overflow-hidden shadow-lg ml-5 bg-blue-500 rounded-2xl">
    <table className="w-full text-base">
      <thead>
        <tr className="border-b border-gray-600">
          <th className="text-center p-1 pb-2">&nbsp;</th>
          <th className="text-center p-1 pb-2"><abbr title="Teams in Competition">IMAGE</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Played">NAME</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Won">PRICE</abbr></th>
          <th className="text-center p-1 pb-2"><abbr title="Games Drawn">LOCATION</abbr></th>
        </tr>
      </thead>
      <tbody>
      {products.map((product) => {
        return (
          <tr className="bg-gray-900 bg-opacity-30" key={product.id}>
            <td className="text-center p-1">{product.id}</td>
            <td className="text-center p-1 w-[35%]"><img src={product.photo_url} alt={product.name} className="text-center p-1" /></td>
            <td className="text-center p-1"><span className="hidden md:inline">{product.name}</span><span className="md:hidden">{product.name}</span></td>
            <td className="text-center p-1">{product.price}</td>
            <td className="text-center p-1">{product.location}</td>
          </tr>
          )
      })}
      </tbody>
      </table>
    </div>
  </div>
);

export default CardList