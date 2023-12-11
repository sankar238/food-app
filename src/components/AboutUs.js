import UserClass from "./UserClass";
import { Component } from "react"; 
import UserContext from "../utils/UserContext";

class  AboutUs extends Component {
  constructor( props){
    super(props)
    // console.log("parent constructor")
  }
  componentDidMount(){
    // console.log(" Parent component did mount ")
  }
  render(){
    // console.log("parent render")
    return(
      <div className="m-8 ">
        <h1 className="text-center text-2xl font-extrabold">  About us page</h1>
        <div>
          loggedInUser : 
          <UserContext.Consumer>
          {({loggedInUser})=> <h1 className="font-bold"> {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass  contact={9485938453}/>
      </div>
     )
  }

}
export default AboutUs;