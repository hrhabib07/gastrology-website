import Aos from "aos";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingFacebook } = useAuth();
  const location = useLocation();
  console.log("came From", location.state?.from);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">
                  Log In(google signIn only)
                </h5>
                <>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label class="form-check-label" for="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div>
                    <p>
                      New user?
                      <Link to="registration">Register</Link>
                    </p>
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr class="my-4" />
                  <div class="d-grid mb-2">
                    <button
                      onClick={signInUsingGoogle}
                      class="btn btn-google btn-login text-uppercase fw-bold"
                    >
                      <i class="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div class="d-grid mb-2">
                    <button
                      onClick={signInUsingFacebook}
                      class="btn btn-facebook btn-login text-uppercase fw-bold"
                    >
                      <i class="fab fa-facebook-f me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
