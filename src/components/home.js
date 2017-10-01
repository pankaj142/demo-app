import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, HashRouter } from 'react-router-dom';
//import $ from 'jquery';
import Request from 'superagent';
import SearchBar from './search_bar';
import UserList from './user_list';
import UserDetail from './user_detail';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = { 
                        users:[{name:'sss', email:'sss@email.com',no:111},
                                {name:'ddd', email:'ddd@email.com',no:222},
                                {name:'aaa', email:'aaa@email.com',no:333},
                              ],
                        selectedUser:null,
                        apiData:[]
                     }; 
    }

    componentWillMount(){ 
            var url='http://52.15.211.217:3000/users/getall'
            Request.get(url).then(response=>{
            this.setState({
                apiData:response.body
                })
            console.log(this.state.apiData)    
       })
    }
   
    render(){
       return(
        <div>
            <h2>Admin Panel</h2>
            <SearchBar />
            <UserList
                onUserSelect={selectedUser=>{this.setState({selectedUser})}} 
                users={this.state.users}
                apiUsers={this.state.apiData} />   
          {/*  <UserDetail user={this.state.selectedUser}/> 8*/}            
        </div>
       );
    }
}

export default Home;