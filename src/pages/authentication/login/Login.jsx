import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (even) => {
    even.preventDefault();
    const email = even.target.email.value;
    const password = even.target.password.value;
    console
      .log(email, password)
      // signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Successfully logged In",
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
          `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
          `,
          },
        });
        setTimeout(function () {
          navigate(from, { replace: true });
        }, 1000);
      });
  };

  const handleCapchaValidate = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="grid place-items-center pt-16">
      {/* <Helmet>
        <title>Login | Bistro Boss</title>
      </Helmet> */}
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleCapchaValidate}
              type="text"
              name="captcha"
              placeholder="enter the captcha"
              className=" input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <p>
            {" "}
            a new account{" "}
            <Link to="/signup" className="text-blue-500 underline">
              here
            </Link>{" "}
          </p>
          <div className="form-control mt-6">
            <input
              disabled={disabled}
              type="submit"
              className="btn btn-primary"
              value="submit"
            />
          </div>
        </form>
        <button className="btn">
          {" "}
          <Link to="/">Go Home</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
