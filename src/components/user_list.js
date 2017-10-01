import React, {Component} from 'react';
import UserItem from './user_item';
import UserItemGrid from './user_itemGrid';


const UserList=(props)=>{
   const userList= props.apiUsers.map((user)=>{
        return (
            <UserItemGrid
                onUserSelect={props.onUserSelect}
                key={user.email}
                user={user}
                selectedUser={props.selectedUser} />
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