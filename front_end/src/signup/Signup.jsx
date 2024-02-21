import Gender from "./Gender";

const SignUp = () => {
  return (
    <>
      <div className="border">
        <div
          className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
"
        >
          {" "}
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
            <div className="rheader"> SIGNUP</div>
            <div className="username">
              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input type="text" className="grow" placeholder="Full Name" />
              </label>

              <label className=" m-3 input input-bordered input-sm w flex items-center gap-2">
                <input type="text" className="grow" placeholder="User Name" />
              </label>

              <label className=" m-3 input input-bordered input-sm w flex items-center gap-2">
                <input type="text" className="grow" placeholder="Password" />
              </label>

              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Confirm Password"
                />
              </label>
              <Gender />
              <a href="#" className="haveaccount">
                already have account
              </a>
            </div>
            <div className="flex  justify-center">
              <button className=" mt-5 button">SIGNUP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
