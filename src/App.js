import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AboutUs = lazy(()=> import("./components/AboutUs"))
const Grocery = lazy(()=> import ("./components/Grocery"))
const App = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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