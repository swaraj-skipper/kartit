import React from 'react'

export default function Login() {
    const authenticate = (e) =>{
        e.preventDefault();
    }
 
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input type="text" className="form-control" id="userName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={authenticate}>Submit</button>
            </form>
        </div>
    )
}
