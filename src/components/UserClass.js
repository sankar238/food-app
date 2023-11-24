import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          userInfo : {
            name : this.props.name,
            location : this.props.location,
            avatar_url : this.props.avatar_url
          }
        }
        console.log("child constuctor")
    }
     async componentDidMount(){
        const res = await fetch("https://api.github.com/users/sankar238")
        const data = await res.json()
        this.setState({
            userInfo : data
        })
        console.log(" child component did mount ")
      }
    componentDidUpdate (){
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render() {
        console.log("child render")
        const {name ,location,avatar_url} = this.state.userInfo;
        // console.log(name,location,avatar_url)
        const {contact} = this.props
        return (
            <div className="user-card">  
                <img
                src={avatar_url}/>
                <h1> name : {name}</h1>
                <h2> city : {location}</h2>
                <h2> contact :{contact}</h2>
            </div>
        )
    }
}
export default UserClass