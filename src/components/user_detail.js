import React, {Component} from 'react';
import Request from 'superagent';



export default class UserDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            UserData:undefined
        }
    }
    componentDidMount(){
     var url=`http://52.15.211.217:3000/users/getone/${this.props.match.params.id}`
     Request.get(url).then(res=>{
         console.log(res.body)
         this.setState({
             UserData:res.body
         })
     })

    }

    render(){
        let uD=this.state.UserData?this.state.UserData:''
        return(
            <div>   
               Name:{uD.name}
               Email:{uD.email}
               Username:{uD.username}
            </div>
        )
    }
}
