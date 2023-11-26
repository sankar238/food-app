import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { MAIN_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [searchText,setSearchText] = useState("");
    const [listOfRestaurants,setListOfRestaurants] = useState(null);
    const [filteredRestaurants,setFilteredRestaurants]=useState(null)
    const onlineStatus = useOnlineStatus()
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
    
    if(!onlineStatus){
        return (
            <h1 style={{marginLeft : 30, marginTop:50, color : "red"}}>looks like you're offline..plz turn-on your internet </h1>
        )
    }
    return (
        <div className="body">
            <div className="filter flex items-center">
               <div>
                 <input
                    className="search-box ml-4 p-1 mr-1 my-4"
                    type="text"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                 />
                 <button
                    className="search-btn px-4 py-1 bg-green-400 rounded-lg"
                    onClick={()=>{
                        searchedList=listOfRestaurants.filter((res)=>{
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurants(searchedList)
                    }}
                
                 >Search</button>
                </div>
            
                <button 
                className="toprated-btn mx-12 my-6 px-4 py-1 items-center bg-gray-300 
                rounded-lg"
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
            <div className="res-container flex flex-wrap">
                {filteredRestaurants.map((res) => (
                  <Link 
                    to={"/restaurants/"+res?.info?.id}
                    key={res?.info?.id}>
                    <RestaurantCard resData={res}/>
                  </Link>  
                ))}
            </div>
      </div>
    )
}

export default Body;