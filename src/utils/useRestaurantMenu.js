import { useState,useEffect} from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const res = await fetch(MENU_API_URL + resId);
            const data = await res.json();
            setResInfo(data?.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    return resInfo
}
export default useRestaurantMenu;