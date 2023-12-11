import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// dynamic import --lazy loading
const AboutUs = lazy(()=> import("./components/AboutUs"))
const Grocery = lazy(()=> import ("./components/Grocery"))

const App = () => {
    const [userName , setUserName] = useState()
    useEffect(()=>{
        const data= {
            name  : "sankar"
        }
        setUserName(data.name)
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <AboutUs />
                </Suspense> 
            }, {
                path: "/contact",
                element: <ContactUs />
            }, {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>} >
                    <Grocery />
                </Suspense>
            }
            , {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },{
                path : "/cart",
                element : <Cart/>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider
        router={appRouter}
    />
)