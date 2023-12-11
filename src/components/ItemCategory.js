import ItemsList from "./ItemsList"
import { useState } from "react"
const ItemCategory = ({ data }) => {
    const [showItems,setShowItems] = useState(false)
    const handleClick = ()=>{
        // setShowIndex()
        setShowItems(!showItems)
    }
    return (
        <>
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="text-lg font-bold">
                        {data.title} ({data?.itemCards?.length})
                    </span>
                    <span>⬇️</span>
                </div>
                  {showItems &&  <ItemsList items={data?.itemCards}/>}
            </div>

        </>

    )
}

export default ItemCategory