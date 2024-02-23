import { useState } from "react";
import Gender from "./Gender";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
  
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
          <div className="rheader"> SIGNUP</div>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Full Name"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </label>

              <label className=" m-3 input input-bordered input-sm w flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="User Name"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </label>

              <label className=" m-3 input input-bordered input-sm w flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </label>

              <label className=" m-3 input input-bordered  input-sm w flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Confirm Password"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </label>
              <Gender
                onCheckboxChange={handleCheckBox}
                selectedGender={inputs.gender}
              />
              <Link to="/login" className="haveaccount">
                already have account
              </Link>
            </div>
            <div className="flex  justify-center">
              <button className=" mt-5 button">SIGNUP</button>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default SignUp;
