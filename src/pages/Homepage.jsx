import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { addToCart } from "../redux/reducers/storageSlice";
import StoragesCard from "../components/storagesCard";
import HomeDisplayCard from "../components/HomeDisplayCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const [storages, setStorages] = useState();
  let randomProduct = Math.random() * storages?.length - 4;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const cart = useSelector(selectCart) ?? []
  // console.log(state)
  const addItemToCard = (product) => dispatch(addToCart(product));

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://hazina-backend.up.railway.app/storage_units",
    })
      .then((res) => {
        setStorages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(storages)

    return (

        <div className="hom bg-gray-900">
            <Hero/>

            <div className='main bg-gray-900'>
              <h1 className='text-bold text-3xl pl-3 pt-10 text-yellow-50'>EXPLORE POPULAR SPACES</h1>
               <div className="flex flex-wrap ">
                    {
                    storages?.slice(0, 4).map((product) => <HomeDisplayCard key={
                            product.id
                        }
                        product={product}
                        addToCart={addItemToCard}/>)
                } </div>
            </div>
            <div className="my-2">
                <button type='button'
                className="hover:bg-custom-gold-color cursor-pointer inline-block bg-gray-200 rounded-full py-1 ml-4 text-sm font-semibold text-gray-700 mr-2 mb-4 px-6"
                    onClick={
                        () => {
                            navigate("/storages")
                        }
                }>Book a Space
                </button>
            </div>
        </div>
    )
}
