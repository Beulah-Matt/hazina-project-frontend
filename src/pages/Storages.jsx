import {useState, useEffect} from 'react'
import { addToCart, addToAllStorages, addToStorages, removeFromCart } from "../redux/reducers/storageSlice";
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios'
import StoragesCard from "../components/storagesCard";

import Search from "../components/Search";
// import { decrement, increment } from './redux/reducers/counterSlice'

export default function Storages() {

    const dispatch = useDispatch()
    const {storages, allStorages, cart} = useSelector(state => state.storages)
    // const cart = useSelector(selectCart) ?? []
    // console.log(state)
    const addItemToCart = (product) => {
        const cartProduct = cart.filter(item => product.id === item.id)
        if (cartProduct.length) {
            const existingProduct = cartProduct[0]
            dispatch(removeFromCart(product))
            const newProduct = {...existingProduct, quantity: existingProduct.quantity + 1}
            dispatch(addToCart(newProduct))
        } else {
            const newProduct = {...product, quantity: 1}
            dispatch(addToCart(newProduct))
        }
    }
    const [selectedFilter, setSelectedFilter] = useState("")

    const categories = {
        Small: 1,
        Medium: 2,
        Large: 3
    }

    const handleSelectChange = (e) => {
        const { value } = e.target
        setSelectedFilter(value)
        let filteredStorages = allStorages.filter(product => {
            return product.size.toLowerCase() === value.toLowerCase()
        })
        if (value === "All") {
            filteredStorages = allStorages
        }
        console.log('filteredStorages', allStorages)
        dispatch(addToStorages(filteredStorages))
    }

    useEffect(() => {
        axios({method: 'GET', url: 'http://localhost:3000//storage_units'}).then((res) => {
            dispatch(addToStorages(res.data))
            dispatch(addToAllStorages(res.data))
        }).catch(err => console.log(err))
    }, [])


    return (
        <>
        <div id="catalogue" className="sm:py-[10vh] py-[8vh] bg-gray-900">
          {/* <Search data={data} setData={setData} /> */}
          {/* <NewStorageForm onAddStorage={handleAddStorage} /> */}
          {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
          <h1 className='text-bold text-3xl pl-3 pt-10 text-main-blue-color'>Our Catalogue</h1>
          <Search  />
          <div className="my-2 px-5">
              <select
              className="bg-custom-gold-color my-2 px-5 py-3 text-main-blue-color"
                name="categories"
                id="categories"
                value={selectedFilter}
                onChange={handleSelectChange}>
                  <option value="All">All</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Warehouse">Warehouse</option>
              </select>
          </div>
              <div className="cards w-full flex flex-wrap border-gray-100 border-2 justify-center">
            {
              storages.map((product) => <StoragesCard key={
                      product.id
                  }
                  product={product}
                  addToCart={addItemToCart}/>)
          }
          </div>
        </div>
    </>
    )
}

