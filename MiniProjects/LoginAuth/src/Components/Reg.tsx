import {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { hash } from "bcryptjs";

import style from "./Styles/Reg.module.css";
import { UsersContext } from "../Store/Store";
import { USERS } from "../Models/Types";
import { fetchUser } from "../Services/Services";
import { Link } from "react-router-dom";

const Reg = () => {
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const { setUser } = useContext<any>(UsersContext);
  const [isUserExits, setIsUserExits] = useState<boolean>(false);
  const userEmail = useRef<HTMLInputElement | null>(null);
  const userPassword = useRef<HTMLInputElement | null>(null);

  return (
    <div className={`${style.Main}`}>
      <main className={`form-signin w-100 m-auto `}>
        <form
          onSubmit={async (e: SyntheticEvent) => {
            e.preventDefault();
            const saltRounds: string | number = 10;
            try {
              let allUserData = await fetchUser();
              let isUserAlreadyExist: boolean = allUserData.data.find(
                (userEle: USERS) => userEle.email == userEmail.current?.value
              );
              if (isUserAlreadyExist === undefined) {
                let uniqueId: string = Math.random().toString(36).slice(2);
                setUser({
                  id: uniqueId,
                  email: userEmail.current?.value,
                  password:
                    typeof userPassword.current?.value !== undefined &&
                    (await hash(
                      String(userPassword.current?.value),
                      saltRounds
                    )),
                });
                setIsUserExits(false);
              } else {
                setIsUserExits(true);
              }
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <img
            className="mb-4"
            src={"../src/assets/signup.png"}
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              ref={userEmail}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              ref={userPassword}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingRe-Password"
              placeholder="Re-Password"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (
                  userEmail.current?.value != null &&
                  e.currentTarget.value == String(userPassword.current?.value)
                ) {
                  setIsValidate(true);
                } else {
                  setIsValidate(false);
                }
              }}
            />
            <label htmlFor="floatingRe-Password">Re-Password</label>
          </div>
          <br />
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={!isValidate}
          >
            Sign in
          </button>
        </form>
        <br />
        {isUserExits && (
          <div className="alert alert-danger" role="alert">
            This email is alredy exist in our database so go to the{" "}
            <Link to="/login" className="alert-link">
              Login
            </Link>
            . Thank You!.
          </div>
        )}
      </main>
    </div>
  );
};

export default Reg;
