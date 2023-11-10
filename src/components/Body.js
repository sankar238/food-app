import RestaurantCard from "./RestaurantCard";
import {useState} from "react"
import resList from "../utils/mockdata"
const Body = () => {
   const [listOfRestaurants,setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <button 
             className="filter-btn"
             onClick={()=>{
                 filteredRestaurants =listOfRestaurants.filter(
                    res=> res?.info?.avgRating >4.5
                )
                setListOfRestaurants(filteredRestaurants)
                // console.log(listOfRestaurants)
             }}
            >
               TopRatedRestaurants
            </button>
            <div className="res-container">
                {listOfRestaurants.map((res) => (
                    <RestaurantCard key={res?.info.id} resData={res}/>
                ))}
            </div>
      </div>
    )
}

export default Body;