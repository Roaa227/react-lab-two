import React, { useState, useEffect } from "react";


export const User = () => {
    const [user, setUser] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(
                user => setUser(user),
                setIsLoading(false))
            .catch(
                err => console.log(err),
                setIsLoading(false));
    }, []);

    return (
        <div>
            <h1>User</h1>
            {isloading ?
                (<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)
                :
                (<ul>
                    {user.map((u, index) => (
                        <li key={index}>{u.name}</li>
                    ))}
                </ul>)
            }
        </div>

    );

}

export default User;
