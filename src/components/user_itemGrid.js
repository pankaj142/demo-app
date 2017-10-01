import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

const UserItemGrid =({user, onUserSelect,selectedUser})=>{
    if(user=== null ||user=== undefined){
        user={name:'zzz', email:'zzz@email.com',no:999}
    }  
        return(
            <div 
                className='grid'
                >
                <div>
                    <label>Name:</label> {user.name}<br/>
                    <label>User Name:</label> {user.username}<br/>
                    <label>Email:</label><br/>{user.email}<br/>
                    <label>Phone No.</label>{user.phno}<br/>
                     <Link to={`/user/${user.username}`} >
                         <div>
                             Detail
                        </div>  
                         
                     </Link>
                </div>
            </div>
        )  
}
export default UserItemGrid;