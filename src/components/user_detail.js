import React, {Component} from 'react';

const UserDetail=({selectedUser})=>{
    if(selectedUser=== null ||selectedUser=== undefined){
        selectedUser={name:'zzz', email:'zzz@email.com',no:999}
    }
    return (
        <div>
           Detail of User:<br/>
           <label> Name:</label> {selectedUser.name}<br/>
           <label> Email:</label> {selectedUser.email}<br/>
           <label> User Name:</label>{selectedUser.username}<br/>
        </div>
    )
}
export default UserDetail;