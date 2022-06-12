import React from 'react'
import './avatar.css' 

const List = ({users}) => {
  return (
    <div>
        {users && users.map((user) => (
                        <table id='user2' className="w3-container w3-center w3-animate-left">
                            <tr>
                                <td><img src={user.avatar} className="avatar w3-border" /> </td>
                                <td><ul>
                                    <li>Id:         {user.id}</li>
                                    <li>Name:       {user.name}</li>
                                    <li>Email:      {user.email}</li>
                                    <li>Phone:      {user.phone}</li>
                                    <li>Website:    <a href={user.website} target="_blank">{user.website}</a></li>
                                </ul>
                                </td>
                            </tr>
                            <tr>
                                <td id="pushRight" className='name' >{user.username}</td>
                                <td></td>
                            </tr>
                            <div className="parallax"></div>
                        </table>
                    ))}
    </div>
  )
}

export default List
