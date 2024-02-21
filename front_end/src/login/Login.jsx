


const Login = () => {
  return (
    <>
      <div className="border">
        {/* left section  */}

        <div className="left-part">
          <div className="right-header">
            <h1 className="lheader">Welcome to <span className="logo">TEXER</span></h1>
            <p className="left-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              repellendus aspernatur consequatur nulla temporibus? Distinctihtrhrhrhythythyth
             
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="right-part">
          <div className="rheader"> USER LOGIN</div>
          <div className="username">
            <input type="input" name="username" placeholder="Username" className="field" style={{backgroundColor: "white"}} />
            <input type="input"name="password" placeholder="Password" className="field" style={{backgroundColor: "white"}} />
            <button className="button">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
