import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

const UserItem =({user, onUserSelect})=>{
        return(
            <li onClick={ ()=>{
                onUserSelect(user)
               
             }
            }>
                <div>
                    <label>User Name:</label> {user.name}<br/>
                    <label>User Email:</label> {user.email}<br/>
                    <label>User Number:</label>{user.no}
                    
                </div>
            </li>
        )  
}
export default UserItem;