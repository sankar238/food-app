import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestaurants,setListOfRestaurants] = useState(null);
   const [filteredRestaurants,setFilteredRestaurants]=useState(null)
   const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=> {
        const resp = await fetch(API_URL);
        const jsonData = await resp.json();
        const resList = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(resList)
      setFilteredRestaurants(resList)
    }

    if(!listOfRestaurants) return <Shimmer/>

    return (
        <div className="body">
            <div>
                <input
                className="search-box"
                type="text"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                />
                <button
                className="search-btn"
                onClick={()=>{
                    const searchedList=listOfRestaurants.filter((res)=>{
                        return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilteredRestaurants(searchedList)
                }}
                >Search</button>
            </div>
            <button 
             className="filter-btn"
             onClick={()=>{
                filteredList =listOfRestaurants.filter(
                    res=> res?.info?.avgRating >4.4
                 )
                setFilteredRestaurants(filteredList)
             }}
            >
               TopRatedRestaurants
            </button>
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <RestaurantCard key={res?.info.id} resData={res}/>
                ))}
            </div>
      </div>
    )
}

export default Body;