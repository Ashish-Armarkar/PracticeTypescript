import React, { useContext } from "react";
import style from "./Styles/Login.module.css";
import { UsersContext } from "../Store/Store";

import { fetchLoginCredintials } from "../Services/Services";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { setparticularUser } = useContext<any>(UsersContext);

  const navigate = useNavigate();

  return (
    <div className={`${style.loginContainer}`}>
      <main className="form-signin w-100 m-auto  ">
        <form
          className=" d-flex flex-column justify-content-center align-items-center"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            let user = fetchLoginCredintials(e);
            user === undefined ? (
              <div className="alert alert-danger" role="alert">
                This email not exist in our database so go and{" "}
                <Link to="/login" className="alert-link">
                  Sign In
                </Link>
                .Thank You!.
              </div>
            ) : (
                ()=>{

                    navigate("/home")
                }
            );
          }}
        >
          <img
            className="mb-4 m-auto"
            src={"../src/assets/login.png"}
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating w-100">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <br />
          <div className="form-floating w-100">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
