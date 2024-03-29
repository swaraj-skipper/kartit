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
            .then((res) => {
                if (res.status === 400) {
                    alert("Invalid Info");
                    return;
                }
                return res.json();
            })
            .then((res) => {
                const authToken = res.token;
                setAuthToken(authToken);
                localStorage.setItem('authToken', authToken);
            })
            .catch((error) => {
                console.log('Error during login:', error);
            });


    };

    const handleLogout = () => {
        setAuthToken(null);
        localStorage.removeItem('authToken');
    };


    return (
        <div>
            <div style={{ "display": authToken ? 'none' : 'flex' }} className='container msg'>
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
                <p>DummyUserName: kminchelle</p>
                <p>DummyPassword: 0lelplR</p>
            </div>
            <div className='container' style={{ "display": !authToken ? 'none' : 'flex' }}>
                <h2>Logged In SUCCESSFULLY</h2>
                <button onClick={handleLogout} >Logout</button>
            </div>
            {/* <hr></hr> */}
        </div>
    )
}
