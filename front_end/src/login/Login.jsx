import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
//  import { BiUnderline } from "react-icons/bi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password);
  };

  return (
    <>
      <div className="border-Outline">
        {/* left section  */}

        <div className="left-part">
          <div className="right-header">
            <h1 className="lheader">
              Welcome to <span className="logo">TEXER</span>
            </h1>
            <p className="left-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellendus aspernatur consequatur nulla temporibus?
              Distinctihtrhrhrhythythyth
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="right-part">
          <div className="rheader"> USER LOGIN</div>
          <div className="username">
            <form onSubmit={handleSubmit}>
              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <Link
                to="/signup"
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                {"Don't "} have account?
              </Link>
              <div className="flex  justify-center">
                <button className=" mt-5 button" disabled={loading}>
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
