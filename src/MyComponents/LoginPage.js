import React from "react";

export const LoginPage = (props) => {

    const loginSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className="mx-5">
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Enter SNU ID</label>
                    <input type="number" value={props.userSNUID} onChange={(e) => {
                        props.userSNUID(e.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">OTP</label>
                    <input type="password" value={props.loginOTP} onChange={(e) => {
                        props.setLoginOTP(e.target.value)
                    }} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    )
}
