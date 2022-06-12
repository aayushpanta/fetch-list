import React from 'react'

const Table = ({users}) => {
    return (
        <div className="container">
            <table id='user1'>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Avatar</th>
                </tr>
                {users &&
                    users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td id="mail">{user.email}</td>
                            <td>{user.phone}</td>
                            <td><a href={user.website} target="_blank"><img src={user.avatar} className="avatar-table w3-hover-opacity" /></a></td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

export default Table
