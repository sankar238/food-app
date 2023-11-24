import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import { MAIN_API_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestaurants,setListOfRestaurants] = useState(null);
   const [filteredRestaurants,setFilteredRestaurants]=useState(null)
   const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=> {
        const resp = await fetch(MAIN_API_URL);
        const jsonData = await resp.json();
        const resList = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(resList)
      setFilteredRestaurants(resList)
    }

    if(!listOfRestaurants) return <Shimmer/>

    return (
        <div className="body">
            <div className="filter">
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
                        searchedList=listOfRestaurants.filter((res)=>{
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurants(searchedList)
                    }}
                
                 >Search</button>
                </div>
            
                <button 
                className="toprated-btn"
                onClick={()=>{
                    filteredList =listOfRestaurants.filter(
                        res=> res?.info?.avgRating >4.4
                    )
                    setFilteredRestaurants(filteredList)
                }}
                >
                TopRatedRestaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                  <Link 
                    to={"/restaurants/"+res?.info?.id}
                    key={res?.info?.id}>
                    <RestaurantCard key={res?.info?.id} resData={res}/>
                  </Link>  
                ))}
            </div>
      </div>
    )
}

export default Body;