import { useState,useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams()
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
       try{
        const res = await fetch(MENU_API_URL+resId);
        const data= await res.json();
        setResInfo(data?.data)
       } catch(err){
        console.log(err.message)
       }
    }
    if(!resInfo) return <Shimmer/>;

    const {name,cuisines,locality,city, avgRating,costForTwoMessage,sla} =
        resInfo.cards[0]?.card?.card?.info;
    const {itemCards} =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
    return (
        <>
        <div className="info-container">
            <h1 style={{color:"darkblue"}}>{name}</h1>
            <ul>
                <li>{cuisines.join(",")} </li>
                <li>{locality},{city} </li>
                <li>Rating -{avgRating}</li>
                <li>{costForTwoMessage} </li>
                <li>{sla.lastMileTravelString} - {sla.deliveryTime} minutes </li>
            </ul>
            <h2 style={{color:"green"}}>Menu-items</h2>
            <ul>
                {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
                { itemCards && itemCards.map((item)=>(
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - Rs.{item?.card?.info?.price/100}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RestaurantMenu;