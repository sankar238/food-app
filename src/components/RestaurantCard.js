// import { useContext } from "react";
import { CDN_IMG_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const {
        name,
        cuisines,
        costForTwo,
        avgRating,
        sla
    } = resData?.info;
    // const {loggedInUser}=useContext(UserContext)
    return (
        <div
            className="res-card my-4 mx-5 p-4 w-[320px] rounded-lg bg-gray-100"
        >
            <img
                className="res-logo w-[320px] h-[200px] rounded-lg "
                src={CDN_IMG_URL + resData?.info?.cloudinaryImageId}
                alt="res-logo"
            />
            <h3 className="text-lg font-bold pt-4 pb-1">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            {/* <h4>user : {loggedInUser}</h4> */}
        </div>
    )
}

export const withPromotedLable = (RestaurantCard)=>{
    return (props)=>{
        const {header,subHeader}=props?.resData?.info?.aggregatedDiscountInfoV3 ;
        return (
            <div>
               <label className=" absolute mx-4 p-2 text-white rounded-lg
                 font-extrabold bg-gray-700">
                 {header} - {subHeader}
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;