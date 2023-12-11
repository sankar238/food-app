import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)
    // const [showIndex,setShowIndex] = useState(null)

    if (!resInfo) return <Shimmer />;

    const { name, cuisines, locality, city, avgRating, costForTwoMessage, sla } =
        resInfo.cards[0]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    // console.log(categories)
    return (
        <>
            <div className="text-center font-normal">
                <h1 className="font-bold text-2xl my-6">{name}</h1>
                <ul className="text-lg">
                    <li className="font-semibold my-3"
                    >{cuisines.join(",")} - {costForTwoMessage}</li>
                    <li>{locality},{city} </li>
                    <li>Rating -{avgRating}</li>
                    <li>{sla.lastMileTravelString} - {sla.deliveryTime} minutes </li>
                </ul>
                <h2 className="m-10 text-2xl font-extrabold text-orange-500">Menu-items</h2>

                {categories && categories.map((category, index) => (
                    <ItemCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                    // showItems={index===showIndex?true:false} 
                    // setShowIndex={()=>setShowIndex(index)}
                    />

                ))}


            </div>
        </>
    )
}
export default RestaurantMenu;