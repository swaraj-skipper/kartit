import React, { useState, useEffect } from 'react'

export default function Login() {
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setAuthToken(storedToken);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const x = e.target.userName.value;
        const y = e.target.pwd.value;

        const loginEndpoint = 'https://dummyjson.com/auth/login';

        const loginCredentials = {
            username: x,
            password: y,
        };

        fetch(loginEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginCredentials),
        })
            .then((res) => res.json())
            .then((res) => {
                const authToken = res.token;
                setAuthToken(authToken);
                localStorage.setItem('authToken', authToken);
            })
            .catch((error) => {
                console.log("HE")
                console.log('Error during login:', error);
            });
    };

    const handleLogout = () => {
        setAuthToken(null);
        localStorage.removeItem('authToken');
    };


    return (
        <div>
            <div style={{"display": authToken?'none':'flex'}}>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Username</label>
                        <input type="text" name='userName' className="form-control" id="userName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='pwd' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
                <button onClick={handleLogout} style={{ "display": !authToken ? 'none' : 'flex' }}>Logout</button>
                <h3>kminchelle</h3>
                <h3>0lelplR</h3>
        </div>
    )
}
