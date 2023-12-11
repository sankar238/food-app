import { addItem } from "../utils/cartSlice"
import { CDN_IMG_URL, CDN_ITEM_IMG_URL } from "../utils/constants"
import { useDispatch } from "react-redux"

const ItemsList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
        // console.log(item)
    }
    
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id}
                    className="p-2 m-2 text-left border-gray-200 border-b-2"
                >
                    <div className="flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2 font-medium">
                                <span >{item?.card?.info?.name}</span>
                                <span> - ₹ {item?.card?.info?.price / 100}</span>
                            </div>
                            <div>
                                <p className="text-xs py-2">{item?.card?.info?.description}</p>
                            </div>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute mt-[52] ml-[25]">
                                <button
                                    className="px-4 py-1 bg-white text-lg
                                     text-black rounded-xl border border-green-300"
                                    onClick={()=>handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            </div>
                            <img
                                src={CDN_IMG_URL + item?.card?.info?.imageId}
                                alt="item-images"
                                className="w-full rounded-lg border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ItemsList