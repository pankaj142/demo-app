import React, {Component} from 'react';
import UserItem from './user_item';
import UserItemGrid from './user_itemGrid';


const UserList=(props)=>{
    console.log(props)
   const userList= props.apiUsers.map((user)=>{
        return (
            <UserItemGrid
                key={user.email}
                user={user} />
        )
     })
 
        return (
            <div>
                <h4>User List</h4>
                  {userList}
            </div>
        )
    }

export default UserList; 