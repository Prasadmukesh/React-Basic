import React, { useState } from "react";

const Login = () => {
  const [username, setUsename] = useState("");
  const [userpass, setUserpass] = useState("");
  const [msg, setMsg] = useState("");

  const Check = () => {
    if (username === "admin" && userpass === "admin123") {
      //alert("Login Success");
      setMsg("Login Success");
    } else {
      //alert("Login Failed");
      setMsg("Login Failed");
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-danger">
            <h2>Login Form</h2>
            <div className="card">
              <div className="card-body bg-dark">
                <div className="mb-3">
                  <label htmlFor="" className="text-light">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsename(e.target.value)}
                  />
                </div>

                <div className="mb-3 ">
                  <label htmlFor="" className="text-light">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={userpass}
                    onChange={(e) => setUserpass(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={Check}
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
                <div className="mb-3">
                  <label htmlFor="" style={{ fontSize: "20px", color: "red" }}>
                    {msg}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
