# Namaste - food app

- App Details:

   Namastefood app - Amazing Large-Scale Food Platform

- Description:
   An impressive food platform developed using React, Redux, and Tailwind CSS, offering an extensive collection of restaurants and enabling seamless addition of food items to the cart.

# ----  Key Features ---- 

   1) Parcel Bundler Integration:

   Utilized Parcel as the bundler to compile and host the entire codebase on the server efficiently.

   2)  Online Status Feature:

      Implemented the online status functionality using React custom hooks for real-time status updates.

   3) Promoted Restaurant Card:

      Implemented a Higher Order Component (HOC) concept to create promoted restaurant cards, enhancing visibility and user engagement.

   4) Accordion in Restaurant Menu:

      Developed an accordion feature within the restaurant menu to facilitate the hide-and-show functionality for food items, improving user experience.

   5) Dynamic Pages with Lazy Loading:

      Implemented the aboutUs and grocery pages using lazy loading (dynamic loading or import) techniques, enhancing performance by loading content only when needed.
   6) Cart Functionality with React-Redux Toolkit (RTK):

      Developed a fully functional cart system using React-Redux and RTK, allowing users to manage and modify their orders effortlessly.

   7) UI Enhancement with Tailwind CSS:

      Utilized Tailwind CSS extensively to enhance the visual appeal of the app, ensuring a beautiful and responsive design. 


# Parcel as bundler
 - Dev Build
 - cretes local server
 - HMR (hot module replcement)
 - File watching algorithm -written in c++
 - caching - faster builds
 - Image Optimization
 - minification
 - bundling
 - compressing
 - consistent hashing
 - code splitting
 - differential bundling - to support older browsers
 - diagnostics - better error suggestions
 - Tree Shaking - removes unused code for us.
 - different builds for dev phase and production phase   

 # food-app

 - *Header
    -logo
    -nav-items
 - *body
    -search
    -restaurant container
        - restaurant card , promotedRestarantCard
            -image
            -res name,cuisines,cost,rating,delivery time
         - restaurantMenu 
          - itemsCatogery
            -itemsList     
 - *footer
    -contact info

two types of Export/Import

 -default Export / Import
    - default export Component
    - import Component from "path"

 -Named Export/ Import
    -export const Component
    -import {Component} from "path"

# React Hooks

- (Normal javaScript functions which are pre-built in react)
    -useState
    -useEffect
    -useContext
- custom hooks (useOnlineStatus , useRestaurantMenu)
    
# React-Router-DOM
 
 -two types of routing in web apps

   1- client side routing (Single Page Application)
      -app is loaded once and just  components are inter-changed.
   2-server sode routing
      -makes a network call

# REDUX Toolkit

   - install @reduxjs/toolkit and react-redux
   - build our store 
   - connect our store to our app
   - create a cart slice 
   - dispatch (action)
   - subscribing to the store (useSelector)