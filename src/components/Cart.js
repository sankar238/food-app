import ItemsList from "./ItemsList"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store)=>(store.cart.items)) ;
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">
                cart
        </h1>
        
        <div className="w-6/12 m-auto">
            {cartItems.length===0 && <h1>please add items to the cart</h1>}
            <ItemsList items={cartItems}/>
           
        </div>
        <button
             className=" m-4 p-2 bg-red-500 "
             onClick={handleClearCart}
            >
             clear cart
            </button>
    </div>
  )
}

export default Cart