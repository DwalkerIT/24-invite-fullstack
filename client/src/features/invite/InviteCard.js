import React from 'react'
const axios = require("axios");
import { FaCheck, FaTimes } from 'react-icons/fa'
export default function InviteCard({user, children}) {
   
    // const user = {
    //     id: 1,
    //   phone: '5555555',
    //   email: 'text@example.com',
    //   first: 'test',
    //   last: 'example',
    //   thumbnail: 'http://placehold.it/250x250'
    // }
    return (
        <div className="invite-card">
            <div className="invite-card-avatar-container">

            </div>
            <div className="invite-card-avatar"
            style={{backgroundImage: `url(${user.thumbnail})`}}></div>
            <div className="invite-info">
                <p><strong>Name:</strong>name{user.first} {user.last}</p>
                <p><strong>phone:</strong>phone{user.phone}</p>
                <p><strong>email:</strong>email{user.email}</p>
            </div>
           {children}
        </div>
    )
}