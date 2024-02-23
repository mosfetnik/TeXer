import { Link } from "react-router-dom";
// import { BiUnderline } from "react-icons/bi";

const Login = () => {
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

            <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
              <input type="text" className="grow" placeholder="Username" />
            </label>

            <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
              <input type="password" className="grow" placeholder="Password" />
            </label>

            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't "} have account?
            </Link>
            <div className="flex  justify-center">
              <button className=" mt-5 button">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
