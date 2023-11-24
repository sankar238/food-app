import UserClass from "./UserClass";
import { Component } from "react"; 

class  AboutUs extends Component {
  constructor( props){
    super(props)
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log(" Parent component did mount ")
  }
  render(){
    console.log("parent render")
    return(
      <div>
        <h1 style={{margin : 30}}>  About us page</h1>
        <UserClass  contact={9485938453}/>
      </div>
     )
  }

}
export default AboutUs;