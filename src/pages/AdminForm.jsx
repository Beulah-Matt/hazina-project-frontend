import React, {useState} from "react";
import StorageList from "../Components/StorageList";

function AdminForm( {data, setData} ) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: ""
  })

  // const [formData, setFormData] = useState(data)

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(data);

    setData(
      [
      formData,
      ...data
    ]
    )
  }
  
  function handleChange(event) {
    const key = event.target.id
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    
    setFormData({
      ...formData, 
      [key]: value
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">

          <input
            type="text"
            id="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />

          <input
            type="text"
            id="description"
            placeholder="Description"
            value={data.description}
            onChange={handleChange}
          />

          <input
            type="number"
            id="price"
            value={data.price}
            placeholder="Price"
            step="0.01"
            onChange={handleChange}
          />

          <input
            type="text"
            id="image"
            value={data.image}
            placeholder="Image url"
            onChange={handleChange}
          />
        <button gap={1} value={data.id} type="submit" className="add-store-button">
          Add Storage
        </button>
        </div>
      </form>
      <StorageList data={data} setData={setData}/>
    </div>

  );
}

export default AdminForm;
